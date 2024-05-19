const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    accordionItems.forEach((item2, index2) => {
      if (index2 !== index && item2.classList.contains("active")) {
        updateStyle(item2, getDOMData(item2));
      }
    });
    updateStyle(item, getDOMData(item));
  });
});

const getDOMData = (item) => {
  const isActive = item.classList.contains("active");
  return isActive;
};

const updateStyle = (item, isActive) => {
  // Toggle active state
  item.classList.toggle("active", !isActive);
};
