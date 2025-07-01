
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const toggleIcon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        toggleIcon.classList.replace("bx-menu", "bx-x");
    } else {
        toggleIcon.classList.replace("bx-x", "bx-menu");
    }
});






