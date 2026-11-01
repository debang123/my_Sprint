
/* =================================
   DARK / LIGHT THEME
================================= */

const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

// Read saved theme
let savedTheme = "light";

try {
    savedTheme = localStorage.getItem("prodesk-theme") || "light";
} catch (error) {
    console.warn("Could not read saved theme.");
}

// Apply theme
function applyTheme(theme, save = false) {

    const isDark = theme === "dark";

    html.classList.toggle("dark", isDark);

    if (themeToggle) {

        themeToggle.textContent = isDark ? "☀" : "☾";

        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Switch to light mode" : "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "aria-pressed",
            String(isDark)
        );
    }

    if (save) {
        try {
            localStorage.setItem("prodesk-theme", theme);
        } catch (error) {
            console.warn("Could not save theme.");
        }
    }
}

// Initial theme
applyTheme(savedTheme);

// Toggle theme
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const isDark = html.classList.contains("dark");

        applyTheme(isDark ? "light" : "dark", true);

    });

}


/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    function closeMenu() {

        mobileNav.classList.add("hidden");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";
    }

    menuToggle.addEventListener("click", function () {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {

            mobileNav.classList.remove("hidden");

            menuToggle.setAttribute("aria-expanded", "true");

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

            menuToggle.textContent = "×";
        }

    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {

        if (window.innerWidth >= 768) {
            closeMenu();
        }

    });

}
