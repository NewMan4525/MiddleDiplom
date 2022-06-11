'use strict';


const {
	beefisSliderParams,
	servicesSliderParams,
	callBackParams,
	modalParams,
	certificateParams,
	scrollerParams,
	validatorParams,
	sendFormParams,
	calcParams,
	timerParams
} = require('./modules/parameters.js');

const slider = require('./modules/slider.js');
const modal = require('./modules/modal.js');
const scroller = require('./modules/scroller.js');
const validator = require('./modules/validator.js');
const sendForm = require('./modules/sendForm.js');
const calc = require('./modules/calc.js');
const timer = require('./modules/timer.js');



slider(beefisSliderParams);
slider(servicesSliderParams);

modal(callBackParams);
modal(modalParams);
//modal(certificateParams);

scroller(scrollerParams);

validator(validatorParams);

sendForm(sendFormParams);

calc(calcParams);

timer(timerParams);