'use strict';

const {
	beefisSliderParams,
	servicesSliderParams,
	callBackParams,
	servicesParams,
	certificateParams,
	scrollerParams,
	validatorParams,
	sendFormParams,
	calcParams,
	timerParams
} = require('./modules/parameters.js');
const certificates = require('./modules/certificates.js');
const slider = require('./modules/slider.js');
const modal = require('./modules/modal.js');
const scroller = require('./modules/scroller.js');
const validator = require('./modules/validator.js');
const sendForm = require('./modules/sendForm.js');
const calc = require('./modules/calc.js');
const timer = require('./modules/timer.js');


certificates();
slider(beefisSliderParams);
slider(servicesSliderParams);
modal(callBackParams);
modal(servicesParams);

scroller(scrollerParams);
validator(validatorParams);
sendForm(sendFormParams);
calc(calcParams);
timer(timerParams);