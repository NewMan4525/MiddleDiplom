(()=>{"use strict";var e={956:e=>{e.exports={debounce:function(e,t){let s;return function(){clearTimeout(s),s=setTimeout(e,t)}},animate:function({timing:e,draw:t,duration:s}){let r=performance.now();requestAnimationFrame((function i(a){let n=(a-r)/s;n>1&&(n=1);let o=e(n);t(o),n<1&&requestAnimationFrame(i)}))}}},891:(e,t,s)=>{const{debounce:r,animate:i}=s(956);e.exports=()=>{}},613:(e,t,s)=>{const{debounce:r,animate:i}=s(956);e.exports=(e,t,s,a)=>{try{let n,o,l=5e3,c=0;class d{constructor(e){this.slaiderblock=document.querySelector(`.${e}`)}listeners(e){switch(e){case f.slaiderarrow[0]:e.addEventListener("click",f.slideLeft);break;case f.slaiderarrow[1]:e.addEventListener("click",f.sliderRight)}e.addEventListener("mouseover",y),e.addEventListener("mouseout",b)}start(){this.slaiderblock.style.justifyContent="center",this.listeners(this.slaiderblock)}}class u extends d{constructor(e){super(),this.slaiderItem=document.querySelectorAll(`.${e}`),this.idInterval="idInterval",this.subarray=[],this.block=[]}visibleItems(e){this.block=this.subarray[e],this.slaiderItem.forEach((e=>{e.style.display="none"})),this.block.forEach((e=>{e.style.display="block",e.style.opacity="0",i({duration:500,timing:e=>Math.pow(e,1),draw(t){e.style.opacity=100*t+"%"}})}))}subArrayItems(e){let t=[];this.slaiderItem.forEach((e=>{t.push(e)}));let s=e;this.subarray=[];for(let e=0;e<Math.ceil(t.length/s);e++)this.subarray[e]=t.slice(e*s,e*s+s)}start(){this.subArrayItems(o),this.visibleItems(0)}}class h extends u{constructor(e){super(),this.slaiderarrow=document.querySelectorAll(`.${e}>div`)}slideLeft(){c--,-1===c&&(c=w.subarray.length-1),w.visibleItems(c)}sliderRight(){c++,c===w.subarray.length&&(c=0),w.visibleItems(c)}start(){v.listeners(this.slaiderarrow[0]),v.listeners(this.slaiderarrow[1])}}const m=()=>{screen.width<576?(o=1,w.start()):(o=a,w.start())},b=()=>{n=setInterval(f.sliderRight,l)},y=()=>{clearInterval(n)},v=new d(e),w=new u(t),f=new h(s);v.start(),window.addEventListener("resize",r(m,50)),m(),f.start(),b()}catch(e){console.log("!!!!!slider error",e)}}}},t={};function s(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}(()=>{const e=s(613),t=s(891);e("benefits-wrap","benefits__item","benefits-arrows",3),e("row","col-md-12","services-arrows",2),t()})()})();