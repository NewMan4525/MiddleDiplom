'use strict';

const {
	debounce,
	animate,
	opacityFunctional,
	listsFunctional
} = require('./helpers.js');


const calc = (paramObj) => {

	try {

		class Calc {
			constructor() {

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

					if (this.type.selectedOptions[0].value !== '--' && this.typeMaterial.selectedOptions[0].value !== '--') {
						this.calcLogic();
					}
				}
			}

			addEvent() {
				this.calcContainer.children[0].addEventListener('click', (e) => {

					this.premission(e);
				});
			}

			start() {
				this.addEvent();

			}
		}


		const calc = new Calc();
		calc.start();








		// 1) Селекты с id = ”calc - type” и инпут площади балкона с
		//    id = ”calc - type - material”– обязательные поля





		// 3) Цена рассчитывается по формуле:
		// 	площадь умножить на value типа балкона и умножить на value типа материала


		// 4) Записывать итог в инпут c id = ”calc - total”



		// 5) При отправке форм добавлять свойство calc - total к отправляемым данным в JSON - формате




	} catch (err) {
		console.log('!!!!!calc error', err);
	}

};


module.exports = calc;