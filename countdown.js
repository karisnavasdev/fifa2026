(function () {
  var TARGET = new Date("2026-06-11T19:00:00Z").getTime();

  var bar = document.createElement("div");
  bar.id = "wc-countdown-bar";
  bar.innerHTML =
    '<div class="wc-countdown-inner">' +
    '<span class="wc-countdown-label">World Cup 2026</span>' +
    '<div class="wc-countdown-timer" id="wc-countdown-timer">' +
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

  function tick() {
    var now = Date.now();
    var diff = Math.max(0, TARGET - now);
    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins = Math.floor((diff % 3600000) / 60000);
    var secs = Math.floor((diff % 60000) / 1000);

    document.getElementById("wc-days").textContent = String(days);
    document.getElementById("wc-hours").textContent = pad(hours);
    document.getElementById("wc-mins").textContent = pad(mins);
    document.getElementById("wc-secs").textContent = pad(secs);

    if (diff === 0) {
      document.querySelector(".wc-countdown-label").textContent =
        "World Cup 2026 is here!";
    }
  }

  function init() {
    document.body.classList.add("has-countdown");
    document.body.insertBefore(bar, document.body.firstChild);
    tick();
    setInterval(tick, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
