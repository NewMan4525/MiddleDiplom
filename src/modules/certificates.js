'use strict';

const {
	debounce,
	animate,
	opacityFunctional,
	elementsFunctional
} = require('./helpers.js');


const certificates = (paramObj) => {




	//.img-responsive[src="images/documents/document4.jpg"]


	try {

		class Certificates {
			constructor() {
				this.clickImages = document.querySelectorAll('.sertificate-document');
				this.overlay = document.querySelector('.overlay');

				this.imgAdres = [
					'/images/documents/original/document4.jpg',
					'/images/documents/original/document4.1.jpg',
					'/images/documents/original/document4.2.jpg'
				];
			}

			// openModal() {


			// 	this.closeBtn.style.cssText = 'z-index:1;color:red;font-size:60px';
			// 	this.overlay.style.cssText =
			// 		'display:block;text-align:center;padding-top:5vh;';
			// 	this.overlay.append(this.sertificateView);
			// 	this.sertificateView.append(this.closeBtn);
			// 	this.sertificateView.setAttribute('src', '/images/documents/original/document4.jpg');

			// 	this.overlay.addEventListener('click', this.closeModal);


			// }


			closeModal() {
				certificates.sertificateTable.remove();
				certificates.sertificateImage.remove();
				certificates.arowLeft.remove();
				certificates.arowRight.remove();
				certificates.closeBtn.remove();
				certificates.styler.remove();
				certificates.overlay.style.display = 'none';
				this.overlay.removeEventListener('click', (e) => {
					this.modalLogic(e.target);
				});
			}

			modalLogic(element, index) {

				if (element === this.closeBtn || element === this.overlay) {
					this.closeModal();
					console.log('close');
				}
				if (element === this.arowLeft) {
					index--;
					if (index === -1) {
						index = this.imgAdres.length - 1;
					}

					this.sertificateImage.setAttribute('src', this.imgAdres[index--]);

					console.log('left');

				}

				if (element === this.arowRight) {
					index++;
					if (index === this.imgAdres.length) {
						index = 0;
					}

					this.sertificateImage.setAttribute('src', this.imgAdres[index]);
					console.log('right');
				}

				this.openLogic(element, index);
			}

			addElementInHtml() {
				this.overlay.append(this.sertificateTable);
				this.sertificateTable.append(this.closeBtn);
				this.sertificateTable.append(this.arowLeft);
				this.sertificateTable.append(this.sertificateImage);
				this.sertificateTable.append(this.arowRight);
				this.sertificateTable.append(this.styler);
			}

			elementsStyles() {
				this.overlay.style.display = 'block';
				this.closeBtn.style.cssText = 'position:absolute;z-index:10;top:0;right:0;';
				this.styler.textContent =
					'.cert_table{' +
					'position:relative;' +
					'display:flex;' +
					'flex-direction:row;' +
					'justify-content:space-between;' +
					'align-items:center;' +
					'margin:5% auto;' +
					'z-index:10;' +
					'width:950px;}' +
					'.cert_manager{' +
					'position: relative;' +
					'width: 50px;' +
					'height: 50px;' +
					'border:3px solid white;' +
					'border-radius:50%;' +
					'color:white;' +
					'padding:12px;' +
					'font-size:45px;' +
					'text-align:center;' +
					'align-content:center;';
			}

			elementsAtributes() {
				this.sertificateTable.classList.add('cert_table');
				this.arowLeft.classList.add('cert_manager');
				this.arowLeft.textContent = '<';
				this.arowRight.classList.add('cert_manager');
				this.arowRight.textContent = '>';
				this.closeBtn.classList.add('cert_manager');
				this.closeBtn.textContent = 'X';
			}

			elementsCreate() {
				this.sertificateTable = document.createElement('div');
				this.sertificateImage = document.createElement('img');
				this.arowLeft = document.createElement('div');
				this.arowRight = document.createElement('div');
				this.closeBtn = document.createElement('div');
				this.styler = document.createElement('style');
			}

			elementOperator() {
				this.elementsCreate();
				this.elementsAtributes();
				this.elementsStyles();
				this.addElementInHtml();
			}


			openLogic(element, index) {
				this.elementOperator();

				this.sertificateImage.setAttribute('src', this.imgAdres[index]);

				this.overlay.addEventListener('click', (e) => {
					this.modalLogic(e.target, index);
				});

			}




			addEvent(element, index) {

				element.addEventListener('click', (e) => {
					e.preventDefault();
					this.openLogic(element, index);
				});
			}

			foreacher() {
				this.clickImages.forEach((element, index) => {
					this.addEvent(element, index);
				});
			}


			start() {
				this.foreacher();
			}
		}




		const certificates = new Certificates();
		certificates.start();


	} catch (err) {
		console.log('!!!!!certificates error', err);
	}

};


module.exports = certificates;