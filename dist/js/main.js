(()=>{"use strict";var e={84:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=e=>{try{class t{constructor(){this.calcContainer=document.getElementById("calc"),this.square=document.getElementById(e.idSquare),this.type=document.getElementById(e.idType),this.typeMaterial=document.getElementById(e.idTypeMaterial),this.total=document.getElementById(e.idTotal)}calcLogic(){this.total.value=Math.ceil(this.square.value*this.type.selectedOptions[0].value*this.typeMaterial.selectedOptions[0].value)}premission(e){e.target!==this.square&&e.target!==this.type&&e.target!==this.typeMaterial||"--"!==this.type.selectedOptions[0].value&&"--"!==this.typeMaterial.selectedOptions[0].value&&this.calcLogic()}addEvent(){try{this.calcContainer.children[0].addEventListener("click",(e=>{this.premission(e)}))}catch(e){}}start(){this.addEvent()}}(new t).start()}catch(e){console.log("!!!!!calc error",e)}}},380:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=e=>{try{class e{constructor(){this.clickImages=document.querySelectorAll(".sertificate-document"),this.overlay=document.querySelector(".overlay"),this.imgAdres=["/images/documents/original/document4.jpg","google"]}addElementInHtml(e,t){this.sertificateImage.setAttribute("src",this.imgAdres[t])}addEvent(e,t){e.addEventListener("click",(s=>{s.preventDefault(),this.addElementInHtml(e,t)}))}foreacher(){this.clickImages.forEach(((e,t)=>{this.addEvent(e,t)}))}elementsStyles(){}elementsAtributes(){}elementsCreate(){this.sertificateTable=document.createElement("div"),this.sertificateImage=document.createElement("img"),this.arowLeft=document.createElement("div"),this.arowRight=document.createElement("div"),this.closeBtn=document.createElement("span")}start(){this.elementsCreate(),this.foreacher()}}(new e).start()}catch(e){console.log("!!!!!certificates error",e)}}},956:e=>{function t({timing:e,draw:t,duration:s}){let a=performance.now();requestAnimationFrame((function r(n){let i=(n-a)/s;i>1&&(i=1);let o=e(i);t(o),i<1&&requestAnimationFrame(r)}))}const s=new class{constructor(){}openFunctional(e,s){e.forEach((e=>{e.style.display="block",e.style.opacity="0"})),t({duration:s,timing:e=>e,draw(t){e.forEach((e=>{e.style.opacity=100*t+"%",e.style.opacity=100*t+"%"}))}})}clsFunctional(e,s){t({duration:s,timing:e=>e,draw(t){e.forEach((e=>{e.style.opacity=1-t,e.style.opacity=1-t}))}}),setTimeout((()=>{e.forEach((e=>{e.style.display="none"}))}),s)}},a=new class{constructor(){}separator(e,t){NodeList.prototype.isPrototypeOf(e)||Array.prototype.isPrototypeOf(e)?e.forEach((e=>{t(e)})):t(e)}manager(e={items:[],functions:[],arguments:[],digitMap:[[],[],[]]}){let t;switch(e){case"num":t=this.regexps.num;break;case"tel":t=this.regexps.tel;break;case"ru":t=this.regexps.ru;break;case"mail":t=this.regexps.mail;break;case"msg":t=this.regexps.msg}return t}};e.exports={debounce:function(e,t){let s;return function(){clearTimeout(s),s=setTimeout(e,t)}},animate:t,opacityFunctional:s,elementsFunctional:a}},891:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=e=>{try{let t=300;class s{constructor(){this.modalObjects=document.querySelectorAll(`.${e.modalObjects}`),this.modalOverlay=document.querySelector(`.${e.modalOverlay}`),this.clickElement=document.querySelectorAll(`.${e.clickElement}`),this.clsBtnElement=document.querySelector(`.${e.clsBtnElement}`),this.objList=[]}eventLogic(s){s.target.classList.contains(e.clickElement)&&n.openFunctional(this.objList,t),s.target.classList.contains(e.clsBtnElement)&&n.clsFunctional(this.objList,t)}pusher(e){a.objList.push(e)}addEvent(e){e.addEventListener("click",(e=>{e.preventDefault(),a.eventLogic(e)}))}start(){i.separator(this.modalObjects,this.pusher),i.separator(this.modalOverlay,this.pusher),i.separator(this.clickElement,this.addEvent),i.separator(this.clsBtnElement,this.addEvent)}}const a=new s;a.start()}catch(e){console.log("!!!!!modal error",e)}}},168:e=>{class t{constructor(e,t,s,a,r,n){this.parent=e,this.items=t,this.arrows=[s,a],this.stay=r,this.amountGroup=n}}const s=new t("wrapp__benefits","benefits__item","benefits__arrow--left","benefits__arrow--right","start",3),a=new t("wrapp__services","service__item","services__arrow--left","services__arrow--right","start",2);class r{constructor(e,t,s,a){this.modalObjects=e,this.modalOverlay=t,this.clickElement=s,this.clsBtnElement=a}}const n=new r("header-modal","overlay","btn-cb","header-modal__close"),i=new r("services-modal","overlay","btn-sm","services-modal__close"),o=new r("img-responsive","overlay","img-responsive","overlay"),l=new class{constructor(e,t){this.upScrollBtn=e,this.bottomLine=t}}("smooth-scroll","benefits"),c=new class{constructor(e,t,s,a){this.nameInput=e,this.namePhone=t,this.nameEmail=s,this.nameMessage=a}}('input[name="fio"]','input[name="phone"]'),m=new class{constructor(e,t,s,a){this.sendAdress=e,this.submitBtn=t,this.submitBtnModal=s,this.idTotal=a}}("https://jsonplaceholder.typicode.com/posts","btn-form","btn-form-modal","calc-total"),u=new class{constructor(e,t,s,a){this.idSquare=e,this.idType=t,this.idTypeMaterial=s,this.idTotal=a}}("calc-input","calc-type","calc-type-material","calc-total"),h=new class{constructor(e,t,s,a,r){this.days=e,this.hours=t,this.minutes=s,this.seconds=a,this.deadline=r}}("count_1","count_2","count_3","count_4","13.june2022, 21:00");e.exports={beefisSliderParams:s,servicesSliderParams:a,callBackParams:n,servicesParams:i,certificateParams:o,scrollerParams:l,validatorParams:c,sendFormParams:m,calcParams:u,timerParams:h}},803:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=e=>{try{class t{constructor(){this.upScrollBtn=document.querySelector(`.${e.upScrollBtn}`),this.bottomElem=document.getElementById(e.bottomLine),this.bottomLine=this.bottomElem.offsetTop}scrollUp(){this.upScrollBtn.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}scrollController(e=610){window.pageYOffset>e?this.upScrollBtn.style.display="block":this.upScrollBtn.style.display="none"}callBack(){s.scrollController(this.bottomLine)}scrollWatcher(){window.addEventListener("scroll",a(this.callBack,150))}start(){this.scrollUp(),this.scrollController(),this.scrollWatcher()}}const s=new t;s.start()}catch(e){console.log("!!!!!scroiier error",e)}}},834:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=e=>{try{class t{constructor(){this.total=document.getElementById(e.idTotal),this.data={}}sendData(t){const s=fetch(e.sendAdress,{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).catch((e=>console.log(e,'Ошибка отловлена "catch при отправке"')));console.log(s)}start(){}}class s extends t{constructor(){super(),this.submitBtn=document.querySelectorAll(`.${e.submitBtn}`),this.submitBtnModal=document.querySelectorAll(`.${e.submitBtnModal}`)}btnClickLogic(e){let t;const s=[e.parentElement.parentElement.parentElement.parentElement.querySelectorAll('input[type="text"]'),e.parentElement.parentElement.parentElement.querySelectorAll('input[type="text"]')];t=e.classList.contains("btn-form")?s[0]:s[1],t[0].value.length>1&&t[1].value.length>10?(this.data.name=t[0].value,this.data.phone=t[1].value,null===this.total||""===this.total.value?this.data.total=0:this.data.total=+this.total.value,this.sendData(this.data)):console.log("xyz")}addEvent(e){e.addEventListener("click",(t=>{t.preventDefault(),a.btnClickLogic(e)}))}start(){i.separator(this.submitBtn,this.addEvent),i.separator(this.submitBtnModal,this.addEvent)}}const a=new s;a.start()}catch(e){console.log("!!!!!sendForm error",e)}}},613:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=e=>{try{let t,s,r=5e3,i=0;class o{constructor(e){this.slaiderblock=document.querySelector(`.${e}`)}start(){this.slaiderblock.style.justifyContent="center"}}class l extends o{constructor(e){super(),this.slaiderItem=document.querySelectorAll(`.${e}`),this.idInterval="idInterval",this.subarray=[],this.block=[]}visibleItems(e){this.block=this.subarray[e],this.slaiderItem.forEach((e=>{e.style.display="none"})),n.openFunctional(this.block,500)}subArrayItems(e){let t=[];this.slaiderItem.forEach((e=>{t.push(e)}));let s=e;this.subarray=[];for(let e=0;e<Math.ceil(t.length/s);e++)this.subarray[e]=t.slice(e*s,e*s+s)}start(){this.subArrayItems(s),this.visibleItems(0)}}class c extends l{constructor(e){super(),this.slaiderarrow=document.querySelectorAll(`.${e}>div`)}slideLeft(){i--,-1===i&&(i=y.subarray.length-1),y.visibleItems(i)}sliderRight(){i++,i===y.subarray.length&&(i=0),y.visibleItems(i)}start(){}}class m{constructor(){}clickersLogic(t){t.target.parentElement.classList.contains(e.arrows[0])&&g.sliderRight(),t.target.parentElement.classList.contains(e.arrows[1])&&g.slideLeft()}mouseoverWatcher(){d(),p.slaiderblock.addEventListener("mouseout",h)}start(){p.slaiderblock.addEventListener("mouseover",this.mouseoverWatcher),p.slaiderblock.addEventListener("click",this.clickersLogic)}}const u=()=>{screen.width<576?(s=1,y.start()):(s=e.amountGroup,y.start())},h=()=>{t=setInterval(g.sliderRight,r)},d=()=>{clearInterval(t)},p=new o(e.parent),y=new l(e.items),g=new c(e.arrows),v=new m(e);p.start(),window.addEventListener("resize",a(u,50)),u(),g.start(),h(),v.start()}catch(e){console.log("!!!!!slider error",e)}}},410:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=function(e){try{class t{constructor(){this.elemDays=document.querySelectorAll(`.${e.days}>span`),this.elemHours=document.querySelectorAll(`.${e.hours}>span`),this.elemMinutes=document.querySelectorAll(`.${e.minutes}>span`),this.elemSeconds=document.querySelectorAll(`.${e.seconds}>span`)}twoDigits(e){return e<10?e="0"+e:e}getTimeRemaining(){let t=(new Date(e.deadline).getTime()-(new Date).getTime())/1e3,s=Math.floor(t/60/60/24),a=Math.floor(t/60/60%24),r=Math.floor(t/60%60),n=Math.floor(t%60);return t<=0?{timeRemaining:t,days:0,hours:0,minutes:0,seconds:0}:{timeRemaining:t,days:s,hours:a,minutes:r,seconds:n}}timeManager(e){let t,a=s.getTimeRemaining();switch(e){case s.elemDays:t=a.days;break;case s.elemHours:t=a.hours;break;case s.elemMinutes:t=a.minutes;break;case s.elemSeconds:t=a.seconds}e.forEach((e=>{e.textContent=s.twoDigits(t)}))}elemBuffer(){s.timeManager(s.elemDays),s.timeManager(s.elemHours),s.timeManager(s.elemMinutes),s.timeManager(s.elemSeconds)}intervalUp(){this.getTimeRemaining().timeRemaining>0&&setInterval(this.elemBuffer,1e3),this.elemBuffer()}start(){this.intervalUp()}}const s=new t;s.start()}catch(e){console.log("!!!!!timer error",e)}}},738:(e,t,s)=>{const{debounce:a,animate:r,opacityFunctional:n,elementsFunctional:i}=s(956);e.exports=e=>{try{class t{constructor(){this.nameInput=document.querySelectorAll(e.nameInput),this.namePhone=document.querySelectorAll(e.namePhone),this.regexps={num:/\D+/,tel:/[^\d+\)\(\-]/g,ru:/[^а-яА-Я\s\-]/g,mail:/[^\w0-9\@\-\_\.\!\~\*\']/gi,msg:/[^а-яА-Я\s\-]/g}}flag(e){let t;switch(e){case"num":t=this.regexps.num;break;case"tel":t=this.regexps.tel;break;case"ru":t=this.regexps.ru;break;case"mail":t=this.regexps.mail;break;case"msg":t=this.regexps.msg}return t}repleacer(e,t){e.target.value=e.target.value.replace(this.flag(t),""),e.target.value=e.target.value.replace(/\s+/g," ").trim(),"ru"===t&&(e.target.value=e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1).toLowerCase())}eventer(e,t){let s;s="input",e.addEventListener("input",(e=>{this.repleacer(e,t)}))}foreacher(e,t){e.forEach(((e,s)=>{this.eventer(e,t)}))}start(){this.foreacher(this.nameInput,"ru"),this.foreacher(this.namePhone,"tel")}}(new t).start()}catch(e){console.log("!!!!!validator error",e)}}}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,s),n.exports}(()=>{const{beefisSliderParams:e,servicesSliderParams:t,callBackParams:a,servicesParams:r,certificateParams:n,scrollerParams:i,validatorParams:o,sendFormParams:l,calcParams:c,timerParams:m}=s(168),u=s(613),h=s(891),d=s(803),p=s(738),y=s(834),g=s(84),v=s(410),b=s(380);u(e),u(t),h(a),h(r),b(),d(i),p(o),y(l),g(c),v(m)})()})();