(function () {
  "use strict";

  var TZ = "Asia/Ho_Chi_Minh";
  var store = {
    get: function (k, fallback) {
      try { var v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode etc. */ }
    }
  };

  /* ---------- Google Maps links ---------- */
  document.querySelectorAll("[data-q]").forEach(function (a) {
    var q = a.getAttribute("data-q") + ", Ho Chi Minh City, Vietnam";
    a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  });

  /* ---------- Local time ---------- */
  var timeEl = document.getElementById("local-time");
  function tick() {
    try {
      timeEl.textContent = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit", minute: "2-digit", weekday: "short", timeZone: TZ
      }).format(new Date());
    } catch (e) { timeEl.parentElement.hidden = true; }
  }
  tick();
  setInterval(tick, 30000);

  /* ---------- Live weather (Open-Meteo, no key) ---------- */
  var WX = {
    0: "☀️ Clear", 1: "🌤️ Mostly clear", 2: "⛅ Partly cloudy", 3: "☁️ Cloudy",
    45: "🌫️ Hazy", 48: "🌫️ Hazy", 51: "🌦️ Drizzle", 53: "🌦️ Drizzle", 55: "🌦️ Drizzle",
    61: "🌧️ Rain", 63: "🌧️ Rain", 65: "🌧️ Heavy rain", 80: "🌦️ Showers", 81: "🌧️ Showers",
    82: "⛈️ Downpour", 95: "⛈️ Storm", 96: "⛈️ Storm", 99: "⛈️ Storm"
  };
  var wxEl = document.getElementById("weather-now");
  fetch("https://api.open-meteo.com/v1/forecast?latitude=10.7725&longitude=106.698&current=temperature_2m,weather_code&timezone=Asia%2FHo_Chi_Minh")
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) {
      if (!d || !d.current) return;
      var label = WX[d.current.weather_code] || "🌡️";
      wxEl.textContent = label + " · " + Math.round(d.current.temperature_2m) + "°C";
      wxEl.hidden = false;
    })
    .catch(function () { /* stay hidden offline */ });

  /* ---------- Vegan card ---------- */
  var dlg = document.getElementById("vegan-card");
  function openCard() {
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }
  function closeCard() {
    if (dlg.close) dlg.close(); else dlg.removeAttribute("open");
  }
  document.querySelectorAll("[data-open-card]").forEach(function (b) { b.addEventListener("click", openCard); });
  document.querySelectorAll("[data-close-card]").forEach(function (b) { b.addEventListener("click", closeCard); });
  dlg.addEventListener("close", function () { document.body.style.overflow = ""; });

  /* ---------- Sightseeing checklist ---------- */
  var SEEN_KEY = "sgn-guide-seen";
  var seen = store.get(SEEN_KEY, {});
  var sightItems = document.querySelectorAll(".sights li[data-id]");
  var countEl = document.getElementById("seen-count");
  document.getElementById("seen-total").textContent = sightItems.length;

  function refreshCount() {
    var n = 0;
    sightItems.forEach(function (li) { if (seen[li.dataset.id]) n++; });
    countEl.textContent = n;
  }
  sightItems.forEach(function (li) {
    var box = li.querySelector("input[type=checkbox]");
    if (!box) return;
    box.checked = !!seen[li.dataset.id];
    li.classList.toggle("done", box.checked);
    box.addEventListener("change", function () {
      if (box.checked) seen[li.dataset.id] = true; else delete seen[li.dataset.id];
      li.classList.toggle("done", box.checked);
      store.set(SEEN_KEY, seen);
      refreshCount();
    });
  });
  refreshCount();

  /* ---------- Currency converter ---------- */
  // Fallback rates: VND per 1 unit. Replaced by a live rate when online.
  var rates = { AUD: 18000, USD: 26300, EUR: 30500, GBP: 35000 };
  var live = false;
  var vndIn = document.getElementById("vnd");
  var fxIn = document.getElementById("fx");
  var curSel = document.getElementById("cur");
  var rateNote = document.getElementById("rate-note");

  curSel.value = store.get("sgn-guide-cur", "AUD");
  if (!rates[curSel.value]) curSel.value = "AUD";

  function parseNum(s) {
    var n = parseFloat(String(s).replace(/[^\d.]/g, ""));
    return isFinite(n) ? n : NaN;
  }
  function fmtVnd(n) { return Math.round(n).toLocaleString("en-US"); }
  function fmtFx(n) { return n < 10 ? n.toFixed(2) : n.toFixed(n < 1000 ? 2 : 0); }

  function showRate() {
    var r = rates[curSel.value];
    rateNote.textContent = "1 " + curSel.value + " ≈ " + fmtVnd(r) + " ₫ · " +
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
  curSel.addEventListener("change", function () {
    store.set("sgn-guide-cur", curSel.value);
    showRate(); fromVnd();
  });
  document.querySelectorAll("#quick-vnd button").forEach(function (b) {
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
    .catch(function () { /* keep fallback */ });

  /* ---------- Phrase pronunciation (if the device has a Vietnamese voice) ---------- */
  if ("speechSynthesis" in window) {
    var addButtons = function () {
      var voices = speechSynthesis.getVoices();
      var vi = voices.filter(function (v) { return /^vi/i.test(v.lang); })[0];
      if (!vi || document.querySelector(".say-btn")) return;
      document.querySelector(".speak-hint").hidden = false;
      document.querySelectorAll(".phrases li").forEach(function (li) {
        var text = li.querySelector("b").textContent;
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "say-btn";
        btn.setAttribute("aria-label", "Hear: " + text);
        btn.textContent = "🔊";
        btn.addEventListener("click", function () {
          speechSynthesis.cancel();
          var u = new SpeechSynthesisUtterance(text);
          u.voice = vi; u.lang = vi.lang; u.rate = 0.85;
          speechSynthesis.speak(u);
        });
        li.appendChild(btn);
      });
    };
    addButtons();
    speechSynthesis.addEventListener && speechSynthesis.addEventListener("voiceschanged", addButtons);
  }

  /* ---------- Active tab highlighting ---------- */
  var tabs = {};
  document.querySelectorAll(".tabbar a").forEach(function (a) { tabs[a.dataset.tab] = a; });
  function setActive(id) {
    Object.keys(tabs).forEach(function (k) { tabs[k].classList.toggle("active", k === id); });
  }
  var sections = Object.keys(tabs).map(function (id) { return document.getElementById(id); });
  var pending = false;
  function updateActive() {
    pending = false;
    // the last section whose top has passed 40% of the viewport is "current"
    var line = window.innerHeight * 0.4, current = null;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s.id; });
    setActive(current);
  }
  window.addEventListener("scroll", function () {
    if (!pending) { pending = true; requestAnimationFrame(updateActive); }
  }, { passive: true });
  updateActive();
})();
