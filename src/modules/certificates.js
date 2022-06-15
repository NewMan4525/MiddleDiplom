'use strict';

const {
	debounce,
	animate,
	opacityFunctional,
	elementsFunctional
} = require('./helpers.js');


const certificates = (paramObj) => {
	try {
		let currentCertificate = 0;
		class Certificates {
			constructor() {
				this.clickImages = document.querySelectorAll('.sertificate-document');
				this.overlay = document.querySelector('.overlay');

				this.overlay.style.opacity = '1';
				this.imgAdres = [
					'./images/documents/original/document4.jpg',
					'./images/documents/original/document4.1.jpg',
					'./images/documents/original/document4.2.jpg'
				];
			}

			closeModal() {
				certificates.sertificateTable.remove();
				certificates.sertificateImage.remove();
				certificates.arowLeft.remove();
				certificates.arowRight.remove();
				certificates.closeBtn.remove();
				certificates.styler.remove();
				certificates.overlay.style.display = 'none';
			}

			renderModal(index) {

				this.sertificateImage.setAttribute('src', this.imgAdres[currentCertificate]);
			}

			right() {
				currentCertificate++;
				if (currentCertificate === this.imgAdres.length) {
					currentCertificate = 0;
				}
				this.renderModal(currentCertificate);
			}

			left() {

				currentCertificate--;
				if (currentCertificate === -1) {
					currentCertificate = this.imgAdres.length - 1;
				}
				this.renderModal(currentCertificate);

			}

			modalLogic(element, index) {

				const callBack = () => {
					if (element === this.closeBtn) {
						this.closeModal();
					} else
					if (element === this.arowLeft) {
						this.left();
					} else
					if (element === this.arowRight) {
						this.right();
					} else if (element === this.sertificateImage) {
						return;
					}
				};
				callBack();

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
				this.overlay.style.cssText = 'display:block;z-index:11';

				this.closeBtn.style.cssText = 'position:absolute;z-index:10;top:0;right:0;';

				this.styler.textContent =
					'.cert_table{' +
					'position:relative;' +
					'display:flex;' +
					'flex-direction:row;' +
					'justify-content:space-between;' +
					'align-items:center;' +
					'margin:15% auto;' +
					'z-index:10;' +
					'height:870px;' +
					'width:700px;}' +


					'.cert_manager{' +
					'position: relative;' +
					'width: 50px;' +
					'height: 50px;' +
					'border:3px solid white;' +
					'border-radius:50%;' +
					'cursor: pointer;' +
					'color:white;' +
					'padding:12px;' +
					'font-size:45px;' +
					'text-align:center;' +
					'align-content:center;';
				this.sertificateImage.style.cssText = 'position:relative; max-height:800px';
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
				currentCertificate = index;
				this.renderModal(currentCertificate);

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