// XTS Supply LLC — Site Scripts

(function () {
  'use strict';

  // --- Navbar scroll effect ---
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile menu toggle ---
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });

  // --- Contact form (non-functional, just prevents submit and shows feedback) ---
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(function () {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.opacity = '1';
      form.reset();
    }, 3000);
  });

  // --- Smooth reveal on scroll (simple IntersectionObserver) ---
  var reveals = document.querySelectorAll('.card, .why__item, .stat, .contact__detail');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
})();
