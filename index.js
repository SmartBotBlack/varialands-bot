(() => {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  setInterval(() => {
    const mineBtn = document.querySelector(".timer-button.img-button");

    if (mineBtn.style.display !== "none") {
      mineBtn.click();
    }
  }, randomInt(30, 60) * 1000);
})();
