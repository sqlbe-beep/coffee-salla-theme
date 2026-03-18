/**
 * Twilight Coffee Theme — app.js
 * Minimal JavaScript: header scroll state, mobile nav.
 * No dependencies. Vanilla JS only.
 */

(function () {
  'use strict';

  /* ── Header scroll class ─────────────────────────────────── */
  var header = document.getElementById('site-header');

  if (header) {
    var onScroll = function () {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }


  /* ── Mobile nav ──────────────────────────────────────────── */
  var toggle  = document.getElementById('menu-toggle');
  var close   = document.getElementById('menu-close');
  var nav     = document.getElementById('mobile-nav');
  var overlay = document.getElementById('mobile-overlay');

  function openNav() {
    if (!nav || !overlay) return;
    nav.classList.add('is-open');
    nav.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    if (!nav || !overlay) return;
    nav.classList.remove('is-open');
    nav.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle)  toggle.addEventListener('click', openNav);
  if (close)   close.addEventListener('click', closeNav);
  if (overlay) overlay.addEventListener('click', closeNav);

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });


  /* ── Scroll-reveal (lightweight, no library) ─────────────── */
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll(
      '.product-card, .story__body, .hero__text, .section-head'
    );

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity    = '1';
            entry.target.style.transform  = 'translateY(0)';
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)';
      revealObserver.observe(el);
    });
  }


  /* ── Product gallery thumbnails ──────────────────────────── */
  var thumbs   = document.querySelectorAll('.product-gallery__thumb');
  var mainImg  = document.getElementById('gallery-main-img');

  if (thumbs.length && mainImg) {
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        mainImg.src = this.dataset.src;
        thumbs.forEach(function (t) { t.classList.remove('is-active'); });
        this.classList.add('is-active');
      });
    });
  }

})();
