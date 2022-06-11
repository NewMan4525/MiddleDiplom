'use strict';


const {
	beefisSliderParams,
	servicesSliderParams,
	callBackParams,
	modalParams,
	certificateParams,
	scrollerParams,
	validatorParams,
	sendFormParams
} = require('./modules/parameters.js');

const slider = require('./modules/slider.js');
const modal = require('./modules/modal.js');
const scroller = require('./modules/scroller.js');
const validator = require('./modules/validator.js');
const sendForm = require('./modules/sendForm.js');


slider(beefisSliderParams);
slider(servicesSliderParams);

modal(callBackParams);
modal(modalParams);
//modal(certificateParams);

scroller(scrollerParams);

validator(validatorParams);

sendForm(sendFormParams);