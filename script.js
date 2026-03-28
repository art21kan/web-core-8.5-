const swiper = new Swiper('.swiper', {
direction: 'horizontal',
pagination: {
  el:'.swiper-pagination',
  clickable: true,
  },
  spaceBetween: 16,
  slidesPerView: 2,
})

const showButton = document.getElementById("showButton");
const hiddenItems = document.querySelectorAll(".brand__logo.hidden");

let isOpen = false;

showButton.addEventListener("click", () => {
  isOpen = !isOpen;

  hiddenItems.forEach(item => {
    item.style.display = isOpen ? "flex" : "none";
  });

 showButton.innerHTML = isOpen
  ? `
    <img src="Icons/expand.svg" alt="show" style="transform: rotate(180deg);">
    <span>Скрыть</span>
  `
  : `
    <img src="Icons/expand.svg" alt="show">
    <span>Показать все</span>
  `
  })

