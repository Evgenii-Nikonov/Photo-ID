const track = document.querySelector(".carousel-track");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

const itemsToShow = 3;
const totalItems = 9;
const itemWidth = 308;
let currentIndex = itemsToShow;

leftArrow.addEventListener("click", () => {
  currentIndex--;
  updateCarousel();
  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = totalItems;
      updateCarousel();
    }, 300);
  }
});

rightArrow.addEventListener("click", () => {
  currentIndex++;
  updateCarousel();
  if (currentIndex === totalItems + itemsToShow) {
    setTimeout(() => {
      currentIndex = itemsToShow;
      updateCarousel(false);
    }, 300);
  }
});

function updateCarousel(animated = true) {
  const offset = -(currentIndex * itemWidth);
  track.style.transition = animated ? "transform 0.3s ease-in-out" : "none";
  track.style.transform = `translateX(${offset}px)`;
}

const items = Array.from(track.children);
console.log(items);

for (let i = items.length - itemsToShow; i < items.length; i++) {
  const clone = items[i].cloneNode(true);
  track.insertBefore(clone, track.firstChild);
}
// Клонирование последних трёх элементов для бесконечной карусели
for (let i = 0; i < itemsToShow; i++) {
  const clone = items[i].cloneNode(true);
  track.appendChild(clone);
}

updateCarousel();
