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

			// 	this.closeBtn.textContent = 'X';
			// 	this.closeBtn.style.cssText = 'z-index:1;color:red;font-size:60px';
			// 	this.overlay.style.cssText =
			// 		'display:block;text-align:center;padding-top:5vh;';
			// 	this.overlay.append(this.sertificateView);
			// 	this.sertificateView.append(this.closeBtn);
			// 	this.sertificateView.setAttribute('src', '/images/documents/original/document4.jpg');

			// 	this.overlay.addEventListener('click', this.closeModal);


			// }

			addElementInHtml(element, index) {
				index = 0;

				this.sertificateTable.append(this.arowLeft);
				this.sertificateTable.append(this.sertificateImage);
				this.sertificateTable.append(this.arowRight);


				//console.log(this.imgAdres[index]);
				this.sertificateImage.setAttribute('src', this.imgAdres[index]);


			}

			addEvent(element, index) {

				element.addEventListener('click', (e) => {
					e.preventDefault();
					this.addElementInHtml(element, index);
				});

			}

			foreacher() {
				this.clickImages.forEach((element, index) => {
					this.addEvent(element, index);
				});

			}




			elementsStyles() {
				this.overlay.style.display = 'block';
				this.sertificateTable.style.cssText = 'display:flex;flex-direction:row;justify-content:space-between;align-content:center;margin:5% auto;z-index:10;width:950px;max-height:1200px;background-color:red;';
				// this.sertificateImage
				this.arowLeft.style.cssText = 'width:10px;height:10px;background-color:navy;';
				this.arowRight.style.cssText = 'width:10px;height:10px;background-color:navy;';
				// this.closeBtn

			}

			elementsAtributes() {
				// this.sertificateTable
				// this.sertificateImage
				// this.arowLeft
				// this.arowRight
				// this.closeBtn
			}

			elementsCreate() {
				this.sertificateTable = document.createElement('div');
				this.sertificateImage = document.createElement('img');
				this.arowLeft = document.createElement('div');
				this.arowRight = document.createElement('div');
				this.closeBtn = document.createElement('span');

			}





			start() {
				this.elementsCreate();
				this.elementsAtributes();
				this.elementsStyles();
				//this.foreacher();

				this.overlay.append(this.sertificateTable);
				this.addElementInHtml();
			}
		}




		const certificates = new Certificates();
		certificates.start();


	} catch (err) {
		console.log('!!!!!certificates error', err);
	}

};


module.exports = certificates;