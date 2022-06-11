'use strict';

const {
	debounce,
	animate,
	opacityFunctional,
	elementsFunctional
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

			start() {

				elementsFunctional.separator(this.modalObjects, this.pusher);
				elementsFunctional.separator(this.modalOverlay, this.pusher);
				elementsFunctional.separator(this.clickElement, this.addEvent);
				elementsFunctional.separator(this.clsBtnElement, this.addEvent);

			}

		}


		const modal = new Modal();
		modal.start();


	} catch (err) {
		console.log('!!!!!modal error', err);
	}

};


module.exports = modal;