var $ = require("jquery");
var game_state = require("./game_state.js");


$(".hello_text").html(game_state.sayHelloInEnglish());

var carbNUm = 0;

var element = {
    clicker : document.getElementById("clicker");
    points : document.getElementById("pointer");
}

element.clicker.onclick = function(){
    updatePoints();
}

Function()
{
    carbNUm = carbNUm+ carbNUm;
    thistext = "NUmber Of Carbons: " + carbNUm;
    element.points.innerHTML = thistext;
}