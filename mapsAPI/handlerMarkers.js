var myCurrentLocation;
var map;
var markers = [];

var locations = [];

function initMap(coordsToDisplay,origin1) {

    infoWindow = new google.maps.InfoWindow;
    locations = coordsToDisplay;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {

            // var pos = {
            //     lat: position.coords.latitude,
            //     lng: position.coords.longitude
            // };

            myCurrentLocation = origin1;

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: myCurrentLocation
            });

            infoWindow.setPosition(origin1);
            infoWindow.setContent('Location found.');
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

        markers.push(marker);
    }
}


/**
 * Sets the map on all markers in the array
 * @param map
 */
function setMapOnAll(map) {

    console.log("1", markers)
    for (var j = 0; j < markers.length; j++) {
        markers[j].setMap(map);
    }

    console.log("2", markers)

}

/**
 * Removes the markers from the map, but keeps them in the array
 */
function clearMarkers() {
    setMapOnAll(null);
}


/**
 * Shows any markers currently in the array
 */
function redisplayPreviousMarkers() {
    setMapOnAll(map);
}

/**
 * Deletes all markers in the array by removing references to them
 */
function deleteMarkers() {
    clearMarkers();
    markers = [];
}