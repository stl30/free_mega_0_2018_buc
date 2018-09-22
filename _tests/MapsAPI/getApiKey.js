(function getJsonKey(){
    $.getJSON("apiKey.json", function(json) {
   MAPS_CONFIG = json;
   console.log("MAPS_CONFIG",MAPS_CONFIG); 

(function insertAPIKeycript(){
    var generateScripTag = '<script src="https://maps.googleapis.com/maps/api/js?key=' + MAPS_CONFIG.APIKey + '"&callback=' + "initMapCallback" +'"async defer></script>';
    $("#APIScript").html(generateScripTag);  
    debugger;  
})();

});})()


