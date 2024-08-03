// Dynamic JSON object for slides
const slidesData = [
    {
      src: "/asset/1.jpg",
      alt: "Image One"
    },
    {
      src: "/asset/2.jpg",
      alt: "Image Two"
    },
    {
      src: "/asset/3.jpg",
      alt: "Image Three"
    },
    {
        src: "/asset/4.jpg",
        alt: "Image Three"
      }
  ];
  
  let slider = document.querySelector("#slider"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;
  
  // Create slides dynamically
  function createSlides() {
    for (let i = 0; i < slidesData.length; i++) {
      let slide = document.createElement("div");
      slide.className = "slide";
  
      let slideContent = document.createElement("div");
      slideContent.className = "slide-content";
  
      let image = document.createElement("img");
      image.src = slidesData[i].src;
      image.alt = slidesData[i].alt;
  
      slideContent.appendChild(image);
      slide.appendChild(slideContent);
      slider.appendChild(slide);
    }
  }
  
  // Clear all slides
  function reset() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => {
      slide.style.display = "none";
    });
  }
  
  // Init slider
  function startSlide() {
    reset();
    slider.children[0].style.display = "block";
  }
  
  // Show prev
  function slideLeft() {
    reset();
    current = (current - 1 + slidesData.length) % slidesData.length;
    slider.children[current].style.display = "block";
  }
  
  // Show next
  function slideRight() {
    reset();
    current = (current + 1) % slidesData.length;
    slider.children[current].style.display = "block";
  }
  
  // Left arrow click
  arrowLeft.addEventListener("click", function () {
    slideLeft();
  });
  
  // Right arrow click
  arrowRight.addEventListener("click", function () {
    slideRight();
  });
  
  // Initialize
  createSlides();
  startSlide();
  