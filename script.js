(function () {
  "use strict";

  var menuButton = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");
  var year = document.getElementById("current-year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  var themeToggle = document.querySelector(".theme-toggle");

  function getEffectiveTheme() {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    var hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    var metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#11131b" : "#f6f7fb");
    }
    if (themeToggle) {
      var isDark = theme === "dark";
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      themeToggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.dataset.theme || getEffectiveTheme();
      var nextTheme = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    });
  }

  applyTheme(document.documentElement.dataset.theme || getEffectiveTheme());

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  }
})();
