const divider = document.querySelector(".divider");
const leftPane = document.querySelector(".left-pane");
const rightPane = document.querySelector(".right-pane");

let isDragging = false;

divider.addEventListener("mousedown", (e) => {
  isDragging = true;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const containerWidth = document.querySelector(".container").offsetWidth;
  const dividerWidth = divider.offsetWidth;
  const x = e.pageX - dividerWidth / 2;
  const leftPaneWidth = x;
  const rightPaneWidth = containerWidth - x - dividerWidth;

  leftPane.style.width = leftPaneWidth + "px";
  rightPane.style.width = rightPaneWidth + "px";
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
});
