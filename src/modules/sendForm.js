'use strict';

const {
	debounce,
	animate,
	opacityFunctional,
	elementsFunctional
} = require('./helpers.js');


const sendForm = (paramObj) => {

	try {

		class SendOperation {
			constructor() {

				this.total = document.getElementById(paramObj.idTotal);


				this.data = {};
			}

			sendData(data) {

				const dataSend = fetch(paramObj.sendAdress, {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					}

				}).catch(error => console.log(error, 'Ошибка отловлена "catch при отправке"'));

				console.log(dataSend);


			}


			start() {}
		}

		class SendPremission extends SendOperation {
			constructor() {
				super();

				this.submitBtn = document.querySelectorAll(`.${paramObj.submitBtn}`);
				this.submitBtnModal = document.querySelectorAll(`.${paramObj.submitBtnModal}`);

			}

			btnClickLogic(element) {

				let currentFormInputsModal;
				const examinationOption = [
					element.parentElement.parentElement.parentElement.parentElement.querySelectorAll('input[type="text"]'),
					element.parentElement.parentElement.parentElement.querySelectorAll('input[type="text"]')
				];

				if (element.classList.contains('btn-form')) {
					currentFormInputsModal = examinationOption[0];
				} else {
					currentFormInputsModal = examinationOption[1];
				}

				if (currentFormInputsModal[0].value !== '' && currentFormInputsModal[1].value !== '') {
					sendOperation.data.name = currentFormInputsModal[0].value;
					sendOperation.data.phone = currentFormInputsModal[1].value;
					if (this.total.value === '') {
						sendOperation.data.total = 0;
					} else {
						sendOperation.data.total = +this.total.value;
					}

					sendOperation.sendData(sendOperation.data);

				} else {
					// console.log('xyz');
				}
			}

			addEvent(element) {

				element.addEventListener('click', (e) => {
					e.preventDefault();
					sendPremission.btnClickLogic(element);
				});

			}

			start() {

				elementsFunctional.separator(this.submitBtn, this.addEvent);
				elementsFunctional.separator(this.submitBtnModal, this.addEvent);

			}
		}

		const sendOperation = new SendOperation();
		const sendPremission = new SendPremission();


		sendPremission.start();


	} catch (err) {
		console.log('!!!!!sendForm error', err);
	}

};


module.exports = sendForm;