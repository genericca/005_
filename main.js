const nav = document.querySelector("nav");
const video = document.querySelector("video");
const pauseButton = document.querySelector(".pause-button");
const cards = document.querySelectorAll(".card");
const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const servicesLink = document.getElementById("services-link");
const us = document.getElementById("about-us");
const services = document.getElementById("services");
const servicesButton = document.querySelector(".jump-to-services");
const home = document.getElementById("home");
let height;

pauseButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        pauseButton.style.backgroundImage = "url('assets/pause.png')";
    }
    else {
        video.pause();
        pauseButton.style.backgroundImage = "url('assets/play-button.png')";
    }
});

height = parseFloat(window.getComputedStyle(home).getPropertyValue("height"));

window.addEventListener("resize", () => {
    height = parseFloat(window.getComputedStyle(home).getPropertyValue("height"));
});

document.addEventListener("scroll", () => {
    if (window.scrollY > .5 * height) {
        nav.classList.remove("clear-nav");
        nav.classList.add("blue-nav");
    }
    else {
        nav.classList.add("clear-nav");
        nav.classList.remove("blue-nav");
    }
});

cards.forEach(card => {
    const flipButton = card.querySelector(".front-face button");
    const unflipButton = card.querySelector(".back-face button");
    const frontFace = card.querySelector(".front-face");

    flipButton.addEventListener("click", () => {
        card.classList.toggle("flipped");
        card.classList.toggle("unflipped");
        frontFace.style.opacity = "0"; //firefox, lol
    });

    unflipButton.addEventListener("click", () => {
        card.classList.toggle("flipped");
        card.classList.toggle("unflipped");
        frontFace.style.opacity = "1";
    });
});

homeLink.addEventListener("click", event => {
    event.preventDefault();

    home.scrollIntoView({ behavior : "smooth" });
});

aboutLink.addEventListener("click", event => {
    event.preventDefault();

    us.scrollIntoView({ behavior : "smooth" });
});

servicesLink.addEventListener("click", event => {
    event.preventDefault();

    services.scrollIntoView({ behavior : "smooth" });
});

servicesButton.addEventListener("click", () => services.scrollIntoView({ behavior : "smooth" }));