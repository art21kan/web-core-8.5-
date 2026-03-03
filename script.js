const showButton = document.getElementById("showButton");
const hiddenItems = document.querySelectorAll(".brand__logo.hidden");

let isOpen = false;

showButton.addEventListener("click", () => {
  isOpen = !isOpen;

  hiddenItems.forEach(item => {
    item.style.display = isOpen ? "flex" : "none";
  });

  showButton.textContent = isOpen ? "Скрыть" : "Показать все";
});