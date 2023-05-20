(self["webpackChunk"] = self["webpackChunk"] || []).push([["portfolio"],{

/***/ "./assets/portfolio.js":
/*!*****************************!*\
  !*** ./assets/portfolio.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

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
  document.body.style.overflow = "auto";
  backGround.classList.remove('background');
  projetToDisplay.classList.add("hiddenProjet");
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
    projetToDisplay.classList.remove("hiddenProjet");
    projetToDisplay.classList.add("revealProjet");
    document.body.style.overflow = "hidden";
    var closeItem = projetToDisplay.querySelector('.fa-times');
    closeItem.addEventListener('click', function (event) {
      closeModal(projetToDisplay);
    });
    backGround.addEventListener('click', function (e) {
      closeModal(projetToDisplay);
    });
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

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


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

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
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

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var nativeSlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--711a0d"], () => (__webpack_exec__("./assets/portfolio.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzlELHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMzRCxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNoREQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9wb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLWJhcnNcIik7XG5sZXQgY2xvc2VIYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhLXRpbWVzXCIpO1xubGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5sZXQgbWVudUl0ZW1zID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwicmV2ZWFsTWVudVwiKTtcbiAgY2xvc2VIYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgcmVtb3ZlTWVudSgpO1xuICB9KTtcbiAgbWVudUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgICByZW1vdmVNZW51KCk7XG4gICAgfSlcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gcmVtb3ZlTWVudSgpe1xuICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInJldmVhbE1lbnVcIik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwocHJvamV0VG9EaXNwbGF5KXtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICBiYWNrR3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmQnKTtcbiAgcHJvamV0VG9EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5Qcm9qZXRcIik7XG4gIHByb2pldFRvRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwicmV2ZWFsUHJvamV0XCIpOyAgXG59XG5cbmxldCBwcm9qZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZXRcIik7XG5sZXQgYmFja0dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja2dyb3VuZFNpbmdsZVByb2pldFwiKTtcblxucHJvamV0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGJhY2tHcm91bmQuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICAgIGxldCBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMTUpO1xuICAgIGxldCBwcm9qZXRUb0Rpc3BsYXkgPSBcIiNwcm9qZXREZXRhaWxcIiArIGlkO1xuICAgIHByb2pldFRvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvamV0VG9EaXNwbGF5KTtcbiAgICBwcm9qZXRUb0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblByb2pldFwiKTtcbiAgICBwcm9qZXRUb0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInJldmVhbFByb2pldFwiKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICBsZXQgY2xvc2VJdGVtID0gcHJvamV0VG9EaXNwbGF5LnF1ZXJ5U2VsZWN0b3IoJy5mYS10aW1lcycpO1xuICAgIGNsb3NlSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGNsb3NlTW9kYWwocHJvamV0VG9EaXNwbGF5KTtcbiAgICB9KVxuICAgIGJhY2tHcm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgIGNsb3NlTW9kYWwocHJvamV0VG9EaXNwbGF5KTtcbiAgICB9KTsgXG4gIH0pXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyhbXS5zbGljZSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgbmF0aXZlU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyICRBcnJheSA9IEFycmF5O1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSAkQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09ICRBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZShPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyAkQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiJdLCJuYW1lcyI6WyJoYW1idXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZUhhbWJ1cmdlciIsIm5hdiIsIm1lbnVJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVNZW51IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJyZW1vdmUiLCJjbG9zZU1vZGFsIiwicHJvamV0VG9EaXNwbGF5IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJiYWNrR3JvdW5kIiwicHJvamV0cyIsImlkIiwic2xpY2UiLCJjbG9zZUl0ZW0iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==