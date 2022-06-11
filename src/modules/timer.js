'use strict';

function timer(deadLine) {

	const timerHours = document.getElementById('timer-hours');
	const timerMinutes = document.getElementById('timer-minutes');
	const timerSeconds = document.getElementById('timer-seconds');


	const twoDigits = (digit) => {

		if (digit < 10) {
			digit = '0' + digit;
			return digit;
		}
		return digit;
	};

	const getTimeRemaining = () => {

		const dateStop = new Date(deadLine).getTime();
		const dateNow = new Date().getTime();
		let timeRemaining = (dateStop - dateNow) / 1000;
		let days = Math.floor(timeRemaining / 60 / 60 / 24);
		let hours = Math.floor((timeRemaining / 60 / 60) % 24);
		let minutes = Math.floor((timeRemaining / 60) % 60);
		let seconds = Math.floor(timeRemaining % 60);
		if (timeRemaining <= 0) {

			return {
				timeRemaining,
				hours: 0,
				minutes: 0,
				seconds: 0
			};

		} else {

			return {
				timeRemaining,
				hours,
				minutes,
				seconds
			};
		}
	};

	const updateClock = () => {

		let getTime = getTimeRemaining();
		timerHours.textContent = twoDigits(getTime.hours);
		timerMinutes.textContent = twoDigits(getTime.minutes);
		timerSeconds.textContent = twoDigits(getTime.seconds);
	};

	if (getTimeRemaining().timeRemaining > 0) {

		setInterval(updateClock, 1000);
	}

	updateClock();

}

module.exports = timer;