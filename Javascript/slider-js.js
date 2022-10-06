const slidesJs = document.querySelectorAll(".slideJs");
const nextBtnJs = document.querySelector(".nextBtnJs");
const prevBtnJs = document.querySelector(".prevBtnJs");
slidesJs.forEach(function (slideJs, index) {
  slideJs.style.left = `${index * 100}%`;
});
let counterJS = 0;
nextBtnJs.addEventListener("click", function () {
  counterJS++;
  carouselJS();
});

prevBtnJs.addEventListener("click", function () {
  counterJS--;
  carouselJS();
});

function carouselJS() {
  if (counterJS < slidesJs.length - 1) {
    nextBtnJs.style.display = "block";
  } else {
    nextBtnJs.style.display = "none";
  }
  if (counterJS > 0) {
    prevBtnJs.style.display = "block";
  } else {
    prevBtnJs.style.display = "none";
  }
  slidesJs.forEach(function (slideJs) {
    slideJs.style.transform = `translateX(-${counterJS * 100}%)`;
  });
}

prevBtnJs.style.display = "none";
