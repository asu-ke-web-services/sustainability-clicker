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
	var game_state = __webpack_require__(2);

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

	var opactiy_counter = 0;

	var auto_adder = {
	    tree:0,
	    electric_car:0,
	    solar:0,
	    farm:0,
	    gas:0,
	    capture:0
	};

	var timer = 1;

	var element = {  
	    
	  clicker:document.getElementById("clicker"),
	  points:document.getElementById("points"),
	  purchaseTree1 : document.getElementById("purchaseTree1"), 
	  purchaseCar1 : document.getElementById("purchaseCar1"),
	  purchaseSolar1 : document.getElementById("purchaseSolar1"),
	  purchaseFarm1 : document.getElementById("purchaseFarm1"),
	  purchaseGas1 : document.getElementById("purchaseGas1"),
	  purchaseCapture1 : document.getElementById("purchaseCapture1"),
	  pollution :  document.getElementById("pollution")    

	};

	element.clicker.onclick = function() { 
	    mainClicker();
	    button_check();
	};
	element.purchaseCar1.onclick = function() { 
	    if(auto_adder.electric_car == 0) 
	    {
	        auto_adder.electric_car = 2;
	    }
	    else
	    {
	        auto_adder.electric_car += auto_adder.electric_car;
	    }
	    carPriceClac(); 
	    button_check();
	};
	element.purchaseSolar1.onclick = function() { 
	   
	    if(auto_adder.solar == 0) 
	    {
	        auto_adder.solar = 4;
	    }
	    else
	    {
	        auto_adder.solar += auto_adder.solar;
	    }
	    solarPriceClac();
	    button_check();
	};
	element.purchaseFarm1.onclick = function() {
	    if(auto_adder.farm == 0) 
	    {
	        auto_adder.farm = 5;
	    }
	    else
	    {
	        auto_adder.farm += auto_adder.farm;
	    }
	    farmPricCalc();
	    button_check();
	};
	element.purchaseGas1.onclick = function() {
	    if(auto_adder.gas == 0) 
	    {
	        auto_adder.gas = 6;
	    }
	    else
	    {
	        auto_adder.gas += auto_adder.gas;
	    }
	    gasPriceCalc();
	    button_check();
	};
	element.purchaseCapture1.onclick = function() {
	    if(auto_adder.capture == 0) 
	    {
	        auto_adder.capture = 8;
	    }
	    else
	    {
	        auto_adder.capture += auto_adder.capture;
	    }
	    capturePriceCalc();
	    button_check();
	};
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
	    button_check();
	};

	element.purchaseTree1.innerHTML = "|" + purchaseLevel + "|" + " Tree : unlock on " + treeBasePrice;

	element.purchaseCar1.innerHTML = "|" + carPurchaseLevel + "|" + " Car : unlock on " + carBasePrice;

	element.purchaseSolar1.innerHTML = "|" + solarPurchaseLevel + "|" + " Solar : unlock on " + solarBasePrice;

	element.purchaseFarm1.innerHTML = "|" + farmPurchaseLevel + "|" + " Farm : unlock on " + farmBasePrice;

	element.purchaseGas1.innerHTML = "|" + gasPurchaseLevel + "|" + " Green Gas : unlock on " + gasBasePrice;

	element.purchaseCapture1.innerHTML = "|" + capturePurchaseLevel + "|" + " Carbon Catcher : unlock on " + captureBasePrice;

	function mainClicker()
	{
	    var carbNumftm;
	    
	 carbNum = carbNum + 1;
	 carbNumftm = game_state.addCommas(carbNum)
	 element.points.innerHTML = "Number Of Carbons: " + carbNumftm;

	}

	setInterval(function(){ 
	    
	    
	 if(auto_adder.tree > 0)
	  {
	     autoTreeCarbNum();
	  }
	  if(auto_adder.electric_car > 0) 
	  {
	      
	      autoCarCarbNum();
	  }
	  if(auto_adder.solar > 0) 
	  {
	      
	      autoSolarCarbNum();
	  }
	 
	 if(auto_adder.farm > 0) 
	  {
	      autoFarmCarbNum();
	  }
	  if(auto_adder.gas > 0) 
	  {
	      autoGasCarbNum();
	  }
	  if(auto_adder.capture > 0) 
	  {
	      autoCaptureCarbNum();
	  } 
	  
	  button_check();
	  cloud_opacity();
	  timer += 1;
	    
	 }, 1000);


	function autoTreeCarbNum () //timer for auto adition of the numbers of carbons  
	{   
	    var carbNumftm;
	    
	    if(timer % 3 == 0) 
	    {
	        
	       carbNum = carbNum + auto_adder.tree;
	       carbNumftm = game_state.addCommas(carbNum);
	       element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
	    }
	}

	function autoCarCarbNum () //timer for auto adition of the numbers of carbons  
	{   
	    var carbNumftm;
	    
	    if(timer % 5 == 0) 
	    {
	        
	       carbNum = carbNum + auto_adder.electric_car;
	       carbNumftm = game_state.addCommas(carbNum);
	       element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
	    }
	}

	function autoSolarCarbNum ()   
	{   
	    var carbNumftm;
	    
	    if(timer % 9 == 0) 
	    {
	        
	       carbNum = carbNum + auto_adder.solar;
	       carbNumftm = game_state.addCommas(carbNum);
	       element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
	    }
	}
	function autoFarmCarbNum ()   
	{   
	    var carbNumftm;
	    
	    if(timer % 7 == 0) 
	    {
	        
	       carbNum = carbNum + auto_adder.farm;
	       carbNumftm = game_state.addCommas(carbNum);
	       element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
	    }
	}
	function autoGasCarbNum ()   
	{   
	    var carbNumftm;
	    
	    if(timer % 11 == 0) 
	    {
	        
	       carbNum = carbNum + auto_adder.gas;
	       carbNumftm = game_state.addCommas(carbNum);
	       element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
	    }
	}
	function autoCaptureCarbNum ()  
	{   
	    var carbNumftm;
	    
	    if(timer % 13 == 0) 
	    {
	        
	       carbNum = carbNum + auto_adder.capture;
	       carbNumftm = game_state.addCommas(carbNum);
	       element.points.innerHTML = "Number Of Carbons: " + carbNumftm;
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
	        element.purchaseTree1.innerHTML = "|" + purchaseLevel + "|" + " Tree : unlock on " + formatPrice;
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
	            
	            carBasePrice = game_state.calcPrice(carPurchaseLevel, carBasePrice);
	            formatPrice = game_state.addCommas(carBasePrice);
	            document.getElementById("purchaseCar1").innerHTML = "|" + carPurchaseLevel + "|" + " Car : unlock on " + formatPrice;
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
	            document.getElementById("purchaseSolar1").innerHTML = "|" + solarPurchaseLevel + "|" + " Solar : unlock on " + formatPrice;
	    }
	}

	function farmPricCalc ()
	{
	  
	    var formatPrice;
	    var formatCarb;
	    
	    if (carbNum >= farmBasePrice)
	        {
	            farmPurchaseLevel++;
	            carbNum = carbNum - farmBasePrice;
	            formatCarb = game_state.addCommas(carbNum);
	            element.points.innerHTML = "Number Of Carbons: " + formatCarb;
	            
	            farmBasePrice = game_state.calcPrice(farmPurchaseLevel, farmBasePrice);
	            formatPrice = game_state.addCommas(farmBasePrice);
	            document.getElementById("purchaseFarm1").innerHTML = "|" + farmPurchaseLevel + "|" +  " Farm : unlock on " + formatPrice;
	        }   
	}

	function gasPriceCalc ()
	{
	  
	    var formatPrice;
	    var formatCarb;
	    
	    if (carbNum >= gasBasePrice)
	        {
	            gasPurchaseLevel++;
	            carbNum = carbNum - gasBasePrice;
	            formatCarb = game_state.addCommas(carbNum);
	            element.points.innerHTML = "Number Of Carbons: " + formatCarb;
	            
	            gasBasePrice = game_state.calcPrice(gasPurchaseLevel, gasBasePrice);
	            formatPrice = game_state.addCommas(gasBasePrice);
	            document.getElementById("purchaseGas1").innerHTML ="|" + gasPurchaseLevel + "|" + " Green Gas : unlock on " + formatPrice;
	            
	            
	        }
	    
	} 

	function capturePriceCalc()
	{
	  
	    var formatPrice;
	    var formatCarb;
	    
	    if (carbNum >= captureBasePrice)
	        {
	            capturePurchaseLevel++;
	            carbNum = carbNum - captureBasePrice;
	            formatCarb = game_state.addCommas(carbNum);
	            element.points.innerHTML = "Number Of Carbons: " + formatCarb;
	            
	            captureBasePrice = game_state.calcPrice(capturePurchaseLevel, captureBasePrice);
	            formatPrice = game_state.addCommas(captureBasePrice);
	            document.getElementById("purchaseCapture1").innerHTML = "|" + capturePurchaseLevel + "|" +  " Carbon Catcher : unlock on " + formatPrice;
	        } 
	} 


	/*button check and opacity*/
	function button_check(){
	  
	 if(carbNum >= treeBasePrice)
	  {
	        document.getElementById("purchaseTree1").disabled = false;
	  }
	  else {
	        document.getElementById("purchaseTree1").disabled = true;
	  }
	  if(carbNum >= carBasePrice)
	  {
	        document.getElementById("purchaseCar1").disabled = false;
	  }
	  else{
	        document.getElementById("purchaseCar1").disabled = true;
	  } 
	  if(carbNum >= solarBasePrice)
	  {
	        document.getElementById("purchaseSolar1").disabled = false;
	  }
	  else{
	        document.getElementById("purchaseSolar1").disabled = true;
	  } 
	  if(carbNum >= farmBasePrice)
	  {
	        document.getElementById("purchaseFarm1").disabled = false;  
	  }
	  else {
	        document.getElementById("purchaseFarm1").disabled = true;          
	  }
	  if(carbNum >= gasBasePrice)
	  {
	       document.getElementById("purchaseGas1").disabled = false;  
	  }
	  else {
	       document.getElementById("purchaseGas1").disabled = true;   
	  }
	  if(carbNum >= captureBasePrice)
	  {
	        document.getElementById("purchaseCapture1").disabled = false;    
	  }
	  else {
	        document.getElementById("purchaseCapture1").disabled = true;  
	  }
	};
	function cloud_opacity(){
	    if(carbNum >= 10 && carbNum < 100 && opactiy_counter == 0)
	    {
	            element.pollution.style.opacity = .90;
	            opactiy_counter = 1;
	    }
	     if(carbNum >= 100 && carbNum < 200 && opactiy_counter == 1)
	    {
	            element.pollution.style.opacity = .80;
	            opactiy_counter = 2;
	    }
	     if(carbNum >= 200 && carbNum < 300 && opactiy_counter == 2)
	    {
	            element.pollution.style.opacity = .70;
	            opactiy_counter = 3;
	    }
	     if(carbNum >= 300 && carbNum < 400 && opactiy_counter == 3)
	    {
	            element.pollution.style.opacity = .60;
	            opactiy_counter = 4;
	    }
	    if(carbNum >= 400 && carbNum < 500 && opactiy_counter == 4)
	    {
	            element.pollution.style.opacity = .50;
	            opactiy_counter = 5;
	    }
	    if(carbNum >= 500 && carbNum < 600 && opactiy_counter == 5)
	    {
	            element.pollution.style.opacity = .40;
	            opactiy_counter = 6;
	    }
	    if(carbNum >= 600 && carbNum < 700 && opactiy_counter == 6)
	    {
	            element.pollution.style.opacity = .30;
	            opactiy_counter = 7;
	    }
	     if(carbNum >= 700 && carbNum < 800 && opactiy_counter == 7)
	    {
	            element.pollution.style.opacity = .20;
	            opactiy_counter = 8;
	    }
	     if(carbNum >= 800 && carbNum < 900 && opactiy_counter == 8)
	    {
	            element.pollution.style.opacity = .10;
	            opactiy_counter = 9;
	    }
	    if(carbNum >= 1000 && carbNum < 1100 && opactiy_counter == 9)
	    {
	            element.pollution.style.opacity = 0;
	            opactiy_counter = 10;
	    }
	    
	};

/***/ },
/* 1 */,
/* 2 */
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