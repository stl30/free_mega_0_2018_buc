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

    $('#nrOfAvailableShops').html(coordsToDsipaly.length);

    return coordsToDsipaly;
}

function isLocationOpened(sechedule) {

    var d = new Date();
    var n = d.getDay();

    var weekday = new Array(7);
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    weekday[0] = "sunday";

    var dayAsString = weekday[n];

    return sechedule[dayAsString] !== "- - -" && sechedule[dayAsString] !== "inchis" && sechedule[dayAsString] !== "closed";


}

function renderDistances(sortedDestinationsList) {

    var ul = [
        '<div class="timeline-block" data-aos="fade-down">\n' +
        '                                <div class="timeline-icon"> <span class="icon icon-bg icon-s mb-20"><i class="fas fa-car"></i></i></span> </div>\n' +
        '                                <!-- timeline-icon -->\n' +
        '\n' +
        '                                <div class="timeline-content box box-bg bg-white box-arrow left" style="">\n' +
        '                                    <h5>În câte minute ajung la magazinul meu preferat?</h5>\n' +
        '                                </div>\n' +
        '                                <!-- timeline-content -->\n' +
        '                            </div>'
    ];

    for (var i = 0; i < sortedDestinationsList.length; i++) {

        var isOpened = isLocationOpened(sortedDestinationsList[i].schedule);

        var closedMessage = !isOpened? '<p class="text-danger">Magazinul este închis</p>' : '<p class="text-success">Magazinul este deschis</p>';

        var divContent2 = '<div class="timeline-block "> ' +
            '   <div class="timeline-icon">' +
            '     <span class="icon icon-bg icon-xs" style="font-size: 16px;">'
            + getTimeInMinutes(sortedDestinationsList[i].distanceDuration.duration.value) +
            '     </span>' +
            '   </div>' +
            '   <div class="timeline-content box box-bg bg-white box-arrow left">' +
            '     <h6>' + sortedDestinationsList[i].locationName + '</h6>' +
                  closedMessage +
            '     </br>' +
            '     <p><i class="fas fa-map-marked-alt"></i>' + ' ' + sortedDestinationsList[i].address +
            '     </p>' +
            '     <ul class="unordered-list mb-0">' +
            '       <li> <i class="fas fa-phone"> </i> <a href="tel:">' + ' ' + sortedDestinationsList[i].contact.phone + '</a></li>' +
            '        <li> <i class="fas fa-envelope"> </i> <a href="mailto:' + sortedDestinationsList[i].contact.email + '">' + ' ' +   sortedDestinationsList[i].contact.email + '</a></li>' +
            '     </ul> </br>' +
            '     <h7><i class="fas fa-clock"></i>' + ' ' + 'Orar de funcționare</h7>' +
            '     <ul class="unordered-list blue mb-0">' +
            '       <li>Luni: ' + sortedDestinationsList[i].schedule.monday + '</li>' +
            '       <li>Marți: ' + sortedDestinationsList[i].schedule.tuesday + '</li>' +
            '       <li>Miercuri: ' + sortedDestinationsList[i].schedule.wednesday + '</li>' +
            '       <li>Joi: ' + sortedDestinationsList[i].schedule.thursday + '</li>' +
            '       <li>Vineri: ' + sortedDestinationsList[i].schedule.friday + '</li>' +
            '       <li>Sâmbătă: ' + sortedDestinationsList[i].schedule.saturday + '</li>' +
            '       <li>Duminică: ' + sortedDestinationsList[i].schedule.sunday + '</li>' +
            '     </ul>' +
            '   </div>' +
            '</div>';



        ul.push(divContent2);

    }

    var HTML_ul = ul.join(' ');

    $("#showDistances").html(HTML_ul);
}


function getTimeInMinutes(durationInSeconds){
    return Math.round(durationInSeconds/60);
}
