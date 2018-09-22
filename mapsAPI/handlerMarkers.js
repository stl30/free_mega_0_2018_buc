// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
var vodafoneShop;
var map;
var markers = [];

var locations = [
    ['Magazin Vodafone - Bucuresti Mihalache', 44.46071, 26.0742, 3],
    ['Magazin Vodafone - Bucuresti Magheru', 44.44095, 26.10002, 2],
    ['Magazin Vodafone - Bucuresti Stefan cel Mare', 44.45302, 26.09957, 1]
];

function initMap() {
    vodafoneShop = {lat: 44.45302, lng: 26.09957}; //FIXME this will be "myCurrentLocation"

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: vodafoneShop
    });
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