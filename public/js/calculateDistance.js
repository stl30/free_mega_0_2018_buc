var origin = { lat: 44.477516, lng: 26.103049 };

var destinationB = {
    locationName: "LocB",
    lat: 44.46071, lng: 26.0742, distanceDuration: {
        duration: {
            value: 0
        }
    }
};

var destinationA = { locationName: "LocA", lat: 44.44095, lng: 26.10002, distanceDuration: {} };
var destinationC = { locationName: "LocB", lat: 44.45302, lng: 26.09957, distanceDuration: {} };

var destinationsList = [destinationC, destinationA, destinationB];

var travelMode = 'DRIVING';
///https://developers.google.com/maps/documentation/javascript/directions#TravelModes


var sortedDestinationsList;

var coordsToDisplay;


function compare(dest1, dest2) {

    if (dest1.distanceDuration.duration.value < dest2.distanceDuration.duration.value) {
        return -1;
    }
    if (dest1.distanceDuration.duration.value > dest2.distanceDuration.duration.value) {
        return 1;
    }
    return 0;
}

function getTimeUntill(destinationsList, origin1) {

    var service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
        origins: [origin1],
        destinations: destinationsList,
        travelMode: travelMode,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status !== 'OK') {
            alert('Error was: ' + status);
        } else {

            for (var i = 0; i < destinationsList.length; i++) {
                destinationsList[i].distanceDuration = response.rows[0].elements[i];
            }

            sortedDestinationsList = destinationsList.sort(compare);

            coordsToDisplay = getCoordsToDisplay(sortedDestinationsList);

            initMap(coordsToDisplay,origin1);

        }
    });
}


function getCoordsToDisplay(sortedDestinationsListArg) {

    var coordsToDsipaly = [];

    for (var i = 0; i < sortedDestinationsListArg.length; i++) {
        coordsToDsipaly.push(
            [
                sortedDestinationsList[i].locationName,
                sortedDestinationsList[i].lat,
                sortedDestinationsList[i].lng
            ]
        )
    }

    return coordsToDsipaly;
}

