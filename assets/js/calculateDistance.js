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

            initMap(coordsToDisplay, origin1);

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

function renderDistances(sortedDestinationsList) {

    var ul = [
        '<div class="timeline-block" data-aos="fade-down">\n' +
        '                                <div class="timeline-icon"> <span class="icon icon-bg icon-s mb-20"><i class="et-location-pin"></i></span> </div>\n' +
        '                                <!-- timeline-icon -->\n' +
        '\n' +
        '                                <div class="timeline-content box box-bg bg-white box-arrow left" style="">\n' +
        '                                    <h5>Distanta in kilometrii de la locatia dumneavostra</h5>\n' +
        '                                </div>\n' +
        '                                <!-- timeline-content -->\n' +
        '                            </div>'
    ];
    for (var i = 0; i < sortedDestinationsList.length; i++) {

        var divContent2 = '<div class="timeline-block "> ' +
            '   <div class="timeline-icon">' +
            '     <span class="icon icon-bg icon-xs" style="font-size: 16px;">' 
             +   sortedDestinationsList[i].distanceDuration.duration.text +
            '     </span>' +
            '   </div>' +
            '   <div class="timeline-content box box-bg bg-white box-arrow left">' +
            '     <h5>' + sortedDestinationsList[i].locationName + '</h5>' +
            '     <p class="mb-20">' + sortedDestinationsList[i].address + '</p>' +
            '     <ul class="unordered-list blue mb-0">' +
            '       <li>' + sortedDestinationsList[i].contact.phone + '</li>' +
            '        <li><a href="mailto:' + sortedDestinationsList[i].contact.email + '">'+sortedDestinationsList[i].contact.email+'</a></li>' +
            '     </ul>' +
            '   </div>' +
            '</div>';



        ul.push(divContent2);

    }

    var HTML_ul =  ul.join() ;

    $("#showDistances").html(HTML_ul);
}