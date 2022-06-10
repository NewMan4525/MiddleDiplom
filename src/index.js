'use strict';


const {
	beefisSlider,
	servicesSlider,
	modalParams
} = require('./modules/parameters.js');

const slider = require('./modules/slider.js');
const modal = require('./modules/modal.js');


slider(beefisSlider);
slider(servicesSlider);


modal(modalParams);