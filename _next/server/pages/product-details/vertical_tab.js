module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		226: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 223);
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

/***/ "/pOw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const VerticalProductTab = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  return __jsx("section", {
    className: "tab-product m-0 vertical-tab"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "p-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "tab-border"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "2",
    className: "p-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "nav nav-tabs nav-material flex-column nav-border",
    id: "top-tab",
    role: "tablist"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    className: "nav-item"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: activeTab === '1' ? 'active' : '',
    onClick: () => setActiveTab('1')
  }, "Description")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    className: "nav-item"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: activeTab === '2' ? 'active' : '',
    onClick: () => setActiveTab('2')
  }, "Reviews")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
    className: "nav-item"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: activeTab === '3' ? 'active' : '',
    onClick: () => setActiveTab('3')
  }, "Product tags")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "10"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabContent"], {
    activeTab: activeTab,
    className: "nav-material",
    id: "top-tabContent"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "1"
  }, __jsx("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "2"
  }, __jsx("p", null, "No reviews yet")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["TabPane"], {
    tabId: "3"
  }, __jsx("p", null, "black, block1, blue, cotton, purple, skirts, top, under-100, versace, woman")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (VerticalProductTab);

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

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Dj+e");


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

/***/ "4enZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XJI2");
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/5QC");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("EO2r");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("U8OX");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
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

const ProductSection = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__[/* CurrencyContext */ "b"]);
  const wishlistContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_6__[/* WishlistContext */ "c"]);
  const compareContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_7__[/* CompareContext */ "a"]);
  const symbol = curContext.state.symbol;
  const currency = curContext.state;
  const cartCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  const addToCart = cartCtx.addToCart;
  const quantity = cartCtx.quantity;
  const plusQty = cartCtx.plusQty;
  const minusQty = cartCtx.minusQty;
  const setQuantity = cartCtx.setQuantity;
  const {
    0: selectedProduct,
    1: setSelectedProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);

  const uniqueTags = [];

  const changeQty = e => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = product => {
    const titleProps = product.title.split(' ').join('');
    router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
  };

  const getSelectedProduct = item => {
    setSelectedProduct(item);
    toggle();
  };

  var {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: "fashion",
      indexFrom: 0,
      limit: 8
    }
  });
  return __jsx("section", {
    className: "section-b-space ratio_asos"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "product-related"
  }, __jsx("h2", null, "related products"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "search-product"
  }, !data || !data.products || data.products.items.length === 0 || loading ? 'loading' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && data.products.items.slice(0, 6).map((product, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "2",
    md: "4",
    sm: "6",
    key: index
  }, __jsx("div", {
    className: "product-box"
  }, __jsx("div", {
    className: "img-wrapper"
  }, __jsx("div", {
    className: "front"
  }, __jsx("a", {
    href: null
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    onClick: () => clickProductDetail(product),
    src: product.images[0].src,
    className: "img-fluid blur-up lazyload bg-img",
    alt: ""
  }))), __jsx("div", {
    className: "back"
  }, __jsx("a", {
    href: null
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: product.images[1].src,
    className: "img-fluid blur-up lazyload bg-img",
    alt: ""
  }))), __jsx("div", {
    className: "cart-info cart-wrap"
  }, __jsx("button", {
    "data-toggle": "modal",
    "data-target": "#addtocart",
    title: "Add to cart",
    onClick: () => addToCart(product, quantity)
  }, __jsx("i", {
    className: "fa fa-shopping-cart"
  })), __jsx("a", {
    href: "#",
    onClick: () => wishlistContext.addToWish(product),
    title: "Add to Wishlist"
  }, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true"
  })), __jsx("a", {
    href: "#",
    onClick: () => getSelectedProduct(product),
    "data-toggle": "modal",
    "data-target": "#quick-view",
    title: "Quick View"
  }, __jsx("i", {
    className: "fa fa-search",
    "aria-hidden": "true"
  })), __jsx("a", {
    href: "#",
    onClick: () => compareContext.addToCompare(product),
    title: "Compare"
  }, __jsx("i", {
    className: "fa fa-refresh",
    "aria-hidden": "true"
  })))), __jsx("div", {
    className: "product-detail"
  }, __jsx("div", {
    className: "rating"
  }, __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  }), " ", __jsx("i", {
    className: "fa fa-star"
  })), __jsx("a", {
    href: null
  }, __jsx("h6", null, product.title)), __jsx("h4", null, symbol, product.price), __jsx("ul", {
    className: "color-variant"
  }, __jsx("li", {
    className: "bg-light0"
  }), __jsx("li", {
    className: "bg-light1"
  }), __jsx("li", {
    className: "bg-light2"
  })))))))), selectedProduct ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    className: "modal-lg quickview-modal",
    centered: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    xs: "12"
  }, __jsx("div", {
    className: "quick-view-img"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: `${selectedProduct.variants ? image ? image : selectedProduct.images[0].src : selectedProduct.images[0].src}`,
    alt: "",
    className: "img-fluid"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "rtl-text"
  }, __jsx("div", {
    className: "product-right"
  }, __jsx("h2", null, " ", selectedProduct.title, " "), __jsx("h3", null, "\"$\" ", (selectedProduct.price * 1).toFixed(2)), selectedProduct.variants ? __jsx("ul", {
    className: "color-variant"
  }, uniqueTags ? __jsx("ul", {
    className: "color-variant"
  }, selectedProduct.type === 'jewellery' || selectedProduct.type === 'nursery' || selectedProduct.type === 'beauty' || selectedProduct.type === 'electronics' || selectedProduct.type === 'goggles' || selectedProduct.type === 'watch' || selectedProduct.type === 'pets' ? '' : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, uniqueTags ? __jsx("ul", {
    className: "color-variant"
  }, uniqueTags.map((vari, i) => {
    return __jsx("li", {
      className: vari.color,
      key: i,
      title: vari.color,
      onClick: () => variantChangeByColor(vari.image_id, selectedProduct.images)
    });
  })) : '')) : '') : '', __jsx("div", {
    className: "border-product"
  }, __jsx("h6", {
    className: "product-title"
  }, "product details"), __jsx("p", null, selectedProduct.description)), __jsx("div", {
    className: "product-description border-product"
  }, selectedProduct.size ? __jsx("div", {
    className: "size-box"
  }, __jsx("ul", null, selectedProduct.size.map((size, i) => {
    return __jsx("li", {
      key: i
    }, __jsx("a", {
      href: null
    }, size));
  }))) : '', __jsx("h6", {
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
    onClick: () => plusQty(selectedProduct),
    "data-type": "plus",
    "data-field": ""
  }, __jsx("i", {
    className: "fa fa-angle-right"
  })))))), __jsx("div", {
    className: "product-buttons"
  }, __jsx("button", {
    className: "btn btn-solid",
    onClick: () => addToCart(selectedProduct, quantity)
  }, "add to cart"), __jsx("button", {
    className: "btn btn-solid",
    onClick: () => clickProductDetail(selectedProduct)
  }, "View detail"))))))) : ""));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductSection);

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

/***/ "6yjW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_size_chart_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xTE4");
/* harmony import */ var _public_assets_images_size_chart_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_size_chart_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XJI2");
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/5QC");
/* harmony import */ var _components_common_widgets_countdownComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JtKs");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const DetailsWithPrice = ({
  item,
  stickyClass,
  changeColorVar
}) => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const CurContect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__[/* CurrencyContext */ "b"]);
  const symbol = CurContect.state.symbol;

  const toggle = () => setModal(!modal);

  const product = item;
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  const stock = context.stock;
  const plusQty = context.plusQty;
  const minusQty = context.minusQty;
  const quantity = context.quantity;
  const uniqueColor = [];
  const uniqueSize = [];

  const onCloseModal = () => {
    setOpen(false);
  };

  const changeQty = e => {
    setQuantity(parseInt(e.target.value));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `product-right ${stickyClass}`
  }, __jsx("h2", null, " ", product.title, " "), __jsx("h4", null, __jsx("del", null, symbol, product.price), __jsx("span", null, product.discount, "% off")), __jsx("h3", null, symbol, product.price - product.price * product.discount / 100, " "), product.variants.map(vari => {
    var findItem = uniqueColor.find(x => x.color === vari.color);
    if (!findItem) uniqueColor.push(vari);
    var findItemSize = uniqueSize.find(x => x === vari.size);
    if (!findItemSize) uniqueSize.push(vari.size);
  }), changeColorVar === undefined ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, uniqueColor ? __jsx("ul", {
    className: "color-variant"
  }, uniqueColor.map((vari, i) => {
    return __jsx("li", {
      className: vari.color,
      key: i,
      title: vari.color
    });
  })) : '') : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, uniqueColor ? __jsx("ul", {
    className: "color-variant"
  }, uniqueColor.map((vari, i) => {
    return __jsx("li", {
      className: vari.color,
      key: i,
      title: vari.color,
      onClick: () => changeColorVar(i)
    });
  })) : ''), __jsx("div", {
    className: "product-description border-product"
  }, product.variants ? __jsx("div", null, __jsx("h6", {
    className: "product-title size-text"
  }, "select size", __jsx("span", null, __jsx("a", {
    href: null,
    "data-toggle": "modal",
    "data-target": "#sizemodal",
    onClick: toggle
  }, "size chart"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: toggle,
    centered: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: toggle
  }, "Sheer Straight Kurta"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: _public_assets_images_size_chart_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "size",
    className: "img-fluid"
  }))), __jsx("div", {
    className: "size-box"
  }, __jsx("ul", null, uniqueSize.map((data, i) => {
    return __jsx("li", {
      key: i
    }, __jsx("a", {
      href: null
    }, data));
  })))) : '', __jsx("span", {
    className: "instock-cls"
  }, stock), __jsx("h6", {
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
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
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
  }, __jsx("a", {
    href: null,
    className: "btn btn-solid",
    onClick: () => context.addToCart(product, quantity)
  }, "add to cart"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/page/account/checkout`
  }, __jsx("a", {
    className: "btn btn-solid"
  }, "buy now"))), __jsx("div", {
    className: "border-product"
  }, __jsx("h6", {
    className: "product-title"
  }, "product details"), __jsx("p", null, product.description)), __jsx("div", {
    className: "border-product"
  }, __jsx("h6", {
    className: "product-title"
  }, "share it"), __jsx("div", {
    className: "product-icon"
  }, __jsx("ul", {
    className: "product-social"
  }, __jsx("li", null, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-facebook"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://plus.google.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-google-plus"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://twitter.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-twitter"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank"
  }, __jsx("i", {
    className: "fa fa-instagram"
  })))))), __jsx("div", {
    className: "border-product"
  }, __jsx("h6", {
    className: "product-title"
  }, "Time Reminder"), __jsx(_components_common_widgets_countdownComponent__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    open: open,
    onClose: onCloseModal,
    center: true
  }, __jsx("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document"
  }, __jsx("div", {
    className: "modal-content"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    className: "modal-header"
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel"
  }, "Sheer Straight Kurta")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    className: "modal-body"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    src: `/assets/images/size-chart.jpg`,
    alt: "",
    className: "img-fluid"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsWithPrice);

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

/***/ "Dj+e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ncOK");
/* harmony import */ var _common_product_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4enZ");
/* harmony import */ var _helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gy5E");
/* harmony import */ var _product_verticalTabPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ktJU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const VerticalTab = () => {
  const id = "1";
  return __jsx(_components_shop_common_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    parent: "home",
    title: "product"
  }, __jsx(_product_verticalTabPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pathId: "1"
  }), __jsx(_common_product_section__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_apollo_apollo__WEBPACK_IMPORTED_MODULE_3__[/* withApollo */ "a"])(VerticalTab));

/***/ }),

/***/ "Dtyw":
/***/ (function(module, exports) {

module.exports = require("@firebase/app");

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

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "ExhV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return googleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return facebookProvider; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtyw");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__("EuFW");

const configs = __webpack_require__("YZMt");

const config = {
  apiKey: configs.firebase.apiKey,
  authDomain: configs.firebase.authDomain,
  databaseURL: configs.firebase.databaseURL,
  projectId: configs.firebase.projectId,
  storageBucket: configs.firebase.storageBucket,
  messagingSenderId: configs.firebase.messagingSenderId,
  appId: configs.firebase.appId
};

if (!_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const googleProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
const facebookProvider = new _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.FacebookAuthProvider();
/* harmony default export */ __webpack_exports__["a"] = (_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

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

/***/ "JtKs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("upKs");
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countdown_now__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CountdownComponent = () => {
  const Completionist = () => __jsx("span", null, "You are good to go!");

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    if (completed) {
      // Render a completed state
      return __jsx(Completionist, null);
    } else {
      // Render a countdown
      return __jsx("div", {
        className: "timer-box"
      }, __jsx("div", null, __jsx("div", {
        className: "timer"
      }, __jsx("p", {
        id: "demo"
      }, __jsx("span", null, days, __jsx("span", {
        className: "padding-l"
      }, ":"), __jsx("span", {
        className: "timer-cal"
      }, "Days")), __jsx("span", null, hours, __jsx("span", {
        className: "padding-l"
      }, ":"), __jsx("span", {
        className: "timer-cal"
      }, "Hrs")), __jsx("span", null, minutes, __jsx("span", {
        className: "padding-l"
      }, ":"), __jsx("span", {
        className: "timer-cal"
      }, "Min")), __jsx("span", null, seconds, __jsx("span", {
        className: "timer-cal"
      }, "Sec"))))));
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 10).getTime();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_countdown_now__WEBPACK_IMPORTED_MODULE_1___default.a, {
    date: coundown,
    renderer: renderer
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (CountdownComponent);

/***/ }),

/***/ "JzZ/":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAGAklEQVRIia2Ve2xXZxnHP+97zu/S+43S0gJtaZFLpcWNtnR0Y5AiMFgci05ZwhYJ7g+n0WQmriaKUwOLl+m2RI1zKm5RnHOblmFHWC+6lW5gZBQcQscoG92klPZ3P5ffOY9//PorYNyUZd/kJOd9832fz3me8zx51ZLWBwEQEZRS5OeHCAY0OeEAhqGxnXSLY3ubbCe9ynG9hnTaLxURgkFzsiA/NDKvqmhw0cLy59fdXP9KWVkuFy4kKCoMs6C2BNM08DwfAPWfoIKCMDkhg7QnnYmE3ZVMpdemPR8FGIbGMBQA6bRPynKxrDRmQNO8dM7Als1Ld61f+5EDSkFxUYhgMDADMsqrO8lKa00oZJJKuT+eiliP2E66zjA0pqkxDI3W6gqvIhQ0yc8LEQwYvH56vPaFvtPbJi4lq9etaeieVV6Ca9vItP9yRoChVQDod13vBq0VSl0O/L+ktcKy0rxxZoK1q+tf3f/U9tWhcNiKRiJordFZowJ8X17yPP8Gw9DXBCFzllDIYOmSCnr7Rlq3bNszCB75+bn4vqAK5nahlELBYwI7rin6f5FSoJRiavRt7ty+5tdPPLbtbtexUJ+6+1eI77elfRm6thzeD6ZIWS4TlxL89KHbblq+bP5flYgDyGF8WfEhcTLSGttyicXt4+GQuUzZVqJRwXGlNBIMz/jEToH4BMN52R1AIZ6N0gpUcMbrWEm0VpjBnIzTs3HdNIZh4Lgenue3mI7jbUUbkI4irz9LgXMCKlaSLFtPbp5woPcEExNJmhorGRh8k623N1FSWsSe3wxx+Mgozc3VbLvjOoLBAPv+/BrRmM0nblmCYRo4lpv9lq3EotH+WCwusXhUkudflYGvd0j8AURkVMYTIhj3yue++Fv5yc8HBO6R4eOjcs+X9krlop3SvOr7smbzoyIiMnzinMAOwbxXjg2PiohILBrNPoc00IB44ENOVQs9c5/mtj3NwCm6D7wNns0DXZ2cfWuKlrWLSSRtfvZwDyuaqzn60n30dn8BgO98r5fimgrKa0s5cvR8poQyU91aDRRnpgjAZ3un4uDFW3n6SZs/7O3hpk3LmTNnFi/0nqa8LI+2loXs3HUH+54bpqn1Qd59d5Lx8Uv87tlj9P1pB52rGzjQdxrItPq0Ck0uU3Adi4YFpWxYv4AdO49ix6c4+FxmtE6eGqft+rkAfLNrI5+5fRlLFn+Drm/tp721BiIpHn/iMENH3qJ2XjHgEg6bWFY604TAVBZkWR5gcmNbFZEzg9TVzmJV+yIGh05h/essK1fM59vf7aFjwyPs/tEAxTXVhEIBvnx/Nys7FxGJe5SV5NDXc5Jjw+cxAznZ0DETGAGqsqk6jsOWzY1Mjt3Fxlub8H0Pw9B8pevTrLu5gUOHzzHw8hmiMZt9e+9iVmkuyvO5/7411NRUMDZ2kd0P9YFSOM5M142qWDS6C+jK7vi+T2FRLhAAIBqJUJAfRhkhfM9CG6Erqw2409408WiS/MIcIEDaTZFMOmitAR5WsUikCTP8GoEgyBXnFe+5VjrzPtNV7+VVgA/43koVi8cgOf535XvLJVgI4vGhSCnwXED+iRFerKKeoN8caDe7NwxKzmwI5F41AB8Y4ntgTyLzOjulqOFFU6VS+PWrD/kL7/ylHvzFZ6Wy4OoyfBBpAzU5hcyue0qK6l/ETaBikSkI5yOGQeD36/6mRg5eJ7PnT8OulZhpEhU9h1/Z8g9v9Q8alcoFN46KRaPg+0hhEThOOPDM+r+okf4WKSsHM+///2dKg+dA4h3IrTzm3fJMh1/bHlOWDyp7lWuNikYhELTSn+xr9do+/7iKjaOmzoLvTrfZ+2QhHiTGIHUBqdv0pH/9Vz+GEYwpG3AT4GQzyh7wPQgXICGNPrlvoz76w6+pd17uUI6NBAMQKgFj+s7ybXBiqHQSMfOQ0sZXZO6a3VTd+EcibyDFC5HajWDHMtGvAiHg2YAgeeVgxTFG93eo8/2bmTzZrhJjdbjxIkARyI1IuOwshfVDUrr0eSn9aL9SQOoiJMaQilak5uMzoH8DaWu8+ia13NAAAAAASUVORK5CYII="

/***/ }),

/***/ "Kqbj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ExhV");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TopBarDark = ({
  topClass,
  fluid
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const firebaseLogout = () => {
    _config_base__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].auth().signOut();
    router.push("/page/account/login-auth");
  };

  return __jsx("div", {
    className: topClass
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: fluid
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, __jsx("div", {
    className: "header-contact"
  }, __jsx("ul", null, __jsx("li", null, "Welcome to Our store Multikart"), __jsx("li", null, __jsx("i", {
    className: "fa fa-phone",
    "aria-hidden": "true"
  }), "Call Us: 123 - 456 - 7890")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "text-right"
  }, __jsx("ul", {
    className: "header-dropdown"
  }, __jsx("li", {
    className: "mobile-wishlist"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/page/account/wishlist"
  }, __jsx("a", null, __jsx("i", {
    className: "fa fa-heart",
    "aria-hidden": "true"
  }), " wishlist"))), __jsx("li", {
    className: "onhover-dropdown mobile-account"
  }, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true"
  }), " My Account", __jsx("ul", {
    className: "onhover-show-div"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/login`
  }, __jsx("a", null, "Login"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/page/account/register`
  }, __jsx("a", null, "Register"))), __jsx("li", {
    onClick: () => firebaseLogout()
  }, __jsx("a", null, "Logout")))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (TopBarDark);

/***/ }),

/***/ "Lut4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMENEOTc1QjcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMENEOTc1QzcyRTkxMUU4QjcwRThEQkM4NUVBNzhFNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwQ0Q5NzU5NzJFOTExRThCNzBFOERCQzg1RUE3OEU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwQ0Q5NzVBNzJFOTExRThCNzBFOERCQzg1RUE3OEU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7VNBOgAAAv5JREFUeNqclnuITFEcx++sKazHGvEHosws1r/IeoUirRLL0P6BTYvUsnlNm1dGS0hEi1WKSSuPvItlYmVJ2rTyj5U0YrDLem2bRxHr86vf6HTde/dy6tPp/u4553vO+T3uDYTDYctH6wuXoA+0QwDaYFYqlXrd0eQsy1+bD4NgEkzWvhcs8TPZSWQCPILNhk123gjNBo/hV2ZAJBKJQSNM60ikAO7ANVgP1Wp/pycx20BoVYFDdDvgMiR5nusmMh2uwkJYC+KsmXAL9sIJm8hxqGDBWvpFkId/yulnwxlTyBSpgd062dIrCcEztVfYRMS2BdIyDoGUGOku0q0ToT93bUSXLLJaTg8tPgPC0rUtwzc96J5DgncxsQWN9+LofvAEcuGD9Y8Nge46/0ZGwMnxS/X4CYc1RsM5uAkXYKLDmCr4hkCRaZSTdFVnd9FEC+siZiuDSjgJ4uihUAcbNKoy7SFEOVGZhv13OCU+qVexNh2YhJ3GxHFwV5OwzrCPgvsS9uw8aVzZKrpC3XA3uS0RadUoane5armeJljgcj0jEcn38FNafPIWenv4Mwduu7yTk3X2EMime5+lRc8rkr7AGJd3Y+GHR3h/lVsSX7yEe5kSoUm53xgb1ys7CA2GPQ9WSiW27V4idI4+Ss587hQKhU7rkZs0fCWLf6qzLU0s2a2MGwCDoRiOSWSx2ypDoNQoQWktqrGAw/ekQQtigc0+BdZAT9kdHIArZsYjIiE+Atswe56YTXYxHGY4XHGt4tWWw1PEjiC02CnjpbQvU5Fm6z8aC3/U+fMQ2uYksh32wQvbXLGVuqxbwmKVNqEW9etGJ5GonqZQnyVB30C+Vuhym8AK2CPJiNAn6K9+mar2YieR83JMrVtxjap6zQWpqCU2Efm+b2Xn4yUA5BAIbKK/LmOxV7tV4bP6hZSCedjIgRzNJ7O9gmy9Iik5u/QLGeU54RVdln7fc222oFbekPFLNAQeGL6I6w381YI+A0fiv0gzPyMiJeOon8m/BRgAuQrmGVlzgYMAAAAASUVORK5CYII="

/***/ }),

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "Mryu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B77O");
/* harmony import */ var _common_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ifSG");
/* harmony import */ var _containers_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fWfq");
/* harmony import */ var _containers_CartContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SeLL");
/* harmony import */ var _common_topbar_dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Kqbj");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mo9o");
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("kCRN");
/* harmony import */ var _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Lut4");
/* harmony import */ var _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("dOwo");
/* harmony import */ var _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("yl6w");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // eslint-disable-next-line

  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  /*=====================
  	 Pre loader
  	 ==========================*/

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = 'display:none';
    }, 2000);
    setOpen(true);
    if (router.asPath !== '/layouts/Christmas') window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number >= 300) {
      if (window.innerWidth < 576) {
        document.getElementById("sticky").classList.remove('fixed');
      } else document.getElementById("sticky").classList.add('fixed');
    } else {
      document.getElementById("sticky").classList.remove('fixed');
    }
  };

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

  return __jsx("div", null, __jsx("header", {
    id: "sticky",
    className: `sticky ${headerClass}`
  }, __jsx("div", {
    className: "mobile-fix-option"
  }), noTopBar ? '' : __jsx(_common_topbar_dark__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    topClass: topClass
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, __jsx("div", {
    className: "main-menu"
  }, __jsx("div", {
    className: "menu-left"
  }, __jsx("div", {
    className: "navbar"
  }, __jsx("a", {
    href: null,
    onClick: openNav
  }, __jsx("div", {
    className: "bar-style"
  }, " ", __jsx("i", {
    className: "fa fa-bars sidebar-bar",
    "aria-hidden": "true"
  }))), __jsx(_common_sidebar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), __jsx("div", {
    className: "brand-logo"
  }, __jsx(_common_logo__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    logo: logoName
  }))), __jsx("div", {
    className: "menu-right pull-right"
  }, __jsx(_common_navbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx("div", null, __jsx("div", {
    className: "icon-nav"
  }, __jsx("ul", null, __jsx("li", {
    className: "onhover-div mobile-search"
  }, __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Media"], {
    src: _public_assets_images_icon_search_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    onClick: openSearch,
    className: "img-fluid",
    alt: ""
  }), __jsx("i", {
    className: "fa fa-search",
    onClick: openSearch
  }))), __jsx(_common_currency__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    icon: _public_assets_images_icon_setting_png__WEBPACK_IMPORTED_MODULE_9___default.a
  }), direction === undefined ? __jsx(_containers_CartContainer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    layout: direction,
    icon: _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default.a
  }) : __jsx(_containers_Cart__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    layout: direction,
    icon: _public_assets_images_icon_cart_png__WEBPACK_IMPORTED_MODULE_10___default.a
  })))))))))), __jsx("div", {
    id: "search-overlay",
    className: "search-overlay"
  }, __jsx("div", null, __jsx("span", {
    className: "closebtn",
    onClick: closeSearch,
    title: "Close Overlay"
  }, "\xD7"), __jsx("div", {
    className: "overlay-content"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], null, __jsx("div", {
    className: "form-group"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleInputPassword1",
    placeholder: "Search a Product"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: "submit",
    className: "btn btn-primary"
  }, __jsx("i", {
    className: "fa fa-search"
  }))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (HeaderOne);

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

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

/***/ "YZMt":
/***/ (function(module) {

module.exports = JSON.parse("{\"firebase\":{\"apiKey\":\"AIzaSyB48VO9ib0Va5F_6dYs8BnjYldwNxbfuBQ\",\"authDomain\":\"multikart-react.firebaseapp.com\",\"projectId\":\"multikart-react\",\"storageBucket\":\"multikart-react.appspot.com\",\"messagingSenderId\":\"298873485216\",\"appId\":\"1:298873485216:web:e719b33e1427c8cfde56c5\"}}");

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

/***/ "dOwo":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzE0NDdGMjcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzE0NDdGMzcyRTkxMUU4QjY4MkE5N0U1QkVGNzJENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MTQ0N0YwNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MTQ0N0YxNzJFOTExRThCNjgyQTk3RTVCRUY3MkQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hNS3IQAAAf9JREFUeNqklU1IFVEUx+fZKwldmEGJHyjvWbpxUUi0aaEouAzMQIUnSpC6UHfiVxuN2hluXKkbN4roJgRBUtyECIpYEcJDhBYRqahoIT6n34EzcJne14wHfm/ePcz8597/vedMIBQKWUkiG0agAfIgADb8ggUYiEajR4kezkgi/BxOoR0+QjPUQiPMQwschsPhpkQCgQQzb4VJGIPuJBN4D73QyQrG0xGXRBTewLCVOnpgFCp4wZdUtizCfprCFoIfuHyHpVSe34cyiFje4iXk438omfgz+AtrXpSZ/Y5ufnU8z8WzOijX/Dbc8qB/KZ7rf7FoBbqC/HyCKpiAOfit1ngNOV13xB7ogMdBFZ6BVz4ExZL/cngf4/JaxKf0XP+BIsjyIo6QOZT92lO9WRFvg114B+vww/If91R4hBUNmUUkby1Uz33ZwirkEJxITyJ/6RzFIm1KD6zrRZnqlKZqXPWwYYzlFGzCQyP3mdlG/HTFAqh0td9HkGPknkKxH/EzrTqzUM7hwsgduO5JW9xS/7yM0xbPUSucuAm3IdPI5cLdRAJB42prITkhbaHfGP+EQS0SJ/pg1VVEtqMbNPzNdK1kS3HiGN66v0Su8r9SnTP3l+irnpAXukl2HF/tOGPnHmkb07LhvLDEnLnEE1jWj3HMRwHdgG9Q4yT+CTAApdl93m9bmRMAAAAASUVORK5CYII="

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

/***/ "fWfq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/5QC");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XJI2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CartComponent = ({
  icon,
  layout
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
  const currContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_4__[/* CurrencyContext */ "b"]);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  const removeFromCart = context.removeFromCart;
  const {
    0: openSide,
    1: setOpenSide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("li", {
    className: "onhover-div mobile-cart",
    onClick: () => setOpenSide(true)
  }, __jsx("div", {
    className: "cart-qty-cls"
  }, cartList.length), __jsx("div", {
    href: null
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "cart",
    src: icon,
    className: "img-fluid blur-up lazyload"
  }), __jsx("i", {
    className: "fa fa-shopping-cart"
  }))), __jsx("div", {
    id: "cart_side",
    className: `add_to_cart ${layout} ${openSide ? 'open-side' : ''} `
  }, __jsx("a", {
    href: null,
    className: "overlay"
  }), __jsx("div", {
    className: "cart-inner"
  }, __jsx("div", {
    className: "cart_top"
  }, __jsx("h3", null, "my cart"), __jsx("div", {
    className: "close-cart",
    onClick: () => setOpenSide(false)
  }, __jsx("a", {
    href: null
  }, __jsx("i", {
    className: "fa fa-times",
    "aria-hidden": "true"
  })))), __jsx("div", {
    className: "cart_media"
  }, __jsx("ul", {
    className: "cart_product"
  }, cartList.length > 0 && cartList.map((item, index) => __jsx("li", {
    key: `cart-popup-${index}`
  }, __jsx("div", {
    className: "media"
  }, __jsx("a", {
    href: null
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Media"], {
    alt: "",
    className: "mr-3",
    src: `${item.images[0].src}`
  })), __jsx("div", {
    className: "media-body"
  }, __jsx("a", {
    href: null
  }, __jsx("h4", null, item.title)), __jsx("h4", null, __jsx("span", null, item.qty, " x ", symbol, " ", item.price)))), __jsx("div", {
    className: "close-circle"
  }, __jsx("a", {
    href: "#",
    onClick: () => removeFromCart(item)
  }, __jsx("i", {
    className: "fa fa-trash",
    "aria-hidden": "true"
  })))))), __jsx("ul", {
    className: "cart_total"
  }, __jsx("li", null, __jsx("div", {
    className: "total"
  }, __jsx("h5", null, "subtotal : ", __jsx("span", null, "$", total)))), __jsx("li", null, __jsx("div", {
    className: "buttons"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/account/cart"
  }, __jsx("a", {
    className: "btn btn-solid btn-xs view-cart"
  }, "view cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/page/account/checkout"
  }, __jsx("a", {
    className: "btn btn-solid btn-xs checkout"
  }, "checkout")))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (CartComponent);

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

/***/ "ifSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("srCp");
/* harmony import */ var _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SideBar = () => {
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove('open-side');
  };

  const handleSubmenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensub1')) event.target.nextElementSibling.classList.remove('opensub1');else {
      document.querySelectorAll('.opensub1').forEach(function (value) {
        value.classList.remove('opensub1');
      });
      event.target.nextElementSibling.classList.add('opensub1');
    }
  };

  const handleSubTwoMenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensub2')) event.target.nextElementSibling.classList.remove('opensub2');else {
      document.querySelectorAll('.opensub2').forEach(function (value) {
        value.classList.remove('opensub2');
      });
      event.target.nextElementSibling.classList.add('opensub2');
    }
  };

  const handleSubThreeMenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensub3')) event.target.nextElementSibling.classList.remove('opensub3');else {
      document.querySelectorAll('.opensub3').forEach(function (value) {
        value.classList.remove('opensub3');
      });
      event.target.nextElementSibling.classList.add('opensub3');
    }
  };

  const handleSubFourMenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensub4')) event.target.nextElementSibling.classList.remove('opensub4');else {
      document.querySelectorAll('.opensub4').forEach(function (value) {
        value.classList.remove('opensub4');
      });
      event.target.nextElementSibling.classList.add('opensub4');
    }
  };

  const handleMegaSubmenu = event => {
    if (event.target.classList.contains('sub-arrow')) return;
    if (event.target.nextElementSibling.classList.contains('opensidesubmenu')) event.target.nextElementSibling.classList.remove('opensidesubmenu');else {
      event.target.nextElementSibling.classList.add('opensidesubmenu');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    id: "mySidenav",
    className: "sidenav"
  }, __jsx("a", {
    href: null,
    className: "sidebar-overlay",
    onClick: closeNav
  }), __jsx("nav", null, __jsx("a", {
    href: null,
    onClick: closeNav
  }, __jsx("div", {
    className: "sidebar-back text-left"
  }, __jsx("i", {
    className: "fa fa-angle-left pr-2",
    "aria-hidden": "true"
  }), " Back")), __jsx("ul", {
    id: "sub-menu",
    className: "sidebar-menu"
  }, __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleMegaSubmenu(e)
  }, "clothing", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", {
    className: "mega-menu clothing-menu"
  }, __jsx("li", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    m: "0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4"
  }, __jsx("div", {
    className: "link-section"
  }, __jsx("h5", null, "women's fashion"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "dresses")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "skirts")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "westarn wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ethic wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "sport wear"))), __jsx("h5", null, "men's fashion"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "sports wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "western wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ethic wear"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4"
  }, __jsx("div", {
    className: "link-section"
  }, __jsx("h5", null, "accessories"), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "fashion jewellery")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "caps and hats")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "precious jewellery")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "necklaces")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "earrings")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wrist wear")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ties")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "cufflinks")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "pockets squares"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xl: "4"
  }, __jsx("a", {
    href: "#",
    className: "mega-menu-banner"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: _public_assets_images_mega_menu_fashion_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    className: "img-fluid"
  }))))))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "bags", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "shopper bags")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "laptop bags")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "clutches")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e)
  }, "purses", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "purses")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wallets")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "leathers")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "satchels")))))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "footwear", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "sport shoes")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "formal shoes")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "casual shoes")))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "watches")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "Accessories", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "fashion jewellery")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "caps and hats")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "precious jewellery")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e)
  }, "more..", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "necklaces")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "earrings")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wrist wear")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubThreeMenu(e)
  }, "accessories", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "ties")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "cufflinks")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "pockets squares")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "helmets")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "scarves")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubFourMenu(e)
  }, "more...", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "accessory gift sets")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "travel accessories")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "phone cases")))))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "belts & more")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "wearable")))))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "house of design")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubmenu(e)
  }, "beauty & personal care", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "makeup")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "skincare")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "premium beaty")), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => handleSubTwoMenu(e)
  }, "more", __jsx("span", {
    className: "sub-arrow"
  })), __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "fragrances")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "luxury beauty")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "hair care")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "tools & brushes")))))), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "home & decor")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "kitchen"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (SideBar);

/***/ }),

/***/ "jIMG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzY5Qzc4QTkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzY5Qzc4QjkyNjcxMUU4QUQwQkM0RTQ0N0NBQzg0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIzNjlDNzg4OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzNjlDNzg5OTI2NzExRThBRDBCQzRFNDQ3Q0FDODQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xF1arAAAAVZJREFUeNpi/P//P8NAAsb/PtYD6gAmIM4cQPszQQ6YDMTuA2A5yM7JIAcwA/FKINalo+W6UDuZmaAC/EC8EYhF6WA5yI4NUDsZmJAkFIF4MxCz09ByNqgdSsiJEBmYA/FcUO6gRY4D4nlQOxhwOQAEooG4lgYOqIGazUDIASDQgE0xBQBkViOucgBXcM1CDy4ygTnULEZSHAACXNAEI0+B5XJQM7jwlYSEssxmWJYhEYD0bCGUtZmILDSWQQssYgFI7VJiCjcmIg30AuKJJDhgAhB7E1sZEQuyiay4QGpySKkNSQGgissNj7wrVA0DrRwAittVOOIWJLaaxLRCsgNgqXs9WuoWhYqRnFuYyMzfytDsyQbFm6BiJAMWPHJ/gfgTHnk1IO6FstWB+D0etXy4ooaFQHwLEvBADgOFgIlhgMGoA0YdMOqAAXcAC42a4EMnBAACDAA7yCaRsxr4JwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "k2Z+":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADwUlEQVRIibWWW0wcVRiAvzN7gV12ubVcCoJWQTQaLChekKJW1EjbaGxMxaTRqG1MMTE+GFMS6oOJfW5SrbHBS1If8Mk00iaatDQYKaKGNdZWi0qQCqUsMLMsy+7M7u/DOIhrXEoLXzKZnHP+Od+cy8x/VMQwWIa7gK1AI1ANFAIKmAaGga+B48BApk5UBtFDQAfQstyb/E0vcAD4YiWiQ0D7FQrSOQLsWU7kAk4Bm69S4vAN8ACw4FRoaQF9qyABuBt77RZZKjoM3LcKEoc64GOn4ExdA/Zw14JmoM8Z0TtrJAF4F+wR3SYiPyqlCAT9gAvEYm4uhoiglPrXUyKgFAR8XnBrYCWZi5mL9SJCMNsDbhfxeBLTsgAa3ECbphRej4uLE9Nc+GOSqopiritdh7OE5kIMT3YWC/Mxsv3ZAIxemmEkHKWqOEhZYQA0BSjMBZPL0QTjs1HyPVCYF0Qp1eYGmnJyfFwK67Ts/4ANQR/hWILOnVsoLsjFo8EdG0s5+8som6rKmZya4dzFaV7v/Z0cJczELd5suZWSPD+WadFcU0F79yBGNEbXU/WICJqmGt1AFZqbwQtjDI9P0bnzadrfO0ZoZJyJoWG6T33Pq082cX5simcfrqfrWB8l11eiW15e23wjL382RGhcZ/K3MB/1D3NgWy1/6vM8XrOB8tIi5iIRUim5QRPIBwiNTOCyUnzSG+KNHc2sD/op8Hnxez3kZHmpLivkmY4jbKosorWpjtGJaY4OjbHvwRoKfF4CLo3KwhxODk8C8EhVEWA6S5vrdrs0BdD15SBNtTfR89Zuu2VHByUBH3hcvPhoA4dPnCExEaZz12Ns7w5xT2UBPXu2AEKw41NKfF5K8v0kRTDiFnXl+Uh8UYRbRGZj81H/wd3bqS5bj1gmppXk+P7nOT82SXVFMevyAhz6vJ+2F1rJCuTxyp3l3FwUBDNBImlx4rlGzl2OcEtRkCy3i3gyhVIwn0g6ngiGbpzWZ2fFJin67KwYui5L+fanX2Vr5/syORUWM5EQEVMkGV8Sa4pIyr6n7HZd18UwDInY14CKGMbbwL7/+9pEBIBgbi5YCYxoDE1L/0Uuy0EVMYxaIJQpSimFphTJVGqlAod7NeAHYChTlIhci+RnYMCZg71X28sVsBf+SRP9wIdrIOkGTsJ/M+x3QP0qSc4CtzuF9O1zPzC4CpIQaUk0XbSAnYa7rkFyFDu7RjKJHF4CWoGvViA4AzwB7AIkvTHTuc6hCdiGPRUbgTzsA6QOjGBvpB7gdKZO/gJX4qTG+gXfMQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "kCRN":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQjYyN0M4NTcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjYyN0M4NjcyRTkxMUU4Qjc1MkM2QUU2ODQ1OUQ1NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNCNjI3QzgzNzJFOTExRThCNzUyQzZBRTY4NDU5RDU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNCNjI3Qzg0NzJFOTExRThCNzUyQzZBRTY4NDU5RDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WYb6uAAAAbNJREFUeNqslU0oRFEUx++bptSQxbCwflO+kiJFWEgpFhZTIhvFklJKsvOdBVIiK8ZKFIkFUZqVsLCyIU3WFkhGNOXjf+o/9RrvznvzZk79undm7vzOfad7zzNM01Q2kQ+6QDuoAAa4A2dgD7wlF8ZiMaULw0Y+DuZTvvtlgmRMgUknuS/l8znFD6AXFFMq64J8mlswAS6BX6UJqzwKWvnHUrADni2/v4J9UA3GQAMTOMplcQsfd1o5xwIYBXWhUGguXc3zMH6BR2CqzEJKVAUKUft3u533cD6iMo9hjn26soQ5P/Egj3IM6+Ryjn9AQnmLOCjXyQ2VfRg6+T1Hv0dxAR228kPO2zyImzke6OTbnC97kK9w3NLJP9knyniZ3MYgqAEzdmc8tXFdgXrevCUH8RBYBS8QF7npLU3gGiyCG9DJ1puMAOgAFxTLboO4/mtu5N9sRrOgFhzxDMcp+gDHoJGdswSsS3mQYNNtP5eQR+3mTistL4tTsAueLGtF3A8iKNGAG7nrkJcFd/4vgS8Ht1NRGJEE1hLlRG6TYENlceW1CSCWqYyBnMotCeTkJf4EGAA6kXMrGB0cpgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "ktJU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_vertical_product_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/pOw");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_image_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("rgQu");
/* harmony import */ var _common_detail_price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6yjW");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XJI2");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/5QC");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const GET_SINGLE_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
     query product ($id:Int!) {
        product (id:$id) {
            id
            title
            description
            type
            brand
            category 
            price
            new
            sale
            discount
            stock
            variants{
              id
              sku
              size
              color
              image_id
            }
            images{
              alt
              src
            }
        }
    }
`;

const VerticalTabPage = ({
  pathId
}) => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_cart__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
  const addToCart = context.addToCart;
  const curContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_7__[/* CurrencyContext */ "b"]);
  const symbol = curContext.state.symbol;
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nav1: null,
    nav2: null
  });
  const slider1 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const slider2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1
    }
  });
  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true
  };

  const filterClick = () => {
    document.getElementById("filter").style.left = "-15px";
  };

  const changeColorVar = img_id => {
    slider2.current.slickGoTo(img_id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current
    });
  }, [data]);

  const addToCartUnsafe = product => {
    toast.success("Item Added to Compare");
    dispatch({
      type: 'ADD_TO_COMPARE',
      payload: product
    });
  };

  const {
    nav1,
    nav2
  } = state;
  return __jsx("section", {
    className: ""
  }, __jsx("div", {
    className: "collection-wrapper"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    sm: "12",
    xs: "12"
  }, __jsx("div", {
    className: ""
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xl: "12"
  }, __jsx("div", {
    className: "filter-main-btn mb-2"
  }, __jsx("span", {
    onClick: filterClick,
    className: "filter-btn"
  }, __jsx("i", {
    className: "fa fa-filter",
    "aria-hidden": "true"
  }), " filter")))), !data || !data.product || data.product.length === 0 || loading ? 'loading' : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    lg: "6",
    className: "product-thumbnail m-0-cls"
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, products, {
    asNavFor: nav2,
    ref: slider => slider1.current = slider,
    className: "product-slick"
  }), data.product.variants ? data.product.images.map((vari, index) => __jsx("div", {
    key: index
  }, __jsx(_common_image_zoom__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: vari
  }))) : data.product.images.map((vari, index) => __jsx("div", {
    key: index
  }, __jsx(_common_image_zoom__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: vari
  })))), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    className: "slider-nav"
  }, productsnav, {
    asNavFor: nav1,
    ref: slider => slider2.current = slider
  }), data.product.variants ? data.product.images.map((vari, index) => __jsx("div", {
    key: index
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Media"], {
    src: `${vari.src}`,
    key: index,
    alt: vari.alt,
    className: "img-fluid"
  }))) : '')), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    lg: "6",
    className: "rtl-text"
  }, __jsx(_common_detail_price__WEBPACK_IMPORTED_MODULE_6__["default"], {
    symbol: symbol,
    item: data.product,
    changeColorVar: changeColorVar,
    navOne: state.nav1,
    addToCartClicked: () => addToCart(data.product)
  })))), __jsx(_common_vertical_product_tab__WEBPACK_IMPORTED_MODULE_1__["default"], null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (VerticalTabPage);

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

/***/ "ncOK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/headers/header-one.js
var header_one = __webpack_require__("Mryu");

// EXTERNAL MODULE: ./components/footers/footer-one.js
var footer_one = __webpack_require__("t9Gf");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/common/widgets/breadcrubs.js
var __jsx = external_react_default.a.createElement;



const Breadcrubs = ({
  title,
  parent,
  subTitle
}) => {
  return __jsx("div", {
    className: "breadcrumb-section"
  }, __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    sm: "6"
  }, __jsx("div", {
    className: "page-title"
  }, __jsx("h2", null, title))), __jsx(external_reactstrap_["Col"], {
    sm: "6"
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "theme-breadcrumb"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx("a", {
    href: "#"
  }, parent)), __jsx("li", {
    className: "breadcrumb-item",
    "aria-current": "page"
  }, title), subTitle === undefined ? '' : __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page"
  }, subTitle)))))));
};

/* harmony default export */ var breadcrubs = (Breadcrubs);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: ./public/assets/images/favicon/1.png
var _1 = __webpack_require__("jIMG");
var _1_default = /*#__PURE__*/__webpack_require__.n(_1);

// CONCATENATED MODULE: ./components/shop/common-layout.js
var common_layout_jsx = external_react_default.a.createElement;







const CommonLayout = ({
  children,
  title,
  parent,
  subTitle
}) => {
  return common_layout_jsx(external_react_default.a.Fragment, null, common_layout_jsx(external_react_helmet_default.a, null, common_layout_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), common_layout_jsx("link", {
    rel: "icon",
    type: "image/x-icon",
    href: _1_default.a ? _1_default.a : ''
  })), common_layout_jsx(header_one["a" /* default */], {
    topClass: "top-header",
    logoName: "logo.png"
  }), common_layout_jsx(breadcrubs, {
    title: title,
    parent: parent,
    subTitle: subTitle
  }), common_layout_jsx(external_react_default.a.Fragment, null, children), common_layout_jsx(footer_one["a" /* default */], null));
};

/* harmony default export */ var common_layout = __webpack_exports__["a"] = (CommonLayout);

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

/***/ "rgQu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ImageZoom = props => {
  const {
    image
  } = props;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
    src: `${image.src}`,
    alt: image.alt,
    className: "img-fluid image_zoom_cls-0"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageZoom);

/***/ }),

/***/ "srCp":
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB8gEsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9gooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopks0VvE0s0iRxoMs7sAAPcmsAePfCRuBAPEemFycf8fK7f++s4/WgDoqKajpJGskbK6MAVZTkEHuDVLVNc0rRIll1TUbWzRvumeUJu+gPX8KAL9FZ+la7pOuRvJpeo2t4qY3+RKGK56ZA6fjWgSACScAUAFFYDeN/Cq3f2U+IdME2du37SuM+mc4zW+CCAQcg0AFFFFABRRRQAUUUyaaK3hkmmkSOKNS7u7AKqgZJJPQCgB9FR29xDd20VxbypLBKoeORGDKynkEEdRVfUtW07R7cT6lfW1pETgPPKEBPoM9aALlFZWleJtD1yRo9L1azu5FG5kilBYD1x1xWrQAUVz9x458K2tybebxDpqyg4K/aFOD7kHArbt7mC8t0uLaaOeFxlJInDKw9iODQBLRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFTUNMsdVhjh1C1iuYo5BKscq7l3DoSOh696e9lZtaG2e2gNtjBiaMbMfTpViuK1L4dLqCYbxJrj4OfKurgTwN7PGRhh7UAP+HnlRaXq62jn+x49TmGnkn5BCAudh/uB9+PxqLwJYw6zayeL9QhSbUNTkd4WkXcbe3DERxpnoMDccdS3NXND1K4vtM1jQ7q3gh1HSgbaRbVdsTq0e6NkX+EFSPl5wRUvw7dJPh5oLJ0Fmi/iBg/qDQBQ8e2KaZYjxdp8Sx6npbrK7oMG4h3ASRue42knnoQMYp/jGQ6zqOg+Go5SLTVXea8aNsF7eJQxTI5Acsoz6Zq/4+dI/h/r7P0NjKv4lSB+pFZKxtb+PvConGGbRp4gT/fXyif0oA6waRpq6d/Z66faiy27Ps4iXZj024xXN+Dt+ka1rnhbezWtg0VxY7zkrBKCdg9lZWA9iK7GuSsv3nxX1dk+7FpNskn+8ZJCP0oA62s7TNdsNWuL22tZW+0WUxhuIZFKOh7HB52kcg9CK0a47xzZQWFt/wAJTa3senatYphJnBKXK5/1Eijlgx6Y5B5FAHR6vq9loemTahqEwit4hyepY9lA7k9AKtwyieCOZVdRIoYLIpVhkZwQeQfauC8KSnxlrEus64PKvNNl8uDRnBH2FscSOCBudhyGxgDpz09AoAK4PxW8nit9R0a3dl0nTYmk1GZG/wBdKF3LACOw4Z/wHrWx4s16TTorfTNPliTVtQJjgaVgFgUfembPZR0Hc4FMWHR9E8G3Om2d5AypayZZpgXlcqSzsc8sxyT9aALHgb/kQfD/AP2D4P8A0AVk+E7SDXdU1bxJqEQnuRfTWloJQGFvDE20BB/CSQST71f8B3ds/gjQIUuImlGnwgoHBYYQZ4qjEmpeDtY1Ew6Zc6lomoXDXa/YwGmtpn++pQkbkJG4EdCTxQBd8baHBfaHdajAiw6tYRNc2d4gw6OgyBnupxgg5GDWX4q1WXV/hda6nGZIba8W1lvTC2GjgdlMuD14BIPtml8Ra1qeueHdRtbDSb7TrVraT7Vf6hGIhHFtO4ImdxYjIyQAM5z2o07UpNC+G3hq0jtFu7++toLW3tnOEZ2jyd5wcKqhifpjvQB12n2OnWunRW+n29tHZbB5aQqNhXsRjg/WuX8Ow21n8QdftNHVU0wW8L3Mcf8Aqo7slshR0BKBSQO+M1Ttvhrcx2E0P/CUanYmbk22mOYbaM9wiEsQPowq94Wln8P6r/wiV7a2ifuDc2l1aR+WlyoYB965OJASCeTnOaAOyooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDO1jUbjS7ZLiDTLnUE34lS1KmRFwfmCkjdzjgc81jSePLDyyINL124uOgt00uZXz6EsoUfia6qigDmfCWl6hBLqusavEsF/qtwJWt1YN5EaKEjQsOCQBkkdzWXpc914FludJu9PvLnRDM81jd2du03ko7bjFIqAsMEnBxgg9q7qigDhNVuLnx6YNHstOvbfRTMkl/eXkDQCVFIYRRqwDMSQMkjAAPXNa/i3Sb67GnatpKo+qaVOZoYnIAmRl2yR57blPB9QK6SigDlP+E8thAA2ia+L0j/jzGmyF8+m7GzHvuxUvhHSb62bUtZ1eNYtU1aYSywq24QRqNscee5AzkjjJNdNRQAVzNv4fu9R8RNrGvPFItrKw0yzjJMcIHAlbP3pD+SjpzzXTUUAc34j8OTXlzFrWizJaa9ariOVh8lwnUxSgdVPr1U8iuhhMrQRmdFSYqC6o24BscgHAyM98U+igDO1Lw/o2syRyanpVnePGCEa4gVyo9ASKxtT8DeGRpV4bfw1pnneQ/l7LNN27acY465rqqKAOS8C+GdN0vw3o91/Y1taap9ijE8htwkwYqNwY4znPXNaOp+KLbSL4211p+qlNoYXEFi80Rz2ygOD9QK3KKAOH1W9vvG0P9i6bp99aaXOQL7ULuFoN0OfmjiVsMWYcZwAATWp4q0e8ubbTL3R4o3vtJuVuIbd22rKm0o0eeikqxwexArpKKAOWTx3YLHi60zW7a4A+aB9MmZgfQFVKn6g1BpUGoa/4vTxDeWE+n2NlbPb2UNzgTSs5BeRlB+UYUAA89+K7CigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="

/***/ }),

/***/ "t9Gf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2dXf");
/* harmony import */ var _headers_common_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mo9o");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_copyright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ie/Y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FooterOne = ({
  fluid,
  logoName,
  layoutClass,
  footerClass
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var contentwidth = window.innerWidth;

    if (contentwidth < 750) {
      Object(_services_script__WEBPACK_IMPORTED_MODULE_2__[/* SlideUpDown */ "f"])('footer-title');
    } else {
      var elems = document.querySelectorAll(".footer-title");
      [].forEach.call(elems, function (elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: block";
      });
    }
  }, []);
  return __jsx("footer", {
    className: `footer-light ${footerClass}`
  }, __jsx("div", {
    className: "light-layout upper-footer"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: fluid
  }, __jsx("section", {
    className: "small-section border-section border-top-0"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: "6"
  }, __jsx("div", {
    className: "subscribe"
  }, __jsx("div", null, __jsx("h4", null, "KNOW IT ALL FIRST!"), __jsx("p", null, "Never Miss Anything From Multikart By Signing Up To Our Newsletter. ")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: "6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    className: "form-inline subscribe-form"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    className: "mx-sm-3"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    className: "form-control",
    id: "exampleFormControlInput1",
    placeholder: "Enter your email"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    className: "btn btn-solid"
  }, "subscribe"))))))), __jsx("section", {
    className: "section-b-space light-layout"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    fluid: fluid
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "footer-theme partition-f"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: "4",
    md: "6"
  }, __jsx("div", {
    className: "footer-title footer-mobile-title"
  }, __jsx("h4", null, "about")), __jsx("div", {
    className: "footer-contant"
  }, __jsx("div", {
    className: "footer-logo"
  }, __jsx(_headers_common_logo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    logo: logoName
  })), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "), __jsx("div", {
    className: "footer-social"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank"
  }, "  ", __jsx("i", {
    className: "fa fa-facebook",
    "aria-hidden": "true"
  }), " ")), __jsx("li", null, __jsx("a", {
    href: "https://plus.google.com",
    target: "_blank"
  }, " ", __jsx("i", {
    className: "fa fa-google-plus",
    "aria-hidden": "true"
  }))), __jsx("li", null, __jsx("a", {
    href: "https://twitter.com",
    target: "_blank"
  }, " ", __jsx("i", {
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
  }))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "offset-xl-1"
  }, __jsx("div", {
    className: "sub-title"
  }, __jsx("div", {
    className: "footer-title"
  }, __jsx("h4", null, "my account")), __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`
  }, __jsx("a", null, "womens"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`
  }, __jsx("a", null, " clothing "))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`
  }, __jsx("a", null, "accessories"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/left_sidebar`
  }, __jsx("a", null, " featured "))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx("div", {
    className: "sub-title"
  }, __jsx("div", {
    className: "footer-title"
  }, __jsx("h4", null, "why we choose")), __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
    href: "#"
  }, "shipping & return")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "secure shopping")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "gallary")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "affiliates")), __jsx("li", null, __jsx("a", {
    href: "#"
  }, "contacts")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, __jsx("div", {
    className: "sub-title"
  }, __jsx("div", {
    className: "footer-title"
  }, __jsx("h4", null, "store information")), __jsx("div", {
    className: "footer-contant"
  }, __jsx("ul", {
    className: "contact-list"
  }, __jsx("li", null, __jsx("i", {
    className: "fa fa-map-marker"
  }), "Multikart Demo Store, Demo store India 345-659"), __jsx("li", null, __jsx("i", {
    className: "fa fa-phone"
  }), "Call Us: 123-456-7898"), __jsx("li", null, __jsx("i", {
    className: "fa fa-envelope-o"
  }), "Email Us: ", __jsx("a", {
    href: "#"
  }, "Support@Fiot.com")), __jsx("li", null, __jsx("i", {
    className: "fa fa-fax"
  }), "Fax: 123456")))))))), __jsx(_common_copyright__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    layout: layoutClass,
    fluid: fluid
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (FooterOne);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "upKs":
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

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

/***/ "xTE4":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/size-chart-27d5967a8cdfebf70b190ed5c6dd9bac.jpg";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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