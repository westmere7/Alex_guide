(function () {
  "use strict";

  var DATA = window.SGN_DATA || {};
  var IMAGES = window.SGN_IMAGES || {};
  var TZ = "Asia/Ho_Chi_Minh";
  var VIEWS = ["home", "move", "eat", "see", "help", "map"];

  /* ---------- helpers ---------- */
  var store = {
    get: function (k, fallback) {
      try { var v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function icon(id) { return '<svg class="i" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  function mapUrl(q) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q + ", Ho Chi Minh City, Vietnam");
  }
  /* Opens the place in Google Maps, where its photo gallery and reviews live */
  function photosBtn(q, name) {
    return '<a class="btn btn-secondary btn-sm" data-q="' + esc(q) + '" target="_blank" rel="noopener"' +
      ' aria-label="Photos and reviews of ' + esc(name) + ' in Google Maps">' +
      icon("i-photo") + "Photos &amp; reviews" + icon("i-arrow").replace('class="i"', 'class="i i-trail"') + "</a>";
  }
  function linkMaps(root) {
    $$("[data-q]", root).forEach(function (a) { a.href = mapUrl(a.getAttribute("data-q")); });
  }
  function media(key, alt, fallbackIcon) {
    var im = key && IMAGES[key];
    if (!im) return '<div class="media empty"><span class="ph">' + icon(fallbackIcon || "i-bowl") + "</span></div>";
    return '<div class="media">' +
      '<span class="ph">' + icon(fallbackIcon || "i-landmark") + "</span>" +
      '<img class="loading" src="' + esc(im.src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async">' +
      "</div>";
  }
  function wireImages(root) {
    $$(".media img", root).forEach(function (img) {
      var done = function () { img.classList.remove("loading"); };
      if (img.complete && img.naturalWidth) done();
      img.addEventListener("load", done);
      img.addEventListener("error", function () { img.remove(); });
    });
  }

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var metaTheme = $('meta[name="theme-color"]');
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    if (metaTheme) metaTheme.setAttribute("content", t === "dark" ? "#0C0D0D" : "#F6F6F3");
    var btn = $("#theme-toggle");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
    try { document.dispatchEvent(new CustomEvent("sgn-theme")); } catch (e) {}
  }
  applyTheme(root.getAttribute("data-theme") || "light");
  $("#theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    // stored raw (not JSON) because the inline <head> script reads it before paint
    try { localStorage.setItem("sgn-guide-theme", next); } catch (e) {}
  });

  /* ---------- tabs / routing ---------- */
  function currentView() {
    var h = location.hash.replace("#", "");
    if (h === "prep") return "home"; // old links
    return VIEWS.indexOf(h) >= 0 ? h : "home";
  }
  function show(view, scroll) {
    $$("[data-view]").forEach(function (s) { s.hidden = s.id !== view; });
    $$(".tabbar a").forEach(function (a) {
      if (a.dataset.nav === view) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var mb = $("#map-btn");
    if (mb) { if (view === "map") mb.setAttribute("aria-current", "page"); else mb.removeAttribute("aria-current"); }
    document.body.classList.toggle("on-map", view === "map");
    if (view !== "map") lastView = view;
    if (view === "map") setTimeout(openMap, 0);
    if (scroll !== false) window.scrollTo(0, 0);
  }
  var lastView = "home";
  window.addEventListener("hashchange", function () { show(currentView()); });
  // the map button toggles: tap again to go back to where you were
  $("#map-btn").addEventListener("click", function (e) {
    if (currentView() === "map") { e.preventDefault(); location.hash = "#" + lastView; }
  });
  show(currentView(), false);

  var topbar = $(".topbar");
  window.addEventListener("scroll", function () {
    topbar.classList.toggle("scrolled", window.scrollY > 4);
  }, { passive: true });

  /* ---------- live clock & weather ---------- */
  var timeEl = $("#local-time"), ausEl = $("#aus-time"), ausDiff = $("#aus-diff");
  var AUS_TZ = "Australia/Melbourne";
  function clock(tz, d) {
    return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz }).format(d);
  }
  function tzOffsetMin(tz, d) {
    var p = {};
    new Intl.DateTimeFormat("en-US", { timeZone: tz, hourCycle: "h23", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" })
      .formatToParts(d).forEach(function (x) { p[x.type] = +x.value; });
    return (Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute) - Math.floor(d / 6e4) * 6e4) / 6e4;
  }
  function tick() {
    var now = new Date();
    try {
      timeEl.textContent = clock(TZ, now);
      ausEl.textContent = clock(AUS_TZ, now);
      var h = (tzOffsetMin(AUS_TZ, now) - tzOffsetMin(TZ, now)) / 60;
      ausDiff.textContent = h ? " (" + (h > 0 ? "+" : "") + h + "h)" : "";
    } catch (e) { ausEl.parentElement.hidden = true; }
  }
  tick();
  setInterval(tick, 30000);

  /* ---------- live weather: Home card + Help › Tools ---------- */
  var LAT = 10.7722, LON = 106.7037; // the hotel, Hồ Tùng Mậu
  var WX = { 0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Cloudy", 45: "Hazy", 48: "Hazy",
    51: "Drizzle", 53: "Drizzle", 55: "Drizzle", 61: "Rain", 63: "Rain", 65: "Heavy rain",
    80: "Showers", 81: "Showers", 82: "Downpour", 95: "Storm", 96: "Storm", 99: "Storm" };
  function wxText(c) {
    return WX[c] || (c >= 95 ? "Storm" : c >= 80 ? "Showers" : c >= 61 ? "Rain" : c >= 51 ? "Drizzle" : c >= 45 ? "Hazy" : c >= 3 ? "Cloudy" : "Clear");
  }
  function wxSymbol(c, isDay) { return c >= 51 ? "i-rain" : c >= 2 ? "i-cloud" : isDay === 0 ? "i-moon" : "i-sun"; }
  function uvLabel(u) { return u < 3 ? "Low" : u < 6 ? "Moderate" : u < 8 ? "High" : u < 11 ? "Very high" : "Extreme"; }
  function stat(label, value) { return '<div class="stat"><span>' + esc(label) + "</span><b>" + value + "</b></div>"; }
  var AQI = [
    [50, "Good", "good", "Air is clean. Enjoy the walk."],
    [100, "Moderate", "ok", "Fine for most people. If you're sensitive to pollution, take long walks easy near busy roads."],
    [150, "Unhealthy for some", "warn", "Consider a KF94 or N95 mask for long walks near traffic. Pharmacies sell them."],
    [200, "Unhealthy", "bad", "Wear a mask outdoors and keep long walks short. Rooftops and parks won't feel fresh today."],
    [300, "Very unhealthy", "bad", "Limit time outside and wear a mask when you are."],
    [Infinity, "Hazardous", "bad", "Stay indoors where you can."]
  ];

  var wxData = null, wxDay = 0;
  var dayTabsEl = $("#wx-daytabs"), hoursEl = $("#wx-hours");

  function renderHours() {
    if (!wxData || !hoursEl) return;
    var dl = wxData.daily, h = wxData.hourly, day = dl.time[wxDay];
    var nowHour = wxData.current.time.slice(0, 13);
    var rows = [];
    h.time.forEach(function (t, i) {
      if (t.slice(0, 10) !== day) return;
      if (wxDay === 0 && t.slice(0, 13) < nowHour) return;
      rows.push(i);
    });
    $("#wx-sum").innerHTML = "High <b>" + Math.round(dl.temperature_2m_max[wxDay]) + "°</b> · Low <b>" +
      Math.round(dl.temperature_2m_min[wxDay]) + "°</b> · Rain up to <b>" + (dl.precipitation_probability_max[wxDay] || 0) +
      "%</b> · UV <b>" + Math.round(dl.uv_index_max[wxDay] || 0) + "</b> " + uvLabel(dl.uv_index_max[wxDay] || 0).toLowerCase();
    hoursEl.innerHTML = rows.map(function (i, n) {
      var rain = h.precipitation_probability[i];
      return '<div class="wx-day wx-hour' + (rain >= 40 ? " wet" : "") + '">' +
        '<span class="wd">' + (wxDay === 0 && n === 0 ? "Now" : esc(h.time[i].slice(11, 16))) + "</span>" +
        icon(wxSymbol(h.weather_code[i], h.is_day[i])) +
        "<b>" + Math.round(h.temperature_2m[i]) + "°</b>" +
        '<span class="rp">' + icon("i-drop") + (rain == null ? "–" : rain + "%") + "</span>" +
        (h.is_day[i] && h.uv_index[i] >= 3 ? '<span class="uv">UV ' + Math.round(h.uv_index[i]) + "</span>" : '<span class="uv">&nbsp;</span>') +
        "</div>";
    }).join("");
    hoursEl.scrollLeft = 0;
  }
  function renderDayTabs() {
    if (!wxData || !dayTabsEl) return;
    dayTabsEl.innerHTML = wxData.daily.time.map(function (t, i) {
      var label = i === 0 ? "Today" : i === 1 ? "Tomorrow" :
        new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: "UTC" }).format(new Date(t + "T00:00:00Z"));
      return '<button type="button" role="tab" data-day="' + i + '" aria-selected="' + (i === wxDay) + '">' + label + "</button>";
    }).join("");
  }
  if (dayTabsEl) dayTabsEl.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-day]");
    if (!b) return;
    wxDay = +b.dataset.day;
    renderDayTabs(); renderHours();
  });

  fetch("https://api.open-meteo.com/v1/forecast?latitude=" + LAT + "&longitude=" + LON +
    "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,is_day" +
    "&hourly=temperature_2m,precipitation_probability,weather_code,is_day,uv_index" +
    "&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max" +
    "&forecast_days=3&timezone=Asia%2FHo_Chi_Minh")
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) {
      if (!d || !d.current || !d.hourly || !d.daily) return;
      wxData = d;
      var c = d.current;
      var hi = d.hourly.time.indexOf(c.time.slice(0, 13) + ":00");
      // compact card on Home: now + next 6 hours
      if ($("#wxm-temp")) {
        $("#wxm-temp").textContent = Math.round(c.temperature_2m) + "°";
        $("#wxm-desc").textContent = wxText(c.weather_code) + " · feels " + Math.round(c.apparent_temperature) + "°";
        $("#wx-mini .wx-mini-icon use").setAttribute("href", "#" + wxSymbol(c.weather_code, c.is_day));
        var start = hi >= 0 ? hi + 1 : 0, H = d.hourly;
        $("#wxm-hours").innerHTML = H.time.slice(start, start + 6).map(function (t, n) {
          var i = start + n, rain = H.precipitation_probability[i];
          return '<span class="wxm-h' + (rain >= 40 ? " wet" : "") + '"><span>' + esc(t.slice(11, 13)) + "h</span>" +
            icon(wxSymbol(H.weather_code[i], H.is_day[i])) + "<b>" + Math.round(H.temperature_2m[i]) + "°</b>" +
            '<span class="rp">' + (rain == null ? "–" : rain + "%") + "</span></span>";
        }).join("");
      }
      // Tools card
      if (!$("#wx-temp")) return;
      var uvNow = hi >= 0 ? d.hourly.uv_index[hi] : null;
      $("#wx-temp").textContent = Math.round(c.temperature_2m);
      $("#wx-desc").textContent = wxText(c.weather_code) + " · high " + Math.round(d.daily.temperature_2m_max[0]) + "°, low " + Math.round(d.daily.temperature_2m_min[0]) + "°";
      $("#wx-icon use").setAttribute("href", "#" + wxSymbol(c.weather_code, c.is_day));
      $("#wx-updated").textContent = "Updated " + c.time.slice(11, 16);
      $("#wx-stats").innerHTML =
        stat("Feels like", Math.round(c.apparent_temperature) + "°") +
        stat("Humidity", Math.round(c.relative_humidity_2m) + "%") +
        stat("UV now", uvNow == null ? "–" : Math.round(uvNow) + " · " + uvLabel(uvNow));
      $("#wx-sun").innerHTML =
        stat("Sunrise", esc(d.daily.sunrise[0].slice(11, 16))) +
        stat("Sunset", esc(d.daily.sunset[0].slice(11, 16))) +
        '<div class="stat" id="wx-aqi"><span>Air quality</span><b>…</b></div>';
      renderDayTabs(); renderHours();
      return fetch("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + LAT + "&longitude=" + LON +
        "&current=us_aqi,pm2_5&timezone=Asia%2FHo_Chi_Minh");
    })
    .then(function (r) { return r && r.ok ? r.json() : null; })
    .then(function (a) {
      var cell = $("#wx-aqi");
      if (!cell) return;
      var v = a && a.current && a.current.us_aqi;
      if (v == null) { cell.querySelector("b").textContent = "–"; return; }
      var lvl = AQI.filter(function (x) { return v <= x[0]; })[0];
      cell.querySelector("b").innerHTML = Math.round(v) + ' · <span class="aqi-' + lvl[2] + '">' + esc(lvl[1]) + "</span>";
      var tip = $("#wx-aqi-tip");
      tip.innerHTML = icon("i-info") + "<span>" + esc(lvl[3]) + "</span>";
      tip.className = "wx-aqi-tip aqi-bg-" + lvl[2];
      tip.hidden = false;
      var md = $("#wxm-desc");
      if (md) md.textContent += " · AQI " + Math.round(v);
    })
    .catch(function () {
      var d = $("#wx-desc");
      if (d && !wxData) d.textContent = "Couldn't load the weather. Check your connection and reopen the page.";
    });

  /* ---------- trip forecast (only the trip days inside Open-Meteo's 16-day window) ---------- */
  (function () {
    var trip = DATA.trip, el = $("#trip-forecast");
    if (!trip || !el) return;
    function d(iso) { var p = iso.split("-"); return new Date(Date.UTC(+p[0], p[1] - 1, +p[2])); }
    var fmt = function (iso, opts) { return new Intl.DateTimeFormat("en-GB", Object.assign({ timeZone: "UTC" }, opts)).format(d(iso)); };
    $("#trip-dates").textContent = fmt(trip.start, { day: "numeric", month: "short" }) + " – " + fmt(trip.end, { day: "numeric", month: "short" });

    var todayIso = new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date()); // YYYY-MM-DD
    if (todayIso > trip.end) return;
    var DAY = 864e5;
    var opensIso = new Date(d(trip.start) - 15 * DAY).toISOString().slice(0, 10);
    function waiting() {
      el.innerHTML = '<p class="hint wx-wait">' + icon("i-calendar") + "<span>A live forecast for each day of the trip will appear here from " +
        fmt(opensIso > todayIso ? opensIso : todayIso, { weekday: "short", day: "numeric", month: "short" }) + ", once those dates are within 16 days.</span></p>";
    }
    function wxIcon(c) { return c <= 1 ? "i-sun" : c <= 48 ? "i-cloud" : "i-rain"; }
    waiting();
    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + LAT + "&longitude=" + LON +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
      "&forecast_days=16&timezone=Asia%2FHo_Chi_Minh")
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (data) {
        var dl = data && data.daily;
        if (!dl || !dl.time) return;
        var days = dl.time.map(function (t, i) {
          return { t: t, code: dl.weather_code[i], hi: dl.temperature_2m_max[i], lo: dl.temperature_2m_min[i], rain: dl.precipitation_probability_max[i] };
        }).filter(function (x) { return x.t >= trip.start && x.t <= trip.end && x.t >= todayIso; });
        if (!days.length) return;
        el.innerHTML = '<p class="t wx-live">Live forecast</p><div class="wx-days">' + days.map(function (x) {
          return '<div class="wx-day"><span class="wd">' + esc(fmt(x.t, { weekday: "short" })) + "</span>" +
            '<span class="dt">' + esc(fmt(x.t, { day: "numeric", month: "short" })) + "</span>" +
            icon(wxIcon(x.code)) +
            '<b>' + Math.round(x.hi) + "°</b><span class=\"lo\">" + Math.round(x.lo) + "°</span>" +
            '<span class="rp">' + (x.rain == null ? "–" : x.rain + "%") + "</span></div>";
        }).join("") + "</div>" +
        '<p class="hint">Max/min temperature and chance of rain. Forecasts more than a week out are rough.</p>';
      })
      .catch(function () {});
  })();

  /* ---------- vegan card ---------- */
  var dlg = $("#vegan-card");
  $$("[data-open-card]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
      document.body.style.overflow = "hidden";
    });
  });
  $$("[data-close-card]").forEach(function (b) {
    b.addEventListener("click", function () { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); });
  });
  dlg.addEventListener("close", function () { document.body.style.overflow = ""; });

  /* ---------- packing list ---------- */
  var PACK_KEY = "sgn-guide-pack";
  var packed = store.get(PACK_KEY, {});
  var packEl = $("#packing");
  var packTotal = 0;

  function packId(g, item) { return (g + "::" + item).toLowerCase(); }

  function renderPacking() {
    packTotal = 0;
    var html = '<div class="group">';
    (DATA.packing || []).forEach(function (grp) {
      var items = grp.items.map(function (it) {
        packTotal++;
        var id = packId(grp.group, it);
        return '<label class="pack-item"><span class="txt">' + esc(it) + "</span>" +
          '<span class="check"><input type="checkbox" data-pack="' + esc(id) + '"' + (packed[id] ? " checked" : "") + ">" +
          '<span class="box">' + icon("i-check") + "</span></span></label>";
      }).join("");
      html += '<details class="row acc pack-group"><summary>' +
        '<span class="tile">' + icon(grp.icon || "i-check") + "</span>" +
        '<span class="row-main"><span class="t">' + esc(grp.group) + "</span></span>" +
        '<span class="count" data-count></span>' + icon("i-chevron").replace('class="i"', 'class="i chev"') +
        '</summary><div class="pack-items">' + items + "</div></details>";
    });
    packEl.innerHTML = html + "</div>";
    $("#pack-total").textContent = packTotal;
    updatePacking();
  }
  function updatePacking() {
    var n = 0;
    $$(".pack-group", packEl).forEach(function (g) {
      var boxes = $$("input", g), c = boxes.filter(function (b) { return b.checked; }).length;
      n += c;
      $("[data-count]", g).textContent = c + "/" + boxes.length;
    });
    $("#pack-count").textContent = n;
    $("#pack-bar").style.width = packTotal ? (n / packTotal * 100) + "%" : "0";
  }
  packEl.addEventListener("change", function (e) {
    var id = e.target.getAttribute("data-pack");
    if (!id) return;
    if (e.target.checked) packed[id] = true; else delete packed[id];
    store.set(PACK_KEY, packed);
    updatePacking();
  });
  $("#pack-reset").addEventListener("click", function () {
    if (!Object.keys(packed).length) return;
    if (!window.confirm("Untick everything on the packing list?")) return;
    packed = {};
    store.set(PACK_KEY, packed);
    renderPacking();
  });
  renderPacking();

  /* ---------- see ---------- */
  var SEEN_KEY = "sgn-guide-seen";
  var seen = store.get(SEEN_KEY, {});
  var places = DATA.places || [];
  var cats = DATA.categories || [];
  var catEl = $("#see-cats"), listEl = $("#see-list");
  var activeCat = store.get("sgn-guide-cat", cats[0] && cats[0].id);
  if (!cats.some(function (c) { return c.id === activeCat; })) activeCat = cats[0].id;

  function fromIcon(s) {
    if (/^walk/i.test(s)) return "i-walk";
    if (/^metro/i.test(s)) return "i-train";
    return "i-car";
  }
  function placeCard(p) {
    var done = !!seen[p.id];
    return '<article class="place' + (done ? " done" : "") + '" data-id="' + esc(p.id) + '">' +
      media(p.img, p.name, (cats.filter(function (c) { return c.id === p.cat; })[0] || {}).icon || "i-landmark") +
      '<div class="place-body">' +
        '<div class="place-head"><div class="row-main"><h3>' + esc(p.name) + '</h3><p class="vi">' + esc(p.vi) + "</p></div>" +
          '<label class="check" title="Mark as visited"><input type="checkbox" aria-label="Visited ' + esc(p.name) + '"' + (done ? " checked" : "") + '><span class="box">' + icon("i-check") + "</span></label>" +
        "</div>" +
        '<p class="d">' + esc(p.desc) + "</p>" +
        '<ul class="meta">' +
          "<li>" + icon("i-clock") + "<span>" + esc(p.time) + "</span></li>" +
          "<li>" + icon("i-sun") + "<span>" + esc(p.best) + "</span></li>" +
          "<li>" + icon("i-ticket") + "<span>" + esc(p.cost) + "</span></li>" +
          "<li>" + icon(fromIcon(p.from)) + "<span>" + esc(p.from) + "</span></li>" +
        "</ul>" +
        (p.tip ? '<p class="tip">' + icon("i-info") + "<span>" + esc(p.tip) + "</span></p>" : "") +
        '<div class="btn-row">' + (p.q ? photosBtn(p.q, p.name) : "") + mapBtn(p.id) + "</div>" +
      "</div></article>";
  }
  function renderCats() {
    catEl.innerHTML = cats.map(function (c) {
      return '<button type="button" role="tab" data-cat="' + c.id + '" aria-selected="' + (c.id === activeCat) + '">' +
        icon(c.icon) + esc(c.label) + "</button>";
    }).join("");
  }
  function renderSee() {
    $$("button", catEl).forEach(function (b) { b.setAttribute("aria-selected", String(b.dataset.cat === activeCat)); });
    var cat = cats.filter(function (c) { return c.id === activeCat; })[0] || {};
    listEl.innerHTML = (cat.note ? '<p class="callout">' + icon("i-info") + "<span>" + esc(cat.note) + "</span></p>" : "") +
      '<div class="places">' +
      places.filter(function (p) { return p.cat === activeCat; }).map(placeCard).join("") + "</div>";
    wireImages(listEl);
    linkMaps(listEl);
  }
  function updateSeen() {
    var n = places.filter(function (p) { return seen[p.id]; }).length;
    $("#seen-count").textContent = n;
    $("#seen-total").textContent = places.length;
    $("#seen-bar").style.width = places.length ? (n / places.length * 100) + "%" : "0";
  }
  catEl.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-cat]");
    if (!b) return;
    activeCat = b.dataset.cat;
    store.set("sgn-guide-cat", activeCat);
    renderSee();
  });
  listEl.addEventListener("change", function (e) {
    var card = e.target.closest(".place");
    if (!card) return;
    var id = card.dataset.id;
    if (e.target.checked) seen[id] = true; else delete seen[id];
    card.classList.toggle("done", e.target.checked);
    store.set(SEEN_KEY, seen);
    updateSeen();
  });
  renderCats();
  renderSee();
  updateSeen();

  /* ---------- where to eat ---------- */
  var KIND = {
    vegan:   { label: "100% vegan",    tag: "tag tag-accent", icon: "i-leaf" },
    veg:     { label: "Vegetarian",    tag: "tag",            icon: "i-bowl" },
    options: { label: "Vegan options", tag: "tag",            icon: "i-bowl" }
  };
  function restaurantRow(r) {
    var k = r.tag ? { label: r.tag, tag: "tag", icon: r.icon || "i-bowl" } : (KIND[r.kind] || KIND.veg);
    var im = r.img && IMAGES[r.img];
    return '<div class="row">' +
      (im ? '<span class="thumb"><img src="' + esc(im.src) + '" alt="' + esc(r.name) + '" loading="lazy" decoding="async"></span>'
          : '<span class="tile">' + icon(k.icon) + "</span>") +
      '<div class="row-main"><p class="t">' + esc(r.name) + "</p>" +
        '<p class="r-meta"><span class="' + k.tag + '">' + esc(k.label) + "</span>" +
        (r.where ? '<span class="where">' + esc(r.where) + "</span>" : "") + "</p>" +
        '<p class="d">' + esc(r.desc) + "</p>" + '<div class="btn-row">' + photosBtn(r.q, r.name) + (r.key ? mapBtn(r.key) : "") + "</div></div>" +
      "</div>";
  }

  /* A pill filter over a list of rows (used for food and drinks) */
  function filteredList(opts) {
    var groups = opts.groups || [], items = opts.items || [];
    var segEl = $(opts.seg), listEl = $(opts.list);
    if (!segEl || !listEl || !groups.length) return;
    var active = store.get(opts.key, groups[0].id);
    if (!groups.some(function (g) { return g.id === active; })) active = groups[0].id;
    function render() {
      segEl.innerHTML = groups.map(function (g) {
        return '<button type="button" role="tab" data-g="' + g.id + '" aria-selected="' + (g.id === active) + '">' +
          icon(g.icon) + esc(g.label) + "</button>";
      }).join("");
      listEl.innerHTML = items.filter(function (r) { return r[opts.field] === active; }).map(function (r) {
        return restaurantRow(opts.decorate ? opts.decorate(r) : r);
      }).join("");
      if (opts.count) $(opts.count).textContent = items.length + " places";
      linkMaps(listEl);
    }
    segEl.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-g]");
      if (!b) return;
      active = b.dataset.g;
      store.set(opts.key, active);
      render();
    });
    render();
  }

  filteredList({ groups: DATA.eatAreas, items: DATA.restaurants, field: "area",
    seg: "#eat-areas", list: "#eat-list", count: "#eat-count", key: "sgn-guide-eat-area",
    decorate: function (r) { return Object.assign({ key: "r:" + r.name }, r); } });

  var drinkTypes = {};
  (DATA.drinkTypes || []).forEach(function (t) { drinkTypes[t.id] = t; });
  filteredList({ groups: DATA.drinkTypes, items: DATA.drinks, field: "type",
    seg: "#drink-types", list: "#drink-list", count: "#drink-count", key: "sgn-guide-drink-type",
    decorate: function (r) {
      var t = drinkTypes[r.type] || {};
      return { key: "d:" + r.name, name: r.name, where: r.where, desc: r.desc, q: r.q, tag: r.tag || t.label, icon: t.icon };
    } });

  /* ---------- dishes ---------- */
  var dishEl = $("#dishes");
  dishEl.innerHTML = (DATA.dishes || []).map(function (d) {
    return '<article class="dish">' + media(d.img, d.name, "i-bowl") +
      '<div class="dish-body"><p class="t">' + esc(d.name) + '</p><p class="d">' + esc(d.desc) + "</p></div></article>";
  }).join("");
  wireImages(dishEl);

  /* ---------- currency converter ---------- */
  var rates = { AUD: 18000, USD: 26300, EUR: 30500, GBP: 35000 }; // VND per unit; replaced by live rate
  var live = false;
  var vndIn = $("#vnd"), fxIn = $("#fx"), curSel = $("#cur"), rateNote = $("#rate-note");
  curSel.value = store.get("sgn-guide-cur", "AUD");
  if (!rates[curSel.value]) curSel.value = "AUD";

  function parseNum(s) { var n = parseFloat(String(s).replace(/[^\d.]/g, "")); return isFinite(n) ? n : NaN; }
  function fmtVnd(n) { return Math.round(n).toLocaleString("en-US"); }
  function fmtFx(n) { return n >= 1000 ? Math.round(n).toLocaleString("en-US") : n.toFixed(2); }
  function showRate() {
    renderPrices();
    rateNote.textContent = "1 " + curSel.value + " ≈ " + fmtVnd(rates[curSel.value]) + " ₫ · " +
      (live ? "live rate, for guidance only" : "approximate rate");
  }
  function fromVnd() {
    var v = parseNum(vndIn.value);
    if (isNaN(v)) { fxIn.value = ""; return; }
    vndIn.value = fmtVnd(v);
    fxIn.value = fmtFx(v / rates[curSel.value]);
  }
  function fromFx() {
    var f = parseNum(fxIn.value);
    if (isNaN(f)) { vndIn.value = ""; return; }
    vndIn.value = fmtVnd(f * rates[curSel.value]);
  }
  vndIn.addEventListener("input", fromVnd);
  fxIn.addEventListener("input", fromFx);
  curSel.addEventListener("change", function () { store.set("sgn-guide-cur", curSel.value); showRate(); fromVnd(); });
  $$("#quick-vnd button").forEach(function (b) {
    b.addEventListener("click", function () { vndIn.value = b.dataset.v; fromVnd(); });
  });
  vndIn.value = "100000";
  fromVnd();
  showRate();
  fetch("https://open.er-api.com/v6/latest/USD")
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) {
      var R = d && d.rates;
      if (!R || !R.VND) return;
      Object.keys(rates).forEach(function (c) { if (R[c]) rates[c] = R.VND / R[c]; });
      live = true;
      showRate(); fromVnd();
    })
    .catch(function () {});

  /* ---------- fair prices ---------- */
  var SYM = { AUD: "A$", USD: "US$", EUR: "€", GBP: "£" };
  var priceGroups = DATA.prices || [];
  var priceListEl = $("#price-list");

  function fmtK(n) { return n >= 1000 ? (n / 1000).toLocaleString("en-US", { maximumFractionDigits: 1 }) + "k" : String(n); }
  function fmtMoney(n) { return n < 10 ? n.toFixed(2) : String(Math.round(n)); }
  function renderPrices() {
    if (!priceListEl || !curSel) return;
    var cur = curSel.value, r = rates[cur], sym = SYM[cur] || cur + " ";
    priceListEl.innerHTML = priceGroups.map(function (g) {
      return '<h3 class="label">' + esc(g.group) + '</h3><div class="group">' + g.items.map(function (it) {
        return '<div class="row kv price-row"><span>' + esc(it.name) + "</span><b>" + fmtK(it.lo) + "–" + fmtK(it.hi) + " ₫" +
          '<small>≈ ' + sym + fmtMoney(it.lo / r) + "–" + fmtMoney(it.hi / r) + "</small></b></div>";
      }).join("") + "</div>";
    }).join("");
  }
  renderPrices();


  /* ---------- translate: English <-> Vietnamese, typed or spoken ---------- */
  (function () {
    var box = $("#translate");
    if (!box) return;
    var LANG = { en: { name: "English", speech: "en-US" }, vi: { name: "Tiếng Việt", speech: "vi-VN" } };
    var from = store.get("sgn-guide-tr-from", "en");
    if (!LANG[from]) from = "en";
    var to = function () { return from === "en" ? "vi" : "en"; };
    var textEl = $("#tr-text"), outEl = $("#tr-out"), resEl = $("#tr-result"), micBtn = $("#tr-mic"), clearBtn = $("#tr-clear");
    var timer, req = 0, lastResult = "", lastSource = "";

    function decode(t) { var d = document.createElement("textarea"); d.innerHTML = t; return d.value; }
    function labels() {
      $("#tr-from").textContent = LANG[from].name;
      $("#tr-to").textContent = LANG[to()].name;
      textEl.placeholder = from === "en" ? "Type, or tap the mic and speak" : "Gõ hoặc bấm micro để nói";
      textEl.lang = from; resEl.lang = to();
    }
    function showResult(t, note) {
      lastResult = t;
      resEl.textContent = t;
      resEl.classList.toggle("muted", !!note);
      outEl.hidden = !t;
      $("#tr-say").hidden = !!note || !voiceFor(to());
      $("#tr-show").hidden = !!note;
    }
    function translate() {
      var q = textEl.value.trim();
      clearBtn.hidden = !q;
      if (!q) { showResult(""); return; }
      if (q === lastSource && lastResult) return;
      var id = ++req;
      resEl.classList.add("loading");
      fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(q.slice(0, 480)) + "&langpair=" + from + "|" + to())
        .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
        .then(function (j) {
          if (id !== req) return;
          resEl.classList.remove("loading");
          var t = j && j.responseData && j.responseData.translatedText;
          if (j && j.quotaFinished) { showResult("Today's free translation limit is used up. Try Google Translate.", true); return; }
          if (!t) throw 0;
          lastSource = q;
          showResult(decode(t));
        })
        .catch(function () {
          if (id !== req) return;
          resEl.classList.remove("loading");
          showResult("Couldn't translate. Check your connection and try again.", true);
        });
    }
    textEl.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(translate, 550); clearBtn.hidden = !textEl.value; });
    clearBtn.addEventListener("click", function () { textEl.value = ""; lastSource = ""; showResult(""); clearBtn.hidden = true; textEl.focus(); });
    $("#tr-swap").addEventListener("click", function () {
      from = to(); store.set("sgn-guide-tr-from", from);
      // put the last translation back in as the new input, like a conversation
      if (lastResult && !resEl.classList.contains("muted")) textEl.value = lastResult;
      lastSource = ""; labels(); translate();
    });

    /* speak the result */
    function voiceFor(lang) {
      if (!("speechSynthesis" in window)) return null;
      return speechSynthesis.getVoices().filter(function (v) { return v.lang.toLowerCase().indexOf(lang) === 0; })[0] || null;
    }
    if ("speechSynthesis" in window && speechSynthesis.addEventListener) speechSynthesis.addEventListener("voiceschanged", function () { if (lastResult) $("#tr-say").hidden = !voiceFor(to()); });
    $("#tr-say").addEventListener("click", function () {
      var v = voiceFor(to());
      if (!v || !lastResult) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(lastResult);
      u.voice = v; u.lang = v.lang; u.rate = to() === "vi" ? 0.85 : 1;
      speechSynthesis.speak(u);
    });

    /* show it big, to hand the phone across */
    var full = $("#tr-full");
    $("#tr-show").addEventListener("click", function () {
      $("#tr-full-text").textContent = lastResult;
      $("#tr-full-text").lang = to();
      $("#tr-full-src").textContent = textEl.value.trim();
      if (full.showModal) full.showModal(); else full.setAttribute("open", "");
    });
    function closeFull() { if (full.close) full.close(); else full.removeAttribute("open"); }
    full.addEventListener("click", closeFull);

    /* speak instead of typing */
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition, rec = null, listening = false;
    var tipEl = $("#tr-tip");
    // fallback that works everywhere: the keyboard's own dictation mic
    function keyboardTip(msg) {
      tipEl.innerHTML = icon("i-mic") + "<span>" + esc(msg || "This browser can't listen directly.") +
        " Tap the <b>microphone on your keyboard</b> to speak instead" +
        (from === "vi" ? ", with the keyboard set to Vietnamese." : ".") + "</span>";
      tipEl.hidden = false;
      textEl.focus();
    }
    function micLabel(t) { $("#tr-mic-label").textContent = t; }
    function note(msg) { tipEl.innerHTML = icon("i-mic") + "<span>" + esc(msg) + "</span>"; tipEl.hidden = false; }

    // Ask for the microphone first and wait for "Allow". Starting the recognizer
    // straight away makes Chrome on Android fail with "not-allowed" while its
    // permission pop-up is still on screen.
    var micReady = false;
    function getMic() {
      if (micReady || !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return Promise.resolve(false);
      return navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        stream.getTracks().forEach(function (t) { t.stop(); });
        micReady = true;
        return true; // permission was just granted
      });
    }
    function blockedOrBroken() {
      var p = navigator.permissions && navigator.permissions.query ? navigator.permissions.query({ name: "microphone" }) : Promise.reject();
      p.then(function (s) {
        if (s.state === "denied") keyboardTip("The microphone is blocked for this site. Allow it in Chrome's site settings (the icon left of the address), or:");
        else keyboardTip("Voice input didn't start.");
      }).catch(function () { keyboardTip("Voice input didn't start."); });
    }
    function startListening(attempt) {
      rec = new SR();
      rec.lang = LANG[from].speech; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
      var gotResult = false;
      rec.onstart = function () { listening = true; tipEl.hidden = true; micBtn.classList.add("on"); micLabel("Listening…"); };
      rec.onresult = function (e) {
        gotResult = true;
        var t = "";
        for (var i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
        textEl.value = t.trim(); clearBtn.hidden = false;
        clearTimeout(timer); timer = setTimeout(translate, 350);
      };
      rec.onerror = function (e) {
        if (e.error === "no-speech") { note("Didn't catch that. Tap Speak and talk a little louder."); return; }
        if (e.error === "aborted") return;
        // the mic can still be busy for a moment right after permission: try once more
        if ((e.error === "not-allowed" || e.error === "audio-capture") && attempt < 2) {
          rec.onend = null; listening = false; micBtn.classList.remove("on");
          setTimeout(function () { startListening(attempt + 1); }, 400);
          return;
        }
        if (e.error === "network") { keyboardTip("Voice input needs an internet connection."); return; }
        blockedOrBroken();
      };
      rec.onend = function () { listening = false; micBtn.classList.remove("on"); micLabel("Speak"); if (gotResult) translate(); };
      try { rec.start(); }
      catch (err) { micLabel("Speak"); note("Microphone ready. Tap Speak again and start talking."); }
    }
    micBtn.addEventListener("click", function () {
      tipEl.hidden = true;
      if (!SR) { keyboardTip(); return; }
      if (listening && rec) { rec.stop(); return; }
      micLabel("Allow the mic…");
      getMic().then(function (justGranted) {
        micLabel("Starting…");
        setTimeout(function () { startListening(1); }, justGranted ? 300 : 0);
      }).catch(function (err) {
        micLabel("Speak");
        if (err && (err.name === "NotAllowedError" || err.name === "SecurityError")) blockedOrBroken();
        else keyboardTip("No microphone found.");
      });
    });
    labels();
  })();

  /* ---------- Help sections: Tools · Phrases · Safety ---------- */
  var hpTabs = $("#help-tabs");
  function showHelp(id) {
    if (!hpTabs) return;
    if (!$('[data-hp-panel="' + id + '"]')) id = "tools";
    $$("button", hpTabs).forEach(function (x) { x.setAttribute("aria-selected", String(x.dataset.hp === id)); });
    $$("[data-hp-panel]").forEach(function (p) { p.hidden = p.dataset.hpPanel !== id; });
    store.set("sgn-guide-help", id);
  }
  if (hpTabs) {
    showHelp(store.get("sgn-guide-help", "tools"));
    hpTabs.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-hp]");
      if (b) showHelp(b.dataset.hp);
    });
  }
  $$("[data-hp-go]").forEach(function (a) {
    a.addEventListener("click", function () { showHelp(a.dataset.hpGo); });
  });

  /* ---------- map: all places + your location (Leaflet + CARTO/OSM tiles, loaded on first open) ---------- */
  var COORDS = window.SGN_COORDS || {};
  var PIN_COLORS = { two: "#C2255C", art: "#E8590C", shop: "#AE3EC9", old: "#1C7ED6", spirit: "#D6336C", out: "#0C8599",
    trips: "#5F3DC4", eat: "#2B8A3E", drink: "#B35900", home: "#1F2937" };
  var mapLayers = (DATA.categories || []).map(function (c) { return { id: c.id, label: c.label, icon: c.icon }; })
    .concat([{ id: "eat", label: "Eat", icon: "i-bowl" }, { id: "drink", label: "Drinks", icon: "i-glass" }]);
  var catLabel = {};
  (DATA.categories || []).forEach(function (c) { catLabel[c.id] = c.label; });

  var mapPoints = [{ key: "home", layer: "home", name: "Au Lac Charner Hotel", sub: "Home base",
    desc: "87-89-91 Hồ Tùng Mậu, Quận 1", q: "Au Lac Charner Hotel, 87-89-91 Hồ Tùng Mậu", icon: "i-pin" }];
  (DATA.places || []).forEach(function (p) {
    mapPoints.push({ key: p.id, layer: p.cat, name: p.name, sub: catLabel[p.cat] || "", desc: p.desc, q: p.q,
      icon: (mapLayers.filter(function (l) { return l.id === p.cat; })[0] || {}).icon || "i-landmark" });
  });
  (DATA.restaurants || []).forEach(function (r) {
    mapPoints.push({ key: "r:" + r.name, layer: "eat", name: r.name, sub: (KIND[r.kind] || KIND.veg).label + (r.where ? " · " + r.where : ""),
      desc: r.desc, q: r.q, icon: r.kind === "vegan" ? "i-leaf" : "i-bowl" });
  });
  (DATA.drinks || []).forEach(function (r) {
    var t = drinkTypes[r.type] || {};
    mapPoints.push({ key: "d:" + r.name, layer: "drink", name: r.name, sub: (t.label || "Drinks") + (r.where ? " · " + r.where : ""),
      desc: r.desc, q: r.q, icon: t.icon || "i-glass" });
  });
  mapPoints.forEach(function (pt) { var c = COORDS[pt.key]; if (c) { pt.ll = [c[0], c[1]]; pt.approx = !!c[2]; } });

  var layersOn = store.get("sgn-guide-map-layers", mapLayers.filter(function (l) { return l.id !== "trips"; }).map(function (l) { return l.id; }));
  var hiddenKeys = store.get("sgn-guide-map-hidden", []);
  // layers added since the last visit start switched on
  var knownLayers = store.get("sgn-guide-map-known", ["art", "shop", "old", "spirit", "out", "trips", "eat", "drink"]);
  mapLayers.forEach(function (l) {
    if (knownLayers && knownLayers.indexOf(l.id) < 0 && layersOn.indexOf(l.id) < 0) layersOn.push(l.id);
  });
  store.set("sgn-guide-map-known", mapLayers.map(function (l) { return l.id; }));
  store.set("sgn-guide-map-layers", layersOn);
  var mapStyle = store.get("sgn-guide-map-style", "simple");
  var OSM_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors';
  function tileSpec() {
    if (mapStyle === "detailed") return { url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", opts: { maxZoom: 19, attribution: OSM_ATTR } };
    var dark = root.getAttribute("data-theme") === "dark";
    return {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_" + (dark ? "Dark" : "Light") + "_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      opts: { maxZoom: 19, maxNativeZoom: 16, attribution: "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, " + OSM_ATTR }
    };
  }
  function setTiles() {
    if (!lmap) return;
    if (tiles) lmap.removeLayer(tiles);
    var t = tileSpec();
    tiles = L.tileLayer(t.url, t.opts).addTo(lmap);
    $("#map-canvas").classList.toggle("style-detailed", mapStyle === "detailed");
  }
  function renderStyleSwitch() {
    $("#map-style").innerHTML = [["simple", "Simple"], ["detailed", "Detailed"]].map(function (x) {
      return '<button type="button" data-style="' + x[0] + '" aria-pressed="' + (mapStyle === x[0]) + '">' + x[1] + "</button>";
    }).join("");
  }
  document.addEventListener("sgn-theme", function () { if (mapStyle === "simple") setTiles(); });
  var lmap = null, tiles = null, markers = {}, pendingFocus = null, leafletState = 0, leafletWaiters = [];
  var meMarker = null, meCircle = null, watchId = null, firstFix = true, wantHomeRoute = false;

  function mapBtn(key) {
    if (!(window.SGN_COORDS || {})[key]) return "";
    return '<a class="btn btn-secondary btn-sm" href="#map" data-map-key="' + esc(key) + '">' + icon("i-map") + "Map</a>";
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-map-key]");
    if (a) pendingFocus = a.getAttribute("data-map-key");
  });

  function loadLeaflet(cb) {
    if (leafletState === 2) return cb();
    leafletWaiters.push(cb);
    if (leafletState === 1) return;
    leafletState = 1;
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(css);
    var js = document.createElement("script");
    js.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
    js.onload = function () { leafletState = 2; leafletWaiters.splice(0).forEach(function (f) { f(); }); };
    js.onerror = function () { leafletState = 0; $("#map-loading").textContent = "Couldn't load the map. Check your connection and try again."; };
    document.head.appendChild(js);
  }

  function popupHtml(pt) {
    return '<div class="pop">' +
      '<p class="pop-sub" style="color:' + PIN_COLORS[pt.layer] + '">' + esc(pt.sub) + "</p>" +
      '<p class="pop-t">' + esc(pt.name) + "</p>" +
      (pt.desc ? '<p class="pop-d">' + esc(pt.desc) + "</p>" : "") +
      (pt.approx ? '<p class="pop-a">' + icon("i-info") + "Approximate location</p>" : "") +
      '<div class="pop-btns">' +
        '<button type="button" class="btn btn-primary btn-sm" data-route="' + esc(pt.key) + '">' + icon("i-walk") + (pt.layer === "home" ? "Route back" : "Route") + "</button>" +
        '<a class="btn btn-secondary btn-sm" target="_blank" rel="noopener" href="' + esc(mapUrl(pt.q)) + '">' + icon("i-photo") + "Photos</a>" +
      "</div></div>";
  }
  function pinIcon(pt) {
    var home = pt.layer === "home";
    return L.divIcon({
      className: "pin-wrap",
      html: '<span class="pin' + (home ? " pin-home" : "") + '" style="--c:' + PIN_COLORS[pt.layer] + '">' + icon(pt.icon) + "</span>",
      iconSize: home ? [38, 38] : [30, 30], iconAnchor: home ? [19, 19] : [15, 15], popupAnchor: [0, -14]
    });
  }
  function isVisible(pt) {
    return pt.layer === "home" || (layersOn.indexOf(pt.layer) >= 0 && hiddenKeys.indexOf(pt.key) < 0);
  }
  function refreshMarkers() {
    if (!lmap) return;
    mapPoints.forEach(function (pt) {
      var m = markers[pt.key];
      if (!m) return;
      var want = isVisible(pt), has = lmap.hasLayer(m);
      if (want && !has) m.addTo(lmap);
      if (!want && has) lmap.removeLayer(m);
    });
  }
  function fitVisible(includeTrips) {
    var pts = mapPoints.filter(function (pt) { return pt.ll && isVisible(pt) && (includeTrips || pt.layer !== "trips"); });
    if (!pts.length) pts = mapPoints.filter(function (pt) { return pt.ll && isVisible(pt); });
    if (pts.length < 2) { lmap.setView(pts[0] ? pts[0].ll : [LAT, LON], 15); return; }
    lmap.fitBounds(pts.map(function (pt) { return pt.ll; }), { padding: [36, 36], maxZoom: 16 });
  }
  function renderLayerChips() {
    $("#map-layers").innerHTML = mapLayers.map(function (l) {
      var on = layersOn.indexOf(l.id) >= 0;
      return '<button type="button" data-layer="' + l.id + '" aria-pressed="' + on + '" style="--c:' + PIN_COLORS[l.id] + '">' +
        '<span class="dot"></span>' + esc(l.label) + "</button>";
    }).join("");
  }
  function saveMapState() { store.set("sgn-guide-map-layers", layersOn); store.set("sgn-guide-map-hidden", hiddenKeys); }

  var toastTimer;
  function mapToast(msg) {
    var t = $("#map-toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.hidden = true; }, 4500);
  }

  function initMap() {
    lmap = L.map("map-canvas", { zoomControl: false, tap: true }).setView([LAT, LON], 15);
    L.control.zoom({ position: "bottomleft" }).addTo(lmap);
    setTiles();
    renderStyleSwitch();
    $("#map-style").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-style]");
      if (!b || b.dataset.style === mapStyle) return;
      mapStyle = b.dataset.style;
      store.set("sgn-guide-map-style", mapStyle);
      renderStyleSwitch(); setTiles();
    });
    mapPoints.forEach(function (pt) {
      if (!pt.ll) return;
      markers[pt.key] = L.marker(pt.ll, { icon: pinIcon(pt), title: pt.name, zIndexOffset: pt.layer === "home" ? 1000 : 0, riseOnHover: true })
        .bindPopup(popupHtml(pt), { maxWidth: 260, autoPanPadding: [20, 80] });
    });
    refreshMarkers();
    lmap.setView([LAT - 0.0015, LON - 0.004], 15); // the hotel and the old town
    $("#map-loading").hidden = true;

    renderLayerChips();
    $("#map-layers").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-layer]");
      if (!b) return;
      var id = b.dataset.layer, i = layersOn.indexOf(id);
      if (i >= 0) layersOn.splice(i, 1); else layersOn.push(id);
      saveMapState(); renderLayerChips(); refreshMarkers();
      if (i < 0 && id === "trips") fitVisible(true);
    });
    $("#map-fit").addEventListener("click", function () { fitVisible(layersOn.indexOf("trips") >= 0); });
    $("#map-locate").addEventListener("click", locateMe);
    lmap.on("popupopen", function (e) {
      var b = e.popup.getElement().querySelector("[data-route]");
      if (b) b.addEventListener("click", function () { routeTo(b.getAttribute("data-route")); });
    });
    $("#rb-close").addEventListener("click", clearRoute);
    $("#map-home").addEventListener("click", function () {
      if (meMarker && watchId !== null) { routeTo("home"); return; }
      wantHomeRoute = true;
      locateMe();
    });
    $("#map-places").addEventListener("click", openSheet);
  }

  function locateMe() {
    if (!("geolocation" in navigator)) { mapToast("This browser can't share your location."); return; }
    requestCompass();
    if (meMarker && watchId !== null) { lmap.setView(meMarker.getLatLng(), Math.max(lmap.getZoom(), 16)); return; }
    $("#map-locate").classList.add("busy");
    if (wantHomeRoute) $("#map-home").classList.add("busy");
    firstFix = true;
    watchId = navigator.geolocation.watchPosition(function (pos) {
      var ll = [pos.coords.latitude, pos.coords.longitude], acc = pos.coords.accuracy || 0;
      $("#map-locate").classList.remove("busy");
      $("#map-locate").classList.add("on");
      if (!meMarker) {
        meMarker = L.marker(ll, { icon: L.divIcon({ className: "me-wrap", html: '<span class="me-cone"></span><span class="me-dot"></span>', iconSize: [80, 80], iconAnchor: [40, 40] }), zIndexOffset: 2000, keyboard: false, interactive: false }).addTo(lmap);
        if (heading !== null) setHeading(heading);
        meCircle = L.circle(ll, { radius: acc, className: "me-acc", weight: 1 }).addTo(lmap);
      } else { meMarker.setLatLng(ll); meCircle.setLatLng(ll).setRadius(acc); }
      if (firstFix) {
        firstFix = false;
        if (wantHomeRoute) { wantHomeRoute = false; setTimeout(function () { routeTo("home"); }, 0); return; }
        var far = lmap.distance(ll, [LAT, LON]) > 60000;
        lmap.setView(ll, far ? 12 : Math.max(lmap.getZoom(), 16));
        if (far) mapToast("You're a long way from Saigon. The pins will make more sense once you land!");
      }
    }, function (err) {
      wantHomeRoute = false;
      $("#map-home").classList.remove("busy");
      $("#map-locate").classList.remove("busy", "on");
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
      watchId = null;
      mapToast(err.code === 1 ? "Location is blocked. Allow location for this site in your browser settings, then try again."
        : "Couldn't find your location. Try again outside or with Wi-Fi on.");
    }, { enableHighAccuracy: true, maximumAge: 10000, timeout: 20000 });
  }


  /* ---------- compass: which way you're facing (cone on the blue dot) ---------- */
  var heading = null, compassOn = false;
  function setHeading(h) {
    heading = h;
    var el = meMarker && meMarker.getElement();
    if (!el) return;
    el.classList.add("has-heading");
    el.querySelector(".me-cone").style.transform = "rotate(" + h + "deg)";
  }
  function onOrient(ev) {
    var h = null;
    if (typeof ev.webkitCompassHeading === "number") h = ev.webkitCompassHeading;     // iOS
    else if (ev.absolute && typeof ev.alpha === "number") h = 360 - ev.alpha;       // Android
    if (h === null || isNaN(h)) return;
    var so = (screen.orientation && screen.orientation.angle) || window.orientation || 0;
    setHeading(Math.round((h + so + 360) % 360));
  }
  function startCompass() {
    if (compassOn) return;
    compassOn = true;
    if ("ondeviceorientationabsolute" in window) window.addEventListener("deviceorientationabsolute", onOrient);
    else window.addEventListener("deviceorientation", onOrient);
  }
  function requestCompass() {
    // iOS only allows this from a tap, so it rides on the location / hotel buttons
    if (compassOn || !window.DeviceOrientationEvent) return;
    startCompass(); // events start flowing once the browser allows them
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      try { DeviceOrientationEvent.requestPermission().catch(function () {}); } catch (e) {}
    }
  }

  /* ---------- routes: walking or driving line from you (or the hotel) ---------- */
  var routeLines = [], routeReq = 0;
  function fmtDur(m) { return m < 60 ? m + " min" : Math.floor(m / 60) + " h " + (m % 60 ? (m % 60) + " min" : ""); }
  function fmtDist(d) { return d < 1000 ? Math.round(d / 10) * 10 + " m" : (d / 1000).toFixed(d < 10000 ? 1 : 0) + " km"; }
  function clearRoute() {
    routeReq++;
    routeLines.forEach(function (l) { lmap.removeLayer(l); });
    routeLines = [];
    $("#route-bar").hidden = true;
  }
  function routeTo(key) {
    var pt = mapPoints.filter(function (p) { return p.key === key; })[0];
    if (!pt || !pt.ll) return;
    var fromMe = !!(meMarker && watchId !== null);
    if (!fromMe && pt.layer === "home") { mapToast("Turn on your location (the target button) to get a route back to the hotel."); return; }
    var from = fromMe ? [meMarker.getLatLng().lat, meMarker.getLatLng().lng] : [LAT, LON];
    var straight = lmap.distance(from, pt.ll);
    if (straight > 150000) { mapToast("You're too far away for a route. Try again in Saigon!"); return; }
    var walk = straight < 2500;
    var mode = walk ? ["routed-foot", "foot", "walking"] : ["routed-car", "driving", "driving"];
    var url = "https://routing.openstreetmap.de/" + mode[0] + "/route/v1/" + mode[1] + "/" +
      from[1] + "," + from[0] + ";" + pt.ll[1] + "," + pt.ll[0] + "?overview=full&geometries=geojson";
    var gmaps = "https://www.google.com/maps/dir/?api=1&origin=" + from[0] + "," + from[1] +
      "&destination=" + (pt.approx ? encodeURIComponent(pt.q + ", Ho Chi Minh City") : pt.ll[0] + "," + pt.ll[1]) + "&travelmode=" + mode[2];
    var id = ++routeReq;
    lmap.closePopup();
    $("#map-home").classList.remove("busy");
    var bar = $("#route-bar");
    $("#rb-icon use").setAttribute("href", walk ? "#i-walk" : "#i-car");
    $("#rb-time").textContent = "Finding a route…";
    $("#rb-sub").textContent = "To " + pt.name;
    $("#rb-gmaps").href = gmaps;
    bar.hidden = false;
    fetch(url).then(function (r) { return r.ok ? r.json() : Promise.reject(); }).then(function (j) {
      if (id !== routeReq) return;
      var r = j && j.routes && j.routes[0];
      if (!r) throw 0;
      routeLines.forEach(function (l) { lmap.removeLayer(l); });
      var lls = r.geometry.coordinates.map(function (c) { return [c[1], c[0]]; });
      routeLines = [
        L.polyline(lls, { className: "route-casing", weight: 9, interactive: false }).addTo(lmap),
        L.polyline(lls, { className: "route-line", weight: 5, interactive: false }).addTo(lmap)
      ];
      lmap.fitBounds(routeLines[1].getBounds(), { padding: [70, 70] });
      var mins = Math.max(1, Math.round(r.duration / 60 * (walk ? 1 : 1.5))); // Saigon traffic
      $("#rb-time").textContent = (walk ? "Walk " : "Car ") + fmtDur(mins) + " · " + fmtDist(r.distance);
      $("#rb-sub").textContent = "To " + pt.name + " from " + (fromMe ? "you" : "the hotel") + (walk ? "" : ", more in rush hour");
    }).catch(function () {
      if (id !== routeReq) return;
      $("#rb-time").textContent = "Couldn't get a route";
      $("#rb-sub").textContent = "Try Google Maps instead";
    });
  }

  function focusKey(key) {
    var pt = mapPoints.filter(function (p) { return p.key === key; })[0], m = markers[key];
    if (!pt || !m) return;
    if (pt.layer !== "home" && layersOn.indexOf(pt.layer) < 0) { layersOn.push(pt.layer); renderLayerChips(); }
    var hi = hiddenKeys.indexOf(key);
    if (hi >= 0) hiddenKeys.splice(hi, 1);
    saveMapState(); refreshMarkers();
    lmap.setView(pt.ll, Math.max(lmap.getZoom(), 16));
    m.openPopup();
  }

  function openMap() {
    if (currentView() !== "map") return;
    loadLeaflet(function () {
      if (!lmap) initMap(); else lmap.invalidateSize();
      if (pendingFocus) { var k = pendingFocus; pendingFocus = null; setTimeout(function () { lmap.invalidateSize(); focusKey(k); }, 60); }
    });
  }

  /* choose individual places */
  var sheet = $("#map-sheet");
  function renderSheet() {
    $("#ms-body").innerHTML = mapLayers.map(function (l) {
      var pts = mapPoints.filter(function (p) { return p.layer === l.id; });
      var on = layersOn.indexOf(l.id) >= 0;
      return '<section class="ms-group" style="--c:' + PIN_COLORS[l.id] + '">' +
        '<div class="ms-head"><label class="ms-layer"><input type="checkbox" data-ms-layer="' + l.id + '"' + (on ? " checked" : "") + '><span class="dot"></span>' + esc(l.label) + "</label>" +
        '<span class="ms-acts"><button type="button" class="text-btn" data-ms-all="' + l.id + '">All</button><button type="button" class="text-btn" data-ms-none="' + l.id + '">None</button></span></div>' +
        '<ul class="ms-list' + (on ? "" : " off") + '">' + pts.map(function (p) {
          if (!p.ll) return '<li class="ms-row nomap"><span>' + esc(p.name) + '</span><a href="' + esc(mapUrl(p.q)) + '" target="_blank" rel="noopener">Not pinned · open in Maps</a></li>';
          return '<li class="ms-row"><label><input type="checkbox" data-ms-key="' + esc(p.key) + '"' + (hiddenKeys.indexOf(p.key) < 0 ? " checked" : "") + "><span>" + esc(p.name) + "</span></label></li>";
        }).join("") + "</ul></section>";
    }).join("");
  }
  function openSheet() {
    renderSheet();
    if (sheet.showModal) sheet.showModal(); else sheet.setAttribute("open", "");
  }
  function closeSheet() { if (sheet.close) sheet.close(); else sheet.removeAttribute("open"); }
  if (sheet) {
    $("#ms-close").addEventListener("click", closeSheet);
    $("#ms-done").addEventListener("click", closeSheet);
    sheet.addEventListener("click", function (e) { if (e.target === sheet) closeSheet(); });
    $("#ms-reset").addEventListener("click", function () {
      layersOn = mapLayers.map(function (l) { return l.id; }); hiddenKeys = [];
      saveMapState(); renderSheet(); renderLayerChips(); refreshMarkers();
    });
    $("#ms-body").addEventListener("change", function (e) {
      var t = e.target, k = t.getAttribute("data-ms-key"), lay = t.getAttribute("data-ms-layer");
      if (k) {
        var i = hiddenKeys.indexOf(k);
        if (t.checked && i >= 0) hiddenKeys.splice(i, 1);
        if (!t.checked && i < 0) hiddenKeys.push(k);
      }
      if (lay) {
        var j = layersOn.indexOf(lay);
        if (t.checked && j < 0) layersOn.push(lay);
        if (!t.checked && j >= 0) layersOn.splice(j, 1);
        t.closest(".ms-group").querySelector(".ms-list").classList.toggle("off", !t.checked);
      }
      saveMapState(); renderLayerChips(); refreshMarkers();
    });
    $("#ms-body").addEventListener("click", function (e) {
      var all = e.target.getAttribute("data-ms-all"), none = e.target.getAttribute("data-ms-none"), id = all || none;
      if (!id) return;
      mapPoints.forEach(function (p) {
        if (p.layer !== id || !p.ll) return;
        var i = hiddenKeys.indexOf(p.key);
        if (all && i >= 0) hiddenKeys.splice(i, 1);
        if (none && i < 0) hiddenKeys.push(p.key);
      });
      if (all && layersOn.indexOf(id) < 0) layersOn.push(id);
      saveMapState(); renderSheet(); renderLayerChips(); refreshMarkers();
    });
  }

  linkMaps(document);
})();
