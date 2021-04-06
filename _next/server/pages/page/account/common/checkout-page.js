module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+CHh":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAABuCAMAAABm3eR/AAAFTGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTIgMS4xNDk2MDIsIDIwMTIvMTAvMTAtMTg6MTA6MjQgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpkYW09Imh0dHA6Ly93d3cuZGF5LmNvbS9kYW0vMS4wIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpQYXlQYWw9Ind3dy5wYXlwYWwuY29tL2Jhc2UvdjEiCiAgIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIgogICBkYzptb2RpZmllZD0iMjAxNC0wOS0wNFQxNDozMzo0OS42NS0wNzowMCIKICAgZGFtOnNpemU9IjU3NDAiCiAgIGRhbTpQaHlzaWNhbHdpZHRoaW5pbmNoZXM9Ii0xLjAiCiAgIGRhbTpleHRyYWN0ZWQ9IjIwMTQtMDktMDRUMTQ6MzM6NDguMDI0LTA3OjAwIgogICBkYW06c2hhMT0iYjAzNTlhNTNjMjUzNzJlMzIyMTcxMTVmZjA3MzYwOTFiYjhiMWFhZCIKICAgZGFtOk51bWJlcm9mdGV4dHVhbGNvbW1lbnRzPSIxIgogICBkYW06RmlsZWZvcm1hdD0iUE5HIgogICBkYW06UHJvZ3Jlc3NpdmU9Im5vIgogICBkYW06UGh5c2ljYWxoZWlnaHRpbmRwaT0iLTEiCiAgIGRhbTpDb21tZW50cz0iU29mdHdhcmU6IEFkb2JlIEltYWdlUmVhZHkmI3hBOyIKICAgZGFtOk1JTUV0eXBlPSJpbWFnZS9wbmciCiAgIGRhbTpOdW1iZXJvZmltYWdlcz0iMSIKICAgZGFtOkJpdHNwZXJwaXhlbD0iOCIKICAgZGFtOlBoeXNpY2FsaGVpZ2h0aW5pbmNoZXM9Ii0xLjAiCiAgIGRhbTpQaHlzaWNhbHdpZHRoaW5kcGk9Ii0xIgogICB0aWZmOkltYWdlTGVuZ3RoPSIxMTAiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iMzE5IgogICBQYXlQYWw6c3RhdHVzPSJTb3VyY2VBcHByb3ZlZCIKICAgUGF5UGFsOnNvdXJjZU5vZGVQYXRoPSIvY29udGVudC9kYW0vUGF5UGFsRGlnaXRhbEFzc2V0cy9zcGFydGFJbWFnZXMvR2xvYmFsSW1hZ2VzL21rdGcvTG9nby9BTV9TYnlQUF9tY192c19tc19hZV9VSy5wbmciCiAgIFBheVBhbDppc1NvdXJjZT0idHJ1ZSI+CiAgIDxkYzpsYW5ndWFnZT4KICAgIDxyZGY6QmFnLz4KICAgPC9kYzpsYW5ndWFnZT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz7vtJu1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFGpPRusHTDB1vjcnoGKrigJbEIaviAE6OKn3AesrwUW+szSM39oYeBiOFZnSnNjJm+7pNEKLdNrPmkZu4k9L0i2qIXKLTk3JEjKbHLne8MlOchM3yuYWbAIXF1NjjxeX0k8Dia2mT6jpHjSpLIYnK+sh0is7z0Nfo7u7u8m51JYPF++rNH4zMgn6E15Qp+bK3jtHzibjfWWeYdSxT7jIsasTtT5nQ79GhcYm6p93zf83v8fP2mdT1AGipE53Zu+T3tyU8YcLs8Z0giEBi3PH7+K0vFprXAieUcavX8mQh9Y+VUbzp4rzE3iAwn6jB1O764+Xtj1BzS7rq4fL6CSB55vT7TExjAHm5r1hv70Yknp6e8vn9SVeOyM3cqcnkxsbGntrz63yHWDBdvWo1ED6OioSf8VdclrvdqpOp/dujteH1QIGwW8DrM6bbzuz5wMnjcMbuv9bnqX07wsfbs7nU3+Tw1NPUY7fgparHJj6QI4bIIUeavbfEruD1Q6vd7/n9QWKlK7Dkr77Y7lZiV7/ryOHx2Ftmdcjwdk1xQbfodoGp7/L317qOoSdDqtXtoa3TSTFgDqbfYH+zxOj2NpjRRrjp95yjhI+4NEFvTrbjiNDuX7vkASFpxun4+9XX+sbLQInHS7vnv+b3AG+wGix8LYW71Ov3AI/PuN3wULPg/ePlPrXmMK/jVazb7cnPHihsPrjnyt7vwcjekp/KEjWc1+bzwef4w8bYb8jtDxpjEDah29vbuLi4ADCHAJzef5m53t7ev8vfd12FxIsxsT1aHZDPO3yxKIDDDzNv3+buAD59WVRcrbTKn7HSGJfU/vHy/eO4D5LPn7TMZlpWeWRO//nx/vTjMHSo08zXHjFqdGxt3en15OTkltfyxJJEr6+vAmCf79fbwE5im9Dr3JOcvJaoyqCxikVKwDRPj4BxH2ef0kpe0s/L9vb2AJbW2WMq9Xgggb7he8fpAT+MFjGL4crStoQ24tXD7CAnAJzc+aYb7BwuADRzIzhx////////JuoP1AAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAABH2SURBVHja7J0NXBT3mceJyK5AYAUUOOyCuiqinlJXcrgEXSyKL0GIEInBNUiMNkTxFRXtZhH1iG4wAirINb5gq1GgibGJ2kQsEo2iQZOYNmlqyrWX62vMJfXueIkP9zz/mX0ZdmZY0CP9yPwMs7Pz313g6+95+f9nxnh0KLoXeSgIFH4KP4Wfwk+Rwk/hp/BT+ClS+Cn8FH4KP0U94Fd6ziafQoVQ9/ltPueQl4Ko2/zOOStPYdRNfvUCfu8rjLrJr1DAL9Qx4MUpUuqzcg1MWRbB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"

/***/ }),

/***/ "/5QC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (CartContext);

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ypaS");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "Ox+Q":
/***/ (function(module, exports) {

module.exports = require("@google-pay/button-react");

/***/ }),

/***/ "XJI2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Provider; });
/* unused harmony export Consumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XJI2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["d"]; });

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const Provider = props => {
  const {
    0: selectedCurr,
    1: selectedCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currency: 'USD',
    symbol: '$',
    value: 1
  });
  const currencyContext = {
    selectedCurr,
    selectedCurrency
  };
  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      state: selectedCurr,
      currencyContext: currencyContext
    }
  }, props.children);
};
const {
  Consumer
} = Context;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "usZV":
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),

/***/ "wdPV":
/***/ (function(module, exports) {

module.exports = require("react-paypal-button");

/***/ }),

/***/ "ypaS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paypal_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wdPV");
/* harmony import */ var react_paypal_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paypal_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/5QC");
/* harmony import */ var _public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+CHh");
/* harmony import */ var _public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XJI2");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("usZV");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _google_pay_button_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Ox+Q");
/* harmony import */ var _google_pay_button_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_google_pay_button_react__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










 // import  Razorpay = require('razorpay');
// const stripe = require('stripe')('pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7');

const getServerSideProps = async () => {
  const stripe = new Stripe("pk_test_51IYvwgAR19qkTg2RIHVWDgFEXkDifm6eeEgXFPxus4HkBdRYEisZHrj97vKXJXr64LlXA3XjCIqtRWvZ5c0l1JTn00X5Apw6MC");
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1,
    currency: "usd"
  });
  return {
    props: {
      paymentIntent
    }
  };
};

const CheckoutPage = () => {
  const cartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
  const cartItems = cartContext.state;
  const cartTotal = cartContext.cartTotal.toFixed(2);
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_8__[/* CurrencyContext */ "b"]);
  const symbol = curContext.state.symbol;
  const {
    0: obj,
    1: setObj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: payment,
    1: setPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Gpay");
  const {
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])(); // initialise the hook

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  const checkhandle = value => {
    setPayment(value);
  };
  /** Launches payment request flow when user taps on buy button. */


  const onBuyClicked = () => {
    const creditCardPaymentMethod = {
      supportedMethods: 'basic-card',
      data: {
        supportedNetworks: ['visa', 'mastercard'],
        supportedTypes: ['credit', 'debit']
      }
    };
    const supportedInstruments = [{
      supportedMethods: ['https://tez.google.com/pay'],
      //supportedMethods:[creditCardPaymentMethod],
      data: {
        pa: 'shoptheworld@dbs',
        pn: 'STW E-Commerce',
        tr: '123456ABCDEFSD',
        url: 'http://localhost:3000/page/account/checkout',
        mc: '5045',
        tn: 'Purchase in Merchant'
      }
    }];
    var details = {
      total: {
        label: 'Total',
        amount: {
          currency: 'INR',
          value: '10.01' //sample amount 

        }
      },
      displayItems: [{
        label: 'Original Amount',
        amount: {
          currency: 'INR',
          value: '10.01'
        }
      }]
    };
    var request = null;

    try {
      request = new PaymentRequest(supportedInstruments, details);
      console.log(request);
      /*request.show()
      .then(function(result){
          alert("hai");
      })
       .catch(function(err){
          alert('Payment Request Error: '+ err.message+' 74'); 
      });*/
    } catch (e) {
      alert('Payment Request Error: ' + e.message + '77');
      console.log('Payment Request Error: ' + e.message); //return;
    }

    if (!request) {
      alert('Web payments are not supported in this browser 77');
      console.log('Web payments are not supported in this browser.'); // return;
    }

    var canMakePaymentPromise = checkCanMakePayment(request);
    canMakePaymentPromise.then(function (result) {
      showPaymentUI(request, result);
    }).catch(function (err) {
      console.log('Error in calling checkCanMakePayment: ' + err);
    });
  };

  const canMakePaymentCache = 'canMakePaymentCache'; // const loadScript=(src) => 

  const checkCanMakePayment = request => {
    // Checks canMakePayment cache, and use the cache result if it exists. 
    if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
      return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
    } // If canMakePayment() isn't available, default to assuming that the method is supported


    var canMakePaymentPromise = request.canMakePayment();

    if (request.canMakePayment) {
      canMakePaymentPromise = request.canMakePayment();
    }

    return canMakePaymentPromise.then(function (result) {
      sessionStorage[canMakePaymentCache] = result;
      return result;
    }).catch(function (err) {
      alert('Error calling canMakePayment: ' + err);
      console.log('Error calling canMakePayment: ' + err);
    });
  };

  const showPaymentUI = (request, canMakePayment) => {
    if (!canMakePayment) {
      handleNotReadyToPay();
      return;
    } // Set payment timeout.


    var paymentTimeout = window.setTimeout(function () {
      window.clearTimeout(paymentTimeout);
      request.abort().then(function () {
        alert('Payment timed out after 20 mins 129');
        console.log('Payment timed out after 20 mins');
      }).catch(function () {
        alert('Unable to abort,user is in process of paying 132');
        console.log('Unable to abort,user is in process of paying');
      });
    }, 20 * 60 * 1000);
    request.show().then(function (paymentResponse) {
      window.clearTimeout(paymentTimeout);
      alert("Request Success");
      console.log(paymentResponse);
      processResponse(paymentResponse); // Handle response from browser
    }).catch(function (err) {
      alert(err + '142');
      console.log(err);
    });
  };

  const handleNotReadyToPay = () => {
    alert("Tez is not ready to handle 149");
  };

  const processResponse = paymentResponse => {
    var paymentResponseString = paymentResponseToJsonString(paymentResponse);
    console.log(paymentResponseString);
    /* fetch('/buy',{
        method: 'POST',
        headers: new Headers({'Content-Type':'application/json'}),
        body:paymentResponseString
    })
    .then(function(buyResult){
        console.log('Buy Result'+buyResult);   
    })
    .catch(function(err){
      console.log('Unable to process payment. '+err);   
    });*/
  };

  const loadScript = src => {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const razorPayPaymentHandler = async filledData => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const API_URL = `http://localhost:7000/razorpay/`;
    const orderUrl = `${API_URL}order`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(orderUrl, {
      amount: 1
    });
    const {
      data
    } = response;
    console.log("App -> razorPayPaymentHandler -> data", data);
    const options = {
      key: "",
      //replace razorpay API key
      name: filledData.name,
      description: filledData.firstName,
      order_id: data.id,
      handler: async response => {
        try {
          const paymentId = response.razorpay_payment_id;
          console.log(paymentId);
          const url = `http://localhost:7000/razorpay/capture/${paymentId}`;
          const captureResponse = await axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, {
            amount: 1
          });
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          console.log("App -> razorPayPaymentHandler -> captured", successObj);

          if (captured) {
            // swal("Payment Successfull", "", "success");
            console.log("success");
            undefined.setState({
              name: "",
              decription: "",
              amount: ""
            });
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const onSuccess = payment => {
    console.log(payment);
    router.push({
      pathname: "/page/order-success",
      state: {
        payment: payment,
        items: cartItems,
        orderTotal: total,
        symbol: symbol
      }
    });
  };

  const onSubmit = data => {
    if (data !== "") {
      if (payment == "stripe") {} else if (payment == "Razorpay") {
        razorPayPaymentHandler(data);
      } else if (payment == "Gpay") {
        onBuyClicked(); // razorPayPaymentHandler(data);
      } // getServerSideProps();
      // const paymentIntent  =  stripe.paymentIntents.create({
      //   amount: 1,
      //   currency: 'usd',
      //   payment_method_types: ['card'],
      //   receipt_email: 'jenny.rosen@example.com',
      // }).then((res)=>{
      //   console.log(res);
      // });
      // setPayment

    } else {
      errors.showMessages();
    }
  };

  const setStateFromInput = event => {
    obj[event.target.name] = event.target.value;
    setObj(obj);
  };

  const onCancel = data => {
    console.log("The payment was cancelled!", data);
  };

  const onError = err => {
    console.log("Paypal not display");
    console.log("Error!", err);
  };

  const paypalOptions = {
    clientId: "ASgLRZ4iCd_ijakIF5qE9CLiJY-lOiQN9kF50GNJ4d4g5lCJq5PhIaqhOSI9bJObkp4X6mgD0Op_DBCf",
    currency: "USD",
    debug: true,
    intent: "capture"
  };
  return __jsx("section", {
    className: "section-b-space"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("div", {
    className: "checkout-page"
  }, __jsx("div", {
    className: "checkout-form"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    sm: "12",
    xs: "12"
  }, __jsx("div", {
    className: "checkout-title"
  }, __jsx("h3", null, "Billing Details")), __jsx("div", {
    className: "row check-out"
  }, __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "First Name"), __jsx("input", {
    type: "text",
    className: `${errors.firstName ? "error_border" : ""}`,
    name: "first_name",
    ref: register({
      required: true
    })
  }), __jsx("span", {
    className: "error-message"
  }, errors.firstName && "First name is required")), __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "Last Name"), __jsx("input", {
    type: "text",
    className: `${errors.last_name ? "error_border" : ""}`,
    name: "last_name",
    ref: register({
      required: true
    })
  }), __jsx("span", {
    className: "error-message"
  }, errors.last_name && "Last name is required")), __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "Phone"), __jsx("input", {
    type: "text",
    name: "phone",
    className: `${errors.phone ? "error_border" : ""}`,
    ref: register({
      pattern: /\d+/
    })
  }), __jsx("span", {
    className: "error-message"
  }, errors.phone && "Please enter number for phone.")), __jsx("div", {
    className: "form-group col-md-6 col-sm-6 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "Email Address"), __jsx("input", {
    className: "form-control",
    className: `${errors.email ? "error_border" : ""}`,
    type: "text",
    name: "email",
    ref: register({
      required: true,
      pattern: /^\S+@\S+$/i
    })
  }), __jsx("span", {
    className: "error-message"
  }, errors.email && "Please enter proper email address .")), __jsx("div", {
    className: "form-group col-md-12 col-sm-12 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "Country"), __jsx("select", {
    name: "country",
    ref: register({
      required: true
    })
  }, __jsx("option", null, "India"), __jsx("option", null, "South Africa"), __jsx("option", null, "United State"), __jsx("option", null, "Australia"))), __jsx("div", {
    className: "form-group col-md-12 col-sm-12 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "Address"), __jsx("input", {
    className: "form-control",
    className: `${errors.address ? "error_border" : ""}`,
    type: "text",
    name: "address",
    ref: register({
      required: true,
      min: 20,
      max: 120
    }),
    placeholder: "Street address"
  }), __jsx("span", {
    className: "error-message"
  }, errors.address && "Please right your address .")), __jsx("div", {
    className: "form-group col-md-12 col-sm-12 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "Town/City"), __jsx("input", {
    className: "form-control",
    type: "text",
    className: `${errors.city ? "error_border" : ""}`,
    name: "city",
    ref: register({
      required: true
    }),
    onChange: setStateFromInput
  }), __jsx("span", {
    className: "error-message"
  }, errors.city && "select one city")), __jsx("div", {
    className: "form-group col-md-12 col-sm-6 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "State / County"), __jsx("input", {
    className: "form-control",
    type: "text",
    className: `${errors.state ? "error_border" : ""}`,
    name: "state",
    ref: register({
      required: true
    }),
    onChange: setStateFromInput
  }), __jsx("span", {
    className: "error-message"
  }, errors.state && "select one state")), __jsx("div", {
    className: "form-group col-md-12 col-sm-6 col-xs-12"
  }, __jsx("div", {
    className: "field-label"
  }, "Postal Code"), __jsx("input", {
    className: "form-control",
    type: "text",
    name: "pincode",
    className: `${errors.pincode ? "error_border" : ""}`,
    ref: register({
      pattern: /\d+/
    })
  }), __jsx("span", {
    className: "error-message"
  }, errors.pincode && "Required integer")), __jsx("div", {
    className: "form-group col-lg-12 col-md-12 col-sm-12 col-xs-12"
  }, __jsx("input", {
    type: "checkbox",
    name: "create_account",
    id: "account-option"
  }), "\u2002", " ", __jsx("label", {
    htmlFor: "account-option"
  }, "Create An Account?")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    sm: "12",
    xs: "12"
  }, cartItems && cartItems.length > 0 > 0 ? __jsx("div", {
    className: "checkout-details"
  }, __jsx("div", {
    className: "order-box"
  }, __jsx("div", {
    className: "title-box"
  }, __jsx("div", null, "Product ", __jsx("span", null, "Total"))), __jsx("ul", {
    className: "qty"
  }, cartItems.map((item, index) => __jsx("li", {
    key: index
  }, item.title, " \xD7 ", item.qty, __jsx("span", null, symbol, item.total.toFixed(2))))), __jsx("ul", {
    className: "sub-total"
  }, __jsx("li", null, "Subtotal", __jsx("span", {
    className: "count"
  }, symbol, cartTotal)), __jsx("li", null, "Shipping", __jsx("div", {
    className: "shipping"
  }, __jsx("div", {
    className: "shopping-option"
  }, __jsx("input", {
    type: "checkbox",
    name: "free-shipping",
    id: "free-shipping"
  }), __jsx("label", {
    htmlFor: "free-shipping"
  }, "Free Shipping")), __jsx("div", {
    className: "shopping-option"
  }, __jsx("input", {
    type: "checkbox",
    name: "local-pickup",
    id: "local-pickup"
  }), __jsx("label", {
    htmlFor: "local-pickup"
  }, "Local Pickup"))))), __jsx("ul", {
    className: "total"
  }, __jsx("li", null, "Total", " ", __jsx("span", {
    className: "count"
  }, symbol, cartTotal)))), __jsx("div", {
    className: "payment-box"
  }, __jsx("div", {
    className: "upper-box"
  }, __jsx("div", {
    className: "payment-options"
  }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "radio-option gpay"
  }, __jsx("input", {
    type: "radio",
    name: "payment-group",
    id: "payment-4",
    defaultChecked: true,
    onClick: () => checkhandle("Gpay")
  }), __jsx("label", {
    htmlFor: "payment-4"
  }, "Gpay"))), __jsx("li", null, __jsx("div", {
    className: "radio-option Razorpay"
  }, __jsx("input", {
    type: "radio",
    name: "payment-group",
    id: "payment-3",
    onClick: () => checkhandle("Razorpay")
  }), __jsx("label", {
    htmlFor: "payment-3"
  }, "Razorpay"))), __jsx("li", null, __jsx("div", {
    className: "radio-option stripe"
  }, __jsx("input", {
    type: "radio",
    name: "payment-group",
    id: "payment-2",
    onClick: () => checkhandle("stripe")
  }), __jsx("label", {
    htmlFor: "payment-2"
  }, "Stripe"))), __jsx("li", null, __jsx("div", {
    className: "radio-option paypal"
  }, __jsx("input", {
    type: "radio",
    name: "payment-group",
    id: "payment-1",
    onClick: () => checkhandle("paypal")
  }), __jsx("label", {
    htmlFor: "payment-1"
  }, "PayPal", __jsx("span", {
    className: "image"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_paypal_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  })))))))), cartTotal !== 0 ? __jsx("div", {
    className: "text-right"
  }, payment === "stripe" ? __jsx("button", {
    type: "submit",
    className: "btn-solid btn"
  }, "Place Order") : payment === "paypal" ? __jsx(react_paypal_button__WEBPACK_IMPORTED_MODULE_2__["PayPalButton"], {
    paypalOptions: paypalOptions,
    amount: 1,
    onPaymentSuccess: onSuccess,
    onPaymentError: onError,
    onApprove: onSuccess,
    onPaymentCancel: onCancel
  }) : payment === "Razorpay" ? __jsx("button", {
    type: "submit",
    className: "btn-solid btn"
  }, "Razorpay Place Order") : __jsx("button", {
    type: "submit",
    className: "btn-solid btn"
  }, "Gpay Place Order")) : "")) : "")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutPage);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });