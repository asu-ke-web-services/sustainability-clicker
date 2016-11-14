// var $ = require("jquery");
var game_state = require("./game_state.js");

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
  purchaseFarm1 : document.getElementById("purchaseFarm1"),
  purchaseGas1 : document.getElementById("purchaseGas1"),
  purchaseCapture1 : document.getElementById("purchaseCapture1"),

};

element.clicker.onclick = function() { mainClicker(); };
element.purchaseCar1.onclick = function() { carPriceClac(); };
element.purchaseSolar1.onclick = function() { solarPriceClac();};
element.purchaseFarm1.onclick = function() {farmPricCalc();};
element.purchaseGas1.onclick = function() {gasPriceCalc();};
element.purchaseCapture1.onclick = function() {capturePriceCalc();};
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
    
     if(carbNum >= farmBasePrice)
     {
         document.getElementById("purchaseFarm1").disabled = false;
     } 
         if(carbNum >= gasBasePrice)
     {
         document.getElementById("purchaseGas1").disabled = false;
     } 
            if(carbNum >= captureBasePrice)
     {
         document.getElementById("purchaseCapture1").disabled = false;
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
        element.purchaseTree1.innerHTML = "|" + purchaseLevel + "|" + " Tree : unlock on " + formatPrice;
        
        
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
            if(carbNum < farmBasePrice)
             {
                    document.getElementById("purchaseFarm1").disabled = true;
             }
                 if(carbNum < gasBasePrice)
     {
         document.getElementById("purchaseGas1").disabled = true;
     } 
               if(carbNum < captureBasePrice)
                {
                    document.getElementById("purchaseCapture1").disabled = true;
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
            
            carBasePrice = game_state.calcPrice(carPurchaseLevel, carBasePrice);
            formatPrice = game_state.addCommas(carBasePrice);
            document.getElementById("purchaseCar1").innerHTML = "|" + carPurchaseLevel + "|" + " Car : unlock on " + formatPrice;
            
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
                 if(carbNum < farmBasePrice)
     {
         document.getElementById("purchaseFarm1").disabled = true;
     }
                     if(carbNum < gasBasePrice)
     {
         document.getElementById("purchaseGas1").disabled = true;
     } 
            
                   if(carbNum < captureBasePrice)
                {
                    document.getElementById("purchaseCapture1").disabled = true;
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
            document.getElementById("purchaseSolar1").innerHTML = "|" + solarPurchaseLevel + "|" + " Solar : unlock on " + formatPrice;
            
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
                 if(carbNum < farmBasePrice)
     {
         document.getElementById("purchaseFarm1").disabled = true;
     }
                     if(carbNum < gasBasePrice)
     {
         document.getElementById("purchaseGas1").disabled = true;
     } 
            
                   if(carbNum < captureBasePrice)
                {
                    document.getElementById("purchaseCapture1").disabled = true;
                }
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
            
            if(carbNum < farmBasePrice)
                {
                    document.getElementById("purchaseFarm1").disabled = true;
                }
            
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
                     if(carbNum < gasBasePrice)
     {
         document.getElementById("purchaseGas1").disabled = true;
     } 
            
                   if(carbNum < captureBasePrice)
                {
                    document.getElementById("purchaseCapture1").disabled = true;
                }
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
            
            if(carbNum < gasBasePrice)
                {
                    document.getElementById("purchaseGas1").disabled = true;
                }
            
            
            if(carbNum < farmBasePrice)
                {
                    document.getElementById("purchaseFarm1").disabled = true;
                }
            
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
                     if(carbNum < gasBasePrice)
     {
         document.getElementById("purchaseGas1").disabled = true;
     } 
            
                   if(carbNum < captureBasePrice)
                {
                    document.getElementById("purchaseCapture1").disabled = true;
                }
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
            
            if(carbNum < gasBasePrice)
                {
                    document.getElementById("purchaseGas1").disabled = true;
                }
            
            
            if(carbNum < farmBasePrice)
                {
                    document.getElementById("purchaseFarm1").disabled = true;
                }
            
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
            
             if(carbNum >= gasBasePrice)
                {
                    document.getElementById("purchaseGas1").disabled = false;
                } 
        
            if(carbNum < captureBasePrice)
                {
                    document.getElementById("purchaseCapture1").disabled = true;
                }
            
        } 
} 