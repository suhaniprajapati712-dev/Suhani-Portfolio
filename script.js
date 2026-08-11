// ================================
// Typing Animation
// ================================

const typed = new Typed(".multiple-text", {
  strings: [
    "MERN Stack Developer",
    "Responsive Web Designer",
    "React Developer",
  ],

  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1200,
  loop: true,
});

// ================================
// Dark / Light Mode
// ================================

const themeIcon = document.getElementById("theme-icon");

themeIcon.onclick = () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.classList.remove("bx-moon");
    themeIcon.classList.add("bx-sun");
  } else {
    themeIcon.classList.remove("bx-sun");
    themeIcon.classList.add("bx-moon");
  }
};

// ================================
// Active Navbar
// ================================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

  let top = window.scrollY;

  sections.forEach(sec => {

    let offset = sec.offsetTop - 150;

    let height = sec.offsetHeight;

    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {

      navLinks.forEach(link => {

        link.classList.remove("active");

        document
          .querySelector(".navbar a[href*=" + id + "]")
          .classList.add("active");

      });

    }

  });

};

// ================================
// Sticky Header
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  header.classList.toggle("sticky", window.scrollY > 100);

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});

const skills = document.querySelector(".skills");

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        document.querySelector(".html").style.width = "95%";
        document.querySelector(".css").style.width = "90%";
        document.querySelector(".js").style.width = "90%";
        document.querySelector(".react").style.width = "85%";
        document.querySelector(".node").style.width = "80%";
        document.querySelector(".express").style.width = "80%";
        document.querySelector(".mongo").style.width = "85%";
          document.querySelector(".tailwind").style.width = "70%";
          document.querySelector(".bootstrap").style.width = "80%";
    }

}, { threshold: 0.3 });

observer.observe(skills);

/*=========================================
        PROJECT SECTION ANIMATION
=========================================*/

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            projectObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.2

});

projectCards.forEach((card) => {

    projectObserver.observe(card);

});


/*=========================================
        IMAGE PARALLAX EFFECT
=========================================*/

projectCards.forEach((card) => {

    const image = card.querySelector(".project-image img");

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const moveX = (x - rect.width / 2) / 30;

        const moveY = (y - rect.height / 2) / 30;

        image.style.transform =
            `scale(1.08) translate(${moveX}px, ${moveY}px)`;

    });

    card.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const projectButtons = document.querySelectorAll(".project-buttons .btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const x = e.offsetX;

        const y = e.offsetY;

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});