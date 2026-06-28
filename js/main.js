const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {

    nav.classList.toggle("nav-open");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
hamburger.setAttribute("aria-expanded", !expanded);
    );
});
