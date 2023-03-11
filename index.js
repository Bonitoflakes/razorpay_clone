const slides = document.querySelectorAll(".main-frame");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const a1Dots = document.querySelector(".a1-dots");

let curSlide = 0;
const slideLength = slides.length - 1;

// if (curSlide > slideLength) curSlide = 0;
// if (curSlide < 0) curSlide = slideLength;

for (const [idx, slide] of slides.entries()) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.dataset.dot = `${idx}`;
  dot.addEventListener("click", (e) => {
    console.log(`Current Slide Index: ${e.target.dataset.dot}`);
    let newSlide = parseInt(e.target.dataset.dot);
    changeSlideDot(newSlide, curSlide);
  });
  a1Dots.appendChild(dot);

  if (idx === curSlide) {
    slide.className = "main-frame";
    dot.classList.add("dot-active");
  } else {
    slide.className = "main-frame--zero";
  }

  slide.style.transform = `translateX(${idx * 100}%)`;
  showArrow();
}
let dot = document.querySelectorAll(".dot");
dot = [...dot];

const changeSlideDot = (newSlide, currSlide) => {
  if (newSlide === currSlide) return;

  if (newSlide > currSlide) {
    for (let index = 0; index < newSlide - currSlide; index++) {
      runNext();
    }
  } else {
    for (let index = 0; index < currSlide - newSlide; index++) {
      runPrev();
    }
  }
};

const runPrev = () => {
  // let dot = document.querySelectorAll(".dot");
  // dot = [...dot];
  curSlide--;
  // if (curSlide > slideLength) curSlide = 0;
  // if (curSlide < 0) curSlide = slideLength;

  console.log(`Current Slide Index: ${curSlide}`);

  showArrow();

  //   move slide by -100%
  slides.forEach((slide, idx) => {
    if (idx === curSlide) {
      slide.className = "main-frame";
      dot[idx].classList.add("dot-active");
    } else {
      slide.className = "main-frame--zero";
      dot[idx].classList.remove("dot-active");
    }

    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
};

const runNext = () => {
  curSlide++;
  // let dot = document.querySelectorAll(".dot");
  // dot = [...dot];
  // if (curSlide > slideLength) curSlide = 0;
  // if (curSlide < 0) curSlide = slideLength;

  console.log(`Current Slide Index: ${curSlide}`);

  showArrow();

  //   move slide by -100%
  slides.forEach((slide, idx) => {
    if (idx === curSlide) {
      slide.className = "main-frame";
      dot[idx].classList.add("dot-active");
    } else {
      slide.className = "main-frame--zero";
      dot[idx].classList.remove("dot-active");
    }

    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
};

function showArrow() {
  if (curSlide === slideLength) nextBtn.style.visibility = "hidden";
  if (curSlide === 0) prevBtn.style.visibility = "hidden";
  if (curSlide < slideLength && curSlide > 0) {
    nextBtn.style.visibility = "visible";
    prevBtn.style.visibility = "visible";
  }
}

prevBtn.addEventListener("click", runPrev);

nextBtn.addEventListener("click", runNext);
