'use strict';

const {
	debounce,
	animate,
	opacityFunctional
} = require('./helpers.js');


const modal = (paramObj) => {

	try {

		let animateDuration = 300;

		class Modal {
			constructor() {

				this.modalObjects = document.querySelectorAll(`.${paramObj.modalObjects}`);
				this.modalOverlay = document.querySelector(`.${paramObj.modalOverlay}`);
				this.clickElement = document.querySelectorAll(`.${paramObj.clickElement}`);
				this.clsBtnElement = document.querySelector(`.${paramObj.clsBtnElement}`);

				this.objList = [];
			}


			eventLogic(e) {

				if (e.target.classList.contains(paramObj.clickElement)) {

					opacityFunctional.openFunctional(this.objList, animateDuration);

				}
				if (e.target.classList.contains(paramObj.clsBtnElement)) {

					opacityFunctional.clsFunctional(this.objList, animateDuration);

				}

			}

			pusher(element) {
				modal.objList.push(element);
			}

			addEvent(element) {

				element.addEventListener('click', (e) => {
					e.preventDefault();
					modal.eventLogic(e);
				});
			}

			arraySensor(element, funcName) {

				if (NodeList.prototype.isPrototypeOf(element)) {
					element.forEach(item => {
						funcName(item);
					});
				} else {
					funcName(element);
				}
			}


			start() {

				this.arraySensor(this.modalObjects, this.pusher);
				this.arraySensor(this.modalOverlay, this.pusher);
				this.arraySensor(this.clickElement, this.addEvent);
				this.arraySensor(this.clsBtnElement, this.addEvent);


			}

		}


		const modal = new Modal();
		modal.start();


	} catch (err) {
		console.log('!!!!!modal error', err);
	}

};


module.exports = modal;