(self.webpackChunk=self.webpackChunk||[]).push([[854],{4801:(e,i,n)=>{"use strict";n(9554),n(1539),n(4747);var t=!1,r=!1,l=!1;document.querySelector("#inventaire").innerHTML="<li>Spray anti-requins (une dose)</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>",document.querySelector("#modeTriche").addEventListener("click",(function(){document.querySelector("#modeTriche").innerHTML="<a href='/superfantome/lecture'>Désactiver mode Triche</a>",l=!0,document.querySelector("main").classList.add("mainTriche"),document.querySelector("footer").classList.add("footerTriche"),document.querySelectorAll(".clic").forEach((function(e){e.parentElement.parentElement.classList.remove("hidden"),e.parentElement.parentElement.classList.add("triche")}))})),document.querySelectorAll(".clic").forEach((function(e){e.addEventListener("click",(function(e){!1===l&&(e.preventDefault(),this.parentElement.parentElement.classList.add("hidden")),console.log(this),"#planche1"===this.hash&&(t=!1,console.log(t),r=!1,console.log(r),document.querySelector("#inventaire").innerHTML="<li>Spray anti-requins (une dose)</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>"),"planche12"===this.parentElement.parentElement.id&&(t=!0,console.log(t),document.querySelector("#inventaire").innerHTML+="<li>Chewing-gum</li>"),"#planche6"===this.hash&&(r=!0,console.log(r),document.querySelector("#inventaire").innerHTML="<li>Spray anti-requins : zéro dose !</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>"),"#planche20"===this.hash&&(document.querySelector("#inventaire").innerHTML=!0===r?"<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>":"<li>Spray anti-requins (une dose)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>",!0===t&&(document.querySelector("#inventaire").innerHTML+="<li>Chewing-gum</li>")),"#planche35"===this.hash&&(document.querySelector("#inventaire").innerHTML="<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>",!0===t&&(document.querySelector("#inventaire").innerHTML+="<li>Chewing-gum</li>")),"#planche43"===this.hash&&(document.querySelector("#inventaire").innerHTML="<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>"),"planche17"===this.parentElement.parentElement.id?!0===r?document.querySelector("#planche18").classList.remove("hidden"):document.querySelector("#planche26").classList.remove("hidden"):"planche33"===this.parentElement.parentElement.id?!0===r?document.querySelector("#planche34").classList.remove("hidden"):document.querySelector("#planche35").classList.remove("hidden"):"planche41"===this.parentElement.parentElement.id?!0===t?document.querySelector("#planche43").classList.remove("hidden"):document.querySelector("#planche42").classList.remove("hidden"):document.querySelector(this.hash).classList.remove("hidden")}))}))},8533:(e,i,n)=>{"use strict";var t=n(2092).forEach,r=n(9341)("forEach");e.exports=r?[].forEach:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}},9341:(e,i,n)=>{"use strict";var t=n(7293);e.exports=function(e,i){var n=[][e];return!!n&&t((function(){n.call(null,i||function(){return 1},1)}))}},9554:(e,i,n)=>{"use strict";var t=n(2109),r=n(8533);t({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},4747:(e,i,n)=>{var t=n(7854),r=n(8324),l=n(8509),o=n(8533),u=n(8880),s=function(e){if(e&&e.forEach!==o)try{u(e,"forEach",o)}catch(i){e.forEach=o}};for(var c in r)r[c]&&s(t[c]&&t[c].prototype);s(l)}},e=>{e.O(0,[198],(()=>{return i=4801,e(e.s=i);var i}));e.O()}]);