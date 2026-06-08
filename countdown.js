(function () {
  var TARGET = new Date("2026-06-11T19:00:00Z").getTime();

  var BAR_HTML =
    '<div class="wc-countdown-inner">' +
    '<span class="wc-countdown-label">World Cup 2026</span>' +
    '<div class="wc-countdown-timer">' +
    '<div class="wc-countdown-unit"><span class="wc-countdown-value" id="wc-days">--</span><span class="wc-countdown-name">Days</span></div>' +
    '<span class="wc-countdown-sep">:</span>' +
    '<div class="wc-countdown-unit"><span class="wc-countdown-value" id="wc-hours">--</span><span class="wc-countdown-name">Hrs</span></div>' +
    '<span class="wc-countdown-sep">:</span>' +
    '<div class="wc-countdown-unit"><span class="wc-countdown-value" id="wc-mins">--</span><span class="wc-countdown-name">Min</span></div>' +
    '<span class="wc-countdown-sep">:</span>' +
    '<div class="wc-countdown-unit"><span class="wc-countdown-value" id="wc-secs">--</span><span class="wc-countdown-name">Sec</span></div>' +
    "</div></div>";

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function ensureBar() {
    document.body.classList.add("has-countdown");

    var bar = document.getElementById("wc-countdown-bar");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "wc-countdown-bar";
      bar.innerHTML = BAR_HTML;
      document.body.insertBefore(bar, document.body.firstChild);
    }

    bar.style.cssText =
      "position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:99999!important;";

    var nav = document.querySelector("nav.fixed");
    if (nav) {
      nav.style.top = "2.75rem";
    }
  }

  function tick() {
    ensureBar();

    var daysEl = document.getElementById("wc-days");
    var hoursEl = document.getElementById("wc-hours");
    var minsEl = document.getElementById("wc-mins");
    var secsEl = document.getElementById("wc-secs");
    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    var diff = Math.max(0, TARGET - Date.now());
    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins = Math.floor((diff % 3600000) / 60000);
    var secs = Math.floor((diff % 60000) / 1000);

    daysEl.textContent = String(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent = pad(mins);
    secsEl.textContent = pad(secs);

    if (diff === 0) {
      var label = document.querySelector("#wc-countdown-bar .wc-countdown-label");
      if (label) label.textContent = "World Cup 2026 is here!";
    }
  }

  function init() {
    ensureBar();
    tick();
    setInterval(tick, 1000);

    var observer = new MutationObserver(function () {
      ensureBar();
    });
    observer.observe(document.body, { childList: true, subtree: false });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
