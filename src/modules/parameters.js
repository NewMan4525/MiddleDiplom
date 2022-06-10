'use strict';

class SliderOptions {
	constructor(parent, items, left, right, stay, amountGroup) {
		this.parent = parent,
			this.items = items,
			this.arrows = [
				left,
				right
			],
			this.stay = stay,
			this.amountGroup = amountGroup

	}
}

class ModalOptions {
	constructor(modalObjects, modalOverlay, clickElement, clsBtnElement) {
		this.modalObjects = modalObjects,
			this.modalOverlay = modalOverlay,
			this.clickElement = clickElement,
			this.clsBtnElement = clsBtnElement

	}
}

const beefisSlider = new SliderOptions(
	'wrapp__benefits',
	'benefits__item',
	'benefits__arrow--left',
	'benefits__arrow--right',
	'start',
	3);

const servicesSlider = new SliderOptions(
	'wrapp__services',
	'service__item',
	'services__arrow--left',
	'services__arrow--right',
	'start',
	2);
const callBackParams = new ModalOptions(
	'header-modal',
	'overlay',
	'btn-block',
	'header-modal__close');

const modalParams = new ModalOptions(
	'services-modal',
	'overlay',
	'btn-sm',
	'services-modal__close');

const certificateParams = new ModalOptions(
	'img-responsive',
	'overlay',
	'img-responsive',
	'overlay');

module.exports = {
	beefisSlider: beefisSlider,
	servicesSlider: servicesSlider,
	callBackParams: callBackParams,
	modalParams: modalParams,
	certificateParams: certificateParams
};