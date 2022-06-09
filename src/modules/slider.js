'use strict';

const {
	debounce,
	animate
} = require('./helpers.js');


const slider = (sliderBlockClass, sliderItemClass, arrowItemClass, amount) => {

	try {
		let idInterval;
		let interval = 5000;
		let currentAmount;
		let currentGroup = 0;


		class Primary {
			constructor(sliderBlockClass) {

				this.slaiderblock = document.querySelector(`.${sliderBlockClass}`);

			}


			listeners(whuElem) {

				switch (whuElem) {
					case arrows.slaiderarrow[0]:
						whuElem.addEventListener('click',
							arrows.slideLeft);
						break;
					case arrows.slaiderarrow[1]:
						whuElem.addEventListener('click',
							arrows.sliderRight);
						break;

				}
				whuElem.addEventListener('mouseover', stopSlide);
				whuElem.addEventListener('mouseout', autoSlide);
			}


			start() {

				this.slaiderblock.style.justifyContent = 'center';


				this.listeners(this.slaiderblock);
			}

		}

		class Sliders extends Primary {
			constructor(sliderItemClass) {
				super();
				this.slaiderItem = document.querySelectorAll(`.${sliderItemClass}`);
				this.idInterval = 'idInterval';
				this.subarray = [];
				this.block = [];

			}

			visibleItems(currentGroup) {

				this.block = this.subarray[currentGroup];

				this.slaiderItem.forEach((item) => {
					item.style.display = 'none';
				});
				this.block.forEach((item) => {
					item.style.display = 'block';
					item.style.opacity = '0';
					animate({
						duration: 500,
						timing(timeFraction) {
							return Math.pow(timeFraction, 1);
						},
						draw(progress) {

							item.style.opacity = progress * 100 + '%';


						}
					});

				});

			}

			subArrayItems(currentAmount) {

				let array = []; //массив, можно использовать массив объектов
				this.slaiderItem.forEach((item) => {
					array.push(item);
				});
				let size = currentAmount; //размер подмассива
				this.subarray = []; //массив в который будет выведен результат.
				for (let i = 0; i < Math.ceil(array.length / size); i++) {
					this.subarray[i] = array.slice((i * size), (i * size) + size);
				}


			}

			start() {

				this.subArrayItems(currentAmount);
				this.visibleItems(0);

			}
		}

		class Arrows extends Sliders {
			constructor(arrowItemClass) {
				super();
				this.slaiderarrow = document.querySelectorAll(`.${arrowItemClass}>div`);

			}


			slideLeft() {

				currentGroup--;

				if (currentGroup === -1) {
					currentGroup = sliders.subarray.length - 1;
				}

				sliders.visibleItems(currentGroup);
			}

			sliderRight() {

				currentGroup++;

				if (currentGroup === sliders.subarray.length) {
					currentGroup = 0;
				}
				sliders.visibleItems(currentGroup);
			}




			start() {

				primary.listeners(this.slaiderarrow[0]);
				primary.listeners(this.slaiderarrow[1]);





			}
		}

		const screenWidthWatcher = () => {

			if (screen.width < 576) {
				currentAmount = 1;
				sliders.start();
			} else {
				currentAmount = amount;
				sliders.start();
			}

		};

		const autoSlide = () => {
			idInterval = setInterval(arrows.sliderRight, interval);

		};

		const stopSlide = () => {
			clearInterval(idInterval);

		};


		const primary = new Primary(sliderBlockClass);
		const sliders = new Sliders(sliderItemClass);
		const arrows = new Arrows(arrowItemClass);


		primary.start();
		window.addEventListener("resize", debounce(screenWidthWatcher, 50));
		screenWidthWatcher();
		arrows.start();
		autoSlide();


	} catch (err) {
		console.log('!!!!!slider error', err);
	}

};


module.exports = slider;