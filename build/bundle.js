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

	var totalNumberOfCarbons;

	var carbNum = 0.00;

	var purchaseLevel = 0;
	var carPurchaseLevel = 0;
	var solarPurchaseLevel = 0;
	var farmPurchaseLevel = 0;
	var gasPurchaseLevel = 0;
	var capturePurchaseLevel = 0;


	var treeBasePrice = 1.00;
	var carBasePrice = 2.00;
	var solarBasePrice = 3.00;
	var farmBasePrice = 4.00;
	var gasBasePrice = 5.00;
	var captureBasePrice = 6.00;

	var auto_adder = {
	    tree:0,
	    electric_car:0
	};

	var timer = {
	    tree:0,
	    electric_car:0
	};

	var element = {  
	    
	  clicker:document.getElementById("clicker"),
	  points:document.getElementById("points"),
	  purchaseTree1 : document.getElementById("purchaseTree1"), 
	  purchaseCar1 : document.getElementById("purchaseCar1"),
	  purchaseSolar1 : document.getElementById("purchaseSolar1"),

	};

	element.clicker.onclick = function() { mainClicker(); };
	element.purchaseCar1.onclick = function() { carPriceClac(); };
	element.purchaseSolar1.onclick = function () {solarPriceClac();};
	element.purchaseTree1.onclick = function() {  
	    if(auto_adder.tree == 0) 
	    {
	        auto_adder.tree = 1;
	    }
	    else
	    {
	        auto_adder.tree += auto_adder.tree;
	    }
	    
	    treePriceCalc();
	};

	element.purchaseTree1.innerHTML = "Tree : unlock on " + treeBasePrice;
	element.purchaseCar1.innerHTML = "Car : unluck on " + carBasePrice;
	element.purchaseSolar1.innerHTML = "Solar : unluck on " + solarBasePrice;

	function mainClicker()
	{
	    var carbNumftm;
	    
	 carbNum = carbNum + 1;
	 carbNumftm = game_state.addCommas(carbNum)
	 element.points.innerHTML = "Number Of Carbons: " + carbNumftm;

	if(carbNum >= treeBasePrice)
	 {
	    document.getElementById("purchaseTree1").disabled = false;
	 }

	    
	 if (carbNum >= carBasePrice)
	     {
	         document.getElementById("purchaseCar1").disabled = false;
	     }

	    
	 if(carbNum >= solarBasePrice)
	     {
	         document.getElementById("purchaseSolar1").disabled = false;
	     }
	  
	    
	}

	setInterval(function(){ 
	    
	    
	  if(auto_adder.tree > 0)
	  {
	     timer.tree += 1; 
	     autoTreeCarbNum();
	  }
	    
	 }, 1000);


	function autoTreeCarbNum () //timer for auto adition of the numbers of carbons  
	{   
	    var carbNumftm;
	    
	    if(timer.tree == 3) 
	    {
	        
	       carbNum = carbNum + auto_adder.tree;
	       carbNumftm = game_state.addCommas(carbNum)
	       element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
	       timer.tree = 0;
	    }
	    if(carbNum >= treeBasePrice)
	    {
	              document.getElementById("purchaseTree1").disabled = false; //these two dont work
	    }
	    else {
	              document.getElementById("purchaseTree1").disabled = true;
	    }
	}

	function treePriceCalc()
	{
	    var formatPrice;
	    var formatCarb;

	    if (carbNum >= treeBasePrice)
	    {
	        
	        purchaseLevel++; //use this as a veriable in timer func
	        
	        //update total number of carbons
	        carbNum =  carbNum - treeBasePrice;
	        formatCarb = game_state.addCommas(carbNum);
	        element.points.innerHTML = "Number Of Carbons: " + formatCarb;
	        
	        
	        //update number of carbons needed to buy tree 
	        treeBasePrice = game_state.calcPrice(purchaseLevel, treeBasePrice);
	        formatPrice = game_state.addCommas(treeBasePrice);
	        element.purchaseTree1.innerHTML = "Tree : unlock on " + formatPrice;
	        
	        
	            if(carbNum < solarBasePrice)
	                {
	                    document.getElementById("purchaseSolar1").disabled = true;
	                }
	            if(carbNum < carBasePrice)
	                {
	                    document.getElementById("purchaseCar1").disabled = true;
	                }
	             if(carbNum < treeBasePrice)
	                {
	                    document.getElementById("purchaseTree1").disabled = true;
	                }
	        
	    }
	}

	function carPriceClac ()
	{
	  
	    var formatPrice;
	    var formatCarb;
	    
	    if (carbNum >= carBasePrice)
	        {
	            carPurchaseLevel++;
	            carbNum = carbNum - carBasePrice;
	            formatCarb = game_state.addCommas(carbNum);
	            element.points.innerHTML = "Number Of Carbons: " + formatCarb;
	            
	            carBasePrice = game_state.calcPrice(carPurchaseLevel, basePrice);
	            formatPrice = game_state.addCommas(carBasePrice);
	            document.getElementById("purchaseCar1").innerHTML = "Car : unlock on " + formatPrice;
	            
	             if(carbNum < solarBasePrice)
	                {
	                    document.getElementById("purchaseSolar1").disabled = true;
	                }
	             if(carbNum < carBasePrice)
	                {
	                    document.getElementById("purchaseCar1").disabled = true;
	                }
	             if(carbNum < treeBasePrice)
	                {
	                    document.getElementById("purchaseTree1").disabled = true;
	                }
	        }
	    
	}

	function solarPriceClac ()
	{
	  
	    var formatPrice;
	    var formatCarb;
	    
	    if (carbNum >= solarBasePrice)
	        {
	            solarPurchaseLevel++;
	            carbNum = carbNum - solarBasePrice;
	            formatCarb = game_state.addCommas(carbNum);
	            element.points.innerHTML = "Number Of Carbons: " + formatCarb;
	            
	            solarBasePrice = game_state.calcPrice(solarPurchaseLevel, solarBasePrice);
	            formatPrice = game_state.addCommas(solarBasePrice);
	            document.getElementById("purchaseSolar1").innerHTML = "Solar : unlock on " + formatPrice;
	            
	            if(carbNum < solarBasePrice)
	                {
	                    document.getElementById("purchaseSolar1").disabled = true;
	                }
	             if(carbNum < carBasePrice)
	                {
	                    document.getElementById("purchaseCar1").disabled = true;
	                }
	             if(carbNum < treeBasePrice)
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
	    temp = Math.round(baseCost * value);
	    return temp;
	},  


	};




/***/ }
/******/ ]);