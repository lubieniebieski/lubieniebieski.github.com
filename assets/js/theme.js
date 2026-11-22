// Color theme toggle: auto (follow OS) -> light -> dark -> auto.
// The initial data-theme attribute is set by an inline script in <head>
// so the page never flashes the wrong palette. The button itself is
// injected here, so the theme's menu partials stay untouched.
(function () {
  var KEY = "theme";
  var ORDER = ["auto", "light", "dark"];
  var root = document.documentElement;

  // Only the icon matching html[data-theme] is shown (see terminal.css).
  var ICONS =
    // auto: half-filled circle
    '<svg class="theme-toggle__icon theme-toggle__icon--auto" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">' +
    '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/>' +
    '<path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>' +
    // light: sun
    '<svg class="theme-toggle__icon theme-toggle__icon--light" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
    '<circle cx="12" cy="12" r="4.5"/>' +
    '<path d="M12 1.5v2.5M12 20v2.5M1.5 12H4M20 12h2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></svg>' +
    // dark: moon
    '<svg class="theme-toggle__icon theme-toggle__icon--dark" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">' +
    '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" fill="currentColor"/></svg>';

  var buttons = [];

  function current() {
    return root.getAttribute("data-theme") || "auto";
  }

  function render(mode) {
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-label", "Color theme: " + mode + " (click to change)");
      btn.setAttribute("title", "Theme: " + mode);
    });
  }

  function apply(mode) {
    if (mode === "auto") {
      root.removeAttribute("data-theme");
      try { localStorage.removeItem(KEY); } catch (e) {}
    } else {
      root.setAttribute("data-theme", mode);
      try { localStorage.setItem(KEY, mode); } catch (e) {}
    }
    render(mode);
  }

  function addToggle(list) {
    if (!list) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.innerHTML = ICONS;
    btn.addEventListener("click", function (e) {
      // keep the mobile dropdown open so the new icon is visible
      e.stopPropagation();
      apply(ORDER[(ORDER.indexOf(current()) + 1) % ORDER.length]);
    });
    var li = document.createElement("li");
    li.appendChild(btn);
    list.appendChild(li);
    buttons.push(btn);
  }

  addToggle(document.querySelector(".menu--desktop"));
  addToggle(document.querySelector(".menu--mobile .menu__dropdown"));
  render(current());
})();
