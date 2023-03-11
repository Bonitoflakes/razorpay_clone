// const slides = document.querySelectorAll(".main-frame");
const slides = document.querySelectorAll(".main-frame");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let curSlide = 0;
const slideLength = slides.length - 1;

function hideStuff() {
  curSlide > slideLength ? (curSlide = 0) : null;
  curSlide < 0 ? (curSlide = slideLength) : null;
  for (const [idx, slide] of slides.entries()) {
    console.log(idx);
    console.log("Current curSlide:", curSlide);
    idx == curSlide ? (slide.className = "main-frame") : (slide.className = "main-frame--zero");
    slide.style.transform = `translateX(${idx * 100}%)`;
  }
}
hideStuff();

const runPrev = () => {
  curSlide--;
  //   move slide by -100%
  slides.forEach((slide, idx) => {
    curSlide > slideLength ? (curSlide = 0) : null;
  curSlide < 0 ? (curSlide = slideLength) : null;
    idx == curSlide ? (slide.className = "main-frame") : (slide.className = "main-frame--zero");
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
};

const runNext = () => {
  curSlide++;
  slides.forEach((slide, idx) => {
    curSlide > slideLength ? (curSlide = 0) : null;
    curSlide < 0 ? (curSlide = slideLength) : null;
    idx == curSlide ? (slide.className = "main-frame") : (slide.className = "main-frame--zero");
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
};

prevBtn.addEventListener("click", runPrev);

nextBtn.addEventListener("click", runNext);
