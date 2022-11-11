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
window.addEventListener('resize', init);
init();

document.querySelector('.slider-circle__button--gallery-right').addEventListener('click', function () {
	// document.querySelector('.slider-circle__button--gallery-right').removeEventListener('click');
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


