// Language toggle functionality
// Supports switching between English and Chinese

(function () {
  "use strict";

  // Language data is injected by Jekyll into a global variable
  // See the script tag in head.liquid that sets window.__langData__

  function getCurrentLang() {
    return localStorage.getItem("lang") || "en";
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    applyTranslations(lang);
    updateToggleButton(lang);
  }

  function applyTranslations(lang) {
    var data = window.__langData__;
    if (!data || !data[lang]) return;

    var translations = data[lang];

    // Apply translations to all elements with data-i18n attribute
    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute("data-i18n");
      var value = resolveKey(translations, key);
      if (value !== undefined && value !== null) {
        // Use innerHTML to support links in translations
        el.innerHTML = value.trim();
      }
    }
  }

  // Resolve a dotted key like "about.bio" from an object
  function resolveKey(obj, key) {
    var parts = key.split(".");
    var current = obj;
    for (var i = 0; i < parts.length; i++) {
      if (current === undefined || current === null) return undefined;
      current = current[parts[i]];
    }
    return current;
  }

  function updateToggleButton(lang) {
    var btn = document.getElementById("lang-toggle");
    if (!btn) return;

    var enIcon = document.getElementById("lang-toggle-en");
    var zhIcon = document.getElementById("lang-toggle-zh");

    if (enIcon && zhIcon) {
      if (lang === "zh") {
        enIcon.style.display = "none";
        zhIcon.style.display = "inline";
      } else {
        enIcon.style.display = "inline";
        zhIcon.style.display = "none";
      }
    }
  }

  function toggleLang() {
    var current = getCurrentLang();
    var next = current === "en" ? "zh" : "en";
    setLang(next);
  }

  // Initialize on page load
  function initLang() {
    var lang = getCurrentLang();
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

    document.addEventListener("DOMContentLoaded", function () {
      applyTranslations(lang);
      updateToggleButton(lang);

      var btn = document.getElementById("lang-toggle");
      if (btn) {
        btn.addEventListener("click", function () {
          toggleLang();
        });
      }
    });
  }

  // Export for use
  window.initLang = initLang;
  window.toggleLang = toggleLang;
})();
