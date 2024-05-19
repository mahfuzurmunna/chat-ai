let testimonialSection = document.getElementById("testimonial");

let testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

testimonialSection.addEventListener("mouseenter", function (e) {
  testimonialSwiper.autoplay.stop();
});

testimonialSection.addEventListener("mouseleave", function (e) {
  testimonialSwiper.autoplay.start();
});
