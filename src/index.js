const carouselContainer = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
})

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, items.length - 1);
  updateCarousel();
})

function updateCarousel() {
  const itemWidth = items[currentIndex].offsetWidth;
  const offset = -currentIndex * itemWidth;
  carouselContainer.style.transform = `translateX(${offset}px)`;
}

updateCarousel();

document.addEventListener("DOMContentLoaded", function () {
	const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
	const menu = document.querySelector(".menu");

	mobileMenuIcon.addEventListener("click", function() {
		menu.classList.toggle("mobile-menu-open")
	})
})
