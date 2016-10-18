var carbNum = 0;
var price = 2;
var perchLevel = 1;
var adder = 1;

var element = {   
clicker:document.getElementById("clicker"),
points:document.getElementById("points"),
purchaseTree1 : document.getElementById("purchaseTree1")
}

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
  if (carbNum > 2)
    {
     carbNum =  carbNum - 3;
  adder = adder + 0.5;
    }
}