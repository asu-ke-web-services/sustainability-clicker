var $ = require("jquery");
// var game_state = require("./game_state.js");


var carbNum = 0;
var adder = 1;

var element = {   
  clicker:document.getElementById("clicker"),
  points:document.getElementById("points"),
  purchaseTree1 : document.getElementById("purchaseTree1"),  
};

element.clicker.onclick = function() { updatePoints(); };
element.purchaseTree1.onclick = function() { up(); };

function updatePoints()
{
 carbNum = carbNum + adder;
 text = "Number Of Carbons: " + carbNum;
 element.points.innerHTML = text;
}

function up()
{
  if (carbNum >= 3)
    {
     carbNum =  carbNum - 3;
      element.points.innerHTML = "Number Of Carbons: " + carbNum;
  adder = adder + 1;
    }
}