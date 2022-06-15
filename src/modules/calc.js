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
			// || this.square.value !== ''
			premission(e) {
				// console.log(e.target === calc.type);



				if (e.target === calc.square || e.target === calc.type || e.target === calc.typeMaterial) {

					if (calc.type.selectedOptions[0].value !== '--' &&
						calc.typeMaterial.selectedOptions[0].value !== '--') {

						calc.calcLogic();




						// this.square.addEventListener('blur', () => {


						// });


					}
				}
			}

			addEvent() {





				try {

					this.type.addEventListener('change', this.premission);
					this.typeMaterial.addEventListener('change', this.premission);
					this.square.addEventListener('blur', this.premission);





					// this.calcContainer.children[0].addEventListener('click', (e) => {

					// 	this.premission(e);
					// });
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