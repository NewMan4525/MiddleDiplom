'use strict';

const {
	debounce,
	animate,
	opacityFunctional,
	listsFunctional
} = require('./helpers.js');


function timer(paramObj) {
	try {

		class Timer {
			constructor() {

				this.elemDays = document.querySelectorAll(`.${paramObj.days}>span`);
				this.elemHours = document.querySelectorAll(`.${paramObj.hours}>span`);
				this.elemMinutes = document.querySelectorAll(`.${paramObj.minutes}>span`);
				this.elemSeconds = document.querySelectorAll(`.${paramObj.seconds}>span`);

			}


			twoDigits(digit) {

				if (digit < 10) {
					digit = '0' + digit;
					return digit;
				}
				return digit;
			}

			getTimeRemaining() {

				const dateStop = new Date(paramObj.deadline).getTime();
				const dateNow = new Date().getTime();

				let timeRemaining = (dateStop - dateNow) / 1000;
				let days = Math.floor(timeRemaining / 60 / 60 / 24);
				let hours = Math.floor((timeRemaining / 60 / 60) % 24);
				let minutes = Math.floor((timeRemaining / 60) % 60);
				let seconds = Math.floor(timeRemaining % 60);


				if (timeRemaining <= 0) {

					return {
						timeRemaining,
						days: 0,
						hours: 0,
						minutes: 0,
						seconds: 0
					};

				} else {

					return {
						timeRemaining,
						days,
						hours,
						minutes,
						seconds
					};
				}
			}

			timeManager(nodeList) {
				let getTime = timer.getTimeRemaining();
				let time;
				switch (nodeList) {
					case timer.elemDays:
						time = getTime.days;
						break;
					case timer.elemHours:
						time = getTime.hours;
						break;

					case timer.elemMinutes:
						time = getTime.minutes;
						break;

					case timer.elemSeconds:
						time = getTime.seconds;
						break;
				}

				nodeList.forEach(element => {
					element.textContent = timer.twoDigits(time);
				});

			}

			elemBuffer() {
				timer.timeManager(timer.elemDays);
				timer.timeManager(timer.elemHours);
				timer.timeManager(timer.elemMinutes);
				timer.timeManager(timer.elemSeconds);
			}

			intervalUp() {

				if (this.getTimeRemaining().timeRemaining > 0) {

					setInterval(this.elemBuffer, 1000);
				}

				this.elemBuffer();
			}

			start() {
				this.intervalUp();

			}

		}


		const timer = new Timer();
		timer.start();

	} catch (err) {
		console.log('!!!!!timer error', err);
	}
}


module.exports = timer;