function initMaps(){

    var destinationsList = [];

    for(var i=0; i< window.storeData.length; i++){
        destinationsList.push(
            {
                locationName: window.storeData[i].dealer_name,
                lat: parseFloat(window.storeData[i].latitude),
                lng: parseFloat(window.storeData[i].longitude)
            }
        )
    }

    var destinationB = {
        locationName: "LocB",
        lat: 44.46071, lng: 26.0742, distanceDuration: {
            duration: {
                value: 0
            }
        }
    };
    

    var origin1 = { lat: 44.477516, lng: 26.103049 }; //some default location

    //infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            origin1 = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    }


    getTimeUntill(destinationsList,origin1);

}

$(document).on( "renderMap", function() {

    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBxL4QF3L0Y3VPkVIHWrgFzQvMujGzQv8M&callback=initMaps", function (storeData) {

     });

});