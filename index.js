const slides = document.querySelectorAll(".main-frame");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let index = 0;

function hideStuff() {
  index > 3 ? (index = 0) : null;
  index < 0 ? (index = 3) : null;
  for (const [idx, slide] of slides.entries()) {
    console.log(idx);
    console.log("Current Index:", index);

    //   console.log(slide);
    idx == index ? (slide.className = "main-frame") : (slide.className = "main-frame-hidden");
  }
}
hideStuff();

const runPrev = () => {
  index--;
  hideStuff();
};

const runNext = () => {
  index++;
  hideStuff();
};

prevBtn.addEventListener("click", runPrev);

nextBtn.addEventListener("click", runNext);
