(function () {
  var header = document.getElementById("site-header");
  var toggle = document.getElementById("menu-toggle");
  var close = document.getElementById("menu-close");
  var nav = document.getElementById("mobile-nav");
  var overlay = document.getElementById("mobile-overlay");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  function openNav() {
    if (!nav || !overlay) return;
    nav.classList.add("is-open");
    overlay.classList.add("is-open");
    nav.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    if (!nav || !overlay) return;
    nav.classList.remove("is-open");
    overlay.classList.remove("is-open");
    nav.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if (toggle) toggle.addEventListener("click", openNav);
  if (close) close.addEventListener("click", closeNav);
  if (overlay) overlay.addEventListener("click", closeNav);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });
})();
