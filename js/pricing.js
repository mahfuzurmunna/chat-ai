const pricePlans = document.querySelectorAll(".price-plan");
const pricePlansButton = document.querySelector("#price-plan-btn");
const individualPricingButton = document.querySelector(
  "#individual-pricing-btn"
);
const teamPricingButton = document.querySelector("#team-pricing-btn");
const pricingData = document.querySelectorAll(".pricing-data");

pricePlansButton.addEventListener("click", (e) => {
  const value = e.target.getAttribute("data-name");
  togglePricePlanButton(pricePlansButton, value, "group-btn__active-item");
  togglePricePlan(pricePlans, value, "price-plan__active");
});

individualPricingButton.addEventListener("click", (e) => {
  const value = e.target.getAttribute("data-name");
  console.log(e.target);
  togglePricePlanButton(
    individualPricingButton,
    value,
    "group-btn__active-item"
  );
  togglePricePlan(pricingData, value, "pricing-data__active");
});

teamPricingButton.addEventListener("click", (e) => {
  const value = e.target.getAttribute("data-name");
  console.log(e.target);
  togglePricePlanButton(teamPricingButton, value, "group-btn__active-item");
  togglePricePlan(pricingData, value, "pricing-data__active");
});

const togglePricePlanButton = (section, value, className) => {
  for (let i = 0; i < section.childElementCount; i++) {
    section.children[i].getAttribute("data-name") === value
      ? section.children[i].classList.add(className)
      : section.children[i].classList.remove(className);
  }
};

const togglePricePlan = (section, value, className) => {
  section.forEach((plan) => {
    plan.getAttribute("data-name") === value
      ? plan.classList.add(className)
      : plan.classList.remove(className);
  });
};
