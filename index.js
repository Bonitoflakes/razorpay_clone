const slides = document.querySelectorAll(".main-frame");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const dotsContainer = document.querySelector(".a1-dots");

let curSlide = 0;
const slideLength = slides.length - 1;

for (const [idx, slide] of slides.entries()) {
  // Dynamically generate the swiper dots based on the no. of slides.
  let dot = document.createElement("div");
  dot.classList.add("dot");

  // Add a dataset attribute to the dynamically generated divs based on their index.
  dot.dataset.dot = `${idx}`;
  // Append the newly generated dots to the parent.
  dotsContainer.appendChild(dot);

  // If the current Index is equal to the slide Index, make it active.
  if (idx === curSlide) {
    slide.className = "main-frame";
    dot.classList.add("dot-active");
  } else {
    slide.className = "main-frame--zero";
  }

  // Translate every slide based on its index and set their inital position.
  // Show the first slide and hide the rest
  slide.style.transform = `translateX(${idx * 100}%)`;
  showArrow();
}

// Attach eventListener to the dotsContainer and update the currentSlide Index ${curSlide} based on its custom dataset value. Change the slide based on this new Index. Event Delegation ✨✨✨
dotsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    const dotIndex = parseInt(event.target.dataset.dot);
    goToSlide(dotIndex, curSlide);
  }
});

// Create a global scoped variable in memory of all dots to prevent fetching them everytime.
let dot = document.querySelectorAll(".dot");
dot = [...dot];


const goToSlide = (newSlide, currSlide) => {
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
  curSlide--;
  showArrow();
  applyStylesBasedOnIndex();
};

const runNext = () => {
  curSlide++;
  showArrow();
  applyStylesBasedOnIndex();
};

function showArrow() {
  if (curSlide === slideLength) nextBtn.style.visibility = "hidden";
  if (curSlide === 0) prevBtn.style.visibility = "hidden";
  if (curSlide < slideLength && curSlide > 0) {
    nextBtn.style.visibility = "visible";
    prevBtn.style.visibility = "visible";
  }
}

function applyStylesBasedOnIndex() {


  slides.forEach((slide, idx) => {
    if (idx === curSlide) {
      slide.className = "main-frame";
      dot[idx].classList.add("dot-active");
    } else {
      slide.className = "main-frame--zero";
      dot[idx].classList.remove("dot-active");
    }

    //   move slide by -100%
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
}

prevBtn.addEventListener("click", runPrev);

nextBtn.addEventListener("click", runNext);
