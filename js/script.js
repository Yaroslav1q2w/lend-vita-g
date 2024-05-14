document.addEventListener("DOMContentLoaded", function () {
	let mySwiper = new Swiper("#oneSlider", {
		loop: true,
		navigation: {
			nextEl: ".custom-next-arrow",
			prevEl: ".custom-prev-arrow",
		},
	});
});

let swiper = new Swiper(".mySwiper", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: ".group1-next",
		prevEl: ".group1-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});

document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.querySelectorAll(".accordion_button");
	let boxes = document.querySelectorAll(".accordion_box");

	buttons.forEach(function (button, index) {
		button.addEventListener("click", function () {
			buttons.forEach(function (btn, i) {
				if (i !== index) {
					btn.classList.remove("accordion_button_active");
					boxes[i].style.maxHeight = 0;
				}
			});

			button.classList.toggle("accordion_button_active");
			let box = boxes[index];
			let isOpen = button.classList.contains("accordion_button_active");

			if (isOpen) {
				box.style.maxHeight = box.scrollHeight + "px";
			} else {
				box.style.maxHeight = 0;
			}
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	// Ініціалізація другого слайдера
	const secondSlider = new Swiper("#secondSlider", {
		loop: true,
		navigation: {
			prevEl: ".custom-next-arrow5",
			nextEl: ".custom-prev-arrow5",
		},
		autoplay: {
			delay: 2000, // Час між слайдами у мілісекундах
			disableOnInteraction: false, // Не зупиняти автовідтворення після взаємодії користувача
		},
	});
});

const createNewsTicker = () => {
	const section7InnerContent = document.querySelector(
		".section-7__inner-content"
	);

	const cloneImages = () => {
		const images = section7InnerContent.querySelectorAll("img");
		const cloneImages = [];

		images.forEach((img) => {
			const cloneImg = img.cloneNode(true);
			cloneImages.push(cloneImg);
		});

		return cloneImages;
	};

	const updateImages = () => {
		const cloneImagesArr = cloneImages();
		section7InnerContent.innerHTML = "";
		cloneImagesArr.forEach((cloneImg) => {
			section7InnerContent.appendChild(cloneImg);
		});
	};

	const moveImages = () => {
		const images = section7InnerContent.querySelectorAll("img");
		let position = section7InnerContent.offsetWidth;

		const moveImage = () => {
			if (position > -section7InnerContent.scrollWidth) {
				position--;
				section7InnerContent.style.transform = `translateX(${position}px)`;
				requestAnimationFrame(moveImage);
			} else {
				position = section7InnerContent.offsetWidth;
				updateImages();
				moveImage();
			}
		};

		moveImage();
	};

	updateImages();
	moveImages();
};

document.addEventListener("DOMContentLoaded", function () {
	createNewsTicker();
});

document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".section-6__videos", {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper("#uniqueSlider", {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});

window.addEventListener("DOMContentLoaded", () => {
	document
		.querySelectorAll("a, .to-link, .comment__img, .search-button")
		.forEach((el) => {
			el.addEventListener("click", function (e) {
				e.preventDefault();

				const targetElement = document.querySelector(".footer__content-inner");

				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth" });
				} else {
					console.error("error");
				}
			});
		});
});
