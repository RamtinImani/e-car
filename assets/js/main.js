/*=============== SHOW MENU ===============*/
const toggleBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("nav-close");
// show menu
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// hidden menu
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});
/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});
/* Link active featured */
const linkFeatured = document.querySelectorAll(".featured__item");

function activeFeatured() {
  linkFeatured.forEach((link) => link.classList.remove("active-featured"));
  this.classList.add("active-featured");
}
linkFeatured.forEach((link) => link.addEventListener("click", activeFeatured));
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__title, .popular__container, .featured__filters`);
sr.reveal(`.home__subtitle`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img, .footer__copy`, { delay: 800 });
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home__button`, { delay: 1000, origin: "bottom" });
sr.reveal(`.about__group, .offer__data`, { origin: "left" });
sr.reveal(`.about__data, .offer__img`, { origin: "right" });
sr.reveal(`.features__img `, { origin: "bottom" });
sr.reveal(`.features__map`, { delay: 600, origin: "top" });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card, .logos__content, .footer__content`, {
  interval: 100,
});
