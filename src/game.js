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


var treeBasePrice = 3.00;
var carBasePrice = 6.00;
var solarBasePrice = 9.00;
var farmBasePrice = 15.00;
var gasBasePrice = 20.00;
var captureBasePrice = 25.00;

var timer = 0;
var opacity = 1.0;
var opactiy_counter = 0;
var prize = 0;

var auto_adder = {
    tree:0,
    electric_car:0,
    solar:0,
    farm:0,
    gas:0,
    capture:0
};



var element = {  
    
  clicker:document.getElementById("clicker"),
  points:document.getElementById("points"),
  purchaseTree1 : document.getElementById("purchaseTree1"), 
  purchaseCar1 : document.getElementById("purchaseCar1"),
  purchaseSolar1 : document.getElementById("purchaseSolar1"),
  purchaseFarm1 : document.getElementById("purchaseFarm1"),  
  purchaseGas1 :  document.getElementById("purchaseGas1"),   
  purchaseCapture1 :  document.getElementById("purchaseCapture1"),   
  pollution :  document.getElementById("pollution"),
  prize1 :  document.getElementById("prize1")

};

element.clicker.onclick = function() { 
    
    mainClicker(); 
    button_check();

   };

//ADDER FOR CAR. Increment by 2 every 6 seconds
element.purchaseCar1.onclick = function() 
{ 
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

//ADDER FOR SOLAR. Increment by 4 every 9 seconds
element.purchaseSolar1.onclick = function () 
{ 
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

//ADDER FOR TREE. Increment by 1 every 3 seconds
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

element.purchaseFarm1.onclick = function() {  
    if(auto_adder.farm == 0) 
    {
        auto_adder.farm = 1;
    }
    else
    {
        auto_adder.farm += auto_adder.farm;
    }
    button_check();
};
element.purchaseGas1.onclick = function() {  
    if(auto_adder.gas == 0) 
    {
        auto_adder.gas = 1;
    }
    else
    {
        auto_adder.gas += auto_adder.gas;
    }
    button_check();
};
element.purchaseCapture1.onclick = function() {  
    if(auto_adder.capture == 0) 
    {
        auto_adder.capture = 1;
    }
    else
    {
        auto_adder.capture += auto_adder.capture;
    }
    button_check();
};

element.purchaseTree1.innerHTML = "Tree : unlock on " + treeBasePrice;
element.purchaseCar1.innerHTML = "Car : unlock on " + carBasePrice;
element.purchaseSolar1.innerHTML = "Solar : unlock on " + solarBasePrice;

function mainClicker()
{
    var carbNumftm;
    
 carbNum = carbNum + 1;
 carbNumftm = game_state.addCommas(carbNum);
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
 /* if(auto_adder.farm > 0) 
  {
      
  }
  if(auto_adder.gas > 0) 
  {
      
  }
  if(auto_adder.capture > 0) 
  {
      
  } */
  
  button_check();
  cloud_opacity();
  check_achievements();
 

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

function autoSolarCarbNum () //timer for auto adition of the numbers of carbons  
{   
    var carbNumftm;
    
    if(timer % 9 == 0) 
    {
        
       carbNum = carbNum + auto_adder.solar;
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
        element.purchaseTree1.innerHTML = "Tree : unlock on " + formatPrice;
        
       
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
            document.getElementById("purchaseCar1").innerHTML = "Car : unlock on " + formatPrice; 
         
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
           
    }
    
}
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
    if(carbNum >= 5 && carbNum < 10 && opactiy_counter == 0)
    {
            opacity -= .2
            opactiy_counter += 1;
    }
     if(carbNum >= 10 && carbNum < 15 && opactiy_counter == 1)
    {
            opacity -= .2
            opactiy_counter += 1;
    }
     if(carbNum >= 15 && carbNum < 20 && opactiy_counter == 2)
    {
            opacity -= .2
            opactiy_counter += 1;
    }
     if(carbNum >= 20 && carbNum < 25 && opactiy_counter == 3)
    {
            opacity -= .2
            opactiy_counter += 1;
    }
    if(carbNum >= 25 && carbNum < 30 && opactiy_counter == 4)
    {
            opacity -= .2
            opactiy_counter += 1;
    }
    if(carbNum >= 30 && carbNum < 35 && opactiy_counter == 5)
    {
            opacity -= .2
            opactiy_counter += 1;
    }
    if(carbNum >= 35 && carbNum < 45 && opactiy_counter == 6)
    {
            opacity -= .2
            opactiy_counter += 1;
    }
   
        
    element.pollution.style.opacity = opacity;
};

function check_achievements(){
    if(carbNum >= 20 && carbNum < 25 && prize == 0)
    {
        setTimeout(function () { element.prize1.classList.toggle('show');}, 3000);
        element.prize1.classList.toggle('show');
        prize += 1;
    }
}



