let navIcon = document.getElementById("navIcon");
let navbarMenu = document.getElementById("navmenu");
const nav_items = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const body = document.querySelector("body");

const updateScroll = (data) => {
  body.style.overflow = data;
};

window.addEventListener("resize", () => {
  let width = document.documentElement.clientWidth;
  if (width > 992) {
    if (navIcon.classList.contains("change")) {
      navIcon.classList.remove("change");
      navbarMenu.style.display = "none";
      updateScroll("visible");
    }
    navbarMenu.style.display = "flex";
  }
  if (width < 992 && !navIcon.classList.contains("change")) {
    navbarMenu.style.display = "none";
    updateScroll("visible");
  }
});

navIcon.addEventListener("click", () => {
  if (navIcon.className === "navbar__menu-icon") {
    navIcon.classList.add("change");
    navbarMenu.style.display = "flex";
    updateScroll("hidden");
  } else {
    navIcon.classList.remove("change");
    navbarMenu.style.display = "none";
    updateScroll("visible");
  }
});

// active nav link on scroll
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 200;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      let flag = false;
      nav_items.forEach((item) => {
        if (item.getAttribute("data-name") === id) {
          item.classList.add("navmenu__active");
          flag = true;
        } else {
          item.classList.remove("navmenu__active");
        }
      });
      // if no link is active except home active home
      !flag &&
        id !== "register" &&
        nav_items[0].classList.add("navmenu__active");
    }
  });
});

// active nav link on click
function activeLink() {
  nav_items.forEach((item) => {
    item.classList.remove("navmenu__active");
    this.classList.add("navmenu__active");
  });

  // on small device
  let width = document.documentElement.clientWidth;
  if (width <= 992) {
    navIcon.classList.remove("change");
    navbarMenu.style.display = "none";
    updateScroll("visible");
  }
}

nav_items.forEach((item) => item.addEventListener("click", activeLink));

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[data-name]").forEach((anchor) => {
    if (anchor.getAttribute("href").startsWith("#")) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetSectionId = this.getAttribute("data-name");
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
          const offset = targetSection.offsetTop - 30;

          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        }
      });
    }
  });
});
