'use strict';

const logger = require('./helpers.js');


const slider = (sliderBlockClass, sliderItemClass, arrowItemClass, amount) => {





	try {

		let currentAmount;


		class Primary {
			constructor(sliderBlockClass) {

				this.slaiderblock = document.querySelector(`.${sliderBlockClass}`);
				console.log(sliderBlockClass);
				console.log(this.slaiderblock);
			}

			start() {

				this.slaiderblock.style.justifyContent = 'center';

			}
		}

		class Sliders {
			constructor(sliderItemClass) {

				this.slaiderItem = document.querySelectorAll(`.${sliderItemClass}`);

				this.subarray = [];
				this.block = [];

			}

			visibleItems() {

				this.block = this.subarray[0];
				this.slaiderItem.forEach((item) => {
					item.style.display = 'none';
				});
				this.block.forEach((item) => {
					item.style.display = 'block';
				});
				console.log(this.subarray);

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
				this.visibleItems(this.subarray);

			}
		}

		class Arrows extends Sliders {
			constructor(arrowItemClass) {
				super();
				this.slaiderarrow = document.querySelectorAll(`.${arrowItemClass}>div`);

			}


			slideLeft() {
				this.block = this.subarray[(-1)];
				console.log('left');
			}

			sliderRight() {
				this.block = this.subarray[(+1)];
				console.log('right');
			}





			start() {

				this.slaiderarrow[0].addEventListener('click',
					this.slideLeft);
				this.slaiderarrow[1].addEventListener('click',
					this.sliderRight);
			}
		}








		const primary = new Primary(sliderBlockClass);
		const sliders = new Sliders(sliderItemClass);
		const arrows = new Arrows(arrowItemClass);

		const launcher = () => {
			if (screen.width < 576) {
				currentAmount = 1;
				sliders.start();
			} else {
				currentAmount = amount;
				sliders.start();
			}

		};

		primary.start();
		window.addEventListener("resize", launcher);
		launcher();
		arrows.start();


	} catch (err) {
		console.log('!!!!!slider error', err);
	}


};


module.exports = slider;