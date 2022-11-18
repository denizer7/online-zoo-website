const menuBurger = document.querySelector('.menu-burger__icon');
const menuBody = document.querySelector('.menu-burger__body');
const menuFon = document.querySelector('.menu-burger__fon');
if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		menuFon.classList.toggle('_active');
		menuBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});

	menuFon.addEventListener("click", function (n) {
		document.body.classList.remove('_lock');
		menuBurger.classList.remove('_active');
		menuBody.classList.remove('_active');
		menuFon.classList.remove('_active');
	});
}

const blockImages = document.querySelectorAll('.gallery__slider .gallery__slider-line .gallery__grid-conteiner');
const swiperLine = document.querySelector('.gallery__slider-line');
let count = 0;
let width;

function init() {
	width = document.querySelector('.gallery__slider').offsetWidth;
	swiperLine.style.width = width * blockImages.length + 'px';
	blockImages.forEach(item => {
		item.style.width = width + 'px';
	})
	rollSlider();
}

init();

document.querySelector('.slider-circle__button--gallery-right').addEventListener('click', function () {
	count++;
	if (count >= blockImages.length) {
		count = 0;
	}
	rollSlider();
});

document.querySelector('.slider-circle__button--gallery-left').addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = blockImages.length - 1;
	}
	rollSlider();
});

function rollSlider() {
	swiperLine.style.transform = 'translate(-' + count * width + 'px)';
}



// const btnRight = document.querySelector('.slider-circle__button--testimonials-right');
// const btnLeft = document.querySelector('.slider-circle__button--testimonials-left');

// const carousel = document.querySelector('.testimonials__items')

// const moveRight = () => {
// 	carousel.classList.add('transition-right');
// 	carousel.classList.add('right');
// 	btnRight.removeEventListener('click', moveRight);
// 	btnLeft.removeEventListener('click', moveLeft);
// }

// btnRight.addEventListener('click', moveRight);

// carousel.addEventListener('animationend', () => {
// 	carousel.classList.remove('transition-right');
// 	btnRight.addEventListener('click', moveRight);
	
// })

// const moveLeft = () => {
// 	carousel.classList.add('transition-left');
// 	btnLeft.removeEventListener('click', moveLeft);
// 	btnRight.removeEventListener('click', moveRight);
// }

// btnLeft.addEventListener('click', moveLeft);

// carousel.addEventListener('animationend', () => {
// 	carousel.classList.remove('transition-left');
// 	btnLeft.addEventListener('click', moveLeft);
// })

let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.testimonials__items-conteiner');
const track = document.querySelector('.testimonials__items');
const items = document.querySelectorAll('.testimonials__card');
const btnRight = document.querySelector('.slider-circle__button--testimonials-right');
const btnLeft = document.querySelector('.slider-circle__button--testimonials-left');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) => {
// 	item.style.minWidth = `${itemWidth}px`;
// });

btnRight.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	// checkBtns();
});

btnLeft.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	// checkBtns();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

// const checkBtns = () => 




