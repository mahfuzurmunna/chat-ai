//JavaScript code to start the rotation animation on page load
document.addEventListener("DOMContentLoaded", function () {
  const images = document.getElementsByClassName("rotatingImage");

  const imagesReverse = document.getElementsByClassName("rotatingImageReverse");

  const func = (image, direction = "forward") => {
    let rotationAngle = direction === "forward" ? 0 : 360;

    function rotateImage() {
      rotationAngle =
        direction === "forward" ? rotationAngle + 1 : rotationAngle - 1; // Adjust the rotation speed as needed
      image.style.transform = `rotate(${rotationAngle}deg)`;

      if (rotationAngle >= 360) {
        rotationAngle = 0;
      } else if (rotationAngle <= 0) {
        rotationAngle = 360;
      }

      requestAnimationFrame(rotateImage);
    }

    rotateImage();
  };

  for (let i = 0; i < images.length; i++) {
    func(images[i]);
  }

  for (let i = 0; i < imagesReverse.length; i++) {
    func(imagesReverse[i], "reverse");
  }
});
