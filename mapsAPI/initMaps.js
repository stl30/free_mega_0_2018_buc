function initMaps(){

    var destinationB = {
        locationName: "LocB",
        lat: 44.46071, lng: 26.0742, distanceDuration: {
            duration: {
                value: 0
            }
        }
    };
    
    var destinationA = { locationName: "LocA", lat: 44.44095, lng: 26.10002, distanceDuration: {} };
    var destinationC = {locationName: "LocB", lat: 44.45302, lng: 26.09957, distanceDuration: {} };
    
    var destinationsList = [destinationC, destinationA, destinationB];


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