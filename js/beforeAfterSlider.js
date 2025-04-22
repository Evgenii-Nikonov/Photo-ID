const container = document.querySelector(".compare-container");
const overlay = document.querySelector(".after-wrapper");
const slider = document.querySelector(".slider-line");

let isDragging = false;

slider.addEventListener("mousedown", () => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const rect = container.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;

  offsetX = Math.max(0, Math.min(offsetX, rect.width));
  const percent = (offsetX / rect.width) * 100;

  overlay.style.width = percent + "%";
  slider.style.left = percent + "%";
});
