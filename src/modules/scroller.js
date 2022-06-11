'use strict';

const {
	debounce,
	animate,
	opacityFunctional
} = require('./helpers.js');


const scroiier = (paramObj) => {

	try {

		class Scroller {
			constructor() {

				this.upScrollBtn = document.querySelector(`.${paramObj.upScrollBtn}`);
				this.bottomElem = document.getElementById(paramObj.bottomLine);
				this.bottomLine = this.bottomElem.offsetTop;

			}


			scrollUp() {

				this.upScrollBtn.addEventListener('click', () => {
					window.scrollTo({
						top: 0,
						behavior: 'smooth'
					});
				});

			}

			scrollController(top = 610) {

				if (window.pageYOffset > top) {
					this.upScrollBtn.style.display = 'block';
				} else {
					this.upScrollBtn.style.display = 'none';
				}

			}

			callBack() {
				scroller.scrollController(this.bottomLine);
			}

			scrollWatcher() {
				window.addEventListener('scroll',
					debounce(this.callBack, 150));
			}

			start() {
				this.scrollUp();
				this.scrollController();
				this.scrollWatcher();
			}

		}


		const scroller = new Scroller();
		scroller.start();















	} catch (err) {
		console.log('!!!!!scroiier error', err);
	}

};


module.exports = scroiier;