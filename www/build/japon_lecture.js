"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["japon_lecture"],{

/***/ "./assets/japon_lecture.js":
/*!*********************************!*\
  !*** ./assets/japon_lecture.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_japon_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/japon/style.scss */ "./assets/styles/japon/style.scss");
/* harmony import */ var _styles_japon_lecture_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/japon/lecture.scss */ "./assets/styles/japon/lecture.scss");


var planches = document.querySelectorAll("figure img");

for (var i = 0; i < planches.length; i++) {}

var currentSlide = planches[0];
var nextSlide = planches[0].nextElementSibling;
var previousSlide = false;
console.log(planches);
console.log(planches[0]);
console.log("current slide = ", currentSlide);
console.log("previous slide = ", previousSlide);
console.log("next slide = ", nextSlide); // navigation par les touches de clavier

window.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowLeft":
      console.log("arrowleft");

      if (currentSlide === planches[0]) {
        previousChronic();
      } else {
        clicGauche();
      }

      break;

    case "ArrowRight":
      console.log("arrowright");
      clicDroit();

      if (nextSlide === document.querySelector("figcaption")) {
        window.addEventListener("keydown", function (e) {
          switch (e.key) {
            case "ArrowRight":
              nextChronic();
              break;
          }
        });
      }

  }
});
document.getElementById("clicDroit").addEventListener("click", function (event) {
  event.preventDefault();
  clicDroit();
});
document.getElementById("clicGauche").addEventListener("click", function (event) {
  event.preventDefault();

  if (currentSlide === planches[0]) {
    console.log("condition planche 0");
    console.log(currentSlide);
    console.log(planches[0]);
    previousChronic();
  } else {
    clicGauche();
  }
});

function nextChronic() {
  window.location.href = document.getElementById("clicDroit").parentElement.href;
}

function previousChronic() {
  window.location.href = document.getElementById("clicGauche").parentElement.href;
}

function clicGauche() {
  currentSlide.classList.add("hidden");
  nextSlide = currentSlide;
  currentSlide = previousSlide;
  previousSlide = previousSlide.previousElementSibling;
  currentSlide.classList.remove("hidden");
  console.log("current slide = ", currentSlide);
  console.log("previous slide = ", previousSlide);
  console.log("next slide = ", nextSlide);

  if (currentSlide === planches[0]) {
    document.getElementById("clicGauche").addEventListener("click", function () {
      previousChronic();
    });
  }
}

function clicDroit() {
  currentSlide.classList.add("hidden");
  previousSlide = currentSlide;
  currentSlide = nextSlide;
  nextSlide = nextSlide.nextElementSibling;
  currentSlide.classList.remove("hidden");
  console.log("current slide = ", currentSlide);
  console.log("previous slide = ", previousSlide);
  console.log("next slide = ", nextSlide);

  if (nextSlide === document.querySelector("figcaption")) {
    document.getElementById("clicDroit").addEventListener("click", function () {
      nextChronic();
    });
  }
}

/***/ }),

/***/ "./assets/styles/japon/lecture.scss":
/*!******************************************!*\
  !*** ./assets/styles/japon/lecture.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/japon/style.scss":
/*!****************************************!*\
  !*** ./assets/styles/japon/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/japon_lecture.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUNtQixjQUFULENBQXdCLFdBQXhCLEVBQXFDUixnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsWUFBWTtNQUN6RU8sV0FBVztJQUNaLENBRkQ7RUFHRDtBQUNGOzs7Ozs7Ozs7OztBQzFHRDs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvamFwb25fbGVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2phcG9uL2xlY3R1cmUuc2Nzcz9kNTczIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvamFwb24vc3R5bGUuc2Nzcz82M2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvamFwb24vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2phcG9uL2xlY3R1cmUuc2Nzcyc7XG5cbnZhciBwbGFuY2hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmaWd1cmUgaW1nXCIpO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFuY2hlcy5sZW5ndGg7IGkrKykge31cbnZhciBjdXJyZW50U2xpZGUgPSBwbGFuY2hlc1swXTtcbnZhciBuZXh0U2xpZGUgPSBwbGFuY2hlc1swXS5uZXh0RWxlbWVudFNpYmxpbmc7XG52YXIgcHJldmlvdXNTbGlkZSA9IGZhbHNlO1xuY29uc29sZS5sb2cocGxhbmNoZXMpO1xuY29uc29sZS5sb2cocGxhbmNoZXNbMF0pO1xuY29uc29sZS5sb2coXCJjdXJyZW50IHNsaWRlID0gXCIsIGN1cnJlbnRTbGlkZSk7XG5jb25zb2xlLmxvZyhcInByZXZpb3VzIHNsaWRlID0gXCIsIHByZXZpb3VzU2xpZGUpO1xuY29uc29sZS5sb2coXCJuZXh0IHNsaWRlID0gXCIsIG5leHRTbGlkZSk7XG5cbi8vIG5hdmlnYXRpb24gcGFyIGxlcyB0b3VjaGVzIGRlIGNsYXZpZXJcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIHN3aXRjaCAoZS5rZXkpIHtcbiAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICBjb25zb2xlLmxvZyhcImFycm93bGVmdFwiKTtcbiAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IHBsYW5jaGVzWzBdKSB7XG4gICAgICAgIHByZXZpb3VzQ2hyb25pYygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xpY0dhdWNoZSgpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgIGNvbnNvbGUubG9nKFwiYXJyb3dyaWdodFwiKTtcbiAgICAgIGNsaWNEcm9pdCgpO1xuICAgICAgaWYgKG5leHRTbGlkZSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZpZ2NhcHRpb25cIikpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgICAgbmV4dENocm9uaWMoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgfVxufSk7XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcImNsaWNEcm9pdFwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xpY0Ryb2l0KCk7XG4gIH0pO1xuXG5kb2N1bWVudFxuICAuZ2V0RWxlbWVudEJ5SWQoXCJjbGljR2F1Y2hlXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSBwbGFuY2hlc1swXSkge1xuICAgICAgY29uc29sZS5sb2coXCJjb25kaXRpb24gcGxhbmNoZSAwXCIpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKTtcbiAgICAgIGNvbnNvbGUubG9nKHBsYW5jaGVzWzBdKTtcbiAgICAgIHByZXZpb3VzQ2hyb25pYygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGljR2F1Y2hlKCk7XG4gICAgfVxuICB9KTtcblxuZnVuY3Rpb24gbmV4dENocm9uaWMoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjbGljRHJvaXRcIlxuICApLnBhcmVudEVsZW1lbnQuaHJlZjtcbn1cblxuZnVuY3Rpb24gcHJldmlvdXNDaHJvbmljKCkge1xuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiY2xpY0dhdWNoZVwiXG4gICkucGFyZW50RWxlbWVudC5ocmVmO1xufVxuXG5mdW5jdGlvbiBjbGljR2F1Y2hlKCkge1xuICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgbmV4dFNsaWRlID0gY3VycmVudFNsaWRlO1xuICBjdXJyZW50U2xpZGUgPSBwcmV2aW91c1NsaWRlO1xuICBwcmV2aW91c1NsaWRlID0gcHJldmlvdXNTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgY29uc29sZS5sb2coXCJjdXJyZW50IHNsaWRlID0gXCIsIGN1cnJlbnRTbGlkZSk7XG4gIGNvbnNvbGUubG9nKFwicHJldmlvdXMgc2xpZGUgPSBcIiwgcHJldmlvdXNTbGlkZSk7XG4gIGNvbnNvbGUubG9nKFwibmV4dCBzbGlkZSA9IFwiLCBuZXh0U2xpZGUpO1xuICBpZiAoY3VycmVudFNsaWRlID09PSBwbGFuY2hlc1swXSkge1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjbGljR2F1Y2hlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJldmlvdXNDaHJvbmljKCk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGljRHJvaXQoKSB7XG4gIGN1cnJlbnRTbGlkZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBwcmV2aW91c1NsaWRlID0gY3VycmVudFNsaWRlO1xuICBjdXJyZW50U2xpZGUgPSBuZXh0U2xpZGU7XG4gIG5leHRTbGlkZSA9IG5leHRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGN1cnJlbnRTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc2xpZGUgPSBcIiwgY3VycmVudFNsaWRlKTtcbiAgY29uc29sZS5sb2coXCJwcmV2aW91cyBzbGlkZSA9IFwiLCBwcmV2aW91c1NsaWRlKTtcbiAgY29uc29sZS5sb2coXCJuZXh0IHNsaWRlID0gXCIsIG5leHRTbGlkZSk7XG4gIGlmIChuZXh0U2xpZGUgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmaWdjYXB0aW9uXCIpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGljRHJvaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG5leHRDaHJvbmljKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJwbGFuY2hlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcmV2aW91c1NsaWRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwicHJldmlvdXNDaHJvbmljIiwiY2xpY0dhdWNoZSIsImNsaWNEcm9pdCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0Q2hyb25pYyIsImdldEVsZW1lbnRCeUlkIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiaHJlZiIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==