// var $ = require("jquery");
var game_state = require("./game_state.js");

var totalNumberOfCarbons;

var carbNum = 0.00;
var purchaseLevel = 1;
var treeBasePrice = 10.00;

var element = {  
    
  clicker:document.getElementById("clicker"),
  points:document.getElementById("points"),
  purchaseTree1 : document.getElementById("purchaseTree1"),  

};

element.clicker.onclick = function() { mainClicker(); };
element.purchaseTree1.onclick = function() { treePriceCalc(); };

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


function treePriceCalc()
{
    var formatPrice;
    var formatCarb;

    if (carbNum >= treeBasePrice)
    {
        
        purchaseLevel++;
        
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
