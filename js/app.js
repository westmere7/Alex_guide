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
    if (!im) return '<div class="media"><span class="ph">' + icon(fallbackIcon || "i-bowl") + "</span></div>";
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

  var WX = { 0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Cloudy", 45: "Hazy", 48: "Hazy",
    51: "Drizzle", 53: "Drizzle", 55: "Drizzle", 61: "Rain", 63: "Rain", 65: "Heavy rain",
    80: "Showers", 81: "Showers", 82: "Downpour", 95: "Storm", 96: "Storm", 99: "Storm" };
  fetch("https://api.open-meteo.com/v1/forecast?latitude=10.7725&longitude=106.698&current=temperature_2m,weather_code&timezone=Asia%2FHo_Chi_Minh")
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) {
      if (!d || !d.current) return;
      var el = $("#weather-now");
      el.querySelector("span").textContent = (WX[d.current.weather_code] || "Now") + " · " + Math.round(d.current.temperature_2m) + "°C";
      el.querySelector("use").setAttribute("href", d.current.weather_code <= 1 ? "#i-sun" : "#i-cloud");
      el.hidden = false;
    })
    .catch(function () {});

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
      media(p.img, p.name, "i-landmark") +
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
    listEl.innerHTML = '<div class="places">' +
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
  var eatAreas = DATA.eatAreas || [], restaurants = DATA.restaurants || [];
  var eatAreaEl = $("#eat-areas"), eatListEl = $("#eat-list");
  var activeArea = store.get("sgn-guide-eat-area", eatAreas[0] && eatAreas[0].id);
  if (!eatAreas.some(function (a) { return a.id === activeArea; })) activeArea = eatAreas[0] && eatAreas[0].id;

  function restaurantRow(r) {
    var k = KIND[r.kind] || KIND.veg;
    return '<div class="row">' +
      '<span class="tile">' + icon(k.icon) + "</span>" +
      '<div class="row-main"><p class="t">' + esc(r.name) + "</p>" +
        '<p class="r-meta"><span class="' + k.tag + '">' + esc(k.label) + "</span>" +
        (r.where ? '<span class="where">' + esc(r.where) + "</span>" : "") + "</p>" +
        '<p class="d">' + esc(r.desc) + "</p>" + photosBtn(r.q, r.name) + "</div>" +
      "</div>";
  }
  function renderEat() {
    eatAreaEl.innerHTML = eatAreas.map(function (a) {
      return '<button type="button" role="tab" data-area="' + a.id + '" aria-selected="' + (a.id === activeArea) + '">' +
        icon(a.icon) + esc(a.label) + "</button>";
    }).join("");
    eatListEl.innerHTML = restaurants.filter(function (r) { return r.area === activeArea; }).map(restaurantRow).join("");
    $("#eat-count").textContent = restaurants.length + " places";
    linkMaps(eatListEl);
  }
  eatAreaEl.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-area]");
    if (!b) return;
    activeArea = b.dataset.area;
    store.set("sgn-guide-eat-area", activeArea);
    renderEat();
  });
  renderEat();

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
    creditsEl.innerHTML = Object.keys(subjects).filter(function (k) { return IMAGES[k]; }).map(function (k) {
      var im = IMAGES[k];
      return '<li><a href="' + esc(im.page) + '" target="_blank" rel="noopener">' + esc(subjects[k]) + "</a>, " +
        esc(im.by) + " · " + esc(im.lic) + "</li>";
    }).join("");
  }

  linkMaps(document);
})();
