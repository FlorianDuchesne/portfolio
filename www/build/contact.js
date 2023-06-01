(self["webpackChunk"] = self["webpackChunk"] || []).push([["contact"],{

/***/ "./assets/contact.js":
/*!***************************!*\
  !*** ./assets/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

var inputs = document.querySelectorAll(".fieldInput");
inputs.forEach(function (element) {
  console.log(element);
});
console.log(inputs);

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("55E9Ijuc2CVpVcwsx");
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var recaptchaResponse = grecaptcha.getResponse();

    if (recaptchaResponse === '') {
      alert("Merci de cocher la case 'Je ne suis pas un robot' avant d'envoyer votre message !");
      console.log("erreurCaptcha"); // reCaptcha n'a pas été validé, afficher une erreur ou empêcher l'envoi du formulaire

      return;
    }

    console.log(recaptchaResponse);
    var templateParams = {
      'from_name': document.querySelector('#contact_from_name').value,
      'user_email': document.querySelector('#contact_user_email').value,
      'message': document.querySelector('#contact_message').value,
      'g-recaptcha-response': recaptchaResponse
    };
    console.log(templateParams); // generate a five digit number for the contact_number variable
    // these IDs from the previous steps

    emailjs.send("contact_service", "contact_form", templateParams).then(function () {
      console.log("SUCCESS!");
      alert("Le message a bien été expédié ! Merci pour le petit mot :)");
      var inputs = document.querySelectorAll(".fieldInput");
      inputs.forEach(function (item, i) {
        item.value = "";
      });
    }, function (error) {
      console.log("FAILED...", error);
      alert("Oups ! Quelque-chose s'est mal passé. Le message ne s'est pas envoyé : /");
    });
  });
};

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--711a0d"], () => (__webpack_exec__("./assets/contact.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGRJbnB1dFwiKTtcblxuaW5wdXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgY29uc29sZS5sb2coZWxlbWVudCk7XG59KTtcbmNvbnNvbGUubG9nKGlucHV0cyk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vZGFzaGJvYXJkLmVtYWlsanMuY29tL2FkbWluL2FjY291bnRcbiAgZW1haWxqcy5pbml0KFwiNTVFOUlqdWMyQ1ZwVmN3c3hcIik7XG59KSgpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0LWZvcm1cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciByZWNhcHRjaGFSZXNwb25zZSA9IGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UoKTtcbiAgICAgIGlmIChyZWNhcHRjaGFSZXNwb25zZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoXCJNZXJjaSBkZSBjb2NoZXIgbGEgY2FzZSAnSmUgbmUgc3VpcyBwYXMgdW4gcm9ib3QnIGF2YW50IGQnZW52b3llciB2b3RyZSBtZXNzYWdlICFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyZXVyQ2FwdGNoYVwiKVxuICAgICAgICAvLyByZUNhcHRjaGEgbidhIHBhcyDDqXTDqSB2YWxpZMOpLCBhZmZpY2hlciB1bmUgZXJyZXVyIG91IGVtcMOqY2hlciBsJ2Vudm9pIGR1IGZvcm11bGFpcmVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocmVjYXB0Y2hhUmVzcG9uc2UpO1xuXG4gICAgICBsZXQgdGVtcGxhdGVQYXJhbXMgPSB7XG4gICAgICAgICdmcm9tX25hbWUnIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfZnJvbV9uYW1lJykudmFsdWUsXG4gICAgICAgICd1c2VyX2VtYWlsJyA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0X3VzZXJfZW1haWwnKS52YWx1ZSxcbiAgICAgICAgJ21lc3NhZ2UnIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfbWVzc2FnZScpLnZhbHVlLFxuICAgICAgICAnZy1yZWNhcHRjaGEtcmVzcG9uc2UnIDogcmVjYXB0Y2hhUmVzcG9uc2VcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZVBhcmFtcyk7XG4gICAgICAvLyBnZW5lcmF0ZSBhIGZpdmUgZGlnaXQgbnVtYmVyIGZvciB0aGUgY29udGFjdF9udW1iZXIgdmFyaWFibGVcbiAgICAgIC8vIHRoZXNlIElEcyBmcm9tIHRoZSBwcmV2aW91cyBzdGVwc1xuICAgICAgZW1haWxqcy5zZW5kKFwiY29udGFjdF9zZXJ2aWNlXCIsIFwiY29udGFjdF9mb3JtXCIsIHRlbXBsYXRlUGFyYW1zKS50aGVuKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTIVwiKTtcbiAgICAgICAgICBhbGVydChcIkxlIG1lc3NhZ2UgYSBiaWVuIMOpdMOpIGV4cMOpZGnDqSAhIE1lcmNpIHBvdXIgbGUgcGV0aXQgbW90IDopXCIpO1xuICAgICAgICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkSW5wdXRcIik7XG4gICAgICAgICAgaW5wdXRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4uLlwiLCBlcnJvcik7XG4gICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICBcIk91cHMgISBRdWVscXVlLWNob3NlIHMnZXN0IG1hbCBwYXNzw6kuIExlIG1lc3NhZ2UgbmUgcydlc3QgcGFzIGVudm95w6kgOiAvXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iXSwibmFtZXMiOlsiaW5wdXRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZW1haWxqcyIsImluaXQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVjYXB0Y2hhUmVzcG9uc2UiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJhbGVydCIsInRlbXBsYXRlUGFyYW1zIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwic2VuZCIsInRoZW4iLCJpdGVtIiwiaSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==