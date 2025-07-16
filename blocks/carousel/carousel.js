export default function decorate(block) {
  const slides = [...block.children];
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carousel-container");

  const indicators = document.createElement("div");
  indicators.classList.add("carousel-indicators");

  let activeIndex = 0;

  slides.forEach((slide, index) => {
    slide.classList.add("carousel-slide");
    if (index === 0) slide.classList.add("active");

    // Extract and style caption
    const img = slide.querySelector("img");
    const caption = slide.querySelector("p") || document.createElement("p");

    const overlay = document.createElement("div");
    overlay.classList.add("carousel-caption");
    overlay.innerHTML = caption.innerHTML;

    slide.innerHTML = ""; // Clear original content
    const picture = document.createElement("picture");
    picture.appendChild(img);
    slide.append(picture, overlay);

    // Create dot
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      setActiveSlide(index);
      resetAutoSlide();
    });

    indicators.appendChild(dot);
    carouselContainer.appendChild(slide);
  });

  block.textContent = "";
  block.append(carouselContainer, indicators);

  // 👉 Slide control functions
  function setActiveSlide(index) {
    block.querySelector(".carousel-slide.active")?.classList.remove("active");
    block.querySelector(".carousel-dot.active")?.classList.remove("active");
    slides[index].classList.add("active");
    indicators.children[index].classList.add("active");
    activeIndex = index;
  }

  function showNextSlide() {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  }

  // 🕒 Auto slide every 5 seconds
  let autoSlideInterval = setInterval(showNextSlide, 5000);

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(showNextSlide, 5000);
  }
}
