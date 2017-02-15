var $ = require("jquery");
var game_state = require("./game_state.js");

 document.getElementById("game").style.display = "none";


$("#buttonStart").click(function() {
  game_state.clickFunc();
});

var enter = 0;
var allText;
var marqueeData= [];
var cSentence;
var myVar;

var totalNumberOfCarbons;

var carbNum = 0.00;

var purchaseLevel = 0;
var carPurchaseLevel = 0;
var solarPurchaseLevel = 0;
var farmPurchaseLevel = 0;
var gasPurchaseLevel = 0;
var capturePurchaseLevel = 0;

var treeBasePrice = 10.00;
var carBasePrice = 20.00;
var solarBasePrice = 30.00;
var farmBasePrice = 40.00;
var gasBasePrice = 50.00;
var captureBasePrice = 60.00;

var goal = 10;
var opacity_counter = .90;

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
  pollution : document.getElementById("pollution"),
  treeInventory: document.getElementById("treeInventoryNum"),
  carInventory: document.getElementById("carInventoryNum"),
  farmInventory : document.getElementById("farmInventoryNum"),
  greengasInventory : document.getElementById("greengasInventoryNum"),
  solarInventory : document.getElementById("solarInventoryNum"),
  carbonCatcherInventory : document.getElementById("carbonCatcherInventoryNum")


};

element.clicker.onclick = function() { 
    mainClicker();
    button_check();
    
    if (carbNum >= 10 && enter == 0)
    {
        document.getElementById("speech").style.visibility = "hidden";
        
        document.getElementById("speech2").style.visibility = "visible";
        enter = 1;
    }
    
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
  
    document.getElementById("speech2").style.visibility= "hidden";
    
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
element.purchaseFarm1.innerHTML = "|" + farmPurchaseLevel + "|" + " Farm : unlock on " + farmBasePrice;
element.purchaseGas1.innerHTML = "|" + gasPurchaseLevel + "|" + " Gas : unlock on " + gasBasePrice;
element.purchaseSolar1.innerHTML = "|" + solarPurchaseLevel + "|" + " Solar : unlock on " + solarBasePrice;
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
        element.treeInventory.innerHTML = purchaseLevel;
        
       
        
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
            element.carInventory.innerHTML = carPurchaseLevel;
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
            element.solarInventory.innerHTML = solarPurchaseLevel;
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
            element.farmInventory.innerHTML = farmPurchaseLevel;
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
            element.greengasInventory.innerHTML = gasPurchaseLevel;
            
            
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
            element.carbonCatcherInventory.innerHTML = capturePurchaseLevel;
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
   if(carbNum >= goal)
    {
            element.clicker.style.opacity = opacity_counter;
            goal = goal*10;
            opacity_counter -= .1;
    }
   
};

$.ajax
({
    url : "mynews.txt",
    dataType: "text",
    success : function (allText) 
    {
        marqueeData= allText.split("\n");
        cSentence= marqueeData[Math.floor(Math.random() * 16)];
        document.getElementById("c_Sentence").innerHTML= cSentence;
        myVar= setInterval(sLoop, 30000);
        console.log(cSentence);
    }
});

function sLoop ()
{
     cSentence= marqueeData[Math.floor(Math.random() * 16)];
     document.getElementById("c_Sentence").innerHTML= cSentence;  
}


