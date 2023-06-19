"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["portfolio"],{

/***/ "./assets/portfolio.js":
/*!*****************************!*\
  !*** ./assets/portfolio.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_swiper_swiper_bundle_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/swiper/swiper-bundle.min.js */ "./node_modules/swiper/swiper-bundle.min.js");






var swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var hamburger = document.querySelector(".fa-bars");
var closeHamburger = document.querySelector(".fa-times");
var nav = document.querySelector("nav");
var menuItems = nav.querySelectorAll("li");
hamburger.addEventListener('click', function (event) {
  nav.classList.add("revealMenu");
  closeHamburger.addEventListener('click', function (event) {
    removeMenu();
  });
  menuItems.forEach(function (element) {
    element.addEventListener('click', function (event) {
      removeMenu();
    });
  });
});

function removeMenu() {
  nav.classList.remove("revealMenu");
}

function closeModal(projetToDisplay) {
  if (projetToDisplay.querySelector('.smallPics') !== null) {
    var firstPic = projetToDisplay.querySelector('.smallPics').firstElementChild;
    projetToDisplay.querySelector('.bigPic').src = firstPic.src;
  }

  document.body.style.overflow = "auto";
  backGround.classList.add('backgroundNone');
  setTimeout(function () {
    backGround.classList.remove('background');
    backGround.classList.remove('backgroundNone');
  }, 1000);
  projetToDisplay.classList.remove("revealProjetIndex");
  projetToDisplay.classList.remove("revealProjet");
}

var projets = document.querySelectorAll(".projet");
var backGround = document.querySelector("#backgroundSingleProjet");
projets.forEach(function (element) {
  element.addEventListener('click', function (event) {
    backGround.classList.add('background');
    var id = element.id.slice(15);
    var projetToDisplay = "#projetDetail" + id;
    projetToDisplay = document.querySelector(projetToDisplay);
    projetToDisplay.classList.add("revealProjetIndex");
    setTimeout(function () {
      projetToDisplay.classList.add('revealProjet');
    }, 10);
    document.body.style.overflow = "hidden";
    var smallPics = projetToDisplay.querySelectorAll('.smallPics img');
    var bigPic = projetToDisplay.querySelector('.bigPic');
    smallPics.forEach(function (element) {
      element.addEventListener('click', function (event) {
        bigPic.src = element.src;
      });
    });
    var closeItem = projetToDisplay.querySelector('.fa-times');
    closeItem.addEventListener('click', function (event) {
      closeModal(projetToDisplay);
    });
    backGround.addEventListener('click', function (e) {
      closeModal(projetToDisplay);
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--711a0d","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-6036ed"], () => (__webpack_exec__("./assets/portfolio.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Zm9saW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcvbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5qcyc7XG5cbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG5cbiAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gIH0sXG5cbiAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxufSk7XG5cbmxldCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWJhcnNcIik7XG5sZXQgY2xvc2VIYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXRpbWVzXCIpO1xubGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5sZXQgbWVudUl0ZW1zID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsTWVudVwiKTtcbiAgY2xvc2VIYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgcmVtb3ZlTWVudSgpO1xuICB9KTtcbiAgbWVudUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgICByZW1vdmVNZW51KCk7XG4gICAgfSlcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlTWVudSgpe1xuICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInJldmVhbE1lbnVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwocHJvamV0VG9EaXNwbGF5KXtcbiAgaWYgKHByb2pldFRvRGlzcGxheS5xdWVyeVNlbGVjdG9yKCcuc21hbGxQaWNzJykgIT09IG51bGwpe1xuICAgIGxldCBmaXJzdFBpYyA9IHByb2pldFRvRGlzcGxheS5xdWVyeVNlbGVjdG9yKCcuc21hbGxQaWNzJykuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgcHJvamV0VG9EaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoJy5iaWdQaWMnKS5zcmMgPSBmaXJzdFBpYy5zcmM7ICBcbiAgfSBcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICBiYWNrR3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmROb25lJyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgYmFja0dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZ3JvdW5kJyk7XG4gICAgYmFja0dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrZ3JvdW5kTm9uZScpO1xuICB9LCAxMDAwKTtcbiAgcHJvamV0VG9EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJyZXZlYWxQcm9qZXRJbmRleFwiKTsgIFxuICBwcm9qZXRUb0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcInJldmVhbFByb2pldFwiKTsgIFxufVxuXG5sZXQgcHJvamV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamV0XCIpO1xubGV0IGJhY2tHcm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tncm91bmRTaW5nbGVQcm9qZXRcIik7XG5cbnByb2pldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBiYWNrR3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcbiAgICBsZXQgaWQgPSBlbGVtZW50LmlkLnNsaWNlKDE1KTtcbiAgICBsZXQgcHJvamV0VG9EaXNwbGF5ID0gXCIjcHJvamV0RGV0YWlsXCIgKyBpZDtcbiAgICBwcm9qZXRUb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2pldFRvRGlzcGxheSk7XG4gICAgcHJvamV0VG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxQcm9qZXRJbmRleFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcHJvamV0VG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ3JldmVhbFByb2pldCcpO1xuICAgIH0sIDEwKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgIGxldCBzbWFsbFBpY3MgPSBwcm9qZXRUb0Rpc3BsYXkucXVlcnlTZWxlY3RvckFsbCgnLnNtYWxsUGljcyBpbWcnKTtcbiAgICBsZXQgYmlnUGljID0gcHJvamV0VG9EaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoJy5iaWdQaWMnKTtcbiAgICBzbWFsbFBpY3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGJpZ1BpYy5zcmMgPSBlbGVtZW50LnNyYztcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGxldCBjbG9zZUl0ZW0gPSBwcm9qZXRUb0Rpc3BsYXkucXVlcnlTZWxlY3RvcignLmZhLXRpbWVzJyk7XG4gICAgY2xvc2VJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgY2xvc2VNb2RhbChwcm9qZXRUb0Rpc3BsYXkpO1xuICAgIH0pXG4gICAgYmFja0dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgY2xvc2VNb2RhbChwcm9qZXRUb0Rpc3BsYXkpO1xuICAgIH0pOyBcbiAgfSlcbn0pO1xuXG4iXSwibmFtZXMiOlsic3dpcGVyIiwiU3dpcGVyIiwicGFnaW5hdGlvbiIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlSGFtYnVyZ2VyIiwibmF2IiwibWVudUl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZU1lbnUiLCJmb3JFYWNoIiwiZWxlbWVudCIsInJlbW92ZSIsImNsb3NlTW9kYWwiLCJwcm9qZXRUb0Rpc3BsYXkiLCJmaXJzdFBpYyIsImZpcnN0RWxlbWVudENoaWxkIiwic3JjIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJiYWNrR3JvdW5kIiwic2V0VGltZW91dCIsInByb2pldHMiLCJpZCIsInNsaWNlIiwic21hbGxQaWNzIiwiYmlnUGljIiwiY2xvc2VJdGVtIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=