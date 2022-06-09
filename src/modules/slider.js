'use strict';

const logger = require('./helpers.js');


const slider = (sliderBlockClass, sliderItemClass, arrowItemClass, amount) => {





	try {


		class Primary {
			constructor(sliderBlockClass) {

				//const slaiderblock = document.querySelector(`.${sliderBlockClass}`);

			}




			start() {
				if (amount === 1) {
					this.block.style.margin = '0 auto;';
				}
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




			subArrayItems(amount) {

				let array = []; //массив, можно использовать массив объектов
				this.slaiderItem.forEach((item, index) => {
					array.push(item);
				});
				let size = amount; //размер подмассива
				this.subarray = []; //массив в который будет выведен результат.
				for (let i = 0; i < Math.ceil(array.length / size); i++) {
					this.subarray[i] = array.slice((i * size), (i * size) + size);
				}


			}


			start() {

				this.subArrayItems(amount);
				this.visibleItems(this.subarray);
			}
		}

		class Arrows {
			constructor(arrowItemClass) {
				this.slaiderarrow = document.querySelectorAll(`.${arrowItemClass}>div`);

			}


			slideLeft() {
				console.log('left');
			}

			sliderRight() {
				console.log('right');
			}





			start() {

				this.slaiderarrow[0].addEventListener('click',
					this.slideLeft);
				this.slaiderarrow[1].addEventListener('click',
					this.sliderRight);
			}
		}


		// const primary = new Primary(sliderBlockClass);
		const sliders = new Sliders(sliderItemClass);
		const arrows = new Arrows(arrowItemClass);

		// primary.start();
		sliders.start();

		arrows.start();

	} catch (err) {
		console.log('!!!!!slider error', err);
	}


};


module.exports = slider;