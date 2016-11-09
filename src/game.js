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
