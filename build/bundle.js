/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// var $ = require("jquery");
	var game_state = __webpack_require__(1);


	var carbNum = 0;
	var adder = 1;
	var purchaseLevel = 1;
	var treePurchaseLevel = 3;

	var element = {  
	    
	  clicker:document.getElementById("clicker"),
	  points:document.getElementById("points"),
	  purchaseTree1 : document.getElementById("purchaseTree1"),  
	};

	element.clicker.onclick = function() { updatePoints(); };
	element.purchaseTree1.onclick = function() { up(); };

	element.purchaseTree1.innerHTML = "Tree : unlock on " + treePurchaseLevel;

	function updatePoints()
	{
	    var carbNumftm;
	    
	 carbNum = carbNum + adder;
	    carbNumftm = game_state.addCommas(carbNum)
	 element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
	    
	    if(carbNum >= treePurchaseLevel)
	        {
	              document.getElementById("purchaseTree1").disabled = false;
	        }
	}


	function up()
	{
	    treePurchaseLevel;
	    var treePurchaseLevelFormating;
	    var carbNumFormating;
	    var price;
	  if (carbNum >= treePurchaseLevel)
	    {
	        purchaseLevel++;
	        carbNum =  carbNum - treePurchaseLevel;
	        carbNumFormating = game_state.addCommas(carbNum);
	        element.points.innerHTML = "Number Of Carbons: " + carbNumFormating;
	        
	        price = game_state.calcPrice(purchaseLevel, 3);
	        //adder = treePurchaseLevel;
	        //treePurchaseLevel = purchaseLevel*(treePurchaseLevel);
	        treePurchaseLevelFormating = game_state.addCommas(price);
	        element.purchaseTree1.innerHTML = "Tree : unlock on " + treePurchaseLevelFormating;
	      
	        if(carbNum <= treePurchaseLevel)
	          {
	              document.getElementById("purchaseTree1").disabled = true;
	          }
	        
	    }
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  sayHelloInEnglish: function() {
	    return "HELLO";
	  },

	  sayHelloInSpanish: function() {
	    return "Hola";
	  },
	    
	addCommas: function(value) //source http://stackoverflow.com/
	{
	    var newValue = value;
	    if (value >= 1000) {
	        var suffixes = ["", "k", "m", "b","t"];
	        var suffixNum = Math.floor( (""+value).length/3 );
	        var shortValue = '';
	        for (var precision = 2; precision >= 1; precision--) {
	            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
	            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
	            if (dotLessShortValue.length <= 2) { break; }
	        }
	        if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
	        newValue = shortValue+suffixes[suffixNum];
	    }
	    return newValue;
	},

	calcPrice: function(nOwned, baseCost) 
	{
	    var temp;
	    var numberOwned = nOwned;
	    var value = Math.pow(1.15, numberOwned);
	    temp = baseCost * value;
	    return temp;
	},    
	    
	};


/***/ }
/******/ ]);