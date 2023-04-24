(self["webpackChunk"] = self["webpackChunk"] || []).push([["superFantome_lecture"],{

/***/ "./assets/superfantome_lecture.js":
/*!****************************************!*\
  !*** ./assets/superfantome_lecture.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_superfantome_superfantome_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/superfantome/superfantome.scss */ "./assets/styles/superfantome/superfantome.scss");
/* harmony import */ var _styles_superfantome_lecture_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/superfantome/lecture.scss */ "./assets/styles/superfantome/lecture.scss");





var chewinggum = false;
var vautourKO = false;
var triche = false;
document.querySelector("#inventaire").innerHTML = "<li>Spray anti-requins (une dose)</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
document.querySelector("#modeTriche").addEventListener("click", function () {
  document.querySelector("#modeTriche").innerHTML = "<a href='lecture.html'>Désactiver mode Triche</a>";
  triche = true;
  document.querySelector("main").classList.add("mainTriche");
  document.querySelector("footer").classList.add("footerTriche");
  document.querySelectorAll(".clic").forEach(function (item) {
    item.parentElement.parentElement.classList.remove("hidden");
    item.parentElement.parentElement.classList.add("triche");
  });
});
document.querySelectorAll(".clic").forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (triche === false) {
      event.preventDefault();
      this.parentElement.parentElement.classList.add("hidden");
    }

    console.log(this); // this.href.

    if (this.hash === "#planche1") {
      chewinggum = false;
      console.log(chewinggum);
      vautourKO = false;
      console.log(vautourKO);
      document.querySelector("#inventaire").innerHTML = "<li>Spray anti-requins (une dose)</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
    }

    if (this.parentElement.parentElement.id === "planche12") {
      chewinggum = true;
      console.log(chewinggum);
      document.querySelector("#inventaire").innerHTML += "<li>Chewing-gum</li>";
    }

    if (this.hash === "#planche6") {
      vautourKO = true;
      console.log(vautourKO);
      document.querySelector("#inventaire").innerHTML = "<li>Spray anti-requins : zéro dose !</li><li>Super soda (une bouteille)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>"; // if (chewinggum === true) {
      //   document.querySelector("#inventaire").innerHTML +=
      //     "<li>Chewing-gum</li>";
      // }
    }

    if (this.hash === "#planche20") {
      if (vautourKO === true) {
        document.querySelector("#inventaire").innerHTML = "<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
      } else {
        document.querySelector("#inventaire").innerHTML = "<li>Spray anti-requins (une dose)</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
      }

      if (chewinggum === true) {
        document.querySelector("#inventaire").innerHTML += "<li>Chewing-gum</li>";
      }
    }

    if (this.hash === "#planche35") {
      document.querySelector("#inventaire").innerHTML = "<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";

      if (chewinggum === true) {
        document.querySelector("#inventaire").innerHTML += "<li>Chewing-gum</li>";
      }
    }

    if (this.hash === "#planche43") {
      document.querySelector("#inventaire").innerHTML = "<li>Spray anti-requins : zéro dose !</li><li>Lunettes infra-rouges</li><li>Super Ventouses</li><li>Mini-voiture téléguidée</li>";
    }

    if (this.parentElement.parentElement.id === "planche17") {
      if (vautourKO === true) {
        document.querySelector("#planche18").classList.remove("hidden");
      } else {
        document.querySelector("#planche26").classList.remove("hidden");
      }
    } else if (this.parentElement.parentElement.id === "planche33") {
      if (vautourKO === true) {
        document.querySelector("#planche34").classList.remove("hidden");
      } else {
        document.querySelector("#planche35").classList.remove("hidden");
      }
    } else if (this.parentElement.parentElement.id === "planche41") {
      if (chewinggum === true) {
        document.querySelector("#planche43").classList.remove("hidden");
      } else {
        document.querySelector("#planche42").classList.remove("hidden");
      }
    } else {
      document.querySelector(this.hash).classList.remove("hidden");
    }
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./assets/styles/superfantome/lecture.scss":
/*!*************************************************!*\
  !*** ./assets/styles/superfantome/lecture.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/superfantome/superfantome.scss":
/*!******************************************************!*\
  !*** ./assets/styles/superfantome/superfantome.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--711a0d"], () => (__webpack_exec__("./assets/superfantome_lecture.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRCO0FBQ3ZELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zdXBlcmZhbnRvbWVfbGVjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zdXBlcmZhbnRvbWUvbGVjdHVyZS5zY3NzP2UxYjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zdXBlcmZhbnRvbWUvc3VwZXJmYW50b21lLnNjc3M/ZTdkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL3N1cGVyZmFudG9tZS9zdXBlcmZhbnRvbWUuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N1cGVyZmFudG9tZS9sZWN0dXJlLnNjc3MnO1xuXG52YXIgY2hld2luZ2d1bSA9IGZhbHNlO1xudmFyIHZhdXRvdXJLTyA9IGZhbHNlO1xudmFyIHRyaWNoZSA9IGZhbHNlO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnZlbnRhaXJlXCIpLmlubmVySFRNTCA9XG4gIFwiPGxpPlNwcmF5IGFudGktcmVxdWlucyAodW5lIGRvc2UpPC9saT48bGk+U3VwZXIgc29kYSAodW5lIGJvdXRlaWxsZSk8L2xpPjxsaT5MdW5ldHRlcyBpbmZyYS1yb3VnZXM8L2xpPjxsaT5TdXBlciBWZW50b3VzZXM8L2xpPjxsaT5NaW5pLXZvaXR1cmUgdMOpbMOpZ3VpZMOpZTwvbGk+XCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kZVRyaWNoZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGVUcmljaGVcIikuaW5uZXJIVE1MID1cbiAgICBcIjxhIGhyZWY9J2xlY3R1cmUuaHRtbCc+RMOpc2FjdGl2ZXIgbW9kZSBUcmljaGU8L2E+XCI7XG4gIHRyaWNoZSA9IHRydWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluVHJpY2hlXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJUcmljaGVcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xpY1wiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHJpY2hlXCIpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsaWNcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAodHJpY2hlID09PSBmYWxzZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIC8vIHRoaXMuaHJlZi5cbiAgICBpZiAodGhpcy5oYXNoID09PSBcIiNwbGFuY2hlMVwiKSB7XG4gICAgICBjaGV3aW5nZ3VtID0gZmFsc2U7XG4gICAgICBjb25zb2xlLmxvZyhjaGV3aW5nZ3VtKTtcbiAgICAgIHZhdXRvdXJLTyA9IGZhbHNlO1xuICAgICAgY29uc29sZS5sb2codmF1dG91cktPKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW52ZW50YWlyZVwiKS5pbm5lckhUTUwgPVxuICAgICAgICBcIjxsaT5TcHJheSBhbnRpLXJlcXVpbnMgKHVuZSBkb3NlKTwvbGk+PGxpPlN1cGVyIHNvZGEgKHVuZSBib3V0ZWlsbGUpPC9saT48bGk+THVuZXR0ZXMgaW5mcmEtcm91Z2VzPC9saT48bGk+U3VwZXIgVmVudG91c2VzPC9saT48bGk+TWluaS12b2l0dXJlIHTDqWzDqWd1aWTDqWU8L2xpPlwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQgPT09IFwicGxhbmNoZTEyXCIpIHtcbiAgICAgIGNoZXdpbmdndW0gPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coY2hld2luZ2d1bSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludmVudGFpcmVcIikuaW5uZXJIVE1MICs9IFwiPGxpPkNoZXdpbmctZ3VtPC9saT5cIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzaCA9PT0gXCIjcGxhbmNoZTZcIikge1xuICAgICAgdmF1dG91cktPID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHZhdXRvdXJLTyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludmVudGFpcmVcIikuaW5uZXJIVE1MID1cbiAgICAgICAgXCI8bGk+U3ByYXkgYW50aS1yZXF1aW5zIDogesOpcm8gZG9zZSAhPC9saT48bGk+U3VwZXIgc29kYSAodW5lIGJvdXRlaWxsZSk8L2xpPjxsaT5MdW5ldHRlcyBpbmZyYS1yb3VnZXM8L2xpPjxsaT5TdXBlciBWZW50b3VzZXM8L2xpPjxsaT5NaW5pLXZvaXR1cmUgdMOpbMOpZ3VpZMOpZTwvbGk+XCI7XG4gICAgICAvLyBpZiAoY2hld2luZ2d1bSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludmVudGFpcmVcIikuaW5uZXJIVE1MICs9XG4gICAgICAvLyAgICAgXCI8bGk+Q2hld2luZy1ndW08L2xpPlwiO1xuICAgICAgLy8gfVxuICAgIH1cbiAgICBpZiAodGhpcy5oYXNoID09PSBcIiNwbGFuY2hlMjBcIikge1xuICAgICAgaWYgKHZhdXRvdXJLTyA9PT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludmVudGFpcmVcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIjxsaT5TcHJheSBhbnRpLXJlcXVpbnMgOiB6w6lybyBkb3NlICE8L2xpPjxsaT5MdW5ldHRlcyBpbmZyYS1yb3VnZXM8L2xpPjxsaT5TdXBlciBWZW50b3VzZXM8L2xpPjxsaT5NaW5pLXZvaXR1cmUgdMOpbMOpZ3VpZMOpZTwvbGk+XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludmVudGFpcmVcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIjxsaT5TcHJheSBhbnRpLXJlcXVpbnMgKHVuZSBkb3NlKTwvbGk+PGxpPkx1bmV0dGVzIGluZnJhLXJvdWdlczwvbGk+PGxpPlN1cGVyIFZlbnRvdXNlczwvbGk+PGxpPk1pbmktdm9pdHVyZSB0w6lsw6lndWlkw6llPC9saT5cIjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGV3aW5nZ3VtID09PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW52ZW50YWlyZVwiKS5pbm5lckhUTUwgKz1cbiAgICAgICAgICBcIjxsaT5DaGV3aW5nLWd1bTwvbGk+XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzaCA9PT0gXCIjcGxhbmNoZTM1XCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW52ZW50YWlyZVwiKS5pbm5lckhUTUwgPVxuICAgICAgICBcIjxsaT5TcHJheSBhbnRpLXJlcXVpbnMgOiB6w6lybyBkb3NlICE8L2xpPjxsaT5MdW5ldHRlcyBpbmZyYS1yb3VnZXM8L2xpPjxsaT5TdXBlciBWZW50b3VzZXM8L2xpPjxsaT5NaW5pLXZvaXR1cmUgdMOpbMOpZ3VpZMOpZTwvbGk+XCI7XG4gICAgICBpZiAoY2hld2luZ2d1bSA9PT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludmVudGFpcmVcIikuaW5uZXJIVE1MICs9XG4gICAgICAgICAgXCI8bGk+Q2hld2luZy1ndW08L2xpPlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc2ggPT09IFwiI3BsYW5jaGU0M1wiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ludmVudGFpcmVcIikuaW5uZXJIVE1MID1cbiAgICAgICAgXCI8bGk+U3ByYXkgYW50aS1yZXF1aW5zIDogesOpcm8gZG9zZSAhPC9saT48bGk+THVuZXR0ZXMgaW5mcmEtcm91Z2VzPC9saT48bGk+U3VwZXIgVmVudG91c2VzPC9saT48bGk+TWluaS12b2l0dXJlIHTDqWzDqWd1aWTDqWU8L2xpPlwiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCA9PT0gXCJwbGFuY2hlMTdcIikge1xuICAgICAgaWYgKHZhdXRvdXJLTyA9PT0gdHJ1ZSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYW5jaGUxOFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFuY2hlMjZcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkID09PSBcInBsYW5jaGUzM1wiKSB7XG4gICAgICBpZiAodmF1dG91cktPID09PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhbmNoZTM0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYW5jaGUzNVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQgPT09IFwicGxhbmNoZTQxXCIpIHtcbiAgICAgIGlmIChjaGV3aW5nZ3VtID09PSB0cnVlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhbmNoZTQzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYW5jaGU0MlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuaGFzaCkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG4gIH0pO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNoZXdpbmdndW0iLCJ2YXV0b3VyS08iLCJ0cmljaGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiaGFzaCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==