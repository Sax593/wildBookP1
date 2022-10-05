const slidesData = document.querySelectorAll(".slideData");
const nextBtnData = document.querySelector(".nextBtnData");
const prevBtnData = document.querySelector(".prevBtnData");
slidesData.forEach(function (slideData, index) {
  slideData.style.left = `${index * 100}%`;
});
let counterData = 0;
nextBtnData.addEventListener("click", function () {
  counterData++;
  carouselData();
});

prevBtnData.addEventListener("click", function () {
  counterData--;
  carouselData();
});

function carouselData() {
  if (counterData < slidesData.length - 1) {
    nextBtnData.style.display = "block";
  } else {
    nextBtnData.style.display = "none";
  }
  if (counterData > 0) {
    prevBtnData.style.display = "block";
  } else {
    prevBtnData.style.display = "none";
  }
  slidesData.forEach(function (slideData) {
    slideData.style.transform = `translateX(-${counterData * 100}%)`;
  });
}

prevBtnData.style.display = "none";
