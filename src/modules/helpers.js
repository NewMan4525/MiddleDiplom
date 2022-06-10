'use strict';

class OpacityFunctional {
	constructor() {

	}

	openFunctional(opacityObjects, animateDuration) {

		opacityObjects.forEach(item => {
			item.style.display = 'block';
			item.style.opacity = '0';
		});

		animate({
			duration: animateDuration,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {

				opacityObjects.forEach(item => {
					item.style.opacity = progress * 100 + '%';
					item.style.opacity = progress * 100 + '%';
				});

			}
		});

	}

	clsFunctional(opacityObjects, animateDuration) {
		animate({
			duration: animateDuration,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {

				opacityObjects.forEach(item => {
					item.style.opacity = 1 - progress;
					item.style.opacity = 1 - progress;
				});
			}
		});
		setTimeout(() => {
			opacityObjects.forEach(item => {
				item.style.display = 'none';
			});
		}, animateDuration);


	}

}


function animate({
	timing,
	draw,
	duration
}) {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) {
			timeFraction = 1;
		}

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}


function debounce(callback, delay) {
	let timeout;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(callback, delay);
	};
}

const opacityFunctional = new OpacityFunctional();




module.exports = {

	debounce: debounce,
	animate: animate,
	opacityFunctional: opacityFunctional

};