var $ = require("jquery");
var game_state = require("./game_state.js");

 document.getElementById("game").style.display = "none";

 document.getElementById("infoPage").style.display = "none";


$("#buttonStart").click(function() {
  game_state.clickFunc();
});


$("#buttonInfo").click(function() {
  game_state.infoFunc();
});

$("#playButton").click(function() {
  game_state.startAtInfo();
});



var enter = 0;
var allText;
var marqueeData= [];
var cSentence;
var myVar;
var audio;
var audio2;

var treePerSec = 1/30;
var carPerSec = 1/25;
var solarPerSec = 1/20;
var farmPerSec = 1/15;
var gasPerSec = 1/10;
var capPerSec = 1/5;

var totalNumberOfCarbons = 0;
var totalNumberOfCarbonsSold = 0;
var carbPerSec = 0;

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
var captureBasePrice = 10.00;

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
var prize = 0;

var element = {  
    

  clicker:document.getElementById("clicker"),
  totalCarbNumStat:document.getElementById("totalCarbNumStat"),
  totalCarbonSold:document.getElementById("totalCarbonSold"),
  carbonsPerSec:document.getElementById("carbonsCollecterPerSecond"),
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
  carbonCatcherInventory : document.getElementById("carbonCatcherInventoryNum"),
  treeTooltip: document.getElementById("treeToolTip"),
  carTooltip: document.getElementById("carToolTip"),
  solarTooltip: document.getElementById("solarToolTip"),
  gasTooltip: document.getElementById("gasToolTip"),
  farmTooltip: document.getElementById("farmToolTip"),
  catcherTooltip: document.getElementById("captureToolTip"),
  prize1 : document.getElementById("prize1")



};

element.treeTooltip.setAttribute('data-tooltip', "Trees capture " + treePerSec.toFixed(3) +' carbons per sec' );
element.carTooltip.setAttribute('data-tooltip', "Elec Cars capture " + carPerSec.toFixed(3) +' carbons per sec' );
element.solarTooltip.setAttribute('data-tooltip', "Solar Pan capture " + solarPerSec.toFixed(3) +' carbons per sec' );
element.gasTooltip.setAttribute('data-tooltip', "Green Gas capture " + gasPerSec.toFixed(3) +' carbons per sec' );
element.farmTooltip.setAttribute('data-tooltip', "Frams capture " + farmPerSec.toFixed(3) +' carbons per sec' );
element.catcherTooltip.setAttribute('data-tooltip', "Carbon catcher capture " + capPerSec.toFixed(3) +' carbons per sec' );


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
element.purchaseTree1.onclick = function() {  
  
    document.getElementById("speech2").style.visibility= "hidden";
    
    if(auto_adder.tree == 0) 
    {
        auto_adder.tree = 1/30;
        carbPerSec = carbPerSec + auto_adder.tree;
        treePerSec = treePerSec + auto_adder.tree;
        element.treeTooltip.setAttribute('data-tooltip', "Trees capture " + treePerSec.toFixed(3) +' Carbons per sec!' );

        
    }
    else
    {
        auto_adder.tree += auto_adder.tree;
        carbPerSec = carbPerSec + auto_adder.tree;
        treePerSec = treePerSec + auto_adder.tree;
        element.treeTooltip.setAttribute('data-tooltip', "Trees capture " + treePerSec.toFixed(3) +' Carbons per sec' );


    }
    treePriceCalc();
    button_check();
};

element.purchaseCar1.onclick = function() { 
    if(auto_adder.electric_car == 0) 
    {
        auto_adder.electric_car = 1/25;
        carbPerSec = carbPerSec + auto_adder.electric_car;
        carPerSec = carPerSec + auto_adder.electric_car;
        element.carTooltip.setAttribute('data-tooltip', "Elec Cars capture " + carPerSec.toFixed(3) +' carbons per sec' );

        
    }
    else
    {
        auto_adder.electric_car += auto_adder.electric_car;
        carbPerSec = carbPerSec + auto_adder.electric_car;
        carPerSec = carPerSec + auto_adder.electric_car;
        element.carTooltip.setAttribute('data-tooltip', "Elec Cars capture " + carPerSec.toFixed(3) +' carbons per sec' );

    }
    carPriceClac(); 
    button_check();
};
element.purchaseSolar1.onclick = function() { 
   
    if(auto_adder.solar == 0) 
    {
        auto_adder.solar = 1/20;
        carbPerSec = carbPerSec + auto_adder.solar;
        solarPerSec = solarPerSec + auto_adder.solar;
        element.solarTooltip.setAttribute('data-tooltip', "Solar Pan capture " + solarPerSec.toFixed(3) +' carbons per sec' );

    }
    else
    {
        auto_adder.solar += auto_adder.solar;
        carbPerSec = carbPerSec + auto_adder.solar;
        solarPerSec = solarPerSec + auto_adder.solar;
        element.solarTooltip.setAttribute('data-tooltip', "Solar Pan capture " + solarPerSec.toFixed(3) +' carbons per sec' );

    }
    solarPriceClac();
    button_check();
};
element.purchaseFarm1.onclick = function() {
    if(auto_adder.farm == 0) 
    {
        auto_adder.farm = 1/15;
        carbPerSec = carbPerSec + auto_adder.farm;
        farmPerSec = farmPerSec + auto_adder.farm;
        element.farmTooltip.setAttribute('data-tooltip', "Frams capture " + farmPerSec.toFixed(3) +' carbons per sec' );

        
    }
    else
    {
        auto_adder.farm += auto_adder.farm;
        carbPerSec = carbPerSec + auto_adder.farm;
        farmPerSec = farmPerSec + auto_adder.farm;
        element.farmTooltip.setAttribute('data-tooltip', "Frams capture " + farmPerSec.toFixed(3) +' carbons per sec' );

    }
    farmPricCalc();
    button_check();
};
element.purchaseGas1.onclick = function() {
    if(auto_adder.gas == 0) 
    {
        auto_adder.gas = 1/10;
        carbPerSec = carbPerSec + auto_adder.gas;
        gasPerSec = gasPerSec + auto_adder.gas;
        element.gasTooltip.setAttribute('data-tooltip', "Green Gas capture " + gasPerSec.toFixed(3) +' carbons per sec' );

    }
    else
    {
        auto_adder.gas += auto_adder.gas;
        carbPerSec = carbPerSec + auto_adder.gas;
        gasPerSec = gasPerSec + auto_adder.gas;
        element.gasTooltip.setAttribute('data-tooltip', "Green Gas capture " + gasPerSec.toFixed(3) +' carbons per sec' );

    }
    gasPriceCalc();
    button_check();
};
element.purchaseCapture1.onclick = function() {
    if(auto_adder.capture == 0) 
    {
        auto_adder.capture = 1/5;
        carbPerSec = carbPerSec + auto_adder.capture;
        capPerSec = capPerSec = auto_adder.capture;
        element.catcherTooltip.setAttribute('data-tooltip', "Carbon catcher capture " + capPerSec.toFixed(3) +' carbons per sec' );

    }
    else
    {
        auto_adder.capture += auto_adder.capture;
        carbPerSec = carbPerSec + auto_adder.capture;
        capPerSec = capPerSec = auto_adder.capture;
        element.catcherTooltip.setAttribute('data-tooltip', "Carbon catcher capture " + capPerSec.toFixed(3) +' carbons per sec' );

    }
    capturePriceCalc();
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
totalNumberOfCarbons = (totalNumberOfCarbons + 1);
 carbNum = carbNum + 1;
 carbNumftm = game_state.addCommas(carbNum)
 element.points.innerHTML = "Number Of Carbons: " + carbNumftm.toFixed(0);
 element.totalCarbNumStat.innerHTML = "Total Carbons Collected (All Time): " + totalNumberOfCarbons.toFixed(0);

           
}

setInterval(function(){ 
    
  autoAdd(auto_adder.tree);
  autoAdd(auto_adder.electric_car);
  autoAdd(auto_adder.solar);
  autoAdd(auto_adder.farm);
  autoAdd(auto_adder.gas);
  autoAdd(auto_adder.capture);
    
  button_check();
  cloud_opacity();
  check_achievements();

  timer += 1;
    
 }, 1000);


function autoAdd (autoadderTool) //timer for auto adition of the numbers of carbons  
{   
    var carbNumftm;
    
    if(timer % 1 == 0) 
    {
        
       carbNum = carbNum + autoadderTool;
       carbNumftm = game_state.addCommas(carbNum);
       element.points.innerHTML = "Number Of Carbons: " + carbNumftm.toFixed(0);
       totalNumberOfCarbons = totalNumberOfCarbons + auto_adder.tree;
       element.totalCarbNumStat.innerHTML = "Total Carbons Collected (All Time): " + totalNumberOfCarbons.toFixed(0);
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
        totalNumberOfCarbonsSold = totalNumberOfCarbonsSold + treeBasePrice;
        formatCarb = game_state.addCommas(carbNum);
        element.points.innerHTML = "Number Of Carbons: " + formatCarb.toFixed(0);
        
        
        //update number of carbons needed to buy tree 
        treeBasePrice = game_state.calcPrice(purchaseLevel, treeBasePrice);
        formatPrice = game_state.addCommas(treeBasePrice);
        element.purchaseTree1.innerHTML = "|" + purchaseLevel + "|" + " Tree : unlock on " + formatPrice;
        element.treeInventory.innerHTML = purchaseLevel;
        element.totalCarbonSold.innerHTML = "Total Carbons Sold: " + totalNumberOfCarbonsSold.toFixed(0);
        element.carbonsPerSec.innerHTML = "Carbons Currently Collected per Second: " + carbPerSec.toFixed(3);
       
        
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
            totalNumberOfCarbonsSold = totalNumberOfCarbonsSold + carBasePrice;
            element.totalCarbonSold.innerHTML = "Total Carbons Sold: " + totalNumberOfCarbonsSold;
            formatCarb = game_state.addCommas(carbNum);
            element.points.innerHTML = "Number Of Carbons: " + formatCarb.toFixed(0);
            
            carBasePrice = game_state.calcPrice(carPurchaseLevel, carBasePrice);
            formatPrice = game_state.addCommas(carBasePrice);
            document.getElementById("purchaseCar1").innerHTML = "|" + carPurchaseLevel + "|" + " Car : unlock on " + formatPrice;
            element.carInventory.innerHTML = carPurchaseLevel;
            element.carbonsPerSec.innerHTML = "Carbons Currently Collected per Second: " + carbPerSec.toFixed(3);

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
            totalNumberOfCarbonsSold = totalNumberOfCarbonsSold + solarBasePrice;
            element.totalCarbonSold.innerHTML = "Total Carbons Sold: " + totalNumberOfCarbonsSold;
            formatCarb = game_state.addCommas(carbNum);
            element.points.innerHTML = "Number Of Carbons: " + formatCarb.toFixed(0);
            
            solarBasePrice = game_state.calcPrice(solarPurchaseLevel, solarBasePrice);
            formatPrice = game_state.addCommas(solarBasePrice);
            document.getElementById("purchaseSolar1").innerHTML = "|" + solarPurchaseLevel + "|" + " Solar : unlock on " + formatPrice;
            element.solarInventory.innerHTML = solarPurchaseLevel;
            element.carbonsPerSec.innerHTML = "Carbons Currently Collected per Second: " + carbPerSec.toFixed(3);
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
            totalNumberOfCarbonsSold = totalNumberOfCarbonsSold + farmBasePrice;
            element.totalCarbonSold.innerHTML = "Total Carbons Sold: " + totalNumberOfCarbonsSold;
            formatCarb = game_state.addCommas(carbNum);
            element.points.innerHTML = "Number Of Carbons: " + formatCarb.toFixed(0);
            
            farmBasePrice = game_state.calcPrice(farmPurchaseLevel, farmBasePrice);
            formatPrice = game_state.addCommas(farmBasePrice);
            document.getElementById("purchaseFarm1").innerHTML = "|" + farmPurchaseLevel + "|" +  " Farm : unlock on " + formatPrice;
            element.farmInventory.innerHTML = farmPurchaseLevel;
            element.carbonsPerSec.innerHTML = "Carbons Currently Collected per Second: " + carbPerSec.toFixed(3);
        
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
            totalNumberOfCarbonsSold = totalNumberOfCarbonsSold + gasBasePrice;
            element.totalCarbonSold.innerHTML = "Total Carbons Sold: " + totalNumberOfCarbonsSold;
            formatCarb = game_state.addCommas(carbNum);
            element.points.innerHTML = "Number Of Carbons: " + formatCarb.toFixed(0);
            
            gasBasePrice = game_state.calcPrice(gasPurchaseLevel, gasBasePrice);
            formatPrice = game_state.addCommas(gasBasePrice);
            document.getElementById("purchaseGas1").innerHTML ="|" + gasPurchaseLevel + "|" + " Green Gas : unlock on " + formatPrice;
            element.greengasInventory.innerHTML = gasPurchaseLevel;
            element.carbonsPerSec.innerHTML = "Carbons Currently Collected per Second: " + carbPerSec.toFixed(3);
            
            
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
            totalNumberOfCarbonsSold = totalNumberOfCarbonsSold + captureBasePrice;
            element.totalCarbonSold.innerHTML = "Total Carbons Sold: " + totalNumberOfCarbonsSold;
            formatCarb = game_state.addCommas(carbNum);
            element.points.innerHTML = "Number Of Carbons: " + formatCarb.toFixed(0);
            
            captureBasePrice = game_state.calcPrice(capturePurchaseLevel, captureBasePrice);
            formatPrice = game_state.addCommas(captureBasePrice);
            document.getElementById("purchaseCapture1").innerHTML = "|" + capturePurchaseLevel + "|" +  " Carbon Catcher : unlock on " + formatPrice;
            element.carbonCatcherInventory.innerHTML = capturePurchaseLevel;
            element.carbonsPerSec.innerHTML = "Carbons Currently Collected per Second: " + carbPerSec.toFixed(3);
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

$( document ).ready(function() {
	var audio = $("#ChaChing")[0];
    var audio2 = $("#ClickSound")[0];
	$(".button-to-buy").mousedown(function() {
	  audio.play();
	});
    $(".earth").mousedown(function() {
	  audio2.play();
	});
});


function check_achievements(){
    if(carbNum >= 20 && prize == 0)
    {
        setTimeout(function () { element.prize1.classList.toggle('show');}, 3000);
        element.prize1.classList.toggle('show');
        prize += 1;
    }
};
