module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		73: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/5QC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (CartContext);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "2dXf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return tools_product_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Product4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Product7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Product5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Product6; });
/* unused harmony export Team4 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Slider2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Slider3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Slider4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Slider5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Slider6; });
/* unused harmony export Slider7 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SlideUpDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return svgFreeShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return svgservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return svgoffer; });
/* unused harmony export svgpayment */
const Product3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const tools_product_4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product7 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product6 = {
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Team4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
};
const Slider2 = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider4 = {
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider6 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider7 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }]
};
const SlideUpDown = function (classnames) {
  var accords = document.querySelectorAll("." + classnames + " h4");
  [].forEach.call(accords, function (elemt) {
    elemt.innerHTML += '<span class="according-menu"></span>';
  });
  var anchors = document.getElementsByClassName(classnames);

  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];

    anchor.onclick = function () {
      var elems = document.querySelectorAll("." + classnames);
      [].forEach.call(elems, function (elemt) {
        elemt.classList.remove("active");
        var el = elemt.nextElementSibling;
        el.style.height = el.offsetHeight + 'px';
        el.style.transitionProperty = `height, margin, padding`;
        el.style.transitionDuration = '500ms';
        el.offsetHeight; // eslint-disable-line no-unused-expressions

        el.style.overflow = 'hidden';
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        el.style.display = 'none';
        el.style.removeProperty('height');
        el.style.removeProperty('padding-top');
        el.style.removeProperty('padding-bottom');
        el.style.removeProperty('margin-top');
        el.style.removeProperty('margin-bottom');
        el.style.removeProperty('overflow');
        el.style.removeProperty('transition-duration');
        el.style.removeProperty('transition-property');
      });
      this.classList.add('active');
      var element = this.nextElementSibling;
      element.style.removeProperty('display');
      let display = window.getComputedStyle(element).display;

      if (element.classList.contains('show')) {
        element.classList.remove('show');
        this.classList.remove("active");
        element.style.height = element.offsetHeight + 'px';
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.offsetHeight; // eslint-disable-line no-unused-expressions

        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.style.display = 'none';
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        window.setTimeout(function () {
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
        }, 500);
      } else {
        element.classList.add('show');
        if (display === 'none') display = 'block';
        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight; // eslint-disable-line no-unused-expressions

        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.style.height = height + 'px';
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        window.setTimeout(function () {
          element.style.removeProperty('height');
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
        }, 500);
      }
    };
  }

  var elems = document.querySelectorAll("." + classnames);
  [].forEach.call(elems, function (elemt) {
    let el = elemt.nextElementSibling;
    el.style = "display: none";
  });
}; // SVG Icons

const svgFreeShipping = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -117 679.99892 679">\n' + '                                        <path\n' + '                                            d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                    </svg>';
const svgservice = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve" width="512px" height="512px">\n' + '                                       <g>\n' + '                                           <g>\n' + '                                              <g>\n' + '                                                <path d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z" fill="#ff4c3b"/>\n' + '                                                <path d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z" fill="#ff4c3b"/>\n' + '                                                <path d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z" fill="#ff4c3b"/>\n' + '                                                <path d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z" fill="#ff4c3b"/>\n' + '                                              </g>\n' + '                                           </g>\n' + '                                       </g>\n' + '                                    </svg>';
const svgoffer = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 512.00001 512">\n' + '                                        <path\n' + '                                            d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                    </svg>';
const svgpayment = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px" height="512px">\n' + '                                                 <g>\n' + '                                                    <g>\n' + '                                                       <g>\n' + '                                                          <path d="M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z" fill="#ff4c3b"/>\n' + '                                                          <path d="M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z" fill="#ff4c3b"/>\n' + '                                                          <path d="M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z" fill="#ff4c3b"/>\n' + '                                                          <path d="M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z" fill="#ff4c3b"/>\n' + '                                                          <path d="M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z" fill="#ff4c3b"/>\n' + '                                                          <path d="M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z" fill="#ff4c3b"/>\n' + '                                                          <path d="M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z" fill="#ff4c3b"/>\n' + '                                                       </g>\n' + '                                                    </g>\n' + '                                                 </g>\n' + '                                                </svg>';

/***/ }),

/***/ "3CYa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./helpers/apollo/apollo.js
var apollo = __webpack_require__("gy5E");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/headers/common/navbar.js
var navbar = __webpack_require__("B77O");

// EXTERNAL MODULE: ./components/headers/common/logo.js
var logo = __webpack_require__("mo9o");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./public/assets/images/jewellery/icon/search.png
var search = __webpack_require__("OAj/");
var search_default = /*#__PURE__*/__webpack_require__.n(search);

// EXTERNAL MODULE: ./public/assets/images/jewellery/icon/heart.png
var heart = __webpack_require__("dlEN");
var heart_default = /*#__PURE__*/__webpack_require__.n(heart);

// EXTERNAL MODULE: ./public/assets/images/jewellery/icon/avatar.png
var avatar = __webpack_require__("mJAf");
var avatar_default = /*#__PURE__*/__webpack_require__.n(avatar);

// EXTERNAL MODULE: ./components/headers/common/currency.js + 1 modules
var currency = __webpack_require__("yl6w");

// EXTERNAL MODULE: ./public/assets/images/jewellery/icon/cart.png
var cart = __webpack_require__("LPih");
var cart_default = /*#__PURE__*/__webpack_require__.n(cart);

// EXTERNAL MODULE: ./public/assets/images/jewellery/icon/controls.png
var controls = __webpack_require__("tZOm");
var controls_default = /*#__PURE__*/__webpack_require__.n(controls);

// EXTERNAL MODULE: ./components/containers/CartContainer.js + 1 modules
var CartContainer = __webpack_require__("SeLL");

// CONCATENATED MODULE: ./components/headers/header-seven.js
var __jsx = external_react_default.a.createElement;













const HeaderSeven = ({
  logoName
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false); // eslint-disable-next-line

  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = 'display:none';
    }, 2000);
    setOpen(true);
  }, []);

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");

    if (openmyslide) {
      openmyslide.classList.add('open-side');
    }
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  const closeSearch = () => {
    document.getElementById("search-overlay").style.display = "none";
  }; // eslint-disable-next-line


  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("header", {
    className: "header-5"
  }, __jsx("div", {
    className: "mobile-fix-option"
  }), __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    sm: "12"
  }, __jsx("div", {
    className: "main-menu"
  }, __jsx("div", {
    className: "menu-left"
  }, __jsx("div", {
    className: "brand-logo"
  }, __jsx(logo["a" /* default */], {
    logo: logoName
  }))), __jsx("div", {
    className: "menu-right pull-right"
  }, __jsx("div", null, __jsx("nav", {
    id: "main-nav"
  }, __jsx(navbar["a" /* default */], null))), __jsx("div", {
    className: "top-header"
  }, __jsx("ul", {
    className: "header-dropdown"
  }, __jsx("li", {
    className: "mobile-wishlist"
  }, __jsx(link_default.a, {
    href: "/page/account/wishlist"
  }, __jsx("a", null, __jsx(external_reactstrap_["Media"], {
    src: heart_default.a,
    alt: ""
  })))), __jsx("li", {
    className: "onhover-dropdown mobile-account"
  }, __jsx(external_reactstrap_["Media"], {
    src: avatar_default.a,
    alt: ""
  }), __jsx("ul", {
    className: "onhover-show-div"
  }, __jsx("li", null, __jsx(link_default.a, {
    href: "/page/account/login"
  }, __jsx("a", {
    "data-lng": "en"
  }, "Login"))), __jsx("li", null, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", {
    "data-lng": "en"
  }, "Logout"))))))), __jsx("div", null, __jsx("div", {
    className: "icon-nav"
  }, __jsx("ul", null, __jsx("li", {
    className: "onhover-div mobile-search"
  }, __jsx("div", null, __jsx(external_reactstrap_["Media"], {
    src: search_default.a,
    onClick: openSearch,
    className: "img-fluid",
    alt: ""
  }), __jsx("i", {
    className: "fa fa-search",
    onClick: openSearch
  }))), __jsx(currency["a" /* default */], {
    icon: controls_default.a
  }), __jsx(CartContainer["a" /* default */], {
    icon: cart_default.a
  })))))))))), __jsx("div", {
    id: "search-overlay",
    className: "search-overlay"
  }, __jsx("div", null, __jsx("span", {
    className: "closebtn",
    onClick: closeSearch,
    title: "Close Overlay"
  }, "\xD7"), __jsx("div", {
    className: "overlay-content"
  }, __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], null, __jsx(external_reactstrap_["Form"], null, __jsx("div", {
    className: "form-group"
  }, __jsx(external_reactstrap_["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Search a Product"
  })), __jsx(external_reactstrap_["Button"], {
    type: "submit",
    className: "btn btn-primary"
  }, __jsx("i", {
    className: "fa fa-search"
  }))))))))));
};

/* harmony default export */ var header_seven = (HeaderSeven);
// EXTERNAL MODULE: ./pages/layouts/Jewellery/Component/Banner.js
var Banner = __webpack_require__("IVIq");

// EXTERNAL MODULE: ./pages/layouts/Jewellery/Component/Category.js
var Category = __webpack_require__("nLc3");

// EXTERNAL MODULE: ./components/common/Collections/Collection1.js
var Collection1 = __webpack_require__("E9TD");

// EXTERNAL MODULE: ./components/common/Service/service3.js
var service3 = __webpack_require__("Ig1y");

// EXTERNAL MODULE: ./pages/layouts/Jewellery/Component/ParallaxBanner.js
var ParallaxBanner = __webpack_require__("RUv2");

// EXTERNAL MODULE: ./components/common/Collections/TabCollection1.js
var TabCollection1 = __webpack_require__("ySeX");

// EXTERNAL MODULE: ./components/common/instagram/instagram2.js
var instagram2 = __webpack_require__("EYGY");

// EXTERNAL MODULE: ./components/footers/footer-five.js
var footer_five = __webpack_require__("UGBA");

// EXTERNAL MODULE: ./components/common/Paragraph.js
var Paragraph = __webpack_require__("Czz6");

// EXTERNAL MODULE: ./services/script.js
var script = __webpack_require__("2dXf");

// EXTERNAL MODULE: ./components/common/Modal.js
var Modal = __webpack_require__("Rnrp");

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: ./public/assets/images/favicon/16.png
var _16 = __webpack_require__("hRBw");
var _16_default = /*#__PURE__*/__webpack_require__.n(_16);

// CONCATENATED MODULE: ./pages/layouts/Jewellery/index.js
var Jewellery_jsx = external_react_default.a.createElement;

















const Jewellery = () => {
  Object(external_react_["useEffect"])(() => {
    document.documentElement.style.setProperty('--theme-deafult', '#5fcbc4');
  });
  return Jewellery_jsx(external_react_["Fragment"], null, Jewellery_jsx(external_react_helmet_default.a, null, Jewellery_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), Jewellery_jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: _16_default.a ? _16_default.a : ''
  })), Jewellery_jsx("div", {
    className: "bg_cls"
  }, Jewellery_jsx(Modal["a" /* default */], null), Jewellery_jsx(header_seven, {
    logoName: 'logo/13.png'
  }), Jewellery_jsx(Banner["default"], null), Jewellery_jsx(Category["default"], null), Jewellery_jsx(Paragraph["a" /* default */], {
    title: "title1  section-t-space title5",
    inner: "title-inner1",
    hrClass: true
  }), Jewellery_jsx(Collection1["a" /* default */], {
    type: "jewellery",
    designClass: "p-t-0 j-box ratio_square",
    productSlider: script["c" /* Product5 */],
    noSlider: "true",
    cartClass: "cart-info cart-wrap"
  }), Jewellery_jsx(service3["a" /* default */], {
    layoutClass: "section-b-space"
  }), Jewellery_jsx(ParallaxBanner["default"], null), Jewellery_jsx(TabCollection1["a" /* default */], {
    type: "jewellery",
    heading: "exclusive products",
    title: "title1  section-t-space title5",
    inner: "title-inner1",
    hrClass: true,
    designClass: "p-t-0 j-box ratio_square",
    noSlider: "true",
    cartClass: "cart-info cart-wrap"
  }), Jewellery_jsx("section", {
    className: "instagram ratio_square section-b-space"
  }, Jewellery_jsx(instagram2["a" /* default */], {
    type: "jewellery"
  })), Jewellery_jsx(footer_five["a" /* default */], {
    logoName: 'logo/13.png',
    layoutClass: "black-subfooter"
  })));
};

/* harmony default export */ var layouts_Jewellery = __webpack_exports__["default"] = (Object(apollo["a" /* withApollo */])(Jewellery));

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "65ip":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3CYa");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "8c/V":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAC+AQwDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAQFBgMCAQf/xABFEAABBAEBBQUEBgYJAwUAAAABAAIDBAURBhIhMUETUWFxgRQiMpEVQlKxwdEWI0NiofAkM0RTVJKy0uFygpM1oqPC8f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAfEQEBAQACAgMBAQAAAAAAAAAAAREhMQJREkFhcTL/2gAMAwEAAhEDEQA/AP39ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERVmSz1HGHclk35ukUfFx/JC3FmizYt7R5PjWqxY+E8nz8X6eX/CiTVYwSMjtW8uHxMieG6egP4K4z8mvRYXsdm97T6ev73fvH/YpcFVhIGO2rfvnkyV4fr6E/grh8mvRZ03NocaSbVSK9APr1+Dh6f8KxxubpZQEQSFso4OikGjgVMXViiIooiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICE6DUos5mbljI324THybpI1syj6je5WTUtx8t5W5lbjsfhdA1nCa0eTfAeKgCxQws/s2Mgdksq7g6V3vaHz/AepXqaR0zxs9gB2cTOFix9/H+e7ktDisPUxFfs67PfPxyH4nH8vBXiM81StwGWy3v5nIPjjP8AZ4TwHn0+9WNfZXD1wP6IJHD60ji7X05K5RTavxiD9DYvTT6Oqf8Ahb+SjT7MYecHWkxh74yW6fJW6JtXIzf0BkMb72HyTwwf2ex7zD+Xy9VFmNTKWG18pXdjMr+znadA8+Duvl8itco16hWyNYwWohIw8R3g94PRNT4qaplrWNtsx+ZA97hDbHwv8+4rRLLvjNcjC5kmenNwq2jzB6NJ6O7ipGGt2KNx2FvvL5GDerykf1jOnqrYS5w0CIiy0IiICIiAiIgIiICIiAiIgIiICIiAiIgIiIIOYyDcXi5rR03mjRgPVx5LMudNhMGxrS52XybtSfrDX8tdPM+Cn5sDI7Q43FnjG0mxKPAcvuI9VzoD6W2xt3HcYaI7KMH7XEf7j6hanTF5q3wmJiw+PZA0Ayn3pX/ad+Q6KyRFluTBRLeUo0TpatRRO+yXcflzUtZSTYqKzkrFie08RSSFzWMHHjx4k+qsz7S2/S0i2nw0r91t9gP7zXNHzIVqx7ZGB7HBzSNQQdQVjclsPFHVfJQnldIwa7kuh3vAEAaKLsVk5Y75x73kwytLmNJ+Fw48PMaq5M2MTysuVvkRFl0RchQgyVOSrYbqx44Hq09CPFZuWOxkMZJFISMvin6hw5vHMH1A+Y8VrlR5IewZyhkWjRkx9lm8deLT8+qsZ8osMXfZksdDaZp7494dx6hTFQYOP2HK5THje7Nr2zRjoGu6D+eiv0qzoREUUREQEREBERAREQEREBERAREQEREBERBmasmu1mYuOOra0AYPAaA//Ur3sXCWYMzO4umlc8k8z0/AqJXafaNrB9YsOn+V6s9ktP0Zqf8Af/rctXpidrtERZbERCdBqUETJ3o8bj5rUhADG+6O93QfNYbYqm6bNGzp7ldhJPiRoB8tV4zORsbSZhlSoC6Frt2Fveerj/PJbjEYuLEUGVo+Lub3/ad3rXUc/wDXl+RPREWXQVTtLF2uz9rTg6Nokae4tIP4K2UHNEDB39f8PJ/pKs7S9K4zAbT4+cOIbcqFug5OI94a+hKv1lTvC5soB8XYu1/8bdfxWqSp4iIijQiIgIiICIiAiIgIiICIiAixkNZ23Niezbllbs/G90VavE8s9qLToZHkcS3UHQeHzmbFGSOrlaTpZJIaWSlrwCRxcWRgNIbqeJA1KuJrToiKKIiIM3XYItssjXefct1w8Dv00H5psZI4YuapJwkrzuaW92v/ADqvW0R9gyONywB3YpOylI6Md/JXCNww+2T2k6Vsk3eaem//APuv+YLXcY6rUoiLLYq/OSOiwV17Do4ROAPnwVguVkwCtIbXZ9hp7/aabunjqiVi9gq7H2rlgjV8bWtb4b2uv+kLcqvxj8VI2R2MFYDUB/YNDfLXT1VgrbtTxmQREUaFUbTSmPBTsbxkmLYmDvLjpp8tVbqivOGQ2iqUwQYaY9pmPTe5MHn18lZ2nl0+FgdtZUhazeZUqE69Gk8PuCvlRYDS5Zv5XmLEu5GdfqN4Dgr1KeIiIooiLO7RZDJMyeLxGMmhrTX+1c6zJHv9m2MA8G8iTr1RLcaJFncTmb0OV+hM6yJt1zC+tYi4R2mjnoDycOo9eS0SEuiIiKIiICIiAuc7HSQSMa7dc5pAPcSOa6Igzmw88b9lKdcDcnqA1rER5xyNOjgfv9VwfWzmEzd+fF46G/TyD2zFjrIhMMgG648QdQdAeCrszajky77myZsWMyCI5/ZmB1aQDpM4kN1A1AIOo5eWuxcmQmosflK0Fe0fiZDIXt+4aeXHzVvtmelS7K7TVm9rPs9BNEOLm1bm9IB10a5oDj4arvX2x2esRMf9L1Ii8amOaVrHN8HAngVdPe2Nhe9wa0cyViKlaajayxsbKy3qNq4+xHIGxF264DUbjyHcwTpp1Tsuxt45GSxtkje17HDVrmnUEeBXK1bhpQGWZ2g1DWgDUvceTQOpPcvz+0PomnaymyFiSsyE638ZLESYh1eI3EbrgPIEDnwWuw+Nic2DKTX5cnYkjDorMoAa1rgPgYAA3Uep6lMJdTJqZvY6WC0AHTN94DkzuHjp/Hjy1WaZXfl8RLipju5THO/VEnQuA5cfEcPkVslR5vGzmWPKY4AXYObf71vVpSU8o6bP5j6Uplk2rbkHuTMI0Ovfp/PFXCyRAyLhm8Loy/H7tis7m7vB8eHqrvF5qtk2ENPZ2GcJIX8HNKVfHmLJUm1VGzfwpjqgue2QPLBzcBrw/jr6K7RSFmzGK2NxV6rems2IZIIuz3NJGlpcdQeR8ltURW3TxmTBEUDJ5eri4gZnF0ruEcTOLnnwCivuVyUeLpOneN+Q+7HGOb3HkAqJ1exXpjH7+9lcm4vsSDj2bOp8gOA8ddF7Jkhlbl8u3fuP92nSbx3Nfx7z0+QHWuLGJsuyOSYJPaQO1mYDrX7m6fZ8R6rU4Yt1bQQQYmrFBE3crN93iSd0k8+PQk/xU1eP1c0X1XxvHmHA/eqK3JlNn4JZoWMyGOiaXlks3ZzQNHE+87g9oGvxEEd5U7a6aBcrFiGpXfPYlZFCwauke4Na0eJKx8d3K7T0/pCW67AYMjVhDmtnlH2i88GDu04qsgq4W/tdiqVTM2crXa2WaxHPcdOxzmgbmoPDmSfRMT5NL+nGCI32TWZIv71lOVzPnu8VDpZCDafbGpex+/JQx1aQGd0bmB0shA3QHAHgG6+q1wGnJVWez9TZ6ibVuOw9vQQxF2vmeQ9SE/hf1X7ZBra+JsN4WY8nXEJB0JLnaFvkQTr5LTLKYSKXaW3X2hvywGGLU0qcEgkbESNC97hwL9OGnJvny1aX0s9iIiiiIiAiIgLOujk2okfvyOZhGksDI3EG4RwJJH7PoAPi58tNbHNF78ca0TyyS09sAc06EBx94jxDd4jyUv8AU06oHuxwxNAAHIAcAER6gghqwMgrxMiiYNGsY0Na0eAC6LjEZJBvvaWA/Czr6+PguyK+FoJBI105L6i+EgAk8Agpc9VZGa+UYwCeCRsch0/rIXuDXsd3jQ7w8R5qk2Ut36sdzZ6rSc8Y+3JC21M7SNkRO8395zgD8I0GmnELS5XSxVjqsIc6xIwAD7IcHOPlug+pHeqrY93tLs5faP1NnJSdk7o9jQ1m8PDUH5K/TP20rQQ0AuLj1J6r6i8ve1jC9xAa0aknoFGmS2na3FXq1/HvMV+Z+66NnESDxHnoFy9sxmdkDbm9jMsz3RKCW8fP8Dx8VIxLHZ7aGbKygmtWO5ADy17/AE5+oU3a63DXw5ifEyWWY7sTXNB0OnFw8QDz8Vv8c/1xFraHFDSxWbkoBylhOj9Neo/49V1j2wxh92x29eQc2yRnUfLVRaOAy9GnC6plDFIWgvgkG8weA7vkusljaGNu7axNS43vjcB9/wCSnFa2xL/S3Cf43/4n/kuUm2GKHuwGaw88mRxHU/PRQPaJg7X9DY97v0b/ALVYRHOvjZ2FKhSY7TUOJc5o8gANUyJLXM3c9k+FSm3HwHnNZ+P0b09R6qLVFSnbcKAdlcs7+ssPPuM8SeQHgNT0Vl9BS2//AFTIT2m9Ymfq4/kOata9eCrEIq8TIoxyawaBNi5b2gY/FOhnN27L7TdcNN8jQMH2WjoFZuaHNLXAEHgQeq+ostYqGVLOJm/oMZnpPJLq+8A6I97CeGngqLaTLU88/H4GpZBFywTdZxa+OGMbz2vadHMJ0A4gdVtFkc5XY7bfGANY2W1QtQsfoAS4Bp5+AJVjNnCVi8VDl44ctkoGyh4DqdV41jrxfV0by3iNCSeWug00V++tA+MMdEwtHFo05HvHcVxxbmvxNNzBo0wM0Hd7o4KWosjyxpa0N3i7Tqea9EaoiKo7ezFN87rePc7GXz/aKoDd7/rZ8Lx5j1XbG5Kw6y7HZOJkV9rd9ro9eznZ9pmvEacNWniNRzHFWLpQyQMk93eOjXdCe7zUTL0XXKgfBoLld3bVnno8dPIjVp8CVUz0sEXCnZZdpQWowQyaNsjQ4aEAjXj4ruooiIgIiIIluLfnpSacIpy4nu1Y9v3u/iuLne15jsP2NRjZHDo6R2u7/lAJ83NPRWBAcCCAQehVVjCW5nNRO59vHI0fuGJgH/ua9EWyralo5K7NLGf6HXeYmEftZBwcfJp4Dx17guG1OQlxmzluxXOlhwEUJ7nvIaD6E6+in46lFjcdXpQ/1cEYYD36DmfE80PtKWVy+ctDIgQ4i7dxVdxZO+oA5z5Rp7u5rq5o146dRp0INzm8qzD4qW2W9pLwZDEOcsjuDWjzK9YWg7GYerUkcHSsZrK8fWkPF7vVxJ9VS88M3LZzG0QfWxmNt4qCUbli/fbuyhvVsbNdevPgBx5FanHY+visdBRqM3IIGBjB+J8TzPmpSJpILN7V3ZOwixVXjYtuDSB0ar+xPHWryTyuDY42lziVmtm4ZMpkbGdst5ksgBHIdT8uHzSe08vS/wAbRjxmPhqx8o28Xd56lZumDtHtQ+673qNL3YweTj0/jx+SsNqsi+rj21K+ps2z2bA3np1+/T1Vhh8c3FYyGq3QuA1e7vceaHd/ieiIo0IiICIiAiIgKj2mxNnI04LGPc1mSoyixWLuTiBoWHwcOHyV4iFmspjtpcVYbLFNcbi7IOtinbcI3xPPElpOgIJ49QfDUqwwW0dLMyWq0FqGeeq7de6I6tkb0e3w7+4+hM+5isdkS03qFW0W/CZ4Wv08tQqzOxRYmnTyVaFsUeOlBe2JgAEDvdkGg6AaO/7ArwzzF+ocNv8Ap0lKbhM1vaRn+8ZrpqPEHgfQ9VLa5r2hzXBzSNQQdQQqTahkkOM+lKw1s453tDB9pg+NnkW6+oHcpFq5kjZNG6ORocxw0IUWjO/fmpzOLpq5HvHm9h+F38CD4tKkV547VaKxE7eilYHsPeCNQq+Q6bURMaSDJSkLyP3Xt3f9TkEnGR9lTLOjZpQ0dw7R2g+WimLyxjY2BjRoANAvSKIiICIiAqXKVb1bIx5bGQixJ2Yhs1S/dMsYJLS0ngHNJPPmHHjyV0iDE5yhtFtXXdFHB9E1q/66Nk7mvksSt4tB3SQ1uvieOnBSotvcexja92tegyoGj6Daz3SF37ug0IPQ6rWIrqYzGNoX8zlYs1mYDWig19hoE6mMn9pJ+/pyHTzWnRFCTBERFZjaueaxPTw8B3Tadq93cNdPzWgrwQ0abIY9GRRM0GvQDqVV57Ey3JalyqAbNWQODSdN9uuumvRVtu1n8lXdjjjHV+1cI3zF2rQOvIclr6Y6tr3hmuzmesZmUH2eE9lWB+/+OvmfBapRqNOLH0oqsI0ZG3TzPU+pUlZakwRERRERAREQEREBERAXiWKOeJ8UrGvje0tc1w1DgeYK9ogyOPyJ2UstwuXkLaBdpj70nwlnSJ56ObyBPMDorPaXL1Mfs9ZkfI17p4nRQRtO86Z7hoGtA58T0VtYrQXIHwWYY5oXjR0cjQ5rvMFVOP2RwGLum5SxkMVjmH8Xbv8A06khvporwzlU+zu0MOFxNfD7RaYy7TiDB2zvclYBwcx3I8NAQDzVxhXyZG9azD43xwStZDUbI3dcY2kkv0PEbxdw16NB6q6c1rtN5oOnEahfU1ZBERRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf//Z"

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B77O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("o4yg");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MQhX");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const NavBar = () => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  const {
    0: navClose,
    1: setNavClose
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    right: '0px'
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (window.innerWidth < 750) {
      setNavClose({
        right: '-410px'
      });
    }

    if (window.innerWidth < 1199) {
      setNavClose({
        right: '-300px'
      });
    }
  }, []);

  const openNav = () => {
    setNavClose({
      right: '0px'
    });
    if (router.asPath == '/layouts/Gym') document.querySelector("#topHeader").classList.add("zindex-class");
  };

  const closeNav = () => {
    setNavClose({
      right: '-410px'
    });
    if (router.asPath == '/layouts/Gym') document.querySelector("#topHeader").classList.remove("zindex-class");
  }; // eslint-disable-next-line


  const onMouseEnterHandler = () => {
    if (window.innerWidth > 1199) {
      document.querySelector("#main-menu").classList.add("hover-unset");
    }
  };

  const handleMegaSubmenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu')) event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu');else {
      document.querySelectorAll('.menu-content').forEach(function (value) {
        value.classList.remove('opensubmegamenu');
      });
      event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu');
    }
  };

  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentUrl = location.pathname;
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = false;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"]
    });
  };

  const openMblNav = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensubmenu')) event.target.nextElementSibling.classList.remove('opensubmenu');else {
      document.querySelectorAll('.nav-submenu').forEach(function (value) {
        value.classList.remove('opensubmenu');
      });
      document.querySelector('.mega-menu-container').classList.remove('opensubmenu');
      event.target.nextElementSibling.classList.add('opensubmenu');
    }
  };

  return __jsx("div", null, __jsx("div", {
    className: "main-navbar"
  }, __jsx("div", {
    id: "mainnav"
  }, __jsx("div", {
    className: "toggle-nav",
    onClick: openNav.bind(undefined)
  }, __jsx("i", {
    className: "fa fa-bars sidebar-bar"
  })), __jsx("ul", {
    className: "nav-menu",
    style: navClose
  }, __jsx("li", {
    className: "back-btn",
    onClick: closeNav.bind(undefined)
  }, __jsx("div", {
    className: "mobile-back text-right"
  }, __jsx("span", null, "Back  navbar"), __jsx("i", {
    className: "fa fa-angle-right pl-2",
    "aria-hidden": "true"
  }))), _constant_menu__WEBPACK_IMPORTED_MODULE_2__[/* MENUITEMS */ "a"].map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`
    }, __jsx("a", {
      className: "nav-link",
      onClick: e => openMblNav(e)
    }, " ", t(menuItem.title), __jsx("span", {
      className: "sub-arrow"
    })), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: "nav-submenu"
    }, menuItem.children.map((childrenItem, index) => {
      return __jsx("li", {
        key: index,
        className: `${childrenItem.children ? 'sub-menu ' : ''}`
      }, childrenItem.type === 'sub' ? __jsx("a", {
        href: null,
        onClick: () => toggletNavActive(childrenItem)
      }, childrenItem.title, childrenItem.tag === 'new' ? __jsx("span", {
        className: "new-tag"
      }, "new") : '', __jsx("i", {
        className: "fa fa-angle-right pl-2"
      })) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: `${childrenItem.path}`
      }, __jsx("a", null, " ", childrenItem.title, childrenItem.tag === 'new' ? __jsx("span", {
        className: "new-tag"
      }, "new") : '')) : '', childrenItem.children ? __jsx("ul", {
        className: `nav-sub-childmenu ${childrenItem.active ? 'menu-open ' : 'active'}`
      }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
        key: key
      }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: childrenSubItem.path
      }, __jsx("a", {
        className: "sub-menu-title"
      }, childrenSubItem.title, childrenSubItem.tag === 'new' ? __jsx("span", {
        className: "new-tag"
      }, "new") : '')) : ''))) : '');
    })) : __jsx("div", {
      className: `mega-menu-container  ${menuItem.megaMenu ? '' : 'opensubmenu'}`
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col mega-box' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i
      }, __jsx("div", {
        className: "link-section"
      }, __jsx("div", {
        className: "menu-title"
      }, __jsx("h5", {
        onClick: e => handleMegaSubmenu(e)
      }, megaMenuItem.title)), __jsx("div", {
        className: "menu-content"
      }, __jsx("ul", null, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i
        }, __jsx("a", {
          href: subMegaMenuItem.path
        }, subMegaMenuItem.title));
      })))));
    }))) : ''));
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Czz6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Paragraph = ({
  title,
  inner,
  line,
  hrClass
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: title
  }, __jsx("h4", null, "special offer"), __jsx("h2", {
    className: inner
  }, "top collection"), line ? __jsx("div", {
    className: "line"
  }) : hrClass ? __jsx("hr", {
    role: "tournament6"
  }) : ''), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "m-auto"
  }, __jsx("div", {
    className: "product-para"
  }, __jsx("p", {
    className: "text-center"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Paragraph);

/***/ }),

/***/ "E9TD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2dXf");
/* harmony import */ var _product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("STcy");
/* harmony import */ var _PostLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tfG8");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("/5QC");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EO2r");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("U8OX");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {
        products (type: $type,indexFrom:$indexFrom ,limit:$limit){
            items {
                id
                title
                description
                type
                brand
                category 
                price
                new
                stock
                sale
                discount
                variants{
                    id
                    sku
                    size
                    color
                    image_id
                }
                images{
                    image_id
                    id
                    alt
                    src
                }
            }
        }
    }
`;

const TopCollection = ({
  type,
  title,
  subtitle,
  designClass,
  line,
  noSlider,
  cartClass,
  productDetail,
  noTitle,
  titleClass,
  innerTitle
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]);
  const contextWishlist = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_9__[/* WishlistContext */ "c"]);
  const contextCompare = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_10__[/* CompareContext */ "a"]);
  const quantity = context.quantity;
  var {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: type,
      indexFrom: 0,
      limit: 8
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: designClass
  }, noSlider ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], null, noTitle ? '' : __jsx("div", {
    className: titleClass
  }, subtitle ? __jsx("h4", null, subtitle) : '', __jsx("h2", {
    className: innerTitle
  }, title), line ? __jsx("div", {
    className: "line"
  }) : ''), !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xs: "12"
  }, __jsx("div", null, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center"
  }, __jsx(Media, {
    src: emptySearch,
    className: "img-fluid mb-4 mx-auto",
    alt: ""
  }), __jsx("h3", null, __jsx("strong", null, "Your Cart is Empty")), __jsx("h4", null, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default"
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null))) : __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, _services_script__WEBPACK_IMPORTED_MODULE_4__[/* Product4 */ "b"], {
    className: "product-4 product-m no-arrow"
  }), data && data.products.items.slice(0, 8).map((product, index) => __jsx("div", {
    key: index
  }, __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    product: product,
    productDetail: productDetail,
    addCompare: () => contextCompare.addToCompare(product),
    addWishlist: () => contextWishlist.addToWish(product),
    addCart: () => context.addToCart(product, quantity),
    key: index,
    cartClass: cartClass
  }))))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "title1 title-gradient  section-t-space"
  }, subtitle ? __jsx("h4", null, subtitle) : '', __jsx("h2", {
    className: "title-inner1"
  }, title)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, data && data.products.items.slice(0, 8).map((product, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    xl: "3",
    sm: "6",
    key: index
  }, __jsx("div", null, __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    product: product,
    productDetail: productDetail,
    addCompare: () => contextCompare.addToCompare(product),
    addWishlist: () => contextWishlist.addToWish(product),
    addCart: () => context.addToCart(product, quantity),
    key: index
  })))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (TopCollection);

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "EO2r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WishlistContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EO2r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["b"]; });

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  wishlistItems: Function,
  addToWish: Function,
  removeFromWish: Function
});

const getLocalWishlistItems = () => {
  try {
    const list = localStorage.getItem('wishlist');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: wishlistItems,
    1: setWishlistItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalWishlistItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]); // Add Product To Wishlist

  const addToWish = item => {
    const index = wishlistItems.findIndex(wish => wish.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setWishlistItems([...wishlistItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From Wishlist


  const removeFromWish = item => {
    setWishlistItems(wishlistItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  };

  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      wishlistItems: wishlistItems,
      addToWish: addToWish,
      removeFromWish: removeFromWish
    }
  }, props.children);
};


/***/ }),

/***/ "EYGY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2dXf");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
    query  instagram($type: String!) {
        instagram (type: $type ) {
                img
        }
    }
`;

const Instagram = ({
  type
}) => {
  var {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: type
    }
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "12"
  }, __jsx("h2", {
    className: "title-borderless"
  }, "# instagram"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, _services_script__WEBPACK_IMPORTED_MODULE_5__[/* Slider5 */ "j"], {
    className: "slide-5 no-arrow slick-instagram"
  }), data && data.instagram.map((data, i) => __jsx("div", {
    key: i
  }, __jsx("a", {
    href: null
  }, __jsx("div", {
    className: "instagram-box"
  }, __jsx("img", {
    src: data.img,
    className: "bg-img",
    alt: "Avatar",
    style: {
      width: "100%"
    }
  }), __jsx("div", {
    className: "overlay"
  }, __jsx("i", {
    className: "fa fa-instagram",
    "aria-hidden": "true"
  }))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Instagram);

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "IVIq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Banner = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: "p-0 height-100"
  }, __jsx("div", {
    className: "home-slider"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("div", null, __jsx("div", {
    className: "home text-center bg-size blur-up lazyloaded home47"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("div", {
    className: "slider-contain"
  }, __jsx("div", null, __jsx("h4", null, "an exemplart gateway to happiness"), __jsx("h1", null, "all jewellery"), __jsx("a", {
    href: "#",
    className: "btn btn-solid"
  }, "shop now")))))))), __jsx("div", null, __jsx("div", {
    className: "home text-center bg-position p-right home48"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("div", {
    className: "slider-contain"
  }, __jsx("div", null, __jsx("h4", null, "75th birthday sale"), __jsx("h1", null, "flat 20% off"), __jsx("a", {
    href: "#",
    className: "btn btn-solid"
  }, "shop now"))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "Ie/Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JzZ/");
/* harmony import */ var _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dtqM");
/* harmony import */ var _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k2Z+");
/* harmony import */ var _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zUnT");
/* harmony import */ var _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("T8au");
/* harmony import */ var _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const CopyRight = ({
  layout,
  fluid
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: `sub-footer ${layout}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12"
  }, __jsx("div", {
    className: "footer-end"
  }, __jsx("p", null, __jsx("i", {
    className: "fa fa-copyright",
    "aria-hidden": "true"
  }), " 2020-21 themeforest powered by pixelstrap"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "6",
    md: "6",
    sm: "12"
  }, __jsx("div", {
    className: "payment-card-bottom"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_visa_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  }))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_mastercard_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: ""
  }))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_paypal_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: ""
  }))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_american_express_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: ""
  }))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_icon_discover_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: ""
  }))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (CopyRight);

/***/ }),

/***/ "Ig1y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Service = ({
  layoutClass,
  hrLine
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: layoutClass
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "absolute-bg"
  }, __jsx("div", {
    className: "service p-0 "
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3",
    sm: "6",
    className: ` ${hrLine ? 'service-block1' : 'service-block'}`
  }, __jsx("div", {
    className: "media"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -117 679.99892 679"
  }, __jsx("path", {
    d: "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0",
    fill: "#ff4c3b"
  })), __jsx("div", {
    className: "media-body"
  }, __jsx("h4", null, "free shipping"), __jsx("p", null, "free shipping world wide")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3",
    sm: "6",
    className: ` ${hrLine ? 'service-block1' : 'service-block'}`
  }, __jsx("div", {
    className: "media"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 480 480",
    enableBackground: "new 0 0 480 480",
    xmlSpace: "preserve",
    width: "512px",
    height: "512px"
  }, __jsx("g", null, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z",
    fill: "#ff4c3b"
  }))))), __jsx("div", {
    className: "media-body"
  }, __jsx("h4", null, "24 X 7 service"), __jsx("p", null, "online service for 24 X 7")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3",
    sm: "6",
    className: ` ${hrLine ? 'service-block1' : 'service-block'}`
  }, __jsx("div", {
    className: "media"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -14 512.00001 512"
  }, __jsx("path", {
    d: "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0",
    fill: "#ff4c3b"
  })), __jsx("div", {
    className: "media-body"
  }, __jsx("h4", null, "festival offer"), __jsx("p", null, "new online special festival offer")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "3",
    sm: "6",
    className: ` ${hrLine ? 'service-block1' : 'service-block'}`
  }, __jsx("div", {
    className: "media"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 512;",
    xmlSpace: "preserve",
    width: "512px",
    height: "512px"
  }, __jsx("g", null, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z",
    fill: "#ff4c3b"
  }), __jsx("path", {
    d: "M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z",
    fill: "#ff4c3b"
  }))))), __jsx("div", {
    className: "media-body"
  }, __jsx("h4", null, "online payment"), __jsx("p", null, "new online special festival offer")))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Service);

/***/ }),

/***/ "JzZ/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAGAklEQVRIia2Ve2xXZxnHP+97zu/S+43S0gJtaZFLpcWNtnR0Y5AiMFgci05ZwhYJ7g+n0WQmriaKUwOLl+m2RI1zKm5RnHOblmFHWC+6lW5gZBQcQscoG92klPZ3P5ffOY9//PorYNyUZd/kJOd9832fz3me8zx51ZLWBwEQEZRS5OeHCAY0OeEAhqGxnXSLY3ubbCe9ynG9hnTaLxURgkFzsiA/NDKvqmhw0cLy59fdXP9KWVkuFy4kKCoMs6C2BNM08DwfAPWfoIKCMDkhg7QnnYmE3ZVMpdemPR8FGIbGMBQA6bRPynKxrDRmQNO8dM7Als1Ld61f+5EDSkFxUYhgMDADMsqrO8lKa00oZJJKuT+eiliP2E66zjA0pqkxDI3W6gqvIhQ0yc8LEQwYvH56vPaFvtPbJi4lq9etaeieVV6Ca9vItP9yRoChVQDod13vBq0VSl0O/L+ktcKy0rxxZoK1q+tf3f/U9tWhcNiKRiJordFZowJ8X17yPP8Gw9DXBCFzllDIYOmSCnr7Rlq3bNszCB75+bn4vqAK5nahlELBYwI7rin6f5FSoJRiavRt7ty+5tdPPLbtbtexUJ+6+1eI77elfRm6thzeD6ZIWS4TlxL89KHbblq+bP5flYgDyGF8WfEhcTLSGttyicXt4+GQuUzZVqJRwXGlNBIMz/jEToH4BMN52R1AIZ6N0gpUcMbrWEm0VpjBnIzTs3HdNIZh4Lgenue3mI7jbUUbkI4irz9LgXMCKlaSLFtPbp5woPcEExNJmhorGRh8k623N1FSWsSe3wxx+Mgozc3VbLvjOoLBAPv+/BrRmM0nblmCYRo4lpv9lq3EotH+WCwusXhUkudflYGvd0j8AURkVMYTIhj3yue++Fv5yc8HBO6R4eOjcs+X9krlop3SvOr7smbzoyIiMnzinMAOwbxXjg2PiohILBrNPoc00IB44ENOVQs9c5/mtj3NwCm6D7wNns0DXZ2cfWuKlrWLSSRtfvZwDyuaqzn60n30dn8BgO98r5fimgrKa0s5cvR8poQyU91aDRRnpgjAZ3un4uDFW3n6SZs/7O3hpk3LmTNnFi/0nqa8LI+2loXs3HUH+54bpqn1Qd59d5Lx8Uv87tlj9P1pB52rGzjQdxrItPq0Ck0uU3Adi4YFpWxYv4AdO49ix6c4+FxmtE6eGqft+rkAfLNrI5+5fRlLFn+Drm/tp721BiIpHn/iMENH3qJ2XjHgEg6bWFY604TAVBZkWR5gcmNbFZEzg9TVzmJV+yIGh05h/essK1fM59vf7aFjwyPs/tEAxTXVhEIBvnx/Nys7FxGJe5SV5NDXc5Jjw+cxAznZ0DETGAGqsqk6jsOWzY1Mjt3Fxlub8H0Pw9B8pevTrLu5gUOHzzHw8hmiMZt9e+9iVmkuyvO5/7411NRUMDZ2kd0P9YFSOM5M142qWDS6C+jK7vi+T2FRLhAAIBqJUJAfRhkhfM9CG6Erqw2409408WiS/MIcIEDaTZFMOmitAR5WsUikCTP8GoEgyBXnFe+5VjrzPtNV7+VVgA/43koVi8cgOf535XvLJVgI4vGhSCnwXED+iRFerKKeoN8caDe7NwxKzmwI5F41AB8Y4ntgTyLzOjulqOFFU6VS+PWrD/kL7/ylHvzFZ6Wy4OoyfBBpAzU5hcyue0qK6l/ETaBikSkI5yOGQeD36/6mRg5eJ7PnT8OulZhpEhU9h1/Z8g9v9Q8alcoFN46KRaPg+0hhEThOOPDM+r+okf4WKSsHM+///2dKg+dA4h3IrTzm3fJMh1/bHlOWDyp7lWuNikYhELTSn+xr9do+/7iKjaOmzoLvTrfZ+2QhHiTGIHUBqdv0pH/9Vz+GEYwpG3AT4GQzyh7wPQgXICGNPrlvoz76w6+pd17uUI6NBAMQKgFj+s7ybXBiqHQSMfOQ0sZXZO6a3VTd+EcibyDFC5HajWDHMtGvAiHg2YAgeeVgxTFG93eo8/2bmTzZrhJjdbjxIkARyI1IuOwshfVDUrr0eSn9aL9SQOoiJMaQilak5uMzoH8DaWu8+ia13NAAAAAASUVORK5CYII="

/***/ }),

/***/ "LPih":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiDBoHJTpGvFUDAAABEUlEQVQ4y5WRwUsCQRjFf21RaRgEHewSTngORBAPCh78I7p66+of0im8SYf+jEpEL7oiiwoeJ7oEguTBFQs6rJdtdzbU2Xlz+OY93vu+GT4whsTDY0HCLDakEM9o+dUhFy9w4Nd7Hphp3SfhtcA4Rvs72n8TTllwyVoTaDAPyYiidsKEihUQh7zGfkEW2yRQwubbJFCmo9IkPyT3BnpU4CigayS39BXDMdcIBDcIBIIVfTUADlUOFUOaTyQSyYB3JC6Emwao8cTUt0gkH/zu/9QZUx7JaLeh4IpnvvC2nq5Jo50QtFjxFnnWP82KBJq0SdOlqdECuKSAc5a7teiEAXVS1LE1WoAMr7i8RP6wTTPBBnZRVxAmcOglAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEyLTI2VDA2OjM3OjU4KzAxOjAwTSw4mAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMi0yNlQwNjozNzo1OCswMTowMDxxgCQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"

/***/ }),

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OAj/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiDBoHNTt7eXfEAAABSElEQVQ4y5WSzStEURiHn3uH8tWQlFFyx4JM3f2MnaKxZ2EnpcmUhfEPyMaCkJWSNBYospikrEasbMaCuAtTsyA0UwrzUbNgLCTnXnfOvX678/R7Oud9O/AbL1FOeKBMlhQLBJAmQo5zpgniR2eUOHm2aLYvq2xyz5CFdpLAoNtOWOIanw1XWOEWrxUP8IK/ykNVjtiwwgtmJbNpFOgVQQ9FGqTr2GFevDLMKSWpcExYFDTu5PsmTZcoNFJ0EPLinlSytDsIPnKicEPQQQhxJR6bKNEnFVJMmMEah5L6CI/UmVEbz0xWqWtkGfuL+3kjYlMPkMbAYz/YEwl0gbQwxzsVKuzaK60sU8Bgm0XWSVImSYgYn2ZFMUn1DKLTQZ4MZ2QAiLGKwh7jfOAy37fsU+NWgOj/lakfxeNSuOSVYXTxVzlnhgNqvwA0RlM76yQ71AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMi0yNlQwNjo1Mzo1OSswMTowMAoFWRUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTItMjZUMDY6NTM6NTkrMDE6MDB7WOGpAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "RUv2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ParallaxBanner = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
    className: "p-0"
  }, __jsx("div", {
    className: "full-banner parallax text-center p-left parallax-banner18"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("div", {
    className: "banner-contain"
  }, __jsx("h2", null, "sale"), __jsx("h3", null, "fashion trends"), __jsx("h4", null, "special offer"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ParallaxBanner);

/***/ }),

/***/ "Rnrp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iGl2");
/* harmony import */ var _public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ModalComponent = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggle = () => setModal(!modal);

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: "theme-modal modal-lg",
    centered: true
  }, __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    className: "modal1"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "compare-modal"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "12"
  }, __jsx("div", {
    className: "modal-bg"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: toggle
  }, __jsx("span", {
    "aria-hidden": "true"
  }, "\xD7")), __jsx("div", {
    className: "offer-content"
  }, " ", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_Offer_banner_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "img-fluid blur-up lazyload",
    alt: ""
  }), __jsx("h2", null, "newsletter"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    action: "https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda",
    className: "auth-form needs-validation",
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    target: "_blank"
  }, __jsx("div", {
    className: "form-group mx-sm-3"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    className: "form-control",
    name: "EMAIL",
    id: "mce-EMAIL",
    placeholder: "Enter your email",
    required: "required"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    className: "btn btn-solid",
    id: "mc-submit"
  }, "subscribe"))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (ModalComponent);

/***/ }),

/***/ "STcy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/5QC");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XJI2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ProductItem = ({
  product,
  addCart,
  backImage,
  des,
  addWishlist,
  cartClass,
  productDetail,
  addCompare,
  title
}) => {
  // eslint-disable-next-line
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const cartContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_5__[/* CurrencyContext */ "b"]);
  const currency = curContext.state;
  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalCompare,
    1: setModalCompare
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleCompare = () => setModalCompare(!modalCompare);

  const toggle = () => setModal(!modal);

  const uniqueTags = [];

  const onClickHandle = img => {
    setImage(img);
  };

  const changeQty = e => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = () => {
    const titleProps = product.title.split(' ').join('');
    router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
  };

  const variantChangeByColor = (imgId, product_images) => {
    product_images.map(data => {
      if (data.image_id == imgId) {
        setImage(data.src);
      }
    });
  };

  let RatingStars = [];
  let rating = 5;

  for (var i = 0; i < rating; i++) {
    RatingStars.push(__jsx("i", {
      className: "fa fa-star",
      key: i
    }));
  }

  return __jsx("div", {
    className: "product-box product-wrap"
  }, __jsx("div", {
    className: "img-wrapper"
  }, __jsx("div", {
    className: "lable-block"
  }, product.new === true ? __jsx("span", {
    className: "lable3"
  }, "new") : '', product.sale === true ? __jsx("span", {
    className: "lable4"
  }, "on sale") : ''), __jsx("div", {
    className: "front",
    onClick: clickProductDetail
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${image ? image : product.images[0].src}`,
    className: "img-fluid",
    alt: ""
  })), backImage ? product.images[1] === 'undefined' ? 'false' : __jsx("div", {
    className: "back",
    onClick: clickProductDetail
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${image ? image : product.images[1].src}`,
    className: "img-fluid m-auto",
    alt: ""
  })) : '', __jsx("div", {
    className: cartClass
  }, __jsx("button", {
    title: "Add to cart",
    onClick: addCart
  }, __jsx("i", {
    className: "fa fa-shopping-cart",
    "aria-hidden": "true"
  })), __jsx("a", {
    href: null,
    title: "Add to Wishlist",
    onClick: addWishlist
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true"
  })), __jsx("a", {
    href: null,
    title: "Quick View",
    onClick: toggle
  }, __jsx("i", {
    className: "fa fa-search",
    "aria-hidden": "true"
  })), __jsx("a", {
    href: null,
    title: "Compare",
    onClick: toggleCompare
  }, __jsx("i", {
    className: "fa fa-refresh",
    "aria-hidden": "true"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modalCompare,
    toggle: toggleCompare,
    size: "lg",
    centered: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "compare-modal"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "12"
  }, __jsx("div", {
    className: "media"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${product.variants ? image ? image : product.images[0].src : product.images[0].src}`,
    alt: "",
    className: "img-fluid"
  }), __jsx("div", {
    className: "media-body align-self-center text-center"
  }, __jsx("h5", null, __jsx("i", {
    className: "fa fa-check"
  }), "Item ", __jsx("span", null, product.title), __jsx("span", null, "successfully added to your Compare list")), __jsx("div", {
    className: "buttons d-flex justify-content-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/compare"
  }, __jsx("a", {
    href: null,
    className: "btn-sm btn-solid",
    onClick: addCompare
  }, "View Compare list")))))))))), product.images ? __jsx("ul", {
    className: "product-thumb-list"
  }, product.images.map((img, i) => __jsx("li", {
    className: `grid_thumb_img ${img.src === image ? 'active' : ''}`,
    key: i
  }, __jsx("a", {
    href: null,
    title: "Add to Wishlist"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${img.src}`,
    alt: "wishlist",
    onClick: () => onClickHandle(img.src)
  }))))) : ''), __jsx("div", {
    className: `product-detail ${productDetail}`
  }, __jsx("div", null, title !== 'Product style 4' ? __jsx("div", {
    className: "rating"
  }, RatingStars) : '', __jsx("h6", null, product.title), des ? __jsx("p", null, product.description) : '', __jsx("h4", null, (product.price - product.price * product.discount / 100).toFixed(2), __jsx("del", null, __jsx("span", {
    className: "money"
  }, (product.price * 1).toFixed(2)))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: "modal-lg quickview-modal",
    centered: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "6",
    xs: "12"
  }, __jsx("div", {
    className: "quick-view-img"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `${product.variants ? image ? image : product.images[0].src : product.images[0].src}`,
    alt: "",
    className: "img-fluid"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: "6",
    className: "rtl-text"
  }, __jsx("div", {
    className: "product-right"
  }, __jsx("h2", null, " ", product.title, " "), __jsx("h3", null, " $ ", (product.price * 1).toFixed(2)), product.variants ? __jsx("ul", {
    className: "color-variant"
  }, uniqueTags ? __jsx("ul", {
    className: "color-variant"
  }) : '') : '', __jsx("div", {
    className: "border-product"
  }, __jsx("h6", {
    className: "product-title"
  }, "product details"), __jsx("p", null, product.description)), __jsx("div", {
    className: "product-description border-product"
  }, __jsx("h6", {
    className: "product-title"
  }, "quantity"), __jsx("div", {
    className: "qty-box"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("span", {
    className: "input-group-prepend"
  }, __jsx("button", {
    type: "button",
    className: "btn quantity-left-minus",
    onClick: minusQty,
    "data-type": "minus",
    "data-field": ""
  }, __jsx("i", {
    className: "fa fa-angle-left"
  }))), __jsx("input", {
    type: "text",
    name: "quantity",
    value: quantity,
    onChange: changeQty,
    className: "form-control input-number"
  }), __jsx("span", {
    className: "input-group-prepend"
  }, __jsx("button", {
    type: "button",
    className: "btn quantity-right-plus",
    onClick: () => plusQty(product),
    "data-type": "plus",
    "data-field": ""
  }, __jsx("i", {
    className: "fa fa-angle-right"
  })))))), __jsx("div", {
    className: "product-buttons"
  }, __jsx("button", {
    className: "btn btn-solid",
    onClick: () => addCart(product)
  }, "add to cart"), __jsx("button", {
    className: "btn btn-solid",
    onClick: clickProductDetail
  }, "View detail"))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (ProductItem);

/***/ }),

/***/ "SeLL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./helpers/cart/index.js
var cart = __webpack_require__("/5QC");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/headers/common/cart-header.js
var __jsx = external_react_default.a.createElement;





const CartHeader = ({
  item,
  symbol
}) => {
  const context = Object(external_react_["useContext"])(cart["a" /* default */]);
  return __jsx(external_react_["Fragment"], null, __jsx("li", null, __jsx("div", {
    className: "media"
  }, __jsx(link_default.a, {
    href: '/product/' + item.id
  }, __jsx("a", null, __jsx(external_reactstrap_["Media"], {
    alt: "",
    className: "mr-3",
    src: `${item.images[0].src}`
  }))), __jsx("div", {
    className: "media-body"
  }, __jsx(link_default.a, {
    href: '/product/' + item.id
  }, __jsx("a", null, __jsx("h4", null, item.name))), __jsx("h4", null, __jsx("span", null, item.qty, " x ", symbol, " ", (item.price - item.price * item.discount / 100).toFixed(2))))), __jsx("div", {
    className: "close-circle"
  }, __jsx("a", {
    href: null,
    onClick: () => context.removeFromCart(item)
  }, __jsx("i", {
    className: "fa fa-times",
    "aria-hidden": "true"
  })))));
};

/* harmony default export */ var cart_header = (CartHeader);
// EXTERNAL MODULE: ./helpers/Currency/CurrencyContext.js
var CurrencyContext = __webpack_require__("XJI2");

// CONCATENATED MODULE: ./components/containers/CartContainer.js
var CartContainer_jsx = external_react_default.a.createElement;







const CartContainer = ({
  icon
}) => {
  const context = Object(external_react_["useContext"])(cart["a" /* default */]);
  const currContext = Object(external_react_["useContext"])(CurrencyContext["b" /* CurrencyContext */]);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  return CartContainer_jsx(external_react_["Fragment"], null, CartContainer_jsx("li", {
    className: "onhover-div mobile-cart"
  }, CartContainer_jsx("div", {
    className: "cart-qty-cls"
  }, cartList.length), CartContainer_jsx(link_default.a, {
    href: `/page/account/cart`
  }, CartContainer_jsx("div", null, CartContainer_jsx(external_reactstrap_["Media"], {
    src: icon,
    className: "img-fluid",
    alt: ""
  }), CartContainer_jsx("i", {
    className: "fa fa-shopping-cart"
  }))), CartContainer_jsx("ul", {
    className: "show-div shopping-cart"
  }, cartList.map((item, index) => CartContainer_jsx(cart_header, {
    key: index,
    item: item,
    total: total,
    symbol: symbol
  })), cartList.length > 0 ? CartContainer_jsx("div", null, CartContainer_jsx("li", null, CartContainer_jsx("div", {
    className: "total"
  }, CartContainer_jsx("h5", null, "subtotal : ", CartContainer_jsx("span", null, symbol, total)))), CartContainer_jsx("li", null, CartContainer_jsx("div", {
    className: "buttons view-cart"
  }, CartContainer_jsx(link_default.a, {
    href: `/page/account/cart`
  }, CartContainer_jsx("a", null, "view cart")), CartContainer_jsx(link_default.a, {
    href: `/page/account/checkout`
  }, CartContainer_jsx("a", {
    className: "checkout"
  }, "checkout"))))) : CartContainer_jsx("li", null, CartContainer_jsx("h5", null, "Your cart is currently empty.")))));
};

/* harmony default export */ var containers_CartContainer = __webpack_exports__["a"] = (CartContainer);

/***/ }),

/***/ "T8au":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAE80lEQVRIibWWa2wUVRiGn7ntzC67LYUWBAxpQUqkBm+AtrUQE4iQIpgmhGAMYPCCaIiJPxRI9I8GNdGooEAgEECNoCiIYCIaLm0pVLDWAoVSCZXaUiiku1v2MrMznz+WJVCQooH335mcc5555zvzvUeJRiL0ojFAOVACjAD6AQpwEWgG9gM7gYM320S5CehxYDEwsbc3uaw9wFLgp/8CWg68fIuAnloNvNAbSAN2A2X/E5JRLTABSGQeqD0mVN4GCMA40rW7oqtBK4Di2wDJ6EFgfWaQ+XRjSdu9ExoPVGYcfXqHIACfQdpREXDkDoIAxurALM/zME0fpuW/4SwvlULVdQCitoBPQYAsANfBcT0Mn3ndumQiTjJpo6rqLB14zDRNYrEYy1esxvT7qXiynNa2dtrazyIiTCgr4aNlK8gZks/8meUoP65EyR/F9s5+jC4sICsYYNumb9F0jcEDB9LecQ7XTTF96hRM04ebckt04B7Tsqg+UMve6oOUFo9j9osLGTliGFU1tcx5eiYnmjfScbGL0okjcTYsxPhuI9ZIg99aRnFs5jsMD7qsWrcB13GYNnUKx5ua+b2+gUAgwIyK6XRHo/kq0BegKxzmsdJiKqaVU3XgIFmhEO+//Rb1R46ybOUaFr6ygCdKx+CeOkTKB3aTwxvPP8XmHbv4YvMW3nz9NfJychhfWszxppPk9Mvh0XFjSDk2qFqWtnjRoiW6YRiaprH56y3UH23kpefm4nke0Wg3mqZRMa2cTV9t4lRnN49MrsB37jBe0cNY89bQ3nqG+wsLKJ88iZoD1eTmDeDewhEMGXwXAb9FfsEwUqbPIRqJ/B2JRMROJqSttVUi4bCIiNjJpLS0/CWO44iISOOxRqmq3i8ZnQ0npO1c15Wx57pypuW0NJ1sFhER17Glrb1DoiIS/WVdhxKNRPaKyHhVVQn4/TiOg5NK0ScYZO+ePTQ2NhKLx8nt35/s7Cw6L1zkfDjGsPyh5PUNUVlZSTKZpLCwkDlz5yKeRyIeR/WZKIZOcv9mWPHMIRWoVhQFEeFSLIbtOIgIALquEw6HudDZic80KSq6D9d18eIRsvw+wuEwiqrieh62bROLxUjE47iagWPo2LVb4YOZkDu0RolGIqOB+hv9P4ZhYFoW4a4uHMchFAphWhYAFzo7iUaj5BcU4LkuiUSCRCyGlZeHB7BrFbJmPph+GD2pJNPr6oAHroaICJqmAeDz+RARbNsm417XdTRNw3EcVEUBFFJ+CwFY/yry/ceQFYQBBU3k3D0yAyqmR1u/ZXkeBLPTSdbSgKxdAH9UwaDBYJgQyJ6Ebv18dfCtBZ69ZYAIWEHwqeCk4If3kG3vQrwbBg0H8UDVvkHVZuC51yXsYeChmwOAPqG0AwGqPkd2fggn6iC3PwT7gZMEVWtEUUfhucD1UW4B+0jn07Uy/GClGyvdEfh1C7JvHRypBMuA3KFpl04SAtkNGP4youfDqOk66z22S5CO4TV43jx0H/S53NEdDxqroX4nUrcdTjWAqcHgAlBUSDlpi2afL8kaOBs77uK5ZED/ft3StCmk7CWcrC7l+B6k+QCcroPopfRpCuWlHYibBmlGLYZ/KWZgK74AJLoh3A6a0QsoFII/65BPKsroPDMVM1BCoG8+upGNCKBEUNUWNL0GzdyBZuxGuVxEMwjJ2DWgfwC09kc21Mu6AAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "U8OX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompareContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("U8OX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["d"]; });

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  compareItems: Function,
  addToCompare: Function,
  removeFromComapre: Function
});

const getLocalCompareItems = () => {
  try {
    const list = localStorage.getItem('compare');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: compareItems,
    1: setcompareItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalCompareItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('compare', JSON.stringify(compareItems));
  }, [compareItems]); // Add Product To Wishlist

  const addToCompare = item => {
    const index = compareItems.findIndex(compare => compare.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setcompareItems([...compareItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From compare


  const removeFromComapre = item => {
    setcompareItems(compareItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  };

  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      compareItems: compareItems,
      addToCompare: addToCompare,
      removeFromComapre: removeFromComapre
    }
  }, props.children);
};


/***/ }),

/***/ "UGBA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_copyright__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ie/Y");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2dXf");
/* harmony import */ var _headers_common_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mo9o");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const FooterFive = ({
  layoutClass,
  logoName
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var contentwidth = window.innerWidth;

    if (contentwidth < 750) {
      Object(_services_script__WEBPACK_IMPORTED_MODULE_3__[/* SlideUpDown */ "f"])('footer-title');
    } else {
      var elems = document.querySelectorAll(".footer-title");
      [].forEach.call(elems, function (elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: block";
      });
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("footer", {
    className: "jewel-footer"
  }, __jsx("div", {
    className: "white-layout"
  }, __jsx("section", {
    className: "p-0 "
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "footer-theme2 section-light footer-border"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("div", {
    className: " footer-block"
  }, __jsx("div", {
    className: "footer-container"
  }, __jsx("div", {
    className: "footer-title footer-mobile-title"
  }, __jsx("h4", null, "about")), __jsx("div", {
    className: "footer-contant"
  }, __jsx("div", {
    className: "footer-logo"
  }, __jsx(_headers_common_logo__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    logo: logoName
  })), __jsx("div", {
    className: "social-white"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-facebook",
    "aria-hidden": "true"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://plus.google.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-google-plus",
    "aria-hidden": "true"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://twitter.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-twitter",
    "aria-hidden": "true"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-instagram",
    "aria-hidden": "true"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://rss.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-rss",
    "aria-hidden": "true"
  }))))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "form-p p-0"
  }, __jsx("div", {
    className: "footer-block"
  }, __jsx("div", {
    className: "subscribe-white"
  }, __jsx("h2", {
    className: "text-white"
  }, "newsletter"), __jsx("form", null, __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "exampleFormControlInput",
    placeholder: "Enter your email"
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-solid black-btn"
  }, "subscribe")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("div", {
    className: " footer-block"
  }, __jsx("div", {
    className: "footer-container"
  }, __jsx("div", {
    className: "footer-title"
  }, __jsx("h4", null, "store information")), __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", {
    className: "contact-details"
  }, __jsx("li", null, "Multikart Demo Store, Demo store India 345-659"), __jsx("li", null, "Call Us: 123-456-7898"), __jsx("li", null, "Email Us: ", __jsx("a", {
    href: "#"
  }, "Support@Fiot.com")), __jsx("li", null, "Fax: 123456")))))))))), __jsx("div", {
    className: "white-layout box-layout"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx("section", {
    className: "small-section"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "footer-theme2"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], null, __jsx("div", {
    className: "footer-link link-white"
  }, __jsx("div", {
    className: "footer-title"
  }, __jsx("h4", null, "my account")), __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "mens")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "womens")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "clothing")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "accessories")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "featured")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "service")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "cart")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "my order")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "FAQ")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "new product")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "featured product")))))))))), __jsx(_common_copyright__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    layout: layoutClass
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (FooterFive);

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Z0Qo":
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"English\",\"val\":\"en\"},{\"lang\":\"Franch\",\"val\":\"fn\"}]");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dlEN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiDBgLCDlcjG+5AAABjklEQVQ4y5WRz0sCQRzF3+wuCUKgWxCBlPNdCcG61KGT0SG0HxAU0jEIEiJK6FLkKTp3if6P2EM/jt2Cgk6BhGViBEVkVpBiqzMdQpS03XqnYb6fN8P3PeBfYrVDqK0ckp7KY+4Ksj72B9Vu9orUTbnB49P5Lr2RRS8k6c5IQAWg8hXKkaQX+qR3Yy/YAQAK0MvbztiwmPO6b3V4sCXX+UFfJ5nKptyG51ZX2mVMDJXPjQDAAi5xgUvv/IVV+4t3sSP0IVOdyD0AAF2yPFsWmxgUQ0o1DrdYqMOA9Y4CMtrYNwxYUZkVJywJlxpn/BT72Z3G7WkWSW08/dwYiHEss/KGzYDeeNg5QB6jNA/TqwZNWs64deiqKBWhKciwfmf8vpQx5QCuFWmyeL0su0LlIkz4dHriSWeaNuipxwuAj1DRWHWAl6gUGK3tHaGikbDJZZFKfLrxwsbQBNsZWsK/GX6FWxls4Z8GRxgA/FEq0hrAV6hEU3AWj1CePqhAk82zlvX7PWrISt0V/vC2vb4AhzCUX94si94AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTItMjRUMTA6MDg6NTcrMDE6MDBpx241AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEyLTI0VDEwOjA4OjU3KzAxOjAwGJrWiQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ "dtqM":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAFjklEQVRIiaWWa4ycVRnHf+e8Zy47l52d7qXdWdputwsLtpUVWivLVkrgk2DwkghY1EBq8Erwgwnxg+FLIwlRMUGNxgYb+AJagjFySyRlu25Li9SitbSulO223e7M7Ozc573MOccPs0Nqs11t+CfvhzfPyfM77/Oc8/xfMf74fv6HtgJ3AWPAtcAqQAAFYBqYAl4G3lopiVohdjvwA+DOK8Q7gcGl+A+BA8CPgNeXWyyvkORp4I0VIMtpJ/Aa8Ov/B+QAE8C3rwJwub5Oq4zRlUAHgR0fAdLWJ2n17kNd2qNfArcACGsJVJhyLImvwghriXt1Em4VYQxCWFzCLJoUrgkjhCUp63SJCg4GgwD4BLAP+NqloG3AN4S1WCmZS68h6lbZdOZdeisLBE6ImZ61vD8wTIfvUl6MkJQenwodJxPJEVjF6eZ63g1GiDouGSdP0zoAXwV+Axxsg37e+ooQ86lexk9M8qWpF9mYnSHmu2ghKcY7mRrayjNjD3Dn6pN8l33cGJ0G2QAkjWaKP9dv5iflB5kOBtgYOt+G/QLYIsYf378J+AfA+VX9fO7wH3jspacwKkw21UvgOAgLcd0gcq7Euc2D3PpIFhHPQbUP3yqEgJBsgLNAqdHPfdknec+sZ70zh8YB2CaB+4W1zHetZvt7h/n+Sz9jMd7FTLofX4WwCIwULPpxCpsy3DCcpXRM4gVrca3AmCbaSlwdo+EPkuqYY2/3HhK2RoV4u//3S2C86TgoYfj8gd+h6y5532LyOfwLF2gWFvFm5wiy5+lccxZzTZlSzqd2fAYVcUHFsOWz2NpFcHN4iyEy9iS74q8xp3vboDEFDNeicdYeO8ToyACJ3T9lYzSG1Zr5555FaIHqXUPixuvoSEzjz19EywpyeBwx9gCqMoP+1x/BNEF72Egatuxg/G9VfvX2LKZTIjGDCujyVZjkB9P03LSOru89iq5WKU9MsmHPHiJDG/DOnEHXG8jULpy6T6hWQ23bgTn9CPrvzxK+91Vk+jpss46ZPQB9GXrUC6RkmcB2ExGmUwJCGkMQT2KTSVjI41+YI5zpp+OGEXS1SnR4GBkNY7wGxtcE2UXy+35LaPDjODd/C9G5HqJpbOEUxFZD8QRufpog3I3EfnhhizGvHsuObufff32B4AtfJB9LEcn0I5QCazGej656pEY8Oga7qB6dIeKcxBR3gXYJJh4DDObi28ihe3D0EU6VOijIPlaJ8wAVBUx3BF7m3DVDvD6hePjgBOVYGuu5WK0RCBASY8OYUR+xqYHjJUnvjBJMPoEJJBgDgI2miR55AhTsN3tJCLd9GGYU8Bewn04Xc/z+rofYWpxh7PQRpgeG0I6DsBYEaC0J3q+TDOVJfNZgkyE8dx0i2iqNRRKTJUjC0wvf4WB9M9eGZrGtcXTIWbfz3hyIb0YDj3Ksk6mR7fSV8mye/SddtRKRpk9no0pfLUc53MmPN+4m2NbN9aGjKFtESQ8lK4ScAhDiqcLDPFn+MhmVJyQ0LY/kUbHksMeAUWU0uWQ3Tcfh9hOTjJ45Tk+lQOCEONszwOTHxnhr4CaSxTJ3qze5LfYOA2qBwDqcCtbycv02ptwtDKgsceGiW+ZwCri+DbqlPdalNfgqTD7ZDUDcq9OUDrVIjLhXp7e2gGvDXFi6jHFZR1tJ1SRIyBqrncJSKUW7P3cAb7SH6iHgGeBBIyRKN1lTnMcKgREty0rXigA0cVBCs05dxCLQViIk9DnFywEAz9Ny6v8yvoeAdy5dJazFMRrHaJaTwKKExmHZ+AngvvbL5Q57K3B02axXp+MsmeiVQC4tG977ESDP0XLXykqgtnYDnwEmrwJwGLgH+AoszZ1LtNJ/3StLzzhwN61SbABStC5HCfiA1kH6E/DmSrv4D19DRIS7aeNEAAAAAElFTkSuQmCC"

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fhoN":
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "fnYr":
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gy5E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








let apolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client
    }, __jsx(PageComponent, pageProps));
  }; // Set the correct displayName in development


  if (false) {}

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.

      const apolloClient = ctx.apolloClient = initApolloClient({}, ctx.req && ctx.req.headers.cookie); // Run wrapped getInitialProps methods

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } // Only on the server:


      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if ssr is enabled


        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              })
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState
      });
    };
  }

  return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */

function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */


function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
      uri: "http://localhost:4000/graphql",
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default())
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "hRBw":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ1OERGNDA0RDU3MTFFOThEMzlFQTJDMjRENDY0MjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ1OERGM0Y0RDU3MTFFOThEMzlFQTJDMjRENDY0MjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyRjU5QzY4RDkxMDExRTg4NjMwODI3MUE5RjdBOTZGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyRjU5QzY5RDkxMDExRTg4NjMwODI3MUE5RjdBOTZGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PHbQJwAAAU1JREFUeNpijD99JJOBgWE6w8CATCYgMRmI3QfAcpCdk0EOYAbilUCsS0fLdaF2MjNBBfiBeCMQi9LBcpAdG6B2MjAhSSgC8WYgZqeh5WxQO5RgAkxoCsyBeC4QM9LAcpCZ86B2MOByAAhEA3EtDRxQAzWbgZADQKABm2IKAMisRmwSTHiCaxZ6cJEJzKFmMZLiABDggiYYeQosl4OawYVLARMRWWYzLMuQCEB6thDK2kxEFhrLoAUWsQCkdikxhRsTkQZ6AfFEEhwwAYi9iVHIRIKh2aDKg5gKBohziDWUicR4BVVcbnjkXaFqGGjlAFDcrsIRtyCx1SSmFZIdAEvd69FStyhUjOTcwkRm/laGZk82KN4EFSMZsOCR+wvEn/DIqwFxL5StDsTv8ajlwxU1LATiW5CAB3IYKARMDAMMRh0w6oBRBwy4AwACDABJqySJ7DB4XgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iGl2":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Offer-banner-bd137ed69c91ca12fda2892b70df886a.png";

/***/ }),

/***/ "k2Z+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADwUlEQVRIibWWW0wcVRiAvzN7gV12ubVcCoJWQTQaLChekKJW1EjbaGxMxaTRqG1MMTE+GFMS6oOJfW5SrbHBS1If8Mk00iaatDQYKaKGNdZWi0qQCqUsMLMsy+7M7u/DOIhrXEoLXzKZnHP+Od+cy8x/VMQwWIa7gK1AI1ANFAIKmAaGga+B48BApk5UBtFDQAfQstyb/E0vcAD4YiWiQ0D7FQrSOQLsWU7kAk4Bm69S4vAN8ACw4FRoaQF9qyABuBt77RZZKjoM3LcKEoc64GOn4ExdA/Zw14JmoM8Z0TtrJAF4F+wR3SYiPyqlCAT9gAvEYm4uhoiglPrXUyKgFAR8XnBrYCWZi5mL9SJCMNsDbhfxeBLTsgAa3ECbphRej4uLE9Nc+GOSqopiritdh7OE5kIMT3YWC/Mxsv3ZAIxemmEkHKWqOEhZYQA0BSjMBZPL0QTjs1HyPVCYF0Qp1eYGmnJyfFwK67Ts/4ANQR/hWILOnVsoLsjFo8EdG0s5+8som6rKmZya4dzFaV7v/Z0cJczELd5suZWSPD+WadFcU0F79yBGNEbXU/WICJqmGt1AFZqbwQtjDI9P0bnzadrfO0ZoZJyJoWG6T33Pq082cX5simcfrqfrWB8l11eiW15e23wjL382RGhcZ/K3MB/1D3NgWy1/6vM8XrOB8tIi5iIRUim5QRPIBwiNTOCyUnzSG+KNHc2sD/op8Hnxez3kZHmpLivkmY4jbKosorWpjtGJaY4OjbHvwRoKfF4CLo3KwhxODk8C8EhVEWA6S5vrdrs0BdD15SBNtTfR89Zuu2VHByUBH3hcvPhoA4dPnCExEaZz12Ns7w5xT2UBPXu2AEKw41NKfF5K8v0kRTDiFnXl+Uh8UYRbRGZj81H/wd3bqS5bj1gmppXk+P7nOT82SXVFMevyAhz6vJ+2F1rJCuTxyp3l3FwUBDNBImlx4rlGzl2OcEtRkCy3i3gyhVIwn0g6ngiGbpzWZ2fFJin67KwYui5L+fanX2Vr5/syORUWM5EQEVMkGV8Sa4pIyr6n7HZd18UwDInY14CKGMbbwL7/+9pEBIBgbi5YCYxoDE1L/0Uuy0EVMYxaIJQpSimFphTJVGqlAod7NeAHYChTlIhci+RnYMCZg71X28sVsBf+SRP9wIdrIOkGTsJ/M+x3QP0qSc4CtzuF9O1zPzC4CpIQaUk0XbSAnYa7rkFyFDu7RjKJHF4CWoGvViA4AzwB7AIkvTHTuc6hCdiGPRUbgTzsA6QOjGBvpB7gdKZO/gJX4qTG+gXfMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "mJAf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAQAAABKIxwrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiDBgLCBb3XVLgAAABxklEQVQ4y32TTUtUURjHf+dM2suAs5hi0HDmnudeohqV0kVBL1AtUojeFvUVolXSRwjDPkCi0KpF0CLa1CosISJnUSCRVlAZhmjdrClMxube48Jq5t669786f57feZ7Dn+coYpKivazOUGCe++ra27loVUWtVw4f81HdYM46XLD58NCHGZIlFbnX17J+LrfKA3mSBneLdXZGfWlXM6EjfA/+7KuGffeCb7o7Ebft+LGBvtqeiKtfZGL4BmrJ3efpaL7Q10KBhURcT5L1ehp+aS+bg6dp2Txzbza5W1IhTe5RCdyhHVvB2ybDUjeHSZc5Z3yx8lWsfJKz8aqOwSfprBXDfjVoj6+WcOREUtuMOyAPpW6uND1tSAIZd/tj8TqbZFgWJZA7zp5oD69X7kogC3LV29hIYFQ+y6VS+//HdnbIoPFl5A+ck7p3Kj0A97TUvTbQoLrI8CgdDybI2C7QEGYht5KO55fXOQ36C1SL6Xi1CHoJNNSmeR1OmTE5+M8+Amj3gBkLp3izMvP7r5Zbf57XF+0+fjDJcxatT5WcylNQvXY/OSr2+pbbL1cjX9sU1DF1xO7GkKWN7yzzXk3biXB89u8SrwH6AIdbe1aULgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMi0yNFQxMDowODoyMiswMTowMDE6SIsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTItMjRUMTA6MDg6MjIrMDE6MDBAZ/A3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mo9o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoImage = ({
  logo
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/'
  }, __jsx("a", null, __jsx("img", {
    src: `/assets/images/icon/${logo ? logo : 'logo.png'}`,
    alt: "",
    className: "img-fluid"
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (LogoImage);

/***/ }),

/***/ "nLc3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2dXf");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Category = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx("section", {
    className: "section-b-space border-section border-top-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, _services_script__WEBPACK_IMPORTED_MODULE_2__[/* Slider6 */ "k"], {
    className: "slide-6 no-arrow"
  }), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    enableBackground: "new 0 0 512 51",
    xmlSpace: "preserve"
  }, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M371.769,176.364l30.47-30.47l-21.71-25.265h-52.305l-21.71,25.265l30.47,30.47\r c-29.557,3.279-57.658,14.863-80.982,33.507c-23.324-18.644-51.425-30.228-80.982-33.507l30.47-30.47l-21.71-25.265h-52.305\r l-21.71,25.265l30.47,30.47C61.471,185.049,0,251.988,0,333.024c0,86.914,70.71,157.625,157.625,157.625\r c35.834,0,70.513-12.2,98.375-34.472c27.862,22.272,62.542,34.472,98.375,34.472C441.29,490.649,512,419.938,512,333.024\r C512,251.988,450.529,185.049,371.769,176.364z M327.237,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L327.237,145.11z\r M130.486,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L130.486,145.11z M157.625,475.441\r c-78.529,0-142.417-63.888-142.417-142.417s63.888-142.417,142.417-142.417c34.337,0,67.503,12.392,93.387,34.894\r c8.035,6.984,15.308,14.898,21.618,23.522c17.933,24.508,27.412,53.555,27.412,84.002c0,27.573-7.775,54-22.563,76.946\r c-0.192-0.192-0.376-0.39-0.566-0.583c-0.834-0.847-1.659-1.702-2.465-2.574c-0.357-0.386-0.705-0.781-1.055-1.172\r c-0.661-0.736-1.315-1.479-1.955-2.233c-0.368-0.433-0.731-0.869-1.092-1.308c-0.618-0.751-1.225-1.513-1.823-2.28\r c-0.337-0.432-0.675-0.863-1.005-1.3c-0.655-0.867-1.293-1.748-1.921-2.636c-0.195-0.275-0.396-0.545-0.589-0.823\r c10.887-18.81,16.619-40.153,16.619-62.037c0-21.925-5.759-43.301-16.685-62.137l0.061-0.096l-2.58-4.072\r c-4.983-7.859-10.817-15.117-17.407-21.662c-2.197-2.182-4.478-4.285-6.839-6.304l-6.234-5.332l-0.161,0.22\r c-21.339-15.929-47.37-24.62-74.156-24.62c-68.375,0-124.002,55.628-124.002,124.002s55.627,124.001,124.002,124.001\r c26.853,0,52.947-8.733,74.315-24.737c0.095,0.118,0.196,0.231,0.291,0.348c0.539,0.661,1.092,1.311,1.641,1.964\r c0.423,0.501,0.841,1.007,1.269,1.503c0.586,0.677,1.185,1.342,1.782,2.01c0.409,0.457,0.812,0.92,1.226,1.372\r c0.656,0.716,1.326,1.418,1.995,2.122c0.37,0.389,0.734,0.787,1.108,1.172c0.815,0.841,1.646,1.666,2.48,2.488\r c0.228,0.225,0.449,0.456,0.677,0.68C219.606,465.022,189.107,475.441,157.625,475.441z M289.077,246.04\r c18.767-14.095,41.689-21.81,65.298-21.81c59.989,0,108.794,48.805,108.794,108.794c0,59.989-48.805,108.792-108.794,108.792\r c-23.608,0-46.531-7.715-65.298-21.81c17.142-25.819,26.172-55.735,26.172-86.984C315.249,301.775,306.22,271.858,289.077,246.04z\r M256,379.489c-6.834-14.454-10.418-30.285-10.418-46.465c0-16.18,3.584-32.012,10.418-46.465\r c6.834,14.454,10.418,30.285,10.418,46.465C266.418,349.204,262.834,365.035,256,379.489z M222.923,246.04\r c-17.142,25.819-26.172,55.735-26.172,86.984c0,31.248,9.029,61.165,26.172,86.984c-18.767,14.095-41.69,21.81-65.298,21.81\r c-59.989,0-108.794-48.804-108.794-108.793S97.636,224.23,157.625,224.23C181.234,224.23,204.156,231.945,222.923,246.04z\r M354.375,475.441c-34.337,0-67.503-12.392-93.387-34.894c-8.034-6.983-15.308-14.898-21.618-23.522\r c-17.933-24.508-27.412-53.555-27.412-84.001c0-27.573,7.775-54.001,22.562-76.946c0.194,0.194,0.38,0.394,0.572,0.589\r c0.833,0.845,1.656,1.698,2.46,2.569c0.355,0.384,0.701,0.778,1.05,1.167c0.664,0.739,1.32,1.485,1.964,2.243\r c0.364,0.429,0.724,0.862,1.082,1.296c0.622,0.756,1.233,1.522,1.835,2.294c0.334,0.428,0.669,0.855,0.997,1.289\r c0.655,0.867,1.292,1.748,1.921,2.635c0.196,0.277,0.398,0.548,0.591,0.827c-10.887,18.81-16.619,40.153-16.619,62.038\r c0,21.925,5.759,43.3,16.685,62.136l-0.062,0.096l2.581,4.072c6.643,10.478,14.8,19.888,24.245,27.966l6.234,5.332l0.161-0.221\r c21.34,15.929,47.369,24.62,74.156,24.62c68.375,0,124.002-55.626,124.002-124.001s-55.626-124.001-124.002-124.001\r c-26.853,0-52.947,8.733-74.315,24.738c-0.095-0.118-0.196-0.231-0.291-0.348c-0.538-0.66-1.089-1.309-1.638-1.96\r c-0.424-0.503-0.844-1.011-1.274-1.508c-0.58-0.67-1.173-1.329-1.764-1.989c-0.416-0.464-0.825-0.935-1.246-1.394\r c-0.642-0.701-1.298-1.387-1.951-2.075c-0.385-0.406-0.763-0.818-1.153-1.221c-0.781-0.805-1.577-1.594-2.373-2.382\r c-0.262-0.259-0.516-0.525-0.78-0.783c24.804-19.075,55.302-29.493,86.786-29.493c78.529,0,142.417,63.888,142.417,142.417\r C496.792,411.554,432.904,475.441,354.375,475.441z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("rect", {
    x: "248.396",
    y: "21.351",
    width: "15.208",
    height: "47.344"
  }))), __jsx("g", null, __jsx("g", null, __jsx("rect", {
    x: "294.983",
    y: "52.217",
    transform: "matrix(0.4198 -0.9076 0.9076 0.4198 130.5873 323.9224)",
    width: "47.343",
    height: "15.207"
  }))), __jsx("g", null, __jsx("g", null, __jsx("rect", {
    x: "185.738",
    y: "36.156",
    transform: "matrix(0.9076 -0.4198 0.4198 0.9076 -7.2537 86.6932)",
    width: "15.207",
    height: "47.343"
  })))))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "rings")), __jsx("h6", null, "23 items"))), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512.003 512.003",
    enableBackground: "new 0 0 512.003 512.003",
    xmlSpace: "preserve"
  }, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M381.176,33.536c-4.787-2.764-10.915-1.122-13.679,3.665c-2.764,4.797-1.122,10.915,3.665,13.679\r c4.787,2.774,10.915,1.132,13.679-3.665C387.605,42.429,385.963,36.31,381.176,33.536z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M256.002,0c-5.528,0-10.014,4.486-10.014,10.014c0,5.528,4.486,10.014,10.014,10.014c5.528,0,10.014-4.486,10.014-10.014\r C266.016,4.486,261.53,0,256.002,0z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M256.002,266.369c-5.528,0-10.014,4.486-10.014,10.014c0,5.528,4.486,10.014,10.014,10.014\r c5.528,0,10.014-4.486,10.014-10.014C266.016,270.856,261.53,266.369,256.002,266.369z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M144.508,37.202c-2.764-4.787-8.892-6.429-13.679-3.665c-4.787,2.774-6.429,8.892-3.665,13.679\r c2.764,4.797,8.892,6.439,13.679,3.665C145.629,48.117,147.272,41.998,144.508,37.202z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M256.002,40.056c-5.53,0-10.014,4.483-10.014,10.014v40.056c0,5.531,4.484,10.014,10.014,10.014\r s10.014-4.483,10.014-10.014V50.069C266.016,44.539,261.532,40.056,256.002,40.056z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M184.564,106.588L164.537,71.89c-2.766-4.79-8.889-6.435-13.679-3.667c-4.79,2.765-6.432,8.888-3.667,13.679\r l20.028,34.699c1.856,3.213,5.221,5.009,8.683,5.009c1.697,0,3.42-0.433,4.996-1.343\r C185.687,117.502,187.329,111.378,184.564,106.588z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M361.147,68.225c-4.793-2.766-10.914-1.124-13.679,3.667l-20.028,34.698c-2.765,4.789-1.123,10.913,3.667,13.678\r c1.577,0.91,3.298,1.343,4.996,1.343c3.462,0,6.827-1.797,8.683-5.009l20.028-34.698\r C367.579,77.114,365.937,70.989,361.147,68.225z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M466.291,276.315c-0.001-0.123-0.008-0.245-0.014-0.369c-0.006-0.128-0.014-0.256-0.024-0.385\r c-0.007-0.082-0.008-0.165-0.017-0.246c-0.012-0.112-0.032-0.224-0.047-0.335c-0.018-0.125-0.039-0.25-0.061-0.376\r c-0.017-0.094-0.028-0.189-0.048-0.282c-0.02-0.093-0.047-0.185-0.069-0.278c-0.031-0.128-0.065-0.256-0.101-0.384\r c-0.029-0.103-0.054-0.208-0.086-0.31c-0.023-0.072-0.053-0.143-0.078-0.215c-0.047-0.136-0.097-0.271-0.149-0.406\r c-0.042-0.107-0.081-0.215-0.126-0.32c-0.024-0.055-0.053-0.109-0.078-0.164c-0.064-0.141-0.132-0.279-0.202-0.418\r c-0.054-0.106-0.106-0.212-0.164-0.315c-0.01-0.018-0.017-0.036-0.027-0.054L404.995,165.31c-0.03-0.053-0.068-0.098-0.099-0.15\r c-0.167-0.285-0.349-0.562-0.545-0.829c-0.051-0.07-0.1-0.141-0.152-0.21c-0.249-0.323-0.516-0.636-0.805-0.928\r c-0.004-0.004-0.009-0.008-0.014-0.013c-0.274-0.276-0.571-0.533-0.879-0.778c-0.077-0.061-0.155-0.118-0.233-0.176\r c-0.248-0.185-0.508-0.359-0.777-0.524c-0.087-0.053-0.172-0.109-0.261-0.159c-0.341-0.194-0.693-0.375-1.063-0.531\r c-0.004-0.002-0.008-0.004-0.013-0.006c-0.001-0.001-0.003-0.001-0.004-0.002c-0.372-0.156-0.75-0.28-1.129-0.389\r c-0.106-0.03-0.213-0.053-0.32-0.08c-0.298-0.075-0.597-0.135-0.897-0.182c-0.107-0.016-0.212-0.034-0.32-0.047\r c-0.401-0.049-0.802-0.08-1.201-0.08c-0.001,0-0.002,0-0.004,0h-0.002c-0.017,0-0.033,0-0.05,0H256.002h-0.026H115.824\r c-0.415-0.001-0.83,0.031-1.247,0.082c-0.097,0.012-0.192,0.029-0.288,0.044c-0.303,0.047-0.606,0.108-0.908,0.184\r c-0.112,0.028-0.223,0.054-0.333,0.086c-0.327,0.094-0.652,0.206-0.974,0.335c-0.054,0.022-0.109,0.037-0.163,0.06\r c-0.009,0.004-0.019,0.006-0.028,0.01c-0.362,0.154-0.706,0.332-1.039,0.523c-0.084,0.048-0.163,0.102-0.245,0.152\r c-0.27,0.164-0.53,0.339-0.779,0.526c-0.082,0.061-0.163,0.123-0.244,0.187c-0.278,0.221-0.544,0.455-0.794,0.702\r c-0.033,0.032-0.068,0.061-0.1,0.094c-0.287,0.291-0.554,0.6-0.801,0.922c-0.047,0.061-0.089,0.126-0.135,0.188\r c-0.197,0.269-0.381,0.548-0.549,0.835c-0.03,0.052-0.068,0.097-0.098,0.149L47.134,271.233c-0.002,0.003-0.003,0.005-0.005,0.008\r l-0.119,0.209c-0.01,0.018-0.017,0.037-0.028,0.055c-0.062,0.111-0.118,0.225-0.176,0.339c-0.072,0.141-0.142,0.282-0.207,0.427\r c-0.02,0.044-0.042,0.088-0.062,0.132c-0.049,0.113-0.091,0.229-0.136,0.345c-0.054,0.138-0.106,0.276-0.154,0.417\r c-0.021,0.06-0.045,0.12-0.064,0.18c-0.035,0.11-0.061,0.223-0.093,0.335c-0.037,0.132-0.074,0.264-0.105,0.399\r c-0.019,0.08-0.042,0.159-0.059,0.239c-0.021,0.101-0.034,0.205-0.052,0.307c-0.023,0.13-0.046,0.26-0.064,0.393\r c-0.013,0.098-0.03,0.196-0.04,0.294c-0.01,0.09-0.011,0.181-0.019,0.271c-0.011,0.133-0.021,0.265-0.026,0.399\r c-0.004,0.11-0.01,0.22-0.011,0.33c0,0.023-0.003,0.046-0.003,0.069c0,0.062,0.008,0.123,0.009,0.185\r c0.002,0.132,0.007,0.264,0.014,0.397c0.006,0.109,0.012,0.218,0.022,0.327c0.008,0.093,0.019,0.184,0.03,0.276\r c0.015,0.126,0.033,0.251,0.053,0.377c0.016,0.099,0.031,0.198,0.05,0.296c0.019,0.102,0.039,0.203,0.062,0.304\r c0.027,0.121,0.058,0.24,0.089,0.36c0.023,0.089,0.047,0.178,0.072,0.267c0.031,0.107,0.062,0.213,0.096,0.319\r c0.037,0.114,0.079,0.226,0.12,0.338c0.032,0.087,0.065,0.174,0.099,0.261c0.042,0.104,0.083,0.208,0.128,0.311\r c0.045,0.104,0.095,0.206,0.144,0.308c0.045,0.093,0.091,0.185,0.138,0.277c0.051,0.097,0.101,0.194,0.155,0.29\r c0.051,0.091,0.104,0.18,0.158,0.27c0.06,0.1,0.123,0.199,0.187,0.297c0.059,0.091,0.12,0.18,0.182,0.269\r c0.055,0.078,0.109,0.156,0.167,0.234c0.074,0.1,0.15,0.197,0.228,0.295c0.071,0.088,0.145,0.173,0.218,0.259\r c0.042,0.049,0.077,0.101,0.121,0.15L249.784,508.66c0.247,0.277,0.511,0.538,0.785,0.783c0.04,0.035,0.083,0.065,0.123,0.1\r c0.289,0.251,0.592,0.482,0.905,0.697c0.102,0.07,0.206,0.136,0.31,0.202c0.292,0.184,0.592,0.352,0.9,0.506\r c0.085,0.042,0.166,0.089,0.252,0.129c0.389,0.179,0.788,0.332,1.198,0.461c0.098,0.031,0.198,0.053,0.297,0.08\r c0.329,0.092,0.663,0.167,1.001,0.226c0.124,0.021,0.247,0.043,0.372,0.06c0.437,0.058,0.876,0.098,1.323,0.098\r c0.011,0,0.021,0,0.031,0c0.448-0.001,0.889-0.043,1.327-0.103c0.125-0.017,0.247-0.039,0.372-0.061\r c0.339-0.06,0.675-0.136,1.005-0.23c0.099-0.028,0.199-0.05,0.297-0.082c0.41-0.13,0.81-0.286,1.2-0.468\r c0.085-0.04,0.166-0.087,0.25-0.129c0.309-0.155,0.61-0.326,0.902-0.513c0.105-0.067,0.208-0.134,0.311-0.205\r c0.31-0.215,0.61-0.446,0.896-0.696c0.043-0.038,0.09-0.071,0.133-0.109c0.274-0.249,0.538-0.512,0.786-0.793L463.79,283.01\r c0.036-0.041,0.065-0.085,0.1-0.126c0.066-0.077,0.132-0.155,0.196-0.234c0.086-0.107,0.168-0.215,0.249-0.325\r c0.056-0.076,0.111-0.152,0.165-0.229c0.056-0.08,0.11-0.162,0.164-0.244c0.07-0.107,0.136-0.215,0.202-0.324\r c0.054-0.09,0.108-0.178,0.159-0.269c0.048-0.087,0.093-0.175,0.139-0.264c0.051-0.099,0.1-0.2,0.148-0.301\r c0.05-0.104,0.101-0.207,0.147-0.312c0.041-0.094,0.077-0.189,0.115-0.284c0.037-0.093,0.072-0.187,0.106-0.282\r c0.042-0.115,0.086-0.23,0.124-0.346c0.031-0.096,0.057-0.193,0.086-0.29c0.028-0.096,0.052-0.193,0.077-0.29\r c0.031-0.122,0.065-0.243,0.091-0.367c0.02-0.091,0.037-0.183,0.054-0.276c0.02-0.107,0.036-0.215,0.053-0.323\r c0.019-0.126,0.039-0.251,0.054-0.378c0.01-0.082,0.019-0.165,0.026-0.248c0.011-0.12,0.016-0.24,0.023-0.362\r c0.007-0.129,0.013-0.258,0.015-0.386c0.001-0.054,0.008-0.107,0.008-0.161C466.294,276.36,466.291,276.338,466.291,276.315z\r M381.223,180.25l-32.468,77.478l-70.172-77.478H381.223z M233.58,180.25l-69.537,77.586l-33.079-77.586H233.58z M114.542,192.8\r l31.367,73.569H72.9L114.542,192.8z M78.098,286.397h76.348l69.721,163.517L78.098,286.397z M257.174,476.267l-80.956-189.87\r h39.729c5.53,0,10.014-4.483,10.014-10.014c0-5.531-4.484-10.014-10.014-10.014h-32.656l72.751-81.174l73.519,81.174h-33.502\r c-5.53,0-10.014,4.483-10.014,10.014c0,5.531,4.484,10.014,10.014,10.014h40.683L257.174,476.267z M290.019,449.71l68.438-163.313\r h75.636L290.019,449.71z M366.848,266.369l30.767-73.418l41.502,73.418H366.848z"
  }))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null)))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "diamonds")), __jsx("h6", null, "54 items"))), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    height: "382pt",
    viewBox: "0 -5 382.40085 382",
    width: "382pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m296.328125 83.535156c-2.421875 0-4.761719-1.289062-6-3.558594-1.808594-3.308593-.589844-7.457031 2.722656-9.261718 3.808594-2.078125 6.175781-6.0625 6.175781-10.398438 0-6.523437-5.304687-11.832031-11.832031-11.832031-4.171875 0-8.082031 2.234375-10.203125 5.835937-1.90625 3.25-6.089844 4.335938-9.347656 2.410157-3.246094-1.910157-4.328125-6.09375-2.414062-9.347657 4.566406-7.742187 12.980468-12.550781 21.964843-12.550781 14.050781 0 25.484375 11.433594 25.484375 25.484375 0 9.335938-5.09375 17.914063-13.289062 22.382813-1.039063.566406-2.160156.835937-3.261719.835937zm0 0"
  }), __jsx("path", {
    d: "m90.296875 85.203125c-.566406 0-1.148437-.070313-1.722656-.21875-11.222657-2.921875-19.054688-13.066406-19.054688-24.667969 0-14.046875 11.433594-25.484375 25.484375-25.484375 9.386719 0 17.984375 5.136719 22.441406 13.402344 1.789063 3.320313.546876 7.460937-2.769531 9.25-3.3125 1.785156-7.460937.546875-9.25-2.769531-2.070312-3.839844-6.0625-6.226563-10.421875-6.226563-6.523437 0-11.832031 5.304688-11.832031 11.832031 0 5.386719 3.636719 10.097657 8.839844 11.453126 3.652343.949218 5.839843 4.679687 4.886719 8.328124-.800782 3.070313-3.570313 5.101563-6.601563 5.101563zm0 0"
  }), __jsx("path", {
    d: "m191.199219 373.125c-24.214844 0-48.429688-6.265625-70.027344-18.796875-42.421875-24.621094-75.292969-61.542969-97.695313-109.738281-15.359374-33.039063-23.476562-70.839844-23.476562-109.320313v-18.835937c0-3.53125 2.699219-6.480469 6.21875-6.800782.164062-.011718 16.816406-1.601562 37.171875-9.488281 3.488281-1.367187 7.464844.378907 8.832031 3.898438 1.363282 3.515625-.382812 7.46875-3.898437 8.832031-14.679688 5.6875-27.457031 8.351562-34.667969 9.519531v12.875c0 36.503907 7.675781 72.316407 22.203125 103.566407 21.203125 45.609374 52.214844 80.492187 92.167969 103.683593 38.96875 22.609375 87.382812 22.609375 126.347656 0 42.171875-24.472656 74.300781-61.859375 95.5-111.125 12.523438-29.109375 18.875-61.328125 18.875-95.769531v-13.414062c-9.3125-1.847657-28.265625-6.714844-49.308594-18.472657-3.292968-1.839843-4.46875-6-2.628906-9.289062 1.835938-3.289063 5.996094-4.46875 9.289062-2.628907 26.792969 14.976563 50.027344 17.808594 50.257813 17.835938 3.445313.394531 6.042969 3.3125 6.042969 6.78125v19.1875c0 36.308594-6.722656 70.347656-19.988282 101.167969-22.382812 52.015625-56.425781 91.5625-101.1875 117.535156-21.597656 12.53125-45.8125 18.796875-70.027343 18.796875zm0 0"
  }), __jsx("path", {
    d: "m90.296875 86.324219c-1.84375 0-3.679687-.742188-5.027344-2.203125-2.550781-2.773438-2.375-7.09375.398438-9.648438 9.933593-9.140625 17.871093-19.804687 23.613281-31.71875v-35.726562c0-3.769532 3.054688-6.828125 6.824219-6.828125h150.1875c3.769531 0 6.828125 3.058593 6.828125 6.828125v35.277344c7.515625 11.683593 16.597656 22.195312 27.007812 31.277343 2.839844 2.476563 3.136719 6.789063.660156 9.632813-2.472656 2.847656-6.785156 3.136718-9.632812.660156-11.914062-10.390625-22.226562-22.492188-30.652344-35.964844-.675781-1.089844-1.039062-2.339844-1.039062-3.621094v-30.433593h-136.53125v30.429687c0 .996094-.21875 1.976563-.636719 2.878906-6.539063 14.082032-15.753906 26.652344-27.378906 37.359376-1.3125 1.203124-2.972657 1.800781-4.621094 1.800781zm0 0"
  }), __jsx("path", {
    d: "m295.410156 224.699219c-15.496094 0-28.101562-12.609375-28.101562-28.105469s12.605468-28.105469 28.101562-28.105469 28.105469 12.609375 28.105469 28.105469-12.609375 28.105469-28.105469 28.105469zm0-42.554688c-7.964844 0-14.449218 6.484375-14.449218 14.449219 0 7.972656 6.484374 14.457031 14.449218 14.457031 7.96875 0 14.453125-6.484375 14.453125-14.457031 0-7.96875-6.484375-14.449219-14.453125-14.449219zm0 0"
  }), __jsx("path", {
    d: "m311.441406 182.675781c-14.425781 0-26.160156-11.734375-26.160156-26.160156 0-14.429687 11.734375-26.164063 26.160156-26.164063 14.429688 0 26.164063 11.734376 26.164063 26.164063 0 14.425781-11.734375 26.160156-26.164063 26.160156zm0-38.671875c-6.894531 0-12.507812 5.613282-12.507812 12.511719 0 6.894531 5.613281 12.507813 12.507812 12.507813 6.898438 0 12.511719-5.613282 12.511719-12.507813 0-6.898437-5.613281-12.511719-12.511719-12.511719zm0 0"
  }), __jsx("path", {
    d: "m86.988281 224.699219c-15.496093 0-28.105469-12.609375-28.105469-28.105469s12.609376-28.105469 28.105469-28.105469c15.496094 0 28.105469 12.609375 28.105469 28.105469s-12.605469 28.105469-28.105469 28.105469zm0-42.554688c-7.96875 0-14.453125 6.484375-14.453125 14.449219 0 7.972656 6.484375 14.457031 14.453125 14.457031s14.449219-6.484375 14.449219-14.457031c0-7.96875-6.480469-14.449219-14.449219-14.449219zm0 0"
  }), __jsx("path", {
    d: "m70.957031 182.675781c-14.425781 0-26.164062-11.734375-26.164062-26.160156 0-14.429687 11.738281-26.164063 26.164062-26.164063s26.164063 11.734376 26.164063 26.164063c0 14.425781-11.738282 26.160156-26.164063 26.160156zm0-38.671875c-6.898437 0-12.511719 5.613282-12.511719 12.511719 0 6.894531 5.613282 12.507813 12.511719 12.507813 6.894531 0 12.507813-5.613282 12.507813-12.507813 0-6.898437-5.613282-12.511719-12.507813-12.511719zm0 0"
  }), __jsx("path", {
    d: "m311.441406 107.085938c-12.527344 0-22.714844-10.191407-22.714844-22.71875 0-12.523438 10.1875-22.71875 22.714844-22.71875s22.71875 10.195312 22.71875 22.71875c0 12.527343-10.191406 22.71875-22.71875 22.71875zm0-31.785157c-4.996094 0-9.0625 4.066407-9.0625 9.066407 0 4.996093 4.066406 9.066406 9.0625 9.066406 5 0 9.066406-4.070313 9.066406-9.066406 0-5-4.066406-9.066407-9.066406-9.066407zm0 0"
  }), __jsx("path", {
    d: "m70.957031 107.085938c-12.527343 0-22.71875-10.191407-22.71875-22.71875 0-12.523438 10.191407-22.71875 22.71875-22.71875 12.523438 0 22.714844 10.195312 22.714844 22.71875 0 12.527343-10.1875 22.71875-22.714844 22.71875zm0-31.785157c-5 0-9.066406 4.066407-9.066406 9.066407 0 4.996093 4.066406 9.066406 9.066406 9.066406 4.996094 0 9.0625-4.070313 9.0625-9.066406 0-5-4.066406-9.066407-9.0625-9.066407zm0 0"
  }), __jsx("path", {
    d: "m319.460938 141.917969c-14.050782 0-25.484376-11.433594-25.484376-25.484375 0-7.980469 3.628907-15.347656 9.957032-20.214844 2.988281-2.292969 7.273437-1.738281 9.574218 1.253906 2.296876 2.988282 1.738282 7.277344-1.253906 9.570313-2.9375 2.261719-4.625 5.679687-4.625 9.386719 0 6.523437 5.304688 11.832031 11.832032 11.832031 6.523437 0 11.828124-5.304688 11.828124-11.832031 0-5.113282-3.253906-9.628907-8.101562-11.234376-3.582031-1.1875-5.515625-5.050781-4.332031-8.632812 1.1875-3.574219 5.050781-5.511719 8.632812-4.328125 10.4375 3.464844 17.457031 13.191406 17.457031 24.195313-.003906 14.054687-11.433593 25.488281-25.484374 25.488281zm0 0"
  }), __jsx("path", {
    d: "m62.941406 141.917969c-14.050781 0-25.484375-11.433594-25.484375-25.484375 0-14.054688 11.433594-25.488282 25.484375-25.488282 14.050782 0 25.484375 11.433594 25.484375 25.488282-.003906 14.050781-11.4375 25.484375-25.484375 25.484375zm0-37.316407c-6.523437 0-11.832031 5.308594-11.832031 11.832032 0 6.527344 5.304687 11.832031 11.832031 11.832031 6.523438 0 11.828125-5.304687 11.828125-11.832031 0-6.523438-5.304687-11.832032-11.828125-11.832032zm0 0"
  }), __jsx("path", {
    d: "m111.035156 256.761719c-15.496094 0-28.101562-12.605469-28.101562-28.101563s12.605468-28.105468 28.101562-28.105468 28.109375 12.609374 28.109375 28.105468-12.613281 28.101563-28.109375 28.101563zm0-42.554688c-7.964844 0-14.449218 6.484375-14.449218 14.453125s6.484374 14.453125 14.449218 14.453125c7.972656 0 14.453125-6.484375 14.453125-14.453125s-6.480469-14.453125-14.453125-14.453125zm0 0"
  }), __jsx("path", {
    d: "m143.101562 283.582031c-17.027343 0-30.875-13.847656-30.875-30.875 0-17.023437 13.847657-30.875 30.875-30.875 17.023438 0 30.875 13.851563 30.875 30.875 0 17.027344-13.851562 30.875-30.875 30.875zm0-48.09375c-9.496093 0-17.222656 7.722657-17.222656 17.21875 0 9.496094 7.726563 17.222657 17.222656 17.222657 9.5 0 17.222657-7.726563 17.222657-17.222657 0-9.496093-7.722657-17.21875-17.222657-17.21875zm0 0"
  }), __jsx("path", {
    d: "m271.363281 256.761719c-15.496093 0-28.105469-12.605469-28.105469-28.101563s12.609376-28.105468 28.105469-28.105468c15.496094 0 28.105469 12.609374 28.105469 28.105468s-12.609375 28.101563-28.105469 28.101563zm0-42.554688c-7.96875 0-14.453125 6.484375-14.453125 14.453125s6.484375 14.453125 14.453125 14.453125 14.449219-6.484375 14.449219-14.453125-6.480469-14.453125-14.449219-14.453125zm0 0"
  }), __jsx("path", {
    d: "m239.296875 283.582031c-17.023437 0-30.875-13.847656-30.875-30.875 0-17.023437 13.851563-30.875 30.875-30.875 17.027344 0 30.878906 13.851563 30.878906 30.875-.003906 17.027344-13.851562 30.875-30.878906 30.875zm0-48.09375c-9.496094 0-17.21875 7.722657-17.21875 17.21875 0 9.496094 7.722656 17.222657 17.21875 17.222657s17.222656-7.726563 17.222656-17.222657c0-9.496093-7.726562-17.21875-17.222656-17.21875zm0 0"
  }), __jsx("path", {
    d: "m191.199219 291.601562c-17.027344 0-30.875-13.851562-30.875-30.878906 0-17.023437 13.847656-30.875 30.875-30.875 17.027343 0 30.878906 13.851563 30.878906 30.875 0 17.027344-13.851563 30.878906-30.878906 30.878906zm0-48.097656c-9.496094 0-17.222657 7.722656-17.222657 17.222656 0 9.496094 7.726563 17.222657 17.222657 17.222657 9.496093 0 17.222656-7.726563 17.222656-17.222657 0-9.5-7.726563-17.222656-17.222656-17.222656zm0 0"
  })))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "neckles")), __jsx("h6", null, "15 items"))), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    height: "512pt",
    viewBox: "-111 0 512 512.00043",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m8.644531 302.082031 7.21875 92.472657c1.109375 13.289062 12.191407 23.523437 25.523438 23.578124h4.898437l11.289063 72.226563c1.90625 12.488281 12.671875 21.691406 25.300781 21.640625h90.25c12.632812.050781 23.398438-9.160156 25.300781-21.648438l11.289063-72.21875h4.898437c13.34375-.054687 24.429688-10.3125 25.523438-23.609374l7.21875-92.496094c4.671875-11.996094 7.449219-24.644532 8.242187-37.492188h17.46875v8.53125c0 4.714844 3.820313 8.535156 8.535156 8.535156 4.710938 0 8.53125-3.820312 8.53125-8.535156v-34.132812c0-4.710938-3.820312-8.535156-8.53125-8.535156-4.714843 0-8.535156 3.824218-8.535156 8.535156v8.535156h-17.46875c-.789062-12.867188-3.566406-25.535156-8.242187-37.546875l-7.21875-92.476563c-1.109375-13.289062-12.191407-23.523437-25.523438-23.578124h-4.898437l-11.289063-72.226563c-1.90625-12.484375-12.671875-21.6914062-25.300781-21.640625h-90.25c-12.632812-.0507812-23.398438 9.160156-25.300781 21.648438l-11.289063 72.21875h-4.898437c-13.34375.058593-24.429688 10.3125-25.523438 23.613281l-7.21875 92.492187c-11.527343 29.609375-11.527343 62.464844 0 92.074219zm25.488281-54.613281h-16.664062c.789062-11.199219 3.332031-22.199219 7.535156-32.609375.902344-2.292969 1.96875-4.503906 3.027344-6.722656l14.414062 8.320312c2.640626 1.546875 5.910157 1.5625 8.566407.039063 2.65625-1.527344 4.289062-4.359375 4.28125-7.417969-.003907-3.0625-1.652344-5.886719-4.316407-7.402344l-14.367187-8.300781c7.664063-11.339844 17.425781-21.105469 28.765625-28.773438l8.300781 14.375c1.515625 2.664063 4.339844 4.3125 7.402344 4.316407 3.058594.007812 5.890625-1.625 7.417969-4.28125 1.523437-2.65625 1.507812-5.925781-.039063-8.566407l-8.304687-14.378906c12.339844-5.917968 25.671875-9.492187 39.3125-10.546875v16.613281c0 4.714844 3.824218 8.535157 8.535156 8.535157s8.535156-3.820313 8.535156-8.535157v-16.613281c1.046875.085938 2.105469.058594 3.148438.171875 12.554687 1.371094 24.78125 4.878906 36.15625 10.375l-8.296875 14.378906c-1.546875 2.640626-1.5625 5.910157-.039063 8.566407 1.527344 2.65625 4.359375 4.289062 7.421875 4.28125 3.058594-.003907 5.882813-1.652344 7.398438-4.316407l8.292969-14.367187c11.347656 7.65625 21.113281 17.421875 28.773437 28.765625l-14.367187 8.300781c-2.664063 1.515625-4.308594 4.339844-4.316407 7.402344-.007812 3.058594 1.628907 5.890625 4.28125 7.417969 2.65625 1.523437 5.925781 1.507812 8.566407-.039063l14.414062-8.320312c1.066406 2.234375 2.132812 4.472656 3.054688 6.828125 4.183593 10.375 6.71875 21.34375 7.507812 32.503906h-16.664062c-4.714844 0-8.535157 3.820312-8.535157 8.53125 0 4.714844 3.820313 8.535156 8.535157 8.535156h16.664062c-.789062 11.195313-3.332031 22.195313-7.535156 32.605469-.902344 2.292969-1.96875 4.503906-3.027344 6.722656l-14.414062-8.320312c-2.640626-1.546875-5.910157-1.5625-8.566407-.039063-2.652343 1.527344-4.289062 4.359375-4.28125 7.421875.007813 3.058594 1.652344 5.882813 4.316407 7.398438l14.367187 8.300781c-7.664063 11.339844-17.425781 21.109375-28.765625 28.777344l-8.300781-14.378906c-2.375-4.046876-7.566407-5.421876-11.628907-3.074219-4.0625 2.34375-5.46875 7.527343-3.152343 11.605469l8.296875 14.378906c-12.339844 5.917968-25.664063 9.492187-39.304688 10.546875v-16.613281c0-4.714844-3.824218-8.535157-8.535156-8.535157s-8.535156 3.820313-8.535156 8.535157v16.613281c-1.046875-.074219-2.105469-.058594-3.148438-.167969-12.554687-1.371094-24.78125-4.882812-36.152344-10.378906l8.292969-14.378906c2.316407-4.078126.910157-9.261719-3.152343-11.605469-4.0625-2.347657-9.253907-.972657-11.628907 3.074219l-8.292969 14.367187c-11.347656-7.65625-21.113281-17.421875-28.773437-28.765625l14.367187-8.300781c2.664063-1.515625 4.3125-4.339844 4.316407-7.398438.007812-3.0625-1.625-5.894531-4.28125-7.421875-2.65625-1.523437-5.925781-1.507812-8.566407.039063l-14.414062 8.320312c-1.066406-2.234375-2.132812-4.472656-3.054688-6.828125-4.183593-10.375-6.71875-21.339844-7.507812-32.5h16.664062c4.714844 0 8.535157-3.820312 8.535157-8.535156 0-4.710938-3.820313-8.53125-8.535157-8.53125zm147.421876 240.246094c-.625 4.164062-4.21875 7.238281-8.429688 7.21875h-90.25c-4.210938.023437-7.800781-3.046875-8.429688-7.210938l-10.878906-69.589844h128.851563zm33.058593-86.648438h-173.226562c-4.464844.015625-8.183594-3.417968-8.535157-7.867187l-4.460937-57.046875c1.527344 1.878906 3.011719 3.789062 4.652344 5.589844 8.871093 9.875 19.238281 18.292968 30.71875 24.953124.066406 0 .109375.117188.179687.160157.070313.027343.136719.054687.203125.085937 15.460938 8.894532 32.609375 14.460938 50.347657 16.34375 4.488281.476563 8.996093.71875 13.507812.714844 8.980469 0 17.9375-.949219 26.71875-2.824219.128906 0 .246094-.078125.367188-.101562 12.90625-2.792969 25.304687-7.5625 36.753906-14.140625l.160156-.066406c.066406-.042969.101562-.113282.164062-.148438 11.480469-6.644531 21.847657-15.058594 30.71875-24.925781 1.636719-1.789063 3.113282-3.695313 4.640626-5.570313l-4.460938 57.042969c-.378906 4.394531-4.042969 7.773437-8.449219 7.800781zm-140.167969-376.78125c.625-4.164062 4.21875-7.238281 8.429688-7.21875h90.25c4.210938-.023437 7.800781 3.046875 8.429688 7.210938l10.878906 69.589844h-128.851563zm-33.058593 86.648438h173.226562c4.464844-.011719 8.183594 3.417968 8.535157 7.867187l4.460937 57.046875c-1.527344-1.878906-3.011719-3.789062-4.648437-5.589844-8.875-9.871093-19.238282-18.292968-30.722657-24.953124-.066406 0-.109375-.117188-.179687-.160157h-.136719c-39.527344-22.808593-88.214844-22.808593-127.742187 0h-.121094c-.058594 0-.09375.101563-.152344.136719-11.484375 6.648438-21.851562 15.0625-30.71875 24.933594-1.640625 1.792968-3.117188 3.695312-4.644531 5.570312l4.464843-57.042968c.371094-4.371094 3.996094-7.746094 8.378907-7.808594zm0 0"
  }), __jsx("path", {
    d: "m98.015625 305.988281c1.941406 1.164063 4.265625 1.507813 6.460937.957031 2.195313-.550781 4.082032-1.949218 5.246094-3.890624l13.15625-21.976563c1.6875.347656 3.402344.523437 5.121094.523437 12.453125.023438 23.109375-8.941406 25.21875-21.214843 2.109375-12.273438-4.9375-24.277344-16.683594-28.417969v-35.703125c0-4.710937-3.824218-8.53125-8.535156-8.53125s-8.535156 3.820313-8.535156 8.53125v35.703125c-7.894532 2.710938-13.945313 9.140625-16.175782 17.1875-2.226562 8.042969-.347656 16.667969 5.023438 23.058594l-13.234375 22.109375c-2.394531 4.035156-1.082031 9.242187 2.9375 11.664062zm29.984375-58.519531c4.710938 0 8.535156 3.820312 8.535156 8.53125 0 4.714844-3.824218 8.535156-8.535156 8.535156s-8.535156-3.820312-8.535156-8.535156c0-4.710938 3.824218-8.53125 8.535156-8.53125zm0 0"
  }), __jsx("path", {
    d: "m93.867188 460.800781h68.265624c4.714844 0 8.535157-3.820312 8.535157-8.535156 0-4.710937-3.820313-8.53125-8.535157-8.53125h-68.265624c-4.714844 0-8.535157 3.820313-8.535157 8.53125 0 4.714844 3.820313 8.535156 8.535157 8.535156zm0 0"
  }), __jsx("path", {
    d: "m162.132812 51.199219h-68.265624c-4.714844 0-8.535157 3.820312-8.535157 8.535156 0 4.710937 3.820313 8.53125 8.535157 8.53125h68.265624c4.714844 0 8.535157-3.820313 8.535157-8.53125 0-4.714844-3.820313-8.535156-8.535157-8.535156zm0 0"
  })))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "watches")), __jsx("h6", null, "62 items"))), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    height: "512pt",
    viewBox: "-64 0 512 512.13948",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m375.496094 435.210938c-4.714844 0-8.535156 3.820312-8.535156 8.53125 0 19.753906-37.273438 51.199218-68.265626 51.199218-29.796874 1.621094-58.796874-9.945312-79.300781-31.632812-23.191406-23.191406-100.179687-107.398438-117.015625-216.746094 0-.109375-.1875-1.277344-.207031-1.382812.003906-.417969-.027344-.835938-.085937-1.253907-1.679688-11.164062-2.617188-22.425781-2.8125-33.714843-.269532-15.363282.757812-30.726563 3.070312-45.917969 6.839844 2.136719 14.261719 1.277343 20.429688-2.371094l.339843-.246094c7.078125-4.140625 11.703125-11.460937 12.398438-19.628906.703125-8.050781-2.542969-15.945313-8.710938-21.171875-3.472656-2.886719-7.183593-5.472656-11.09375-7.730469 3.191407-8.367187 6.933594-16.515625 11.203125-24.386719 4.25 3.289063 9.464844 5.085938 14.839844 5.117188h.9375c8.171875-.011719 15.832031-3.960938 20.585938-10.605469 4.757812-6.554687 6.007812-15.023437 3.34375-22.671875-1.746094-4.816406-3.953126-9.449218-6.589844-13.84375 21.664062-19.433594 49.835937-30.023437 78.933594-29.675781 102.570312 0 127.148437 108.125 128.179687 112.722656.847656 3.9375 4.328125 6.746094 8.355469 6.742188.609375-.003907 1.214844-.070313 1.808594-.195313 4.597656-.992187 7.527343-5.519531 6.546874-10.121094-.300781-1.261718-28.425781-126.2148432-144.890624-126.2148432-32.726563-.4023438-64.445313 11.3203122-89.042969 32.9101562-23.882813-25.550781-62.011719-31.742187-92.75-15.058594-30.738281 16.6875-46.320313 52.03125-37.90625 85.980469 1.476562 6.214844 3.773437 12.207031 6.828125 17.816406-15.820313 13.960938-25.210938 33.804688-25.96875 54.890625-.761719 21.082031 7.175781 41.554688 21.949218 56.617188 14.21875 14.636719 33.789063 22.855469 54.195313 22.757812 3.492187-.015625 6.976563-.261719 10.4375-.742187 19.625 111.65625 96.988281 196.53125 120.652344 220.160156 23.6875 24.890625 57.015625 38.273438 91.339843 36.667969 38.28125 0 85.332032-37.640625 85.332032-68.269531 0-2.261719-.898438-4.433594-2.496094-6.03125-1.601562-1.601563-3.773438-2.5-6.035156-2.5zm-309.136719-232.644532c-6.804687-3.066406-11.964844-8.910156-14.15625-16.042968-2.695313-8.820313-.367187-18.40625 6.074219-25.003907 2.601562-2.660156 5.742187-4.730469 9.214844-6.066406.292968-.070313.574218-.160156.855468-.265625 5.871094-2.1875 12.363282-2.019531 18.117188.460938-2.785156 16.035156-4.199219 32.28125-4.21875 48.554687-5.332032 1.164063-10.902344.589844-15.886719-1.636719zm8.59375-99.96875c-5.800781-6.363281-8.042969-15.203125-5.976563-23.5625 2.578126-10.222656 11.171876-17.8125 21.636719-19.105468 10.460938-1.296876 20.644531 3.96875 25.640625 13.253906-6.324218 10.492187-11.730468 21.507812-16.164062 32.929687-8.121094-2.585937-16.621094-3.773437-25.136719-3.515625zm-27.941406-54.296875c11.585937-14.660156 29.363281-23.054687 48.042969-22.675781 18.679687.375 36.105468 9.480469 47.089843 24.59375 3.558594 4.875 6.371094 10.25 8.34375 15.949219.828125 2.425781.421875 5.101562-1.089843 7.167969-1.535157 2.1875-4.039063 3.484374-6.710938 3.472656h-.9375c-3.640625-.171875-6.777344-2.613282-7.839844-6.101563-.09375-.242187-.199218-.484375-.316406-.714843-6.707031-17.371094-23.90625-28.386719-42.488281-27.214844s-34.261719 14.257812-38.734375 32.335937c-2.378906 10.207031-1 20.929688 3.894531 30.199219-5.550781 1.550781-10.902344 3.730469-15.960937 6.492188-1.929688-3.773438-3.417969-7.753907-4.4375-11.871094-4.417969-18.007813-.308594-37.050782 11.144531-51.632813zm-12.679688 173.046875c-12.316406-12.484375-18.535156-29.742187-17.015625-47.214844 1.519532-17.46875 10.628906-33.394531 24.917969-43.5625 1.332031-.972656 2.75-1.851562 4.214844-2.738281 7.828125-4.726562 16.667969-7.515625 25.789062-8.132812 9.703125-.78125 19.449219.828125 28.390625 4.683593.273438.171876.558594.328126.851563.46875 5.160156 2.371094 9.96875 5.445313 14.285156 9.132813 1.953125 1.636719 2.96875 4.128906 2.722656 6.664063-.265625 2.796874-1.925781 5.273437-4.410156 6.585937l-.375.257813c-3.246094 1.648437-7.167969 1.148437-9.890625-1.261719-.230469-.171875-.460938-.335938-.699219-.488281-.738281-.617188-1.511719-1.1875-2.324219-1.707032h-.042968c-11.046875-7.65625-25.105469-9.515625-37.765625-5l-.511719.160156c-.097656.035157-.191406.070313-.28125.113282-.09375 0-.1875 0-.28125.078125-.097656.074219-.136719.09375-.214844.125-20.390625 7.570312-31.761718 29.328125-26.335937 50.390625s25.894531 34.617187 47.40625 31.394531c.324219 5.613281.828125 11.304687 1.515625 17.066406-18.40625 2.601563-36.953125-3.714843-49.945313-17.015625zm0 0"
  }), __jsx("path", {
    d: "m269.316406 71.996094c19.8125 3.695312 32.988282 17.800781 38.101563 40.800781 15.5625 70.058594-55.46875 118.570313-56.152344 119.046875-3.917969 2.617188-4.976563 7.917969-2.359375 11.839844 2.621094 3.921875 7.921875 4.976562 11.839844 2.359375 3.328125-2.21875 81.460937-55.382813 63.328125-136.953125-6.605469-29.71875-24.953125-48.886719-51.628907-53.878906-37.367187-6.953126-85.160156 15.429687-108.867187 50.996093-34.355469 51.53125-36.402344 120.847657-26.863281 168.578125.8125 3.976563 4.320312 6.832032 8.382812 6.824219.570313.003906 1.144532-.054687 1.703125-.171875 4.621094-.921875 7.621094-5.414062 6.699219-10.035156-8.875-44.371094-7.132812-108.535156 24.328125-155.722656 19.816406-29.808594 60.871094-49.460938 91.488281-43.683594zm0 0"
  }), __jsx("path", {
    d: "m366.050781 362.222656c3.730469-6.03125 4.363281-13.484375 1.707031-20.058594-4.515624-9.386718-15.761718-11.734374-26.632812-14.023437-7.46875-1.570313-16.761719-3.523437-18.773438-7.3125-.917968-3.523437-.4375-7.265625 1.339844-10.445313 12.261719-30.660156 12.566406-54.613281.851563-64.167968-4.480469-3.636719-14.386719-8.097656-30.566407 2.695312l-51.199218 34.132813c-3.921875 2.617187-4.980469 7.914062-2.363282 11.835937 2.613282 3.921875 7.914063 4.980469 11.835938 2.363282l51.199219-34.132813c5.972656-3.949219 9.496093-4.335937 10.34375-3.644531 2.8125 2.28125 5.21875 16.675781-5.976563 44.570312-3.917968 7.777344-4.109375 16.910156-.527344 24.847656 5.777344 10.789063 18.773438 13.535157 30.308594 15.960938 5.164063.644531 10.164063 2.230469 14.753906 4.675781-.042968 1.804688-.585937 3.5625-1.566406 5.074219-4.105468 8.203125-21.90625 12.066406-44.332031 9.59375-42.367187-4.652344-92.476563-29.917969-101.898437-67.585938-15.359376-61.300781 44.886718-100.007812 47.457031-101.628906 4.003906-2.5 5.226562-7.777344 2.722656-11.78125-2.5-4.007812-7.773437-5.226562-11.777344-2.726562-.734375.460937-73.320312 46.804687-54.957031 120.242187 11.410156 45.636719 67.285156 74.992188 116.582031 80.410157 5.007813.554687 10.035157.839843 15.070313.851562 23.417968.054688 39.964844-6.882812 46.398437-19.746094zm0 0"
  }), __jsx("path", {
    d: "m340.253906 431.027344-19.199218-34.132813c-1.511719-2.6875-4.359376-4.351562-7.441407-4.351562h-38.402343c-3.082032 0-5.929688 1.664062-7.441407 4.351562l-19.199219 34.132813c-.101562.179687-.136718.386718-.230468.574218s-.179688.441407-.265625.671876c-.707031 1.894531-.707031 3.980468 0 5.871093.085937.230469.164062.453125.265625.675781.101562.222657.128906.390626.230468.570313l19.199219 34.132813c1.511719 2.691406 4.359375 4.355468 7.441407 4.351562h38.402343c3.082031.003906 5.929688-1.660156 7.441407-4.351562l19.199218-34.132813c.101563-.179687.144532-.382813.230469-.570313s.1875-.445312.261719-.667968c.710937-1.898438.710937-3.988282 0-5.886719-.074219-.222656-.160156-.445313-.261719-.664063-.101563-.222656-.128906-.394531-.230469-.574218zm-31.632812 29.78125h-28.417969l-9.597656-17.066406h2.492187c4.710938 0 8.53125-3.820313 8.53125-8.53125 0-4.714844-3.820312-8.535157-8.53125-8.535157h-2.476562l9.601562-17.066406h28.414063l9.601562 17.066406h-2.476562c-4.710938 0-8.53125 3.820313-8.53125 8.535157 0 4.710937 3.820312 8.53125 8.53125 8.53125h2.476562zm0 0"
  })))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "pearsing")), __jsx("h6", null, "12 items"))), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    height: "512pt",
    viewBox: "0 -26 512.00066 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m392.535156 276.480469v-11.949219c0-18.851562 15.28125-34.132812 34.132813-34.132812 2.300781-.003907 4.503906.941406 6.082031 2.613281 1.582031 1.5625 2.46875 3.695312 2.449219 5.921875.003906 2.296875-.941407 4.496094-2.609375 6.074218-1.558594 1.59375-3.695313 2.480469-5.921875 2.457032h-8.535157c-4.710937 0-8.53125 3.820312-8.53125 8.535156 0 4.710938 3.820313 8.53125 8.53125 8.53125h8.535157c14.136719 0 25.597656-11.460938 25.597656-25.597656 0-14.140625-11.460937-25.601563-25.597656-25.601563-28.265625.027344-51.171875 22.933594-51.199219 51.199219v6.640625c-8.085938-2.277344-16.617188-4.351563-25.601562-6.222656v-34.550781c0-4.710938-3.820313-8.53125-8.535157-8.53125-4.710937 0-8.53125 3.820312-8.53125 8.53125v31.429687c-8.175781-1.316406-16.707031-2.421875-25.601562-3.320313v-36.640624c0-4.714844-3.820313-8.535157-8.53125-8.535157-4.714844 0-8.535157 3.820313-8.535157 8.535157v35.25c-8.242187-.53125-16.777343-.867188-25.597656-1.007813v-93.976563c.011719-6.417968 1.488282-12.746093 4.324219-18.5 14.550781-3.234374 27.367187-11.78125 35.941406-23.972656.8125-.058594 1.546875-.195312 2.398438-.195312h17.066406c23.554687.027344 42.640625 19.113281 42.667969 42.667968 0 6.769532-2.675782 13.265626-7.441406 18.074219-10.140626 9.640625-26.046876 9.675781-36.230469.085938-4.8125-4.820313-7.519531-11.351563-7.527344-18.160157v-8.535156c0-4.710937-3.820313-8.53125-8.535156-8.53125-4.710938 0-8.53125 3.820313-8.53125 8.53125v8.535156c0 23.5625 19.101562 42.664063 42.664062 42.664063 23.566407 0 42.667969-19.101563 42.667969-42.664063-.039062-32.976562-26.757812-59.695312-59.734375-59.734374h-11.09375c1.683594-5.535157 2.542969-11.28125 2.5625-17.066407 0-31.054687-48.351563-77.765625-53.863281-82.996093-3.289063-3.113282-8.441406-3.113282-11.734375 0-5.519531 5.230468-53.871094 51.941406-53.871094 82.996093.019531 5.785157.882813 11.53125 2.5625 17.066407h-11.09375c-32.976563.039062-59.695313 26.757812-59.734375 59.734374 0 23.5625 19.101562 42.664063 42.667969 42.664063 23.5625 0 42.664062-19.101563 42.664062-42.664063v-8.535156c0-4.710937-3.820312-8.53125-8.53125-8.53125-4.714843 0-8.535156 3.820313-8.535156 8.53125v8.535156c0 6.769532-2.675781 13.265626-7.441406 18.074219-10.140625 9.640625-26.042969 9.675781-36.230469.085938-4.8125-4.820313-7.515625-11.351563-7.527344-18.160157.027344-23.554687 19.113282-42.640624 42.667969-42.667968h17.066406c.851563 0 1.585938.136718 2.398438.195312 8.574219 12.191406 21.390625 20.738282 35.941406 23.972656 2.835937 5.753907 4.316406 12.082032 4.328125 18.5v93.976563c-8.824219.136719-17.359375.472656-25.601562 1.007813v-35.25c0-4.714844-3.820313-8.535157-8.535157-8.535157-4.710937 0-8.53125 3.820313-8.53125 8.535157v36.640624c-8.886719.898438-17.417969 2.003907-25.601562 3.320313v-31.429687c0-4.710938-3.820313-8.53125-8.53125-8.53125-4.714844 0-8.535157 3.820312-8.535157 8.53125v34.550781c-8.988281 1.851562-17.519531 3.921875-25.597656 6.222656v-6.640625c-.03125-28.265625-22.9375-51.171875-51.203125-51.199219-14.136719 0-25.597656 11.460938-25.597656 25.601563 0 14.136718 11.460937 25.597656 25.597656 25.597656h8.535157c4.710937 0 8.53125-3.820312 8.53125-8.53125 0-4.714844-3.820313-8.535156-8.53125-8.535156h-8.535157c-2.300781.007812-4.5-.9375-6.082031-2.609375-1.582031-1.5625-2.464844-3.699219-2.449219-5.921875-.003906-2.300782.941407-4.496094 2.609375-6.078125 1.558594-1.589844 3.695313-2.480469 5.921875-2.457031 18.851563 0 34.136719 15.28125 34.136719 34.132812v11.949219c-62.765625 21.476562-95.292969 54.492187-109.109375 72.359375-6.757813 8.878906-10.3984375 19.734375-10.359375 30.890625v72.535156c0 4.710937 3.820312 8.53125 8.535156 8.53125 4.710938 0 8.53125-3.820313 8.53125-8.53125v-32.425781c5.417969-11.8125 53.617188-104.109375 238.933594-104.109375 185.320312 0 233.523438 92.289062 238.933594 104.109375v32.425781c0 4.710937 3.820312 8.53125 8.535156 8.53125 4.710938 0 8.53125-3.820313 8.53125-8.53125v-72.535156c.039062-11.152344-3.601562-22.007813-10.359375-30.878907-13.816406-17.878906-46.34375-50.894531-109.105469-72.371093zm-179.203125-191.148438c0-16.121093 24.160157-46.078125 42.667969-64.851562 18.507812 18.773437 42.667969 48.714843 42.667969 64.851562 0 23.5625-19.101563 42.667969-42.667969 42.667969-23.5625 0-42.667969-19.105469-42.667969-42.667969zm42.667969 213.332031c-146.421875 0-212.0625 54.460938-238.933594 88.960938v-7.894531c-.039062-7.390625 2.359375-14.589844 6.828125-20.476563 20-25.902344 82.773438-86.1875 232.105469-86.1875s212.105469 60.285156 232.105469 86.1875c4.46875 5.886719 6.867187 13.085938 6.828125 20.476563v7.902343c-26.871094-34.507812-92.511719-88.96875-238.933594-88.96875zm0 0"
  }), __jsx("path", {
    d: "m264.535156 102.398438c0-4.710938-3.820312-8.53125-8.535156-8.53125-4.566406-.03125-8.3125-3.625-8.53125-8.183594-.269531-4.667969-4.179688-8.289063-8.851562-8.203125-2.265626.082031-4.402344 1.0625-5.945313 2.726562-1.542969 1.660157-2.359375 3.867188-2.273437 6.132813.496093 13.765625 11.828124 24.652344 25.601562 24.59375 4.714844 0 8.535156-3.820313 8.535156-8.535156zm0 0"
  })))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "tiara")), __jsx("h6", null, "33 items"))), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    height: "512pt",
    viewBox: "0 0 512 512.00089",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m273.585938 17.230469c-4.613282-.140625-9.089844 1.59375-12.402344 4.808593-3.316406 3.214844-5.183594 7.636719-5.183594 12.257813v16.902344h-51.199219v-17.066407c0-18.851562-15.28125-34.132812-34.132812-34.132812h-8.535157c-14.136718 0-25.597656 11.460938-25.597656 25.601562 0 4.710938 3.820313 8.53125 8.53125 8.53125 4.714844 0 8.535156-3.820312 8.535156-8.53125 0-4.714843 3.820313-8.535156 8.53125-8.535156h8.535157c9.425781 0 17.066406 7.640625 17.066406 17.066406v17.066407h-179.199219c-4.714844 0-8.535156 3.820312-8.535156 8.535156 0 4.710937 3.820312 8.53125 8.535156 8.53125h179.199219v17.066406c0 9.425781-7.640625 17.066407-17.066406 17.066407h-8.535157c-4.710937 0-8.53125-3.820313-8.53125-8.53125 0-4.714844-3.820312-8.535157-8.535156-8.535157-4.710937 0-8.53125 3.820313-8.53125 8.535157 0 14.136718 11.460938 25.597656 25.597656 25.597656h8.535157c18.851562 0 34.132812-15.28125 34.132812-34.132813v-17.066406h51.199219v17.308594c.046875 9.148437 7.285156 16.644531 16.425781 17.011719 43.097657 2.101562 83.578125 21.289062 112.480469 53.320312 28.90625 32.035156 43.851562 74.265625 41.53125 117.347656-5.046875 82.421875-70.761719 148.136719-153.183594 153.183594-56.496094 3.054688-110.5-23.5625-142.488281-70.234375-31.992187-46.667969-37.335937-106.636719-14.105469-158.230469 6.628906-15.488281 3.507813-33.425781-7.960937-45.769531-11.46875-12.339844-29.132813-16.761719-45.066407-11.285156-11.285156 3.914062-20.453124 12.320312-25.328124 23.230469-14.074219 31.589843-21.308594 65.800781-21.238282 100.386718.125 68.308594 28.367188 133.558594 78.089844 180.402344 45.667969 43.222656 106.207031 67.230469 169.085938 67.0625 5.34375 0 10.707031-.167969 16.09375-.503906 131.488281-8.519532 233.238281-118.578125 231.441406-250.328125-1.800782-131.75-106.519532-238.984375-238.191406-243.914063zm220.851562 262.058593c-5.898438 91.898438-65.953125 171.457032-152.71875 202.320313-86.761719 30.859375-183.570312 7.089844-246.175781-60.445313-62.605469-67.535156-78.980469-165.863281-41.644531-250.046874 4.136718-9.359376 13.394531-15.410157 23.628906-15.445313 8.515625.035156 16.457031 4.300781 21.1875 11.382813 4.726562 7.082031 5.628906 16.050781 2.398437 23.929687-25.664062 57.011719-19.753906 123.277344 15.589844 174.851563 35.339844 51.574218 95.007813 80.996093 157.4375 77.640624 91.113281-5.578124 163.761719-78.222656 169.34375-169.335937 2.554687-47.613281-13.972656-94.28125-45.921875-129.675781-31.949219-35.394532-76.691406-56.59375-124.316406-58.910156l-.410156 8.535156.230468-8.515625-.050781-25.601563c0-.085937.050781-.164062.050781-.246094 0-.085937-.050781-.164062-.050781-.257812l-.050781-25.191406c62.160156 2.28125 120.757812 29.601562 162.46875 75.746094 41.710937 46.140624 62.992187 107.191406 59.003906 169.265624zm0 0"
  })))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "earrings")), __jsx("h6", null, "21 items"))), __jsx("div", {
    className: "category-block"
  }, __jsx("a", {
    href: "#"
  }, __jsx("div", {
    className: "category-image svg-image"
  }, __jsx("svg", {
    height: "512pt",
    viewBox: "-25 0 512 512.00893",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    d: "m111.203125 477.867188c60.570313.730468 110.308594-47.695313 111.195313-108.261719 0-48.460938-71.617188-150.800781-96.289063-184.621094 17.933594-6.507813 29.339844-24.15625 27.917969-43.179687-1.421875-19.023438-15.328125-34.777344-34.027344-38.550782v-32.714844l6.390625-11.199218c7.101563-12.253906 7.046875-27.378906-.136719-39.585938-7.03125-12.285156-20.136718-19.8359372-34.292968-19.753906-17.492188.0859375-32.886719 11.542969-37.992188 28.273438-.105469.34375-.1875.699218-.246094 1.054687l-6.828125 41.371094c-2.148437 13.164062-7.097656 25.714843-14.507812 36.804687l-21.886719 32.828125c-2.613281 3.921875-1.558594 9.21875 2.363281 11.835938 3.921875 2.613281 9.222657 1.554687 11.835938-2.363281l21.914062-32.835938c8.769531-13.113281 14.617188-27.953125 17.152344-43.523438l6.742187-40.753906c3.054688-9.273437 11.6875-15.5625 21.453126-15.625 8.054687 0 15.5 4.285156 19.542968 11.25 4.042969 6.964844 4.074219 15.558594.082032 22.550782l-7.527344 13.132812c-.746094 1.296875-1.132813 2.769531-1.125 4.265625v34.988281c-18.609375 3.769532-32.472656 19.40625-33.988282 38.332032-1.515624 18.925781 9.679688 36.570312 27.453126 43.253906-21.53125 29.5-79.257813 111.789062-93.261719 164.40625 0 .066406-.042969.125-.050781.203125-1.871094 6.558593-2.90625 13.328125-3.08203175 20.148437.87890575 60.574219 50.62109375 109.003906 111.19921875 108.269532zm-.425781-59.734376c-24.179688-.859374-43.144532-21.042968-42.507813-45.226562 0-12.882812 17.203125-49.765625 42.667969-91.996094 25.457031 42.230469 42.667969 79.113282 42.667969 91.996094.636719 24.21875-18.386719 44.414062-42.597657 45.226562zm7.386718-158.105468c-1.65625-2.363282-4.363281-3.773438-7.25-3.773438-2.890624 0-5.597656 1.410156-7.253906 3.773438-8.765625 14.039062-52.5 85.417968-52.5 112.835937-.015625 10.324219 2.449219 20.496094 7.195313 29.664063-18.570313-12.082032-32.074219-30.539063-37.972657-51.890625 13.21875-45.269531 63.597657-120.082031 90.820313-157.160157 27.210937 37.070313 77.566406 111.839844 90.800781 157.117188-5.996094 21.71875-19.851562 40.429688-38.875 52.503906 4.964844-9.308594 7.554688-19.699218 7.542969-30.25 0-27.417968-43.734375-98.800781-52.507813-112.835937zm-6.960937 200.773437c-44.277344.449219-82.804687-30.207031-92.3125-73.453125 20.78125 29.824219 54.789063 47.65625 91.144531 47.785156.304688 0 .59375.050782.902344.050782h.257812c36.785157.21875 71.320313-17.695313 92.328126-47.898438-9.488282 43.273438-48.023438 73.957032-92.320313 73.515625zm-25.335937-315.734375c0-14.136718 11.460937-25.597656 25.601562-25.597656 14.136719 0 25.597656 11.460938 25.597656 25.597656 0 14.140625-11.460937 25.601563-25.597656 25.601563-14.140625 0-25.601562-11.460938-25.601562-25.601563zm0 0"
  }), __jsx("path", {
    d: "m350.136719 512c60.570312.730469 110.308593-47.691406 111.195312-108.261719 0-48.460937-71.617187-150.800781-96.289062-184.617187 17.933593-6.511719 29.339843-24.160156 27.917969-43.183594-1.421876-19.023438-15.328126-34.777344-34.027344-38.550781v-32.714844l6.390625-11.195313c7.015625-12.277343 6.964843-27.355468-.128907-39.585937-7.097656-12.226563-20.164062-19.753906-34.300781-19.757813-17.492187.085938-32.890625 11.542969-37.992187 28.273438-.105469.347656-.1875.699219-.246094 1.058594l-6.828125 41.367187c-2.148437 13.164063-7.097656 25.714844-14.507813 36.804688l-21.886718 32.828125c-2.617188 3.921875-1.558594 9.21875 2.363281 11.835937 3.921875 2.613281 9.222656 1.558594 11.835937-2.363281l21.914063-32.835938c8.769531-13.113281 14.617187-27.953124 17.152344-43.519531l6.742187-40.757812c3.054688-9.273438 11.6875-15.5625 21.453125-15.625 8.050781 0 15.5 4.285156 19.542969 11.25 4.042969 6.964843 4.074219 15.558593.082031 22.550781l-7.527343 13.132812c-.746094 1.300782-1.132813 2.769532-1.125 4.269532v34.984375c-18.609376 3.773437-32.472657 19.40625-33.988282 38.332031s9.679688 36.570312 27.453125 43.253906c-21.53125 29.5-79.257812 111.789063-93.261719 164.40625 0 .066406 0 .125-.050781.203125-1.875 6.558594-2.910156 13.328125-3.082031 20.148438.878906 60.574219 50.621094 109.003906 111.199219 108.269531zm-.425781-59.734375c-24.179688-.859375-43.144532-21.042969-42.507813-45.226563 0-12.882812 17.203125-49.765624 42.667969-91.996093 25.453125 42.230469 42.667968 79.113281 42.667968 91.996093.636719 24.21875-18.386718 44.417969-42.601562 45.226563zm7.386718-158.105469c-1.660156-2.347656-4.355468-3.742187-7.230468-3.742187s-5.570313 1.394531-7.230469 3.742187c-8.765625 14.039063-52.5 85.421875-52.5 112.835938-.015625 10.324218 2.449219 20.496094 7.195312 29.664062-18.582031-12.070312-32.105469-30.519531-38.015625-51.875 13.21875-45.269531 63.597656-120.082031 90.820313-157.15625 27.210937 37.066406 77.566406 111.835938 90.800781 157.113282-5.996094 21.71875-19.851562 40.433593-38.875 52.507812 4.964844-9.308594 7.554688-19.703125 7.542969-30.253906 0-27.433594-43.734375-98.8125-52.507813-112.851563zm-6.960937 200.773438c-44.277344.449218-82.804688-30.207032-92.316407-73.453125 20.785157 29.824219 54.792969 47.65625 91.144532 47.785156.308594 0 .597656.050781.90625.050781h.257812c36.785156.21875 71.320313-17.695312 92.328125-47.898437-9.488281 43.273437-48.023437 73.957031-92.320312 73.515625zm-25.335938-315.734375c0-14.136719 11.460938-25.597657 25.597657-25.597657 14.140624 0 25.601562 11.460938 25.601562 25.597657 0 14.140625-11.460938 25.601562-25.601562 25.601562-14.136719 0-25.597657-11.460937-25.597657-25.601562zm0 0"
  })))), __jsx("div", {
    className: "category-details"
  }, __jsx("a", {
    href: "#"
  }, __jsx("h5", null, "long earrings")), __jsx("h6", null, "18 items")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "o4yg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENUITEMS; });
const MENUITEMS = [{
  title: 'Home',
  type: 'sub',
  children: [{
    title: "New Demos",
    type: "sub",
    tag: 'new',
    children: [{
      path: '/layouts/Tools',
      title: 'Tools',
      type: 'link'
    }, {
      path: '/layouts/Christmas',
      title: 'Christmas',
      type: 'link'
    }, {
      path: '/layouts/Marketplace',
      title: 'Marketplace',
      type: 'link'
    }, {
      path: '/layouts/Game',
      title: 'Game',
      type: 'link'
    }, {
      path: '/layouts/Gym',
      title: 'Gym',
      type: 'link'
    }, {
      path: '/layouts/Marijuana',
      title: 'Marijuana',
      type: 'link'
    }, {
      path: '/layouts/Leftsidebar',
      title: 'Left-Sidebar',
      type: 'link'
    }, {
      path: '/layouts/Jewellery',
      title: 'Jewellery',
      type: 'link'
    }, {
      path: '/layouts/Pets',
      title: 'Pets',
      type: 'link'
    }, {
      path: '/layouts/Metros',
      title: 'Metros',
      type: 'link'
    }, {
      path: '/layouts/Vedioslider',
      title: 'Video-Slider',
      type: 'link'
    }, {
      path: '/layouts/Nursery',
      title: 'Nursery',
      type: 'link'
    }]
  }, {
    title: 'Clothing',
    type: 'sub',
    children: [{
      path: '/',
      title: 'Fashion1',
      type: 'link'
    }, {
      path: '/layouts/Fashion2',
      title: 'Fashion2',
      type: 'link'
    }, {
      path: '/layouts/Fashion3',
      title: 'Fashion3',
      type: 'link'
    }, {
      path: '/layouts/Kids',
      title: 'Kids',
      type: 'link'
    }]
  }, {
    title: 'Basics',
    type: 'sub',
    children: [{
      path: '/layouts/Basics/Lookbook',
      title: 'Lookbook',
      type: 'link'
    }, {
      path: '/layouts/Basics/Instagram',
      title: 'Instagram',
      type: 'link'
    }, {
      path: '/layouts/Basics/Video',
      title: 'Video',
      type: 'link'
    }, {
      path: '/layouts/Basics/Parallax',
      title: 'Parallax',
      type: 'link'
    }, {
      path: '/layouts/Basics/Fullpage',
      title: 'Full Page',
      type: 'link'
    }]
  }, {
    path: '/layouts/Beauty',
    title: 'Beauty',
    type: 'link'
  }, {
    title: 'electronic',
    type: 'sub',
    children: [{
      path: '/layouts/Electronic/Electronic-1',
      title: 'Electronic-1',
      type: 'link'
    }, {
      path: '/layouts/Electronic/Electronic-2',
      title: 'Electronic-2',
      type: 'link'
    }]
  }, {
    path: '/layouts/Furniture',
    title: 'Furniture',
    type: 'link'
  }, {
    path: '/layouts/Vegetables',
    title: 'Vegetables',
    type: 'link'
  }, {
    path: '/layouts/Watch',
    title: 'Watch',
    type: 'link'
  }, {
    path: '/layouts/Lights',
    title: 'Lights',
    type: 'link'
  }, {
    path: '/layouts/Goggles',
    title: 'Goggles',
    type: 'link'
  }, {
    path: '/layouts/Shoes',
    title: 'Shoes',
    type: 'link'
  }, {
    path: '/layouts/Bags',
    title: 'Bags',
    type: 'link'
  }, {
    path: '/layouts/Flowers',
    title: 'Flowers',
    type: 'link'
  }]
}, {
  title: 'Shop',
  type: 'sub',
  children: [{
    path: '/shop/left_sidebar',
    title: 'Left Sidebar',
    type: 'link'
  }, {
    path: '/shop/right_sidebar',
    title: 'Right Sidebar',
    type: 'link'
  }, {
    path: '/shop/no_sidebar',
    title: 'No Sidebar',
    type: 'link'
  }, {
    path: '/shop/sidebar_popup',
    title: 'Sidebar Popup',
    type: 'link'
  }, {
    path: '/shop/metro',
    title: 'Metro',
    type: 'link',
    tag: 'new'
  }, {
    path: '/shop/full_width',
    title: 'Full Width',
    type: 'link',
    tag: 'new'
  }, {
    path: '/shop/three_grid',
    title: '3 Grid',
    type: 'link'
  }, {
    path: '/shop/six_grid',
    title: '6 Six',
    type: 'link'
  }, {
    path: '/shop/list_view',
    title: 'List View',
    type: 'link'
  }]
}, {
  title: 'Products',
  type: 'sub',
  children: [{
    title: 'Sidebar',
    type: 'sub',
    children: [{
      path: '/product-details/1',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/product-details/right_sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/product-details/no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }]
  }, {
    title: "Thumbnail Image",
    type: "sub",
    children: [{
      path: '/product-details/thumbnail_left',
      title: 'Left Image',
      type: 'link'
    }, {
      path: '/product-details/thumbnail_right',
      title: 'Right Image',
      type: 'link'
    }, {
      path: '/product-details/thumbnail_outside',
      title: 'Image Outside',
      type: 'link'
    }]
  }, {
    title: "3-Column",
    type: "sub",
    children: [{
      path: '/product-details/3_col_left',
      title: 'Thumbnail Left',
      type: 'link'
    }, {
      path: '/product-details/3_col_right',
      title: 'Thumbnail Right',
      type: 'link'
    }, {
      path: '/product-details/3_col_bottom',
      title: 'Thumbnail Bottom',
      type: 'link'
    }]
  }, {
    path: '/product-details/4_image',
    title: '4 Image',
    type: 'link',
    tag: 'New'
  }, {
    path: '/product-details/bundle_product',
    title: 'Bundle Product',
    type: 'link',
    tag: 'New'
  }, {
    path: '/product-details/sticky',
    title: 'Sticky',
    type: 'link'
  }, {
    path: '/product-details/accordian',
    title: 'Accordian',
    type: 'link'
  }, {
    path: '/product-details/image_swatch',
    title: 'Image Swatch',
    type: 'link',
    tag: 'New'
  }, {
    path: '/product-details/vertical_tab',
    title: 'Vertical Tab',
    type: 'link'
  }]
}, {
  title: 'features',
  megaMenu: true,
  megaMenuType: 'small',
  type: 'sub',
  children: [{
    title: 'Portfolio',
    type: 'sub',
    children: [{
      path: '/portfolio/grid-2',
      title: 'Portfolio Grid 2',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/portfolio/grid-3',
      title: 'Portfolio Grid 3',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/portfolio/grid-4',
      title: 'Portfolio Grid 4',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/portfolio/masonry-grid-2',
      title: 'masonry Grid 2',
      type: 'link',
      icon: 'write'
    }, {
      path: '/portfolio/masonry-grid-3',
      title: 'masonry Grid 3',
      type: 'link',
      icon: 'map-alt'
    }, {
      path: '/portfolio/masonry-grid-4',
      title: 'masonry Grid 4',
      type: 'link',
      icon: 'map-alt'
    }, {
      path: '/portfolio/masonry-full-width',
      title: 'masonry Full Width',
      type: 'link',
      icon: 'map-alt'
    }]
  }, {
    title: 'Add To Cart',
    type: 'sub',
    children: [{
      path: '/layouts/Nursery',
      title: 'Cart Modal Popup',
      type: 'link',
      icon: 'list'
    }, {
      path: '/layouts/Vegetables',
      title: 'Qty Counter',
      type: 'link',
      icon: 'gallery'
    }, {
      path: '/layouts/Bags',
      title: 'Cart Top',
      type: 'link',
      icon: 'money'
    }, {
      path: '/layouts/Shoes',
      title: 'Cart Bottom',
      type: 'link',
      icon: 'time'
    }, {
      path: '/layouts/Watch',
      title: 'Cart Left',
      type: 'link',
      icon: 'alarm-clock'
    }, {
      path: '/layouts/Tools',
      title: 'Cart Right',
      type: 'link',
      icon: 'alarm-clock'
    }]
  }, {
    title: 'Theme Element',
    type: 'sub',
    children: [{
      path: '/portfolio/title',
      title: 'Title',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/portfolio/collection-banner',
      title: 'Collection Banner',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/portfolio/home-slider',
      title: 'Home Slider',
      type: 'link',
      icon: 'video-camera'
    }, {
      path: '/portfolio/category',
      title: 'Category',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/portfolio/service',
      title: 'Service',
      type: 'link',
      icon: 'headphone'
    }]
  }, {
    title: 'Product Element',
    type: 'sub',
    children: [{
      path: '/portfolio/product-box',
      title: 'Product Box',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/portfolio/product-slider',
      title: 'Product Slider',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/portfolio/no-slider',
      title: 'No Slider',
      type: 'link',
      icon: 'video-camera'
    }, {
      path: '/portfolio/multi-slider',
      title: 'Multi Slider',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/portfolio/tab',
      title: 'Tab',
      type: 'link',
      icon: 'headphone'
    }]
  }, {
    title: 'Email Template',
    type: 'sub',
    children: [{
      path: '/portfolio/order-success',
      title: 'Order Success',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/portfolio/order-success-2',
      title: 'Order Success 2',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/portfolio/email-template',
      title: 'Email Template',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/portfolio/email-template-2',
      title: 'Email Template 2',
      type: 'link',
      icon: 'headphone'
    }]
  }]
}, {
  title: 'Pages',
  type: 'sub',
  children: [{
    title: 'vendor',
    type: 'sub',
    tag: 'new',
    children: [{
      path: '/page/vendor/vendor-dashboard',
      title: 'Vendor Dashboard',
      type: 'link'
    }, {
      path: '/page/vendor/vendor-profile',
      title: 'Vendor Profile',
      type: 'link'
    }, {
      path: '/page/vendor/become-vendor',
      title: 'Become Vendor',
      type: 'link'
    }]
  }, {
    title: 'Account',
    type: 'sub',
    children: [{
      path: '/page/account/wishlist',
      title: 'Wishlist',
      type: 'link'
    }, {
      path: '/page/account/cart',
      title: 'cart',
      type: 'link'
    }, {
      path: '/page/account/dashboard',
      title: 'dashboard',
      type: 'link'
    }, {
      path: '/page/account/login',
      title: 'login',
      type: 'link'
    }, {
      path: '/page/account/login-auth',
      title: 'login-auth',
      type: 'link'
    }, {
      path: '/page/account/register',
      title: 'register',
      type: 'link'
    }, {
      path: '/page/account/contact',
      title: 'contact',
      type: 'link'
    }, {
      path: '/page/account/forget-pwd',
      title: 'forgot-password',
      type: 'link'
    }, {
      path: '/page/account/profile',
      title: 'profile',
      type: 'link'
    }, {
      path: '/page/account/checkout',
      title: 'checkout',
      type: 'link'
    }]
  }, {
    path: '/page/about-us',
    title: 'about-us',
    type: 'link'
  }, {
    path: '/page/search',
    title: 'search',
    type: 'link'
  }, {
    path: '/page/typography',
    title: 'typography',
    type: 'link',
    tag: 'new'
  }, {
    path: '/page/review',
    title: 'review',
    type: 'link'
  }, {
    path: '/page/order-success',
    title: 'order-success',
    type: 'link'
  }, {
    title: 'compare',
    type: 'sub',
    children: [{
      path: '/page/compare',
      title: 'compare',
      type: 'link'
    }, {
      path: '/page/compare-2',
      title: 'compare-2',
      type: 'link',
      tag: 'new'
    }]
  }, {
    path: '/page/collection',
    title: 'collection',
    type: 'link'
  }, {
    path: '/page/lookbook',
    title: 'lookbook',
    type: 'link'
  }, {
    path: '/page/site-map',
    title: 'site-map',
    type: 'link'
  }, {
    path: '/page/404',
    title: '404',
    type: 'link'
  }, {
    path: '/page/coming-soon',
    title: 'coming-soon',
    type: 'link'
  }, {
    path: '/page/faq',
    title: 'faq',
    type: 'link'
  }]
}, {
  title: 'Blogs',
  type: 'sub',
  children: [{
    path: '/blogs/blog_left_sidebar',
    title: 'blog left sidebar',
    type: 'link'
  }, {
    path: '/blogs/blog_right_sidebar',
    title: 'blog right sidebar',
    type: 'link'
  }, {
    path: '/blogs/no_sidebar',
    title: 'no sidebar',
    type: 'link'
  }, {
    path: '/blogs/blog_detail',
    title: 'blog detail',
    type: 'link'
  }]
}];

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "tZOm":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfiDBoHJCc8oQibAAAA5klEQVQ4y7WUvQ4BQRSFv/GXEImfQiGi2EokolDtA3gCT6BReCQK/UavUIpGoqChoSAKlYilEEJhsmwWF4kzzbln7smdk8yMAiBLgBv2rHkLBZToMtd1jigiTCyHL6XmAD0M+g/K7G3/6ocJcH6wxCWDAvwUUbo+MJFD/xfKo0RoEtT8SI2DN7QbSQpUNW+R9BpqJFxKDJuh5jZ1tq7dje/LCBevlGFMSa8xmU9CNwi9Dv1/KLEjT9gJPOIsG3Z0NDOpMJDPcL/wFubtAaU/DtAWntezCXIGm6lmBmWGsiHl/CMnFnAFf0kxbWSSNIcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTItMjZUMDY6MzY6MzkrMDE6MDDC9lGVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEyLTI2VDA2OjM2OjM5KzAxOjAws6vpKQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),

/***/ "tfG8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "skeleton-svg",
  speed: 10
}, __jsx("rect", {
  className: "skeleton-img",
  x: "2",
  y: "2",
  rx: "0",
  ry: "0"
}), __jsx("rect", {
  className: "skeleton-c1",
  x: "0",
  rx: "0",
  ry: "0"
}), __jsx("rect", {
  className: "skeleton-c2",
  x: "0",
  rx: "0",
  ry: "0"
}), __jsx("rect", {
  className: "skeleton-c3",
  x: "0",
  rx: "0",
  ry: "0"
}));

/* harmony default export */ __webpack_exports__["a"] = (PostLoader);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ySeX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("65ip");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("STcy");
/* harmony import */ var _helpers_cart_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/5QC");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("EO2r");
/* harmony import */ var _PostLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("tfG8");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("U8OX");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("XJI2");
/* harmony import */ var _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("8c/V");
/* harmony import */ var _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
    query  products($type:_CategoryType!,$indexFrom:Int! ,$limit:Int!) {
        products (type: $type,indexFrom:$indexFrom ,limit:$limit){
            items {
                id
                title
                description
                type
                brand
                category 
                price
                new
                stock
                sale
                discount
                variants{
                    id
                    sku
                    size
                    color
                    image_id
                }
                images{
                    image_id
                    id
                    alt
                    src
                }
            }
        }
    }
`;

const SpecialProducts = ({
  type,
  fluid,
  designClass,
  cartClass,
  heading,
  noTitle,
  title,
  inner,
  line,
  hrClass,
  backImage
}) => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(type);
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart_index__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  const wishListContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_7__[/* WishlistContext */ "c"]);
  const compareContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_9__[/* CompareContext */ "a"]);
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_10__[/* CurrencyContext */ "b"]);
  const currency = curContext.state;
  const quantity = context.quantity;
  var {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: 8
    }
  });
  return __jsx("div", null, __jsx("section", {
    className: designClass
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: fluid
  }, noTitle ? '' : __jsx("div", {
    className: title
  }, __jsx("h4", null, heading), __jsx("h2", {
    className: inner
  }, "special products"), line ? __jsx("div", {
    className: "line"
  }) : hrClass ? __jsx("hr", {
    role: "tournament6"
  }) : ''), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    className: "theme-tab"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    className: "tabs tab-title"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: activeTab == type ? 'active' : '',
    onClick: () => setActiveTab(type)
  }, "NEW ARRIVAL"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: activeTab == 'furniture' ? 'active' : '',
    onClick: () => setActiveTab('furniture')
  }, "FEATURED "), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: activeTab == 'furniture' ? 'active' : '',
    onClick: () => setActiveTab('furniture')
  }, "SPECIAL")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "no-slider"
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: "12"
  }, __jsx("div", null, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
    src: _public_assets_images_empty_search_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    className: "img-fluid mb-4 mx-auto",
    alt: ""
  }), __jsx("h3", null, __jsx("strong", null, "Your Cart is Empty")), __jsx("h4", null, "Explore more shortlist some items.")))) : __jsx("div", {
    className: "row mx-0 margin-default"
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null)), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-6"
  }, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null))) : data && data.products.items.slice(0, 8).map((product, i) => __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    key: i,
    product: product,
    symbol: currency.symbol,
    addCompare: () => compareContext.addToCompare(product),
    addCart: () => context.addToCart(product, quantity),
    addWishlist: () => wishListContext.addToWish(product),
    cartClass: cartClass,
    backImage: backImage
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "no-slider"
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: "12"
  }, __jsx("div", null, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center"
  }, __jsx("img", {
    src: `/static/images/empty-search.jpg`,
    className: "img-fluid mb-4 mx-auto",
    alt: ""
  }), __jsx("h3", null, __jsx("strong", null, "Your Cart is Empty")), __jsx("h4", null, "Explore more shortlist some items.")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null)) : data && data.products.items.slice(0, 8).map((product, i) => __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    product: product,
    symbol: currency.symbol,
    key: i,
    addCompare: () => compareContext.addToCompare(product),
    addCart: () => context.addToCart(product, quantity),
    addWishlist: () => wishListContext.addToWish(product),
    cartClass: cartClass
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "no-slider"
  }, !data || !data.products || !data.products.items || data.products.items.length === 0 || loading ? data && data.products && data.products.items && data.products.items.length === 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: "12"
  }, __jsx("div", null, __jsx("div", {
    className: "col-sm-12 empty-cart-cls text-center"
  }, __jsx("img", {
    src: `/static/images/empty-search.jpg`,
    className: "img-fluid mb-4 mx-auto",
    alt: ""
  }), __jsx("h3", null, __jsx("strong", null, "Your Cart is Empty")), __jsx("h4", null, "Explore more shortlist some items.")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx(_PostLoader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null)) : data && data.products.items.slice(0, 8).map((product, i) => __jsx(_product_box_ProductBox1__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    product: product,
    symbol: currency.symbol,
    key: i,
    addCompare: () => compareContext.addToCompare(product),
    addCart: () => context.addToCart(product, quantity),
    addWishlist: () => wishListContext.addToWish(product),
    cartClass: cartClass
  }))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (SpecialProducts);

/***/ }),

/***/ "yl6w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./components/constant/langConfig.json
var langConfig = __webpack_require__("Z0Qo");

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__("fnYr");
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_ = __webpack_require__("fhoN");
var external_i18next_browser_languagedetector_default = /*#__PURE__*/__webpack_require__.n(external_i18next_browser_languagedetector_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// CONCATENATED MODULE: ./components/constant/i18n.js



external_i18next_default.a.use(external_i18next_browser_languagedetector_default.a).use(external_react_i18next_["initReactI18next"]).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'topbar_title': 'Welcome to Our store Multikart',
        'call_us': 'Call Us',
        'Home': 'Home',
        'features': 'features',
        'new': 'new',
        "Blogs": "Blogs",
        'blog_left_sidebar': 'left sidebar',
        'blog_right_sidebar': 'right sidebar',
        'blog_detail': 'blog detail',
        'category_left_sidebar': 'left sidebar',
        'category_right_sidebar': 'right sidebar',
        'category_no_sidebar': 'no sidebar',
        'category_metro': 'metro',
        'category_full_width': 'full width',
        'Products': 'Products',
        'left_sidebar': 'left sidebar',
        'right_sidebar': 'right sidebar',
        'no_sidebar': 'no sidebar',
        'three_col_thumbnail_left': 'Thumbnail left',
        'three_col_thumbnail_right': 'Thumbnail right',
        'thumbnail_below': 'thumbnail below',
        'accordian_details': 'accordian details',
        'thumbnail_left': 'image left',
        'thumbnail_right': 'image right',
        'vertical_tab': 'vertical tab',
        'Pages': 'Pages',
        'about_us': 'about us',
        'lookbook': 'lookbook',
        'login': 'login',
        'register': 'register',
        'logout': 'Logout',
        'search': 'search',
        'wishlist': 'wishlist',
        'cart': 'cart',
        'collection': 'collection',
        'forget_password': 'forget password',
        'contact': 'contact',
        'checkout': 'checkout',
        'compare': 'compare',
        'order_success': 'order_success',
        'dashboard': 'Dashboard',
        'FAQ': 'FAQ',
        'Shop': 'Shop',
        'mens_fashion': 'mens fashion',
        'top': 'top',
        'bottom': 'bottom',
        'ethic_wear': 'ethic wear',
        'sports_wear': 'sports wear',
        'shirts': 'shirts',
        'women_fashion': 'womens fashion',
        'dresses': 'dresses',
        'skirts': 'skirts',
        'westarn_wear': 'westarn wear',
        'ethnic_wear': 'ethnic wear',
        'sport_wear': 'aport wear',
        'bottom_wear': 'bottom wear',
        'kids_fashion': 'kidss fashion',
        'accessories': 'Accessories',
        'fashion_jewellery': 'Fashion Jewellery',
        'caps_and_hats': 'caps and hats',
        'precious_jewellery': 'precious jewellery',
        'necklaces': 'necklaces',
        'earrings': 'earrings',
        'rings_wrist_wear': 'rings & wrist wear',
        'men_accessories': 'mens accessories',
        'ties': 'ties',
        'cufflinks': 'cufflinks',
        'pockets_squares': 'pockets squares',
        'helmets': 'helmets',
        'scarves': 'scarves',
        'phone_cases': 'phone cases',
        'my_account': 'My Account',
        'fashion': 'Fashion',
        'beauty': 'Beauty',
        'electronic': 'Electronic',
        'furniture': 'Furniture',
        'kids': 'Kids',
        'pets': 'Pets',
        'vegetables': 'Vegetables',
        'watch': 'Watch',
        'theme_elements': 'theme elements',
        'element_title': 'element title',
        'collection_banner': 'collection banner',
        'home_slider': 'home slider',
        'category': 'category',
        'service': 'service',
        'image_size_ratio': 'image size ratio',
        'product_elements': 'product elements',
        'product_box': 'product box',
        'product_slider': 'product slider',
        'no_slider': 'no slider',
        'multi_slider': 'multi slider',
        'tab': 'tab',
        'email_template': 'email template',
        'portfolio': 'portfolio',
        'portfolio_grid_2': 'portfolio grid 2',
        'portfolio_grid_3': 'portfolio grid 3',
        'portfolio_grid_4': 'portfolio grid 4',
        'portfolio_masonary_2': 'masonary 2',
        'portfolio_masonary_3': 'masonary 3',
        'portfolio_masonary_4': 'masonary 4',
        'portfolio_masonary_full': 'masonary full width'
      }
    },
    fn: {
      translations: {
        'topbar_title': 'Bienvenue dans notre magasin {theme_name}',
        'call_us': 'Appelez nous',
        'Home': 'maison',
        'features': 'fonctionnalités',
        'new': 'Nouveau',
        'blog': 'bloguer',
        'blog_left_sidebar': 'barre latérale gauche',
        'blog_right_sidebar': 'barre latérale droite',
        'blog_detail': 'détail du blog',
        'category_left_sidebar': 'barre latérale gauche',
        'category_right_sidebar': 'barre latérale droite',
        'category_no_sidebar': 'sans encadré',
        'category_metro': 'métro',
        'category_full_width': 'pleine largeur',
        'products': 'des produits',
        'left_sidebar': 'Barre latérale degauche',
        'right_sidebar': 'Barre latérale droite',
        'no_sidebar': 'pas de barre latérale',
        'three_col_thumbnail_left': '3 vignettes gauche',
        'three_col_thumbnail_right': '3 vignette droite',
        'thumbnail_below': 'vignette ci_dessous',
        'accordian_details': 'détails accordéon',
        'thumbnail_left': 'vignette à gauche',
        'thumbnail_right': 'vignette droite',
        'vertical_tab': 'onglet vertical',
        'Pages': 'des pages',
        'about_us': 'à propos de nous',
        'lookbook': 'lookbook',
        'login': 'sidentifier',
        'register': 'registre',
        'logout': 'Connectez _ Out',
        'search': 'chercher',
        'wishlist': 'liste de souhaits',
        'cart': 'Chariot',
        'collection': 'collection',
        'forget_password': 'mot de passe oublié',
        'contact': 'contact',
        'checkout': 'check_out',
        'compare': 'comparer',
        'order_success': 'succès de la',
        'dashboard': 'Tableau de bord',
        'FAQ': 'FAQ',
        'Shop': 'Boutique',
        'mens_fashion': 'la mode masculine',
        'sports_wear': 'vêtements de sport',
        'top': 'Haut',
        'bottom': 'bas',
        'ethic_wear': 'usure éthique',
        'shirts': 'chemises',
        'women_fashion': 'la mode des femmes',
        'dresses': 'les robes',
        'skirts': 'jupes',
        'westarn_wear': 'usure occidentale',
        'ethnic_wear': 'tenue éthnique',
        'sport_wear': 'vêtement de sport',
        'bottom_wear': 'usure du bas',
        'kids_fashion': 'mode pour enfants',
        'accessories': 'Accessories',
        'fashion_jewellery': 'bijoux fantaisie',
        'caps_and_hats': 'casquettes et chapeaux',
        'precious_jewellery': 'bijoux précieux',
        'necklaces': 'colliers',
        'earrings': 'des boucles doreilles',
        'rings_wrist_wear': 'bagues et vêtements',
        'men_accessories': 'accessoires pour hommes',
        'ties': 'liens',
        'cufflinks': 'boutons de manchette',
        'pockets_squares': 'poches à carreaux',
        'helmets': 'casques',
        'scarves': 'écharpes',
        'phone_cases': 'Coque de téléphone',
        'my_account': 'Mon compte',
        'fashion': 'Mode',
        'beauty': 'Beauté',
        'electronic': 'Électronique',
        'furniture': 'Meubles',
        'kids': 'des gamins',
        'pets': 'animaux domestiques',
        'vegetables': 'Des légumes',
        'watch': 'Regarder',
        'theme_elements': 'éléments de thème',
        'element_title': 'titre de l\'élément',
        'collection_banner': 'bannière de collection',
        'home_slider': 'home curseur',
        'category': 'Catégorie',
        'service': 'un service',
        'image_size_ratio': 'rapport de taille d\'image',
        'product_elements': 'éléments de produit',
        'product_box': 'boîte de produit',
        'product_slider': 'curseur de produit',
        'no_slider': 'pas de curseur',
        'multi_slider': 'curseur multiple',
        'tab': 'languette',
        'email_template': 'modèle de courrier électronique',
        'portfolio': 'portefeuille',
        'portfolio_grid_2': 'portefeuille grille 2',
        'portfolio_grid_3': 'portefeuille grille 3',
        'portfolio_grid_4': 'portefeuille grille 4',
        'portfolio_masonary_2': 'maçonnerie 2',
        'portfolio_masonary_3': 'maçonnerie 3',
        'portfolio_masonary_4': 'maçonnerie 4',
        'portfolio_masonary_full': 'maçonnerie pleine largeur'
      }
    }
  },
  fallbackLng: "en",
  debug: true,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  // we use content as keys
  interpolation: {
    escapeValue: false
  }
});
/* harmony default export */ var i18n = (external_i18next_default.a);
// EXTERNAL MODULE: ./helpers/Currency/CurrencyContext.js
var CurrencyContext = __webpack_require__("XJI2");

// EXTERNAL MODULE: ./helpers/apollo/apollo.js
var apollo = __webpack_require__("gy5E");

// CONCATENATED MODULE: ./components/headers/common/currency.js
var __jsx = external_react_default.a.createElement;








const GET_CURRENCY = external_graphql_tag_default.a`
   query {
    getCurrency {
        currency
        name
        symbol
        value
    }
   }
`;

const Currency = ({
  icon
}) => {
  var {
    loading,
    data
  } = Object(react_hooks_["useQuery"])(GET_CURRENCY);
  const Context = Object(external_react_["useContext"])(CurrencyContext["b" /* CurrencyContext */]);
  const selectedCurrency = Context.currencyContext.selectedCurrency;

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return __jsx("li", {
    className: "onhover-div mobile-setting"
  }, __jsx("div", null, __jsx(external_reactstrap_["Media"], {
    src: icon,
    className: "img-fluid",
    alt: ""
  }), __jsx("i", {
    className: "fa fa-cog"
  })), __jsx("div", {
    className: "show-div setting"
  }, __jsx("h6", null, "language"), __jsx("ul", null, langConfig.map((item, i) => __jsx("li", {
    key: i
  }, __jsx("a", {
    href: null,
    onClick: () => {
      changeLanguage(item.val);
    }
  }, item.lang)))), __jsx("h6", null, "currency"), __jsx("ul", {
    className: "list-inline"
  }, data && data.getCurrency.map((cur, i) => __jsx("li", {
    key: i
  }, __jsx("div", {
    onClick: () => selectedCurrency(cur)
  }, cur.symbol, "  ", cur.currency))))));
};

/* harmony default export */ var currency = __webpack_exports__["a"] = (Object(apollo["a" /* withApollo */])(Currency));

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zUnT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEXklEQVRIia2Vy48UVRSHv3vrVlV39WseMIwOyDsM8ggqGEUMkrAwYuJWFrjwkRj8B4xx5cadC+Mj8RFjYmJYYNyIosb4HtCIYUGizoAzY8tMnAc9dHdVdVfde130NMy0MEiYX1LJvXXrnO/m1Mn5iS3Hy9xAu4FDwF5gM9ADCGAWGAF+BE4Ap5dKIpYAHQBeAA7e6Cbz+hp4Gfj8WofyOkGvAV/dBATgIeAk8Nb/ATnAt8BzNwHo1DO0yphZCvQd8OAtQNq6l9a/uyboTeD+ZYC0dRfwfidoD/DsMkLaeoL5CikAAa8DVDRoBACusCghCA0I7KJogcBikfMnBpBYbCsXBoEvLCUJGt4AdihgmxRiz0xTszMLGWGxBiIE46Fmb9EhtoByaDY1WSWJrUFqgwGslGQkxKnFWovvCC43NVo6jGmJL9gO7FbA4ammYWve4chqjw1dHho4M9VgV6/HuUrCmpxi+nKDO7oDJqoJWSUo5XwSbfjnUoTvOfQXfZSE0VrKoTUB7wzXeWUkRCmJIzisHMG+mShl/6Yi52PN0FhMV0/AnzVwA8GXFUM+tmzWhiR1+GIyZGteUk08fptt8uKObj4enmNqJmT1qgLDEyFl4VJzFCUlMK1q7xX9x/4qD+bkwEvb80xHmrmG5nJqWVvymIwMh9YX+PCPOQpJwrq+HMqV9LqCc5UEBTS0RWDR2jJcTXnqzhInLlQpFDI8f3aOvAAlmFRY2+UqyU+XUsoNQEi6rKFeSfCN4eRolShKOFVJuEfX6StlGApTaCT0F32Gxqus6MpgHAcRNvlsvE4j0QxfrGGjJjrj4ilZFNs+KtfrqQ0mGgZftLpmrgn7V7k83C0ZmY4o5D36Cj7nZyNUqukv+fiuw4XpiI19AY04wTEWFfhcnA1ZWfSJGymDBYdXLxomQx2q1FLxHRGsC5wr7VtPEw6sybEy6+Baw8CKHGORYXCgSHk6YqDoUtYOITEm66OF5O4cTFkHaTOs683yS7nG+v48q2brjFbTqqQ16jsksMZC1EBZi0xTbBgjG002FhWDJZdNvuXg6gARNYhqDaSFza6hPNfExAm9aM5XmtyWlTSMHZPAD52YQAnGqgk5V1ITivHI0FPKEsYp1lO8XU7ozSruWBGwNu9ye17xdyoYSSRru3xiBCrwmYwMp2cSejw5JLYcL+8Ezi4EOQKqiSXjOXRlHGailOlIs6HkMRsmxKkl8CSJtgSuJOc5NLVFW4vrCOpNQ3fGYaKe4hhD0ZP3tY3vV2DX1cKBtqBta/RIIZBAam1rLSA19sooWlR0IcCCxeIIgSP43cKgmj8/yoKxbgEpWoCFchfsXdleL/7m6ivRznUUrk7vIeC9/0bcso7RcupFfvQkcGYZIeeAx9ubTod9APh5GSBn6TDRTlBMy4bfvQXIB7TctboUqK2ngUeA728CcAp4DDgCHa3IvMNeR5/OP/uAR2mVYj1QYn4kAqO0GukT4JulbvEv6ofAhwGHwC0AAAAASUVORK5CYII="

/***/ })

/******/ });