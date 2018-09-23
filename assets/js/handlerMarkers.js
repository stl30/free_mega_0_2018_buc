var myCurrentLocation;
var map;
var markers = [];

var locations = [];

function initMap(coordsToDisplay, origin1) {

    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;

    infoWindow = new google.maps.InfoWindow;
    locations = coordsToDisplay;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {

            myCurrentLocation = origin1;

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: myCurrentLocation
            });

            directionsDisplay.setMap(map);

            calculateAndDisplayRoute(directionsService, directionsDisplay, origin1.lat, origin1.lng, coordsToDisplay[0][1], coordsToDisplay[0][2]);

            infoWindow.setPosition(origin1);
            infoWindow.setContent('<strong>You are here!<strong');
            infoWindow.open(map);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

/**
 *
 * @param browserHasGeolocation
 * @param infoWindow
 * @param pos
 */
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);

}

/**
 * Show markers on map from current selection
 */
function showSelectedMarkers() {
    var count;

    for (count = 0; count < locations.length; count++) {

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map,
            title: locations[count][0]
        });

        //Attach click event to the marker.
        (function (marker) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + marker.title + "</div>");
                infoWindow.open(map, marker);
            });
        })(marker);

        markers.push(marker);
    }
}


/**
 * Sets the map on all markers in the array
 * @param map
 */
function setMapOnAll(map) {
    for (var j = 0; j < markers.length; j++) {
        markers[j].setMap(map);
    }
}

/**
 * Removes the markers from the map, but keeps them in the array
 */
function clearMarkers() {
    setMapOnAll(null);
}


function calculateAndDisplayRoute(directionsService, directionsDisplay, sartLat, startLng, entLat, endLng) {
    directionsService.route({
        origin: {lat: parseFloat(sartLat), lng: parseFloat(startLng)},  // Haight.
        destination: {lat: parseFloat(entLat), lng: parseFloat(endLng)},  // Ocean Beach.
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            console.log('Directions request failed due to ' + status);
        }
    });
}