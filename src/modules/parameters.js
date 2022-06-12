'use strict';

class SliderOptions {
	constructor(parent, items, left, right, stay, amountGroup) {
		this.parent = parent;
		this.items = items;
		this.arrows = [
			left,
			right
		];
		this.stay = stay;
		this.amountGroup = amountGroup;

	}
}

const beefisSliderParams = new SliderOptions(
	'wrapp__benefits',
	'benefits__item',
	'benefits__arrow--left',
	'benefits__arrow--right',
	'start',
	3
);

const servicesSliderParams = new SliderOptions(
	'wrapp__services',
	'service__item',
	'services__arrow--left',
	'services__arrow--right',
	'start',
	2
);

class ModalOptions {
	constructor(modalObjects, modalOverlay, clickElement, clsBtnElement) {
		this.modalObjects = modalObjects;
		this.modalOverlay = modalOverlay;
		this.clickElement = clickElement;
		this.clsBtnElement = clsBtnElement;

	}
}

const callBackParams = new ModalOptions(
	'header-modal',
	'overlay',
	'btn-cb',
	'header-modal__close'
);

const modalParams = new ModalOptions(
	'services-modal',
	'overlay',
	'btn-sm',
	'services-modal__close'
);

const certificateParams = new ModalOptions(
	'img-responsive',
	'overlay',
	'img-responsive',
	'overlay'
);

class ScrollerOptions {
	constructor(upScrollBtn, bottomLine) {
		this.upScrollBtn = upScrollBtn;
		this.bottomLine = bottomLine;

	}
}

const scrollerParams = new ScrollerOptions(
	'smooth-scroll',
	'benefits'
);

class ValidatorOptions {
	constructor(nameInput, namePhone, nameEmail, nameMessage) {
		this.nameInput = nameInput;
		this.namePhone = namePhone;
		this.nameEmail = nameEmail;
		this.nameMessage = nameMessage;
	}
}

const validatorParams = new ValidatorOptions(
	'input[name="fio"]',
	'input[name="phone"]'
);

class SendFormOptions {
	constructor(sendAdress, submitBtn, submitBtnModal, idTotal) {
		this.sendAdress = sendAdress;
		this.submitBtn = submitBtn;
		this.submitBtnModal = submitBtnModal;
		this.idTotal = idTotal;
	}
}

const sendFormParams = new SendFormOptions(
	'https://jsonplaceholder.typicode.com/posts',
	'btn-form',
	'btn-form-modal',
	'calc-total'
);

class CalcOptions {
	constructor(idSquare, idType, idTypeMaterial, idTotal) {
		this.idSquare = idSquare;
		this.idType = idType;
		this.idTypeMaterial = idTypeMaterial;
		this.idTotal = idTotal;
	}
}

const calcParams = new CalcOptions(
	'calc-input',
	'calc-type',
	'calc-type-material',
	'calc-total'
);

class TimerOptions {
	constructor(days, hours, minutes, seconds, deadline) {
		this.days = days;
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
		this.deadline = deadline;
	}
}

const timerParams = new TimerOptions(
	'count_1',
	'count_2',
	'count_3',
	'count_4',
	'13.june2022, 21:00'
);


module.exports = {
	beefisSliderParams: beefisSliderParams,
	servicesSliderParams: servicesSliderParams,
	callBackParams: callBackParams,
	modalParams: modalParams,
	certificateParams: certificateParams,
	scrollerParams: scrollerParams,
	validatorParams: validatorParams,
	sendFormParams: sendFormParams,
	calcParams: calcParams,
	timerParams: timerParams
};