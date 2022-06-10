'use strict';


const {
	beefisSlider,
	servicesSlider,
	callBackParams,
	modalParams,
	certificateParams,
} = require('./modules/parameters.js');

const slider = require('./modules/slider.js');
const modal = require('./modules/modal.js');


slider(beefisSlider);
slider(servicesSlider);

modal(callBackParams);
modal(modalParams);
//modal(certificateParams);