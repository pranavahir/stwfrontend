module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/customizer/theme-settings.js
var theme_settings = __webpack_require__("73gq");

// EXTERNAL MODULE: ./public/assets/scss/app.scss
var app = __webpack_require__("cvw0");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// CONCATENATED MODULE: ./components/common/widgets/Tap-Top.js
var __jsx = external_react_default.a.createElement;


const TapTop = () => {
  const {
    0: loader,
    1: setLoader
  } = Object(external_react_["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500); // Tap to Top Scroll 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);else setGoingUp(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return __jsx("div", {
    className: "tap-top top-cls",
    style: goingUp ? {
      display: 'block'
    } : {
      display: 'none'
    },
    onClick: tapToTop
  }, __jsx("div", null, __jsx("i", {
    className: "fa fa-angle-double-up"
  })));
};

/* harmony default export */ var Tap_Top = (TapTop);
// EXTERNAL MODULE: external "react-messenger-customer-chat"
var external_react_messenger_customer_chat_ = __webpack_require__("r1g3");
var external_react_messenger_customer_chat_default = /*#__PURE__*/__webpack_require__.n(external_react_messenger_customer_chat_);

// CONCATENATED MODULE: ./helpers/menu/MenuContext.js
var MenuContext_jsx = external_react_default.a.createElement;

const Context = /*#__PURE__*/Object(external_react_["createContext"])({
  selectMenu: Function
});
const Provider = props => {
  const {
    0: selectMenu
  } = Object(external_react_["useState"])({
    menuOpen: false
  });
  const menuContext = {
    selectMenu
  };
  return MenuContext_jsx(Context.Provider, {
    value: menuContext
  }, " ", props.children);
};
const {
  Consumer
} = Context;

// EXTERNAL MODULE: ./helpers/cart/index.js
var cart = __webpack_require__("/5QC");

// CONCATENATED MODULE: ./helpers/cart/CartContext.js
var CartContext_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem('cartList');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const CartProvider = props => {
  const {
    0: cartItems,
    1: setCartItems
  } = Object(external_react_["useState"])(getLocalCartItems());
  const {
    0: cartTotal,
    1: setCartTotal
  } = Object(external_react_["useState"])(0);
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])(1);
  const {
    0: stock,
    1: setStock
  } = Object(external_react_["useState"])('InStock');
  Object(external_react_["useEffect"])(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0);
    setCartTotal(Total);
    localStorage.setItem('cartList', JSON.stringify(cartItems));
  }, [cartItems]); // Add Product To Cart

  const addToCart = (item, quantity) => {
    external_react_toastify_["toast"].success("Product Added Successfully !");
    const index = cartItems.findIndex(itm => itm.id === item.id);

    if (index !== -1) {
      const product = cartItems[index];
      cartItems[index] = _objectSpread(_objectSpread(_objectSpread({}, item), item), {}, {
        qty: quantity,
        total: (item.price - item.price * item.discount / 100) * quantity
      });
      setCartItems([...cartItems]);
    } else {
      const product = _objectSpread(_objectSpread({}, item), {}, {
        qty: quantity,
        total: item.price - item.price * item.discount / 100
      });

      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = item => {
    external_react_toastify_["toast"].error("Product Removed Successfully !");
    setCartItems(cartItems.filter(e => e.id !== item.id));
  };

  const minusQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setStock('InStock');
    }
  };

  const plusQty = item => {
    if (item.stock >= quantity) {
      setQuantity(quantity + 1);
    } else {
      setStock("Out of Stock !");
    }
  }; // Update Product Quantity


  const updateQty = (item, quantity) => {
    if (quantity >= 1) {
      const index = cartItems.findIndex(itm => itm.id === item.id);

      if (index !== -1) {
        const product = cartItems[index];
        cartItems[index] = _objectSpread(_objectSpread(_objectSpread({}, product), item), {}, {
          qty: quantity,
          total: item.price * quantity
        });
        setCartItems([...cartItems]);
        external_react_toastify_["toast"].info("Product Quantity Updated !");
      } else {
        const product = _objectSpread(_objectSpread({}, item), {}, {
          qty: quantity,
          total: (item.price - item.price * item.discount / 100) * quantity
        });

        setCartItems([...cartItems, product]);
        external_react_toastify_["toast"].success("Product Added Updated !");
      }
    } else {
      external_react_toastify_["toast"].error("Enter Valid Quantity !");
    }
  };

  const {
    value
  } = props;
  return CartContext_jsx(cart["a" /* default */].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: cartItems,
      cartTotal,
      setQuantity,
      quantity,
      stock,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      plusQty: plusQty,
      minusQty: minusQty,
      updateQty: updateQty
    })
  }, props.children);
};

/* harmony default export */ var CartContext = (CartProvider);
// EXTERNAL MODULE: ./helpers/wishlist/WishlistContext.js
var WishlistContext = __webpack_require__("EO2r");

// EXTERNAL MODULE: ./helpers/filter/FilterContext.js
var FilterContext = __webpack_require__("RGkR");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./helpers/filter/FilterProvider.js
var FilterProvider_jsx = external_react_default.a.createElement;

function FilterProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FilterProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FilterProvider_ownKeys(Object(source), true).forEach(function (key) { FilterProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FilterProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FilterProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FilterProvider = props => {
  const router = Object(router_["useRouter"])();
  const brand = router.query.brand;
  const color = router.query.color;
  const size = router.query.size;
  const category = router.query.category;
  const min = router.query.min;
  const max = router.query.max;
  let sizeParam = size ? size.split(",") : null;
  let param = brand ? brand.split(",") : [];
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = Object(external_react_["useState"])(category ? category : "fashion");
  const {
    0: selectedBrands,
    1: setSelectedBrands
  } = Object(external_react_["useState"])(param ? param : []);
  const {
    0: selectedColor,
    1: setSelectedColor
  } = Object(external_react_["useState"])(color ? color : "");
  const {
    0: selectedSize,
    1: setSelectedSize
  } = Object(external_react_["useState"])(sizeParam ? sizeParam : []);
  const {
    0: selectedPrice,
    1: setSelectedPrice
  } = Object(external_react_["useState"])({
    min: min ? min : 0,
    max: max ? max : 500
  });
  const {
    0: isChecked,
    1: setIsChecked
  } = Object(external_react_["useState"])(true);
  const {
    0: filterChecked,
    1: setFilterChecked
  } = Object(external_react_["useState"])([{}]);

  const handleBrands = (brand, checked) => {
    var index = selectedBrands.indexOf(brand);

    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{
        brand,
        checked
      }]);
      setSelectedBrands(selectedBrands.filter(e => e !== brand));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{
        brand,
        checked
      }]);
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSizes = (size, checked) => {
    var index = selectedSize.indexOf(size);

    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{
        size,
        checked
      }]);
      setSelectedSize(selectedSize.filter(e => e !== size));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{
        size,
        checked
      }]);
      setSelectedSize([...selectedSize, size]);
    }
  };

  return FilterProvider_jsx(FilterContext["a" /* default */].Provider, {
    value: FilterProvider_objectSpread(FilterProvider_objectSpread({}, props), {}, {
      state: selectedCategory,
      setFilterChecked,
      setSelectedColor,
      setSelectedCategory,
      setSelectedBrands,
      selectedBrands,
      selectedColor,
      selectedPrice,
      isChecked,
      filterChecked,
      selectedSize,
      setSelectedSize,
      setSelectedPrice,
      handleBrands: handleBrands,
      handleSizes: handleSizes
    })
  }, props.children);
};

/* harmony default export */ var filter_FilterProvider = (FilterProvider);
// EXTERNAL MODULE: ./helpers/theme-setting/SettingContext.js
var SettingContext = __webpack_require__("j8FQ");

// EXTERNAL MODULE: ./components/customizer/config.json
var config = __webpack_require__("Tm7r");

// CONCATENATED MODULE: ./helpers/theme-setting/SettingProvider.js
var SettingProvider_jsx = external_react_default.a.createElement;

function SettingProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SettingProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SettingProvider_ownKeys(Object(source), true).forEach(function (key) { SettingProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SettingProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SettingProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SettingProvider = props => {
  const {
    0: layoutState,
    1: setLayoutState
  } = Object(external_react_["useState"])("RTL");
  const {
    0: layoutColor,
    1: setLayoutColor
  } = Object(external_react_["useState"])("#ff4c3b");

  const layoutFun = item => {
    if (item === "RTL") {
      document.body.classList.remove("ltr");
      document.body.classList.add("rtl");
      setLayoutState("LTR");
    } else {
      document.body.classList.remove("rtl");
      document.body.classList.add("ltr");
      setLayoutState("RTL");
    }
  };

  const layoutColorFun = item => {
    localStorage.setItem("color", item.target.value);
    document.documentElement.style.setProperty('--theme-deafult', item.target.value);
    config["a" /* config */].color = item.target.value;
    setLayoutColor(item.target.value);
  };

  return SettingProvider_jsx(SettingContext["a" /* default */].Provider, {
    value: SettingProvider_objectSpread(SettingProvider_objectSpread({}, props), {}, {
      state: layoutState,
      layoutFun: layoutFun,
      layoutColorFun: layoutColorFun
    })
  }, props.children);
};

/* harmony default export */ var theme_setting_SettingProvider = (SettingProvider);
// EXTERNAL MODULE: ./helpers/Compare/CompareContext.js
var CompareContext = __webpack_require__("U8OX");

// EXTERNAL MODULE: ./helpers/Currency/CurrencyContext.js
var CurrencyContext = __webpack_require__("XJI2");

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;














function MyApp({
  Component,
  pageProps
}) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: url,
    1: setUrl
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    const path = window.location.pathname.split('/');
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add('dark');
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return _app_jsx(external_react_default.a.Fragment, null, isLoading ? _app_jsx("div", {
    className: "loader-wrapper"
  }, url === 'Christmas' ? _app_jsx("div", {
    id: "preloader"
  }) : _app_jsx("div", {
    className: "loader"
  })) : _app_jsx(external_react_default.a.Fragment, null, _app_jsx(external_react_messenger_customer_chat_default.a, {
    pageId: "2123438804574660",
    appId: "406252930752412",
    htmlRef: "https://connect.facebook.net/en_US/sdk.js"
  }), _app_jsx(external_react_helmet_default.a, null, _app_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), _app_jsx("title", null, "Multikart - Multi-purpopse E-commerce React Template")), _app_jsx("div", null, _app_jsx(theme_setting_SettingProvider, null, _app_jsx(CompareContext["b" /* CompareContextProvider */], null, _app_jsx(CurrencyContext["c" /* CurrencyContextProvider */], null, _app_jsx(CartContext, null, _app_jsx(WishlistContext["d" /* WishlistContextProvider */], null, _app_jsx(Provider, null, _app_jsx(filter_FilterProvider, null, _app_jsx(Component, pageProps)))))), _app_jsx(theme_settings["a" /* default */], null))), _app_jsx(external_react_toastify_["ToastContainer"], null), _app_jsx(Tap_Top, null))));
}

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "73gq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_theme_setting_SettingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("j8FQ");
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2dXf");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tm7r");
var _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("Tm7r", 1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ThemeSettings = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_theme_setting_SettingContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
  const {
    0: themeLayout,
    1: setThemeLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const layoutType = context.layoutFun;
  const layoutColorFunc = context.layoutColorFun;
  const layoutState = context.state;
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);
  /*=====================
   Tap on Top
   ==========================*/


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (_config_json__WEBPACK_IMPORTED_MODULE_4__[/* config */ "a"].layout_version && _config_json__WEBPACK_IMPORTED_MODULE_4__[/* config */ "a"].layout_type) {
      document.body.className = `${_config_json__WEBPACK_IMPORTED_MODULE_4__[/* config */ "a"].layout_version}  ${_config_json__WEBPACK_IMPORTED_MODULE_4__[/* config */ "a"].layout_type}`;
    }

    if (localStorage.getItem("color")) {
      document.documentElement.style.setProperty('--theme-deafult', localStorage.getItem("color"));
    }

    window.addEventListener('scroll', handleScroll);
    Object(_services_script__WEBPACK_IMPORTED_MODULE_2__[/* SlideUpDown */ "f"])('setting-title');
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (false) {}
  };

  const openSetting = () => {
    if (false) {}
  };

  const closeSetting = () => {
    if (false) {}
  };

  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (false) {}
  } else {
    if (false) {}
  }

  return __jsx("div", null, __jsx("a", {
    href: null,
    onClick: () => openSetting()
  }, __jsx("div", {
    className: "setting-sidebar",
    id: "setting-icon"
  }, __jsx("div", null, __jsx("i", {
    className: "fa fa-cog",
    "aria-hidden": "true"
  })))), __jsx("div", {
    id: "setting_box",
    className: "setting-box"
  }, __jsx("a", {
    href: "# ",
    className: "overlay",
    onClick: () => closeSetting()
  }), __jsx("div", {
    className: "setting_box_body"
  }, __jsx("div", {
    onClick: () => closeSetting()
  }, __jsx("div", {
    className: "sidebar-back text-left"
  }, __jsx("i", {
    className: "fa fa-angle-left pr-2",
    "aria-hidden": "true"
  }), " Back")), __jsx("div", {
    className: "setting-body"
  }, __jsx("div", {
    className: "setting-title"
  }, __jsx("h4", null, "color option")), __jsx("div", {
    className: "setting-contant"
  }, __jsx("ul", {
    className: "color-box"
  }, __jsx("li", null, __jsx("input", {
    id: "colorPicker1",
    type: "color",
    defaultValue: "#ff4c3b",
    name: "Background",
    onChange: e => layoutColorFunc(e)
  })), __jsx("span", {
    className: "ml-3"
  }, "theme deafult color"))), __jsx("div", {
    className: "setting-title"
  }, __jsx("h4", null, "RTL")), __jsx("div", {
    className: "setting-contant"
  }, __jsx("ul", {
    className: "setting_buttons"
  }, __jsx("li", {
    className: "active",
    id: "ltr_btn"
  }, __jsx("a", {
    href: "# ",
    className: "btn setting_btn",
    onClick: () => layoutType(layoutState)
  }, layoutState)))), __jsx("div", {
    className: "buy_btn"
  }, __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=1",
    className: "btn btn-block purchase_btn"
  }, __jsx("i", {
    className: "fa fa-shopping-cart",
    "aria-hidden": "true"
  }), " purchase Multikart now!"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3",
    className: "btn btn-block purchase_btn"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    src: `/assets/images/icon/angular.png`,
    alt: "",
    className: "img-fluid"
  }), " Multikart Angular"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967",
    className: "btn btn-block purchase_btn"
  }, __jsx("i", {
    className: "fa fa-html5",
    "aria-hidden": "true"
  }), " Multikart HTML"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1",
    className: "btn btn-block purchase_btn"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    src: `/assets/images/icon/shopify.png`,
    alt: "",
    className: "img-fluid"
  }), " Multikart Shopify"))))), __jsx("div", {
    className: "sidebar-btn dark-light-btn"
  }, __jsx("div", {
    className: "dark-light"
  }, __jsx("div", {
    className: "theme-layout-version",
    onClick: () => changeThemeLayout()
  }, themeLayout ? 'Light' : 'Dark'))), __jsx("div", {
    className: "addcart_btm_popup",
    id: "fixed_cart_icon"
  }, __jsx("a", {
    href: null,
    className: "fixed_cart"
  }, __jsx("i", {
    className: "fa fa-clone",
    "aria-hidden": "true",
    onClick: toggle,
    title: "Configuration"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    centered: true,
    isOpen: modal,
    toggle: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
    toggle: toggle
  }, "Config"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
    className: "p-3"
  }, Object.keys(_config_json__WEBPACK_IMPORTED_MODULE_4__[/* config */ "a"]).map((key, i) => __jsx("p", {
    key: i
  }, __jsx("span", null, key, ":"), __jsx("span", null, _config_json__WEBPACK_IMPORTED_MODULE_4__[/* config */ "a"][key])))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalFooter"], null, __jsx("p", {
    className: "lh-cls"
  }, __jsx("b", null, "Note: "), "Copy upper config and paste it in ", __jsx("b", null, "\"/components/customizer/config.json\""), " "))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], null));
};

/* harmony default export */ __webpack_exports__["a"] = (ThemeSettings);

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

/***/ "RGkR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FilterContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (FilterContext);

/***/ }),

/***/ "Tm7r":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":{\"layout_type\":\"ltr\",\"layout_version\":\"light\",\"color\":\"#ff4c3b\"}}");

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

/***/ "cvw0":
/***/ (function(module, exports) {



/***/ }),

/***/ "j8FQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (SettingContext);

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "r1g3":
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });