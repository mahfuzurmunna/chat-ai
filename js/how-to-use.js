// JS for how to use section
const navigation_buttons = document.querySelectorAll(
  ".how-to-use__navigation-button"
);
const steps = document.querySelectorAll(".how-to-use__step-content");
const prev_btn = document.getElementById("htu-prev-btn");
const next_btn = document.getElementById("htu-next-btn");

const updateHowToUseContent = (targetDivId) => {
  steps.forEach((step) => {
    if (step.id === targetDivId) {
      step.classList.add("how-to-use__step-content__active");
    } else {
      step.classList.remove("how-to-use__step-content__active");
    }
  });
};

navigation_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("how-to-use__navigation-button__active")) {
      const targetDivId = button.getAttribute("data-target");

      navigation_buttons.forEach((button2, index2) => {
        if (
          index2 !== index &&
          button2.classList.contains("how-to-use__navigation-button__active")
        ) {
          button2.classList.remove("how-to-use__navigation-button__active");
        }
      });
      button.classList.add("how-to-use__navigation-button__active");

      updateHowToUseContent(targetDivId);
    }
    updateSmallDeviceButtonState();
  });
});

next_btn.addEventListener("click", () => {
  for (let i = 0; i < navigation_buttons.length - 1; i++) {
    let button = navigation_buttons[i];
    if (button.classList.contains("how-to-use__navigation-button__active")) {
      const targetDivId = button.nextElementSibling.getAttribute("data-target");
      button.classList.remove("how-to-use__navigation-button__active");
      button.nextElementSibling.classList.add(
        "how-to-use__navigation-button__active"
      );
      updateHowToUseContent(targetDivId);
      updateSmallDeviceButtonState();
      break;
    }
  }
});

prev_btn.addEventListener("click", () => {
  for (let i = navigation_buttons.length - 1; i >= 1; i--) {
    let button = navigation_buttons[i];
    if (button.classList.contains("how-to-use__navigation-button__active")) {
      const targetDivId =
        button.previousElementSibling.getAttribute("data-target");
      button.classList.remove("how-to-use__navigation-button__active");
      button.previousElementSibling.classList.add(
        "how-to-use__navigation-button__active"
      );

      updateHowToUseContent(targetDivId);
      updateSmallDeviceButtonState();
      break;
    }
  }
});

const updateSmallDeviceButtonState = () => {
  for (let i = 0; i < navigation_buttons.length; i++) {
    let isActive = navigation_buttons[i].classList.contains(
      "how-to-use__navigation-button__active"
    );
    if (isActive) {
      i > 0 ? (prev_btn.style.opacity = 1) : (prev_btn.style.opacity = 0.4);
      i < navigation_buttons.length - 1
        ? (next_btn.style.opacity = 1)
        : (next_btn.style.opacity = 0.4);
      break;
    }
  }
};

updateSmallDeviceButtonState();
