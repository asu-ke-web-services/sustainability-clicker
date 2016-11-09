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
/***/ function(module, exports) {

	//var $ = require("jquery");
	//var game_state = require("./game_state.js");


	var carbNum = 0;
	var adder = 1;
	var purchaseLevel = 1;
	var treePurchaseLevel = 3;

	var element =
	{  
	  clicker:document.getElementById("clicker"),
	  points:document.getElementById("points"),
	  purchaseTree1 : document.getElementById("purchaseTree1")  
	};

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


	element.clicker.onclick = function() { updatePoints(); };
	element.purchaseTree1.onclick = function() { up(); };

	element.purchaseTree1.innerHTML = "Tree : unlock on " + treePurchaseLevel;



	function up()
	{
	    treePurchaseLevel;
	    var treePurchaseLevelFormating;
	    var carbNumFormating;
	  if (carbNum >= treePurchaseLevel)
	    {
	        purchaseLevel++;
	     carbNum =  carbNum - treePurchaseLevel;
	     carbNumFormating = game_state.addCommas(carbNum);
	        element.points.innerHTML = "Number Of Carbons: " + carbNumFormating;
	  adder = treePurchaseLevel;
	        treePurchaseLevel = purchaseLevel*(treePurchaseLevel);
	        treePurchaseLevelFormating = game_state.addCommas(treePurchaseLevel);
	         element.purchaseTree1.innerHTML = "Tree : unlock on " + treePurchaseLevelFormating;
	      if(carbNum <= treePurchaseLevel)
	          {
	              document.getElementById("purchaseTree1").disabled = true;
	          }
	        
	    }
	}


/***/ }
/******/ ]);