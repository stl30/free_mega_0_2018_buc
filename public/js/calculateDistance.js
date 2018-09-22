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

            renderDistances(sortedDestinationsList);

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
                sortedDestinationsList[i].lng,
                sortedDestinationsList[i].address
            ]
        )
    }

    return coordsToDsipaly;
}

function renderDistances(sortedDestinationsList){

    var ul = [];
    for(var i = 0; i<sortedDestinationsList.length; i++){
        var li = '<strong>' + sortedDestinationsList[i].locationName + '</strong>'+
                '<br>'+
                '<em>' + sortedDestinationsList[i].distanceDuration.duration.text +'</em>' +
                '<br>' +
                sortedDestinationsList[i].address +
                '<br>' +
                sortedDestinationsList[i].contact.email +
                '<br>' +
                sortedDestinationsList[i].contact.phone;

        ul.push('<li>'+li+'</li>');

    }

    var HTML_ul = '<ul>' + ul.join() + '</ul>';

    $("#showDistances").html(HTML_ul);
}