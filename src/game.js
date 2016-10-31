// var $ = require("jquery");
var game_state = require("./game_state.js");

var totalNumberOfCarbons;

var carbNum = 0.00;
var purchaseLevel = 1;
var treeBasePrice = 10.00;


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

};

element.clicker.onclick = function() { mainClicker(); };
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
    
    if(timer.tree == 3) 
    {
       carbNum = carbNum + auto_adder.tree;
       element.points.innerHTML = "Number Of Carbons: " + carbNum;
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
