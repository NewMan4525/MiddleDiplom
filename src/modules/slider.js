'use strict';

const {
	debounce,
	animate
} = require('./helpers.js');


const slider = (paramObj) => {

	try {
		let idInterval;
		let interval = 5000;
		let currentAmount;
		let currentGroup = 0;


		class Primary {
			constructor(sliderBlockClass) {

				this.slaiderblock = document.querySelector(`.${sliderBlockClass}`);

			}

			start() {

				this.slaiderblock.style.justifyContent = 'center';

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

			}
		}



		class Eventer {
			constructor() {}


			clickersLogic(e) {

				if (e.target.parentElement.classList.contains(paramObj.arrows[0])) {
					arrows.sliderRight();
				}
				if (e.target.parentElement.classList.contains(paramObj.arrows[1])) {
					arrows.slideLeft();
				}
			}


			mouseoverWatcher() {

				stopSlide();

				primary.slaiderblock.addEventListener('mouseout', autoSlide);

			}


			start() {
				primary.slaiderblock.addEventListener('mouseover', this.mouseoverWatcher);
				primary.slaiderblock.addEventListener('click', this.clickersLogic);
			}
		}


		const screenWidthWatcher = () => {

			if (screen.width < 576) {
				currentAmount = 1;
				sliders.start();
			} else {
				currentAmount = paramObj.amountGroup;
				sliders.start();
			}

		};

		const autoSlide = () => {
			idInterval = setInterval(arrows.sliderRight, interval);

		};

		const stopSlide = () => {
			clearInterval(idInterval);

		};


		const primary = new Primary(paramObj.parent);
		const sliders = new Sliders(paramObj.items);
		const arrows = new Arrows(paramObj.arrows);
		const eventer = new Eventer(paramObj);

		primary.start();
		window.addEventListener("resize", debounce(screenWidthWatcher, 50));
		screenWidthWatcher();
		arrows.start();
		autoSlide();
		eventer.start();

	} catch (err) {
		console.log('!!!!!slider error', err);
	}

};


module.exports = slider;