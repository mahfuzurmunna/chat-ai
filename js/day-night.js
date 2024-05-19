let heroRobot = document.getElementById("hero-robot");
let askAnythingIcons = document.querySelectorAll(".ask-anything-icon");
let logoImages = document.querySelectorAll(".logo-image");
let brandsLogo = document.querySelectorAll(".brands__brand-logo");
let featureIcons = document.querySelectorAll(".feature-card__icon");
let boostUpIcons = document.querySelectorAll(".boost-up__icon");
let backArrowImg = document.getElementById("back-arrow-button-img");
let nextArrowImg = document.getElementById("next-arrow-button-img");

// Function to update images
const updateImages = () => {
  logoImages.forEach((logo) => {
    if (logo.getAttribute("data-theme") == "light") {
      logo.setAttribute("src", `./img/logo-dark.svg`);
      logo.setAttribute("data-theme", "dark");
    } else {
      logo.setAttribute("src", `./img/logo-light.svg`);
      logo.setAttribute("data-theme", "light");
    }
  });
  if (
    heroRobot &&
    askAnythingIcons &&
    brandsLogo &&
    featureIcons &&
    boostUpIcons
  ) {
    if (heroRobot.getAttribute("data-theme") == "light") {
      heroRobot.setAttribute("src", `./img/hero-robot-dark.png`);
      heroRobot.setAttribute("data-theme", "dark");
    } else {
      heroRobot.setAttribute("src", `./img/hero-robot-light.png`);
      heroRobot.setAttribute("data-theme", "light");
    }

    askAnythingIcons.forEach((icon) => {
      if (icon.getAttribute("data-theme") == "light") {
        icon.setAttribute("src", `./img/ask-anything-dark.svg`);
        icon.setAttribute("data-theme", "dark");
      } else {
        icon.setAttribute("src", `./img/ask-anything-light.svg`);
        icon.setAttribute("data-theme", "light");
      }
    });

    brandsLogo.forEach((logo) => {
      if (logo.getAttribute("data-theme") == "light") {
        const path = logo.getAttribute("src");
        let newPath = path.replace("-light", "-dark");
        logo.setAttribute("src", newPath);
        logo.setAttribute("data-theme", "dark");
      } else {
        const path = logo.getAttribute("src");
        let newPath = path.replace("-dark", "-light");
        logo.setAttribute("src", newPath);
        logo.setAttribute("data-theme", "light");
      }
    });

    featureIcons.forEach((icon) => {
      if (icon.getAttribute("data-theme") == "light") {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-light", "-dark");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "dark");
      } else {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-dark", "-light");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "light");
      }
    });

    boostUpIcons.forEach((icon) => {
      if (icon.getAttribute("data-theme") == "light") {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-light", "-dark");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "dark");
      } else {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-dark", "-light");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "light");
      }
    });

    if (backArrowImg.getAttribute("data-theme") === "light") {
      backArrowImg.setAttribute("src", `./img/back-arrow-btn-dark.svg`);
      backArrowImg.setAttribute("data-theme", "dark");
    } else {
      backArrowImg.setAttribute("src", `./img/back-arrow-btn-light.svg`);
      backArrowImg.setAttribute("data-theme", "light");
    }

    if (nextArrowImg.getAttribute("data-theme") === "light") {
      nextArrowImg.setAttribute("src", `./img/next-arrow-btn-dark.svg`);
      nextArrowImg.setAttribute("data-theme", "dark");
    } else {
      nextArrowImg.setAttribute("src", `./img/next-arrow-btn-light.svg`);
      nextArrowImg.setAttribute("data-theme", "light");
    }
  }
};

//Function to update Images based on local storage
const updateImageOnLoad = (isNightMode) => {
  logoImages.forEach((logo) => {
    if (!isNightMode) {
      logo.setAttribute("src", `./img/logo-dark.svg`);
      logo.setAttribute("data-theme", "dark");
    } else {
      logo.setAttribute("src", `./img/logo-light.svg`);
      logo.setAttribute("data-theme", "light");
    }
  });

  if (
    heroRobot &&
    askAnythingIcons &&
    brandsLogo &&
    featureIcons &&
    boostUpIcons
  ) {
    if (!isNightMode) {
      heroRobot.setAttribute("src", `./img/hero-robot-dark.png`);
      heroRobot.setAttribute("data-theme", "dark");
    } else {
      heroRobot.setAttribute("src", `./img/hero-robot-light.png`);
      heroRobot.setAttribute("data-theme", "light");
    }

    askAnythingIcons.forEach((icon) => {
      if (!isNightMode) {
        icon.setAttribute("src", `./img/ask-anything-dark.svg`);
        icon.setAttribute("data-theme", "dark");
      } else {
        icon.setAttribute("src", `./img/ask-anything-light.svg`);
        icon.setAttribute("data-theme", "light");
      }
    });

    brandsLogo.forEach((logo) => {
      if (!isNightMode) {
        const path = logo.getAttribute("src");
        let newPath = path.replace("-light", "-dark");
        logo.setAttribute("src", newPath);
        logo.setAttribute("data-theme", "dark");
      } else {
        const path = logo.getAttribute("src");
        let newPath = path.replace("-dark", "-light");
        logo.setAttribute("src", newPath);
        logo.setAttribute("data-theme", "light");
      }
    });

    featureIcons.forEach((icon) => {
      if (!isNightMode) {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-light", "-dark");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "dark");
      } else {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-dark", "-light");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "light");
      }
    });

    boostUpIcons.forEach((icon) => {
      if (!isNightMode) {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-light", "-dark");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "dark");
      } else {
        const path = icon.getAttribute("src");
        let newPath = path.replace("-dark", "-light");
        icon.setAttribute("src", newPath);
        icon.setAttribute("data-theme", "light");
      }
    });

    if (!isNightMode) {
      backArrowImg.setAttribute("src", `./img/back-arrow-btn-dark.svg`);
      backArrowImg.setAttribute("data-theme", "dark");
      nextArrowImg.setAttribute("src", `./img/next-arrow-btn-dark.svg`);
      nextArrowImg.setAttribute("data-theme", "dark");
    } else {
      backArrowImg.setAttribute("src", `./img/back-arrow-btn-light.svg`);
      backArrowImg.setAttribute("data-theme", "light");
      nextArrowImg.setAttribute("src", `./img/next-arrow-btn-light.svg`);
      nextArrowImg.setAttribute("data-theme", "light");
    }
  }
};

// Function to set the night mode state in local storage
function setNightModeState(isNightMode) {
  localStorage.setItem("nightMode", JSON.stringify(isNightMode));
}

// Function to get the night mode state from local storage
function getNightModeState() {
  const storedValue = localStorage.getItem("nightMode");
  return storedValue ? JSON.parse(storedValue) : false;
}

// Function to handle the toggle change
function handleToggleChange() {
  const isChecked = this.checked;

  updateImageOnLoad(isChecked);
  // Toggle night-mode class on body
  document.body.classList.toggle("night-mode", isChecked);

  // Toggle SVG visibility with CSS
  setNightModeState(isChecked);
}

// Initialize the checkbox state based on local storage
document.getElementById("toggle").checked = getNightModeState();

document.getElementById("toggle").addEventListener("change", function () {
  // Toggle night-mode class on body
  document.body.classList.toggle("night-mode", this.checked);
  updateImages();

  // Toggle night-mode class on other elements or custom classes
  document.querySelectorAll(".night-mode-target").forEach(function (element) {
    element.classList.toggle("night-mode", this.checked);
  });
});

// Add event listener to the toggle
document
  .getElementById("toggle")
  .addEventListener("change", handleToggleChange);

// Initial setup based on local storage
handleToggleChange.call(document.getElementById("toggle"));
