'use strict';

const {
	debounce,
	animate,
	opacityFunctional,
	elementsFunctional
} = require('./helpers.js');


const calc = (paramObj) => {

	try {

		class Calc {
			constructor() {
				// all elements from this code dist in balkony.html

				this.calcContainer = document.getElementById('calc');

				this.square = document.getElementById(paramObj.idSquare);
				this.type = document.getElementById(paramObj.idType);
				this.typeMaterial = document.getElementById(paramObj.idTypeMaterial);
				this.total = document.getElementById(paramObj.idTotal);

			}

			calcLogic() {

				this.total.value = Math.ceil(
					this.square.value *
					this.type.selectedOptions[0].value *
					this.typeMaterial.selectedOptions[0].value);

			}

			premission(e) {

				if (e.target === this.square || e.target === this.type || e.target === this.typeMaterial) {

					if (this.type.selectedOptions[0].value !== '--' &&
						this.typeMaterial.selectedOptions[0].value !== '--' ||
						this.square.value == '') {


						this.square.addEventListener('input', () => {

							this.calcLogic();
						});


					}
				}
			}

			addEvent() {





				try {
					this.calcContainer.children[0].addEventListener('click', (e) => {

						this.premission(e);
					});
				} catch (err) {
					// all elements from this code dist in balkony.html
				}

			}

			start() {
				this.addEvent();

			}
		}


		const calc = new Calc();
		calc.start();


	} catch (err) {
		console.log('!!!!!calc error', err);
	}

};


module.exports = calc;