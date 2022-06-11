'use strict';

const {
	debounce,
	animate,
	opacityFunctional
} = require('./helpers.js');


const validator = (paramObj) => {

	try {

		class Validator {
			constructor() {
				//name='fio'
				//name='phone'
				this.nameInput = document.querySelectorAll('input[name="fio"]');
				this.namePhone = document.querySelectorAll('input[name="phone"]');

				this.regexps = {

					num: /\D+/,
					tel: /[^\d+\)\(\-]/g,
					ru: /[^а-яА-Я\s\-]/g,
					mail: /[^\w0-9\@\-\_\.\!\~\*\']/gi,
					msg: /[^а-яА-Я\s\-]/g,

				};


			}


			flag(flag) {

				let result;

				switch (flag) {

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

			repleacer(elem, flag) {

				elem.target.value = elem.target.value.replace(this.flag(flag), '');
				elem.target.value = elem.target.value.replace(/\s+/g, ' ').trim();

				if (flag === 'ru') {

					elem.target.value = elem.target.value.slice(0, 1).toUpperCase() +
						elem.target.value.slice(1).toLowerCase();

				}

			}

			eventer(elem, flag) {
				let event;

				if (flag !== 'num') {

					event = 'input'; //'blur';

				} else {

					event = 'input';

				}

				elem.addEventListener(event, (elem) => {

					this.repleacer(elem, flag);
					console.log(elem, flag);
				});

			}

			foreacher(arr, flag) {

				arr.forEach((item, index) => {

					this.eventer(item, flag);

				});

			}

			start() {

				this.foreacher(this.nameInput, 'ru');

				this.foreacher(this.namePhone, 'tel');

				//this.foreacher(this.usersMessage, 'msg');
				//this.foreacher(this.usersEmails, 'mail');

			}


		}


		const validator = new Validator();

		validator.start();


	} catch (err) {
		console.log('!!!!!validator error', err);
	}

};


module.exports = validator;