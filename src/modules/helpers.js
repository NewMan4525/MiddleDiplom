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

class ElementsFunctional {
	constructor() {}
	separator(element, funcName) {

		if (NodeList.prototype.isPrototypeOf(element) || Array.prototype.isPrototypeOf(element)) {
			element.forEach(item => {
				funcName(item);
			});
		} else {
			funcName(element);
		}
	}

	manager(roadMap = {
		items: [],
		functions: [],
		arguments: [],
		digitMap: [
			[],
			[],
			[]
		]

	}) {

		let result;

		switch (roadMap) {

			case 'num':

				result = this.regexps.num;

				break;

			case 'tel':

				result = this.regexps.tel;

				break;

			case 'ru':

				result = this.regexps.ru;

				break;

			case 'mail':

				result = this.regexps.mail;

				break;

			case 'msg':

				result = this.regexps.msg;

				break;

		}

		return result;
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
const elementsFunctional = new ElementsFunctional();


module.exports = {

	debounce: debounce,
	animate: animate,
	opacityFunctional: opacityFunctional,
	elementsFunctional: elementsFunctional

};