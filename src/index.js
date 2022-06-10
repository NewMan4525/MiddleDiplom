'use strict';


const {
	beefisSliderParams,
	servicesSliderParams,
	callBackParams,
	modalParams,
	certificateParams,
	scrollerParams
} = require('./modules/parameters.js');

const slider = require('./modules/slider.js');
const modal = require('./modules/modal.js');
const scroller = require('./modules/scroller.js');


slider(beefisSliderParams);
slider(servicesSliderParams);

modal(callBackParams);
modal(modalParams);
//modal(certificateParams);
scroller(scrollerParams);