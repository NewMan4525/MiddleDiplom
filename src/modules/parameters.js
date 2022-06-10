'use strict';

class SliderPrototype {
	constructor(parent, items, left, right, amountGroup) {
		this.parent = parent,
			this.items = items,
			this.arrows = [
				left,
				right
			],
			this.amountGroup = amountGroup
	}
}


const beefisSlider = new SliderPrototype(
	'wrapp__benefits',
	'benefits__item',
	'benefits__arrow--left',
	'benefits__arrow--right',
	3);

const servicesSlider = new SliderPrototype(
	'wrapp__services',
	'service__item',
	'services__arrow--left',
	'services__arrow--right',
	2);


module.exports = {
	beefisSlider: beefisSlider,
	servicesSlider: servicesSlider
};