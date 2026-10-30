

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// Close menu after clicking a navigation link
document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/* =================================
   PHASE 2 - DARK/LIGHT MODE
================================= */

// Create theme button
const themeToggle = document.createElement("button");

themeToggle.className = "theme-toggle";

themeToggle.type = "button";

themeToggle.textContent = "☾";

themeToggle.setAttribute(
    "aria-label",
    "Switch to dark mode"
);


// Insert button between logo and hamburger button
document.querySelector(".navbar").insertBefore(
    themeToggle,
    menuToggle
);


// Theme button click event
themeToggle.addEventListener("click", function () {

    // Add or remove dark-mode class from body
    const darkModeEnabled = document.body.classList.toggle("dark-mode");

    // Change icon
    themeToggle.textContent = darkModeEnabled ? "☀" : "☾";

    // Accessibility label
    themeToggle.setAttribute(
        "aria-label",
        darkModeEnabled ? "Switch to light mode" : "Switch to dark mode"
    );

});


/* =================================
   RESET MENU ON DESKTOP RESIZE
================================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 700) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});
