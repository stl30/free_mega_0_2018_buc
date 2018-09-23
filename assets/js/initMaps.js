var scriptLoaded=false;
function initMaps(){


    var destinationsList = [];

    for(var i=0; i< window.storeData.length; i++){
        destinationsList.push(
            {
                locationName: window.storeData[i].dealer_name,
                lat: parseFloat(window.storeData[i].latitude),
                lng: parseFloat(window.storeData[i].longitude),
                address: window.storeData[i].address,
                shopStatus : window.storeData[i].shopStatus,
                message : window.storeData[i].message,
                schedule: {
                    monday: window.storeData[i].monday,
                    tuesday: window.storeData[i].tuesday,
                    wednesday: window.storeData[i].wednesday,
                    thursday: window.storeData[i].thursday,
                    friday: window.storeData[i].friday,
                    saturday: window.storeData[i].saturday,
                    sunday: window.storeData[i].sunday
                },
                contact: {
                    email: window.storeData[i].email,
                    phone: window.storeData[i].phone
                }
            }
        )
    }


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
    if(!scriptLoaded){
        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBxL4QF3L0Y3VPkVIHWrgFzQvMujGzQv8M&callback=initMaps", function (storeData) {

        });
        scriptLoaded = true;
    }

});