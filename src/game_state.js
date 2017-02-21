module.exports = {
  sayHelloInEnglish: function() {
    return "HELLO";
  },

  sayHelloInSpanish: function() {
    return "Hola";
  },
    
addCommas: function(value) //source http://stackoverflow.com/
{
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
},

calcPrice: function(nOwned, baseCost) 
{
    var temp;
    var numberOwned = nOwned;
    var value = Math.pow(1.15, numberOwned);
    temp = Math.round(baseCost * value);
    return temp;
},  
    
    clickFunc: function() {
    // draw first level path design
    document.getElementById("bgimg").style.display = "none";
    document.getElementById("game").style.display = "block";

   

  },
    
    infoFunc: function(){
    
    document.getElementById("bgimg").style.display = "none";
    document.getElementById("infoPage").style.display = "block";
    
},
    
    startAtInfo: function(){
    
    document.getElementById("infoPage").style.display = "none";
    document.getElementById("game").style.display = "block";
    
}
    
    
};