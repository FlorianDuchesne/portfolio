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





////////LOADER/////////////
// Attendez que le document soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
  if (document.readyState === "complete") {
    // Le chargement est instantané, masquez le loader immédiatement
    hideLoader();
  } else {
    // Le chargement n'est pas instantané, attachez un gestionnaire d'événements pour masquer le loader une fois que tout est chargé
    document.body.classList.add("loading");
    window.addEventListener("load", hideLoader);
  }
});

function hideLoader() {
  // Masquez le loader
  document.getElementById("loader").style.display = "none";
  document.body.classList.remove("loading"); // Affichez le contenu de la page

  document.getElementById("content").style.display = "block";
} ////////LOADER/////////////



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akMsQ0FBaEI7SUFDQSxJQUFJaUIsTUFBTSxHQUFHWCxlQUFlLENBQUNWLGFBQWhCLENBQThCLFNBQTlCLENBQWI7SUFDQW9CLFNBQVMsQ0FBQ2IsT0FBVixDQUFrQixVQUFBQyxPQUFPLEVBQUk7TUFDM0JBLE9BQU8sQ0FBQzNCLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQVN3QixLQUFULEVBQWU7UUFDL0NnQixNQUFNLENBQUNSLEdBQVAsR0FBYUwsT0FBTyxDQUFDSyxHQUFyQjtNQUNELENBRkQ7SUFHRCxDQUpEO0lBTUEsSUFBSVMsU0FBUyxHQUFHWixlQUFlLENBQUNWLGFBQWhCLENBQThCLFdBQTlCLENBQWhCO0lBQ0FzQixTQUFTLENBQUN6QyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFTd0IsS0FBVCxFQUFlO01BQ2pESSxVQUFVLENBQUNDLGVBQUQsQ0FBVjtJQUNELENBRkQ7SUFHQUssVUFBVSxDQUFDbEMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBUzBDLENBQVQsRUFBVztNQUM5Q2QsVUFBVSxDQUFDQyxlQUFELENBQVY7SUFDRCxDQUZEO0VBR0QsQ0ExQkQ7QUEyQkQsQ0E1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcG9ydGZvbGlvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vTE9BREVSLy8vLy8vLy8vLy8vL1xuXG4vLyBBdHRlbmRleiBxdWUgbGUgZG9jdW1lbnQgc29pdCBjb21wbMOodGVtZW50IGNoYXJnw6lcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAvLyBMZSBjaGFyZ2VtZW50IGVzdCBpbnN0YW50YW7DqSwgbWFzcXVleiBsZSBsb2FkZXIgaW1tw6lkaWF0ZW1lbnRcbiAgICBoaWRlTG9hZGVyKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gTGUgY2hhcmdlbWVudCBuJ2VzdCBwYXMgaW5zdGFudGFuw6ksIGF0dGFjaGV6IHVuIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50cyBwb3VyIG1hc3F1ZXIgbGUgbG9hZGVyIHVuZSBmb2lzIHF1ZSB0b3V0IGVzdCBjaGFyZ8OpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGluZ1wiKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaGlkZUxvYWRlcik7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBoaWRlTG9hZGVyKCkge1xuICAvLyBNYXNxdWV6IGxlIGxvYWRlclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gIC8vIEFmZmljaGV6IGxlIGNvbnRlbnUgZGUgbGEgcGFnZVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cbi8vLy8vLy8vTE9BREVSLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgJy9ub2RlX21vZHVsZXMvc3dpcGVyL3N3aXBlci1idW5kbGUubWluLmpzJztcblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcblxuICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgfSxcblxuICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG59KTtcblxubGV0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtYmFyc1wiKTtcbmxldCBjbG9zZUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmEtdGltZXNcIik7XG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbmxldCBtZW51SXRlbXMgPSBuYXYucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJyZXZlYWxNZW51XCIpO1xuICBjbG9zZUhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICByZW1vdmVNZW51KCk7XG4gIH0pO1xuICBtZW51SXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICB9KVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiByZW1vdmVNZW51KCl7XG4gIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwicmV2ZWFsTWVudVwiKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChwcm9qZXRUb0Rpc3BsYXkpe1xuICBpZiAocHJvamV0VG9EaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoJy5zbWFsbFBpY3MnKSAhPT0gbnVsbCl7XG4gICAgbGV0IGZpcnN0UGljID0gcHJvamV0VG9EaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoJy5zbWFsbFBpY3MnKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBwcm9qZXRUb0Rpc3BsYXkucXVlcnlTZWxlY3RvcignLmJpZ1BpYycpLnNyYyA9IGZpcnN0UGljLnNyYzsgIFxuICB9IFxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gIGJhY2tHcm91bmQuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZE5vbmUnKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBiYWNrR3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmQnKTtcbiAgICBiYWNrR3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmROb25lJyk7XG4gIH0sIDEwMDApO1xuICBwcm9qZXRUb0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcInJldmVhbFByb2pldEluZGV4XCIpOyAgXG4gIHByb2pldFRvRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwicmV2ZWFsUHJvamV0XCIpOyAgXG59XG5cbmxldCBwcm9qZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZXRcIik7XG5sZXQgYmFja0dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dyb3VuZFNpbmdsZVByb2pldFwiKTtcblxucHJvamV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGJhY2tHcm91bmQuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMTUpO1xuICAgIGxldCBwcm9qZXRUb0Rpc3BsYXkgPSBcIiNwcm9qZXREZXRhaWxcIiArIGlkO1xuICAgIHByb2pldFRvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvamV0VG9EaXNwbGF5KTtcbiAgICBwcm9qZXRUb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInJldmVhbFByb2pldEluZGV4XCIpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwcm9qZXRUb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgncmV2ZWFsUHJvamV0Jyk7XG4gICAgfSwgMTApO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gICAgbGV0IHNtYWxsUGljcyA9IHByb2pldFRvRGlzcGxheS5xdWVyeVNlbGVjdG9yQWxsKCcuc21hbGxQaWNzIGltZycpO1xuICAgIGxldCBiaWdQaWMgPSBwcm9qZXRUb0Rpc3BsYXkucXVlcnlTZWxlY3RvcignLmJpZ1BpYycpO1xuICAgIHNtYWxsUGljcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgYmlnUGljLnNyYyA9IGVsZW1lbnQuc3JjO1xuICAgICAgfSlcbiAgICB9KVxuXG4gICAgbGV0IGNsb3NlSXRlbSA9IHByb2pldFRvRGlzcGxheS5xdWVyeVNlbGVjdG9yKCcuZmEtdGltZXMnKTtcbiAgICBjbG9zZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICBjbG9zZU1vZGFsKHByb2pldFRvRGlzcGxheSk7XG4gICAgfSlcbiAgICBiYWNrR3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICBjbG9zZU1vZGFsKHByb2pldFRvRGlzcGxheSk7XG4gICAgfSk7IFxuICB9KVxufSk7XG5cbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwiaGlkZUxvYWRlciIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aW5kb3ciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInJlbW92ZSIsInN3aXBlciIsIlN3aXBlciIsInBhZ2luYXRpb24iLCJlbCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJoYW1idXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VIYW1idXJnZXIiLCJuYXYiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlbnQiLCJyZW1vdmVNZW51IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbG9zZU1vZGFsIiwicHJvamV0VG9EaXNwbGF5IiwiZmlyc3RQaWMiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInNyYyIsIm92ZXJmbG93IiwiYmFja0dyb3VuZCIsInNldFRpbWVvdXQiLCJwcm9qZXRzIiwiaWQiLCJzbGljZSIsInNtYWxsUGljcyIsImJpZ1BpYyIsImNsb3NlSXRlbSIsImUiXSwic291cmNlUm9vdCI6IiJ9