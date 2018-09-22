(function getJsonKey(){
    $.getJSON("apiKey.json", function(json) {
   MAPS_CONFIG = json;
   console.log("MAPS_CONFIG",MAPS_CONFIG); 

});})()


