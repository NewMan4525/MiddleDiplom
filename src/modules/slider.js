'use strict';

const slider = (slBlckCls, sldrsCls, dtsLstCls, slActive, dotActive) => {

	const sliderBlock = document.querySelector(slBlckCls);
	const sliders = document.querySelectorAll(sldrsCls);
	const dotsList = document.querySelector(dtsLstCls);


	if (sliderBlock === null || sliders === null || dotsList === null) {
		return;
	} else {

		let dots = [];
		let currentSlide = 0;
		let timeInterval;
		let interval;


		//add dots
		const forEacher = (array) => {
			array.forEach((item, index) => {

				let dot = document.createElement('li');
				dot.classList.add('dot');
				dotsList.append(dot);
				dots = document.querySelectorAll('.dot');

			});
		};

		const prevSlide = (elems, index, strClass) => {

			elems[index].classList.remove(strClass);

		};

		const nextSlide = (elems, index, strClass) => {

			elems[index].classList.add(strClass);

		};

		const autoSlide = () => {

			prevSlide(sliders, currentSlide, slActive);
			prevSlide(dots, currentSlide, dotActive);
			currentSlide++;

			if (currentSlide >= sliders.length) {
				currentSlide = 0;
			}

			nextSlide(sliders, currentSlide, slActive);
			nextSlide(dots, currentSlide, dotActive);

		};

		const startSlide = (time = 3000) => {

			interval = setInterval(autoSlide, time);

		};

		const stopSlide = () => {

			clearInterval(interval);
		};


		forEacher(sliders);

		sliderBlock.addEventListener('click', (e) => {

			e.preventDefault();

			if (!e.target.matches('.dot,.portfolio-btn')) {

				return;

			}

			prevSlide(sliders, currentSlide, slActive);
			prevSlide(dots, currentSlide, dotActive);

			if (e.target.matches('#arrow-right')) {

				currentSlide++;

			} else if (e.target.matches('#arrow-left')) {

				currentSlide--;

			} else if (e.target.classList.contains('dot')) {

				dots.forEach((item, index) => {

					if (e.target === item) {

						currentSlide = index;

					}

				});

			}

			if (currentSlide >= sliders.length) {

				currentSlide = 0;
			}
			if (currentSlide < 0) {

				currentSlide = sliders.length - 1;

			}

			nextSlide(sliders, currentSlide, slActive);
			nextSlide(dots, currentSlide, dotActive);

		});

		sliderBlock.addEventListener('mouseenter', (e) => {

			if (e.target.matches('.dot,.portfolio-btn')) {

				stopSlide();

				return;

			}

		}, true);

		sliderBlock.addEventListener('mouseleave', (e) => {

			if (e.target.matches('.dot,.portfolio-btn')) {

				startSlide(timeInterval);

				return;

			}

		}, true);

		startSlide(timeInterval);

	}

};


module.exports = slider;