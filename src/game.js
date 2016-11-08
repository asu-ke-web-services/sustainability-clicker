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
            purchaseLevel++;
            carbNum = carbNum - carBasePrice;
            formatCarb = game_state.addCommas(carbNum);
            element.points.innerHTML = "Number Of Carbons: " + formatCarb;
            
            carBasePrice = game_state.calcPrice(carPurchaseLevel, basePrice);
            formatPrice = game_state.addCommas(carBasePrice);
            document.getElementById("purchaseCar1").innerHTML = "Car : unlock on " + formatPrice;
            
            if(carbNum < carBasePrice)
                {
                    document.getElementById("purchaseCar1").disabled = true;
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
        }
    
}




