(function () {
  "use strict";

  var DATA = window.SGN_DATA || {};
  var IMAGES = window.SGN_IMAGES || {};
  var TZ = "Asia/Ho_Chi_Minh";
  var VIEWS = ["prep", "move", "eat", "see", "help"];

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
    return VIEWS.indexOf(h) >= 0 ? h : "prep";
  }
  function show(view, scroll) {
    $$("[data-view]").forEach(function (s) { s.hidden = s.id !== view; });
    $$(".tabbar a").forEach(function (a) {
      if (a.dataset.nav === view) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (scroll !== false) window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", function () { show(currentView()); });
  show(currentView(), false);

  var topbar = $(".topbar");
  window.addEventListener("scroll", function () {
    topbar.classList.toggle("scrolled", window.scrollY > 4);
  }, { passive: true });

  /* ---------- live clock & weather ---------- */
  var timeEl = $("#local-time");
  function tick() {
    try {
      timeEl.textContent = new Intl.DateTimeFormat("en-GB", {
        weekday: "short", hour: "2-digit", minute: "2-digit", timeZone: TZ
      }).format(new Date());
    } catch (e) { timeEl.parentElement.hidden = true; }
  }
  tick();
  setInterval(tick, 30000);

  /* ---------- live weather: Prep pill + Help › Tools ---------- */
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
      // pill on Prep
      var pill = $("#weather-now");
      pill.querySelector("span").textContent = wxText(c.weather_code) + " · " + Math.round(c.temperature_2m) + "°C";
      pill.querySelector("use").setAttribute("href", "#" + wxSymbol(c.weather_code, c.is_day));
      pill.hidden = false;
      // Tools card
      if (!$("#wx-temp")) return;
      var hi = d.hourly.time.indexOf(c.time.slice(0, 13) + ":00");
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
        (p.q ? photosBtn(p.q, p.name) : "") +
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
        '<p class="d">' + esc(r.desc) + "</p>" + photosBtn(r.q, r.name) + "</div>" +
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
    seg: "#eat-areas", list: "#eat-list", count: "#eat-count", key: "sgn-guide-eat-area" });

  var drinkTypes = {};
  (DATA.drinkTypes || []).forEach(function (t) { drinkTypes[t.id] = t; });
  filteredList({ groups: DATA.drinkTypes, items: DATA.drinks, field: "type",
    seg: "#drink-types", list: "#drink-list", count: "#drink-count", key: "sgn-guide-drink-type",
    decorate: function (r) {
      var t = drinkTypes[r.type] || {};
      return { name: r.name, where: r.where, desc: r.desc, q: r.q, tag: r.tag || t.label, icon: t.icon };
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
  var priceItems = [];
  priceGroups.forEach(function (g) { g.items.forEach(function (it) { priceItems.push(it); }); });
  var priceListEl = $("#price-list"), pcItem = $("#pc-item"), pcPrice = $("#pc-price"), pcVerdict = $("#pc-verdict");

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
  function checkPrice() {
    var it = priceItems[+pcItem.value];
    var n = parseNum(pcPrice.value);
    if (!it || isNaN(n) || n <= 0) { pcVerdict.hidden = true; return; }
    if (n < 1000) n *= 1000; // "50" on a sign means 50,000 ₫
    var range = fmtK(it.lo) + "–" + fmtK(it.hi) + " ₫";
    var v;
    if (n <= it.hi && n >= it.lo * 0.6) v = ["good", "i-check", "Fair. The usual price is " + range + "."];
    else if (n < it.lo * 0.6) v = ["good", "i-check", "Cheap! The usual price is " + range + ". Check what's included."];
    else if (n <= it.hi * 1.5) v = ["warn", "i-info", "A bit high. The usual price is " + range + ", but this is normal in malls, hotels and tourist streets."];
    else v = ["bad", "i-x", "Tourist price. The usual price is " + range + ". Smile, say \"Mắc quá!\" (too expensive) and walk on, or offer the usual price."];
    pcVerdict.className = "pc-verdict aqi-bg-" + v[0];
    pcVerdict.innerHTML = icon(v[1]) + "<span>" + esc(v[2]) + "</span>";
    pcVerdict.hidden = false;
  }
  if (pcItem) {
    pcItem.innerHTML = (function () {
      var i = 0;
      return priceGroups.map(function (g) {
        return '<optgroup label="' + esc(g.group) + '">' + g.items.map(function (it) {
          return '<option value="' + (i++) + '">' + esc(it.name) + "</option>";
        }).join("") + "</optgroup>";
      }).join("");
    })();
    pcItem.addEventListener("change", checkPrice);
    pcPrice.addEventListener("input", function () {
      var n = parseNum(pcPrice.value);
      if (!isNaN(n) && n >= 1000) pcPrice.value = fmtVnd(n);
      checkPrice();
    });
  }
  renderPrices();

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

  /* ---------- phrases ---------- */
  var phTabs = $("#phrase-tabs");
  phTabs.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-ph]");
    if (!b) return;
    $$("button", phTabs).forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
    $$("[data-ph-panel]").forEach(function (p) { p.hidden = p.dataset.phPanel !== b.dataset.ph; });
  });

  if ("speechSynthesis" in window) {
    var addSpeak = function () {
      var vi = speechSynthesis.getVoices().filter(function (v) { return /^vi/i.test(v.lang); })[0];
      if (!vi || $(".say-btn")) return;
      $(".speak-hint").hidden = false;
      $$(".phrases .row").forEach(function (row) {
        var text = $(".t", row).textContent;
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "icon-btn sm say-btn";
        btn.setAttribute("aria-label", "Hear: " + text);
        btn.innerHTML = icon("i-volume");
        btn.addEventListener("click", function () {
          speechSynthesis.cancel();
          var u = new SpeechSynthesisUtterance(text);
          u.voice = vi; u.lang = vi.lang; u.rate = 0.85;
          speechSynthesis.speak(u);
        });
        row.appendChild(btn);
      });
    };
    addSpeak();
    if (speechSynthesis.addEventListener) speechSynthesis.addEventListener("voiceschanged", addSpeak);
  }

  /* ---------- photo credits (required by CC BY / BY-SA licences) ---------- */
  var creditsEl = $("#credits");
  if (creditsEl) {
    var subjects = {};
    places.forEach(function (p) { if (p.img) subjects[p.img] = p.name; });
    (DATA.dishes || []).forEach(function (d) { if (d.img) subjects[d.img] = d.name; });
    (DATA.restaurants || []).forEach(function (r) { if (r.img) subjects[r.img] = r.name; });
    creditsEl.innerHTML = Object.keys(subjects).filter(function (k) { return IMAGES[k]; }).map(function (k) {
      var im = IMAGES[k];
      return '<li><a href="' + esc(im.page) + '" target="_blank" rel="noopener">' + esc(subjects[k]) + "</a>, " +
        esc(im.by) + " · " + esc(im.lic) + "</li>";
    }).join("");
  }

  linkMaps(document);
})();
