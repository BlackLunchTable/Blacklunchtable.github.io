//BAM-layers.js - for adding layers to the application
//this is added *after* the map objects have all been created
//layer for all the iowa cannon works
//we are going to read a file, create geojson objects, then add those objects to a layer
//style for the nodes. Can be expanded if needed
//listen for timeline changes and modify the map as needed
$('#timeStart').on('input propertychange change keyup paste', function() {
    changeMapFromTimeLine(map, main_locations, $('#timeStart').val(), $('#timeEnd').val(), placesHolder, peopleHolder);
});

$('#timeEnd').on('input propertychange change keyup paste', function() {
    changeMapFromTimeLine(map, main_locations, $('#timeStart').val(), $('#timeEnd').val(), placesHolder, peopleHolder);
});


var dynamicPlacesStyle = {
    radius: 3,
    fillColor: "white",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7
};


var placesHolder = [];
var placesList = {};
var masterPlacesList = [];
var placeTimeHolder = [];
var peopleHolder = [];



d3.json('data/iclaw.json', function(error, json) {

    var layerNodes = json.nodes.map(function(d) {

        //now we make a .json structure of just the people

        var personjsonFeature = {
            'type': 'Person',
            'properties': {
                'bamId': d.attributes.bam_id,
                'abbreviation': d.attributes.abbreviation,
                'author_latin': d.attributes.author_latin,
                'author_english': d.attributes.author_english,
                'century': d.attributes.century,
                'start': d.attributes.start,
                'end': d.attributes.end,
                'date_of_birth': d.attributes.date_of_birth,
                'date_of_death': d.attributes.date_of_death,
                'floruit': d.attributes.floruit,
                'late_antique': d.attributes.late_antique,
                'christian': d.attributes.christian,
                'id': d.attributes.pleiades_id,
                'location': d.attributes.title
            }
        };
        peopleHolder.push(personjsonFeature);


        if (isNaN(d.attributes.reprlong) == false && d.attributes.reprlong != '') {

            //should check if it is holder first, increment if it is, add a new one if it is not
            //the logic here is that each place should be represented by a single object. Needed data can be filtered
            //this is where we pull out the data

            var geojsonFeature = {
                'type': 'Feature',
                'properties': {
                    'id': d.attributes.pleiades_id,
                    'label': d.attributes.title,
                    //default values for just displaying things
                    'start': -100,
                    'end': 100,
                    'count': 1
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [d.attributes.reprlong, d.attributes.reprlat]
                }
            };

            if (inArray(d.attributes.pleiades_id, placesHolder) == false) {

                placesHolder.push(geojsonFeature);
                placesList[d.id] = geojsonFeature;
            }
            //hold all the features
            masterPlacesList.push(geojsonFeature);

            //now that we have people and places, we need to assign the pleiades_id and dates those people use to a data structure, along with their BAM ID
            var peoplePlacer = {
                'id': d.attributes.pleiades_id,
                'bamId': d.attributes.bam_id,
                'start': d.attributes.start,
                'end': d.attributes.end
            };

            placeTimeHolder.push(peoplePlacer);
        }
    });

    //now that the objects are built, add outside the main loop.

    main_locations = new L.geoJson(placesHolder, {
                onEachFeature: onEachFeature,
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, dynamicPlacesStyle);
            }
        })
        .bindTooltip(function(layer) {
                //need to make this a config variable
                var toolTipHtml = '';
                toolTipHtml = toolTipHtml + '<b>' + layer.feature.properties.label + '</b><br /> Number of Works: ' + layer.feature.properties.count;
                return toolTipHtml; //merely sets the tooltip text
            }, {
                opacity: 0.9
            } //then add your options
        );

    //some styling due to count. Mess around and see what is visually arresting.
    //need to make this a variable
    main_locations.eachLayer(function(layer) {
        if (layer.feature.properties.count <= 3) {
            layer.setStyle({
                radius: 3
            });
        } else if (layer.feature.properties.count <= 40) {
            layer.setStyle({
                radius: layer.feature.properties.count
            });
        } else {
            layer.setStyle({
                radius: 40
            });
        }
    });
    
        bamLayerControl.addOverlay(main_locations, 'ICLAW Work Locations');
		 main_locations.addTo(map);
    map.fitBounds(main_locations.getBounds());

    function onEachFeature(feature, layer) {
        //bind click
        layer.on('click', function(e) {
            makeBamPopup(e.target.feature, map);
        });
    }
});


function changeMapFromTimeLine(map, inputLayer, start, end, placesHolder, peopleHolder) {

    placesHolderTemp = [];

    //remove all markers from the layer
    inputLayer.eachLayer(function(layer) {
        inputLayer.removeLayer(layer);
    });

    map.removeLayer(inputLayer);

    //now need to parse the centuries into years. What we are going to do is take all of the people who are in the range, then get the pleiades IDs from them.
    for (var i = 0; i < peopleHolder.length; i++) {
        peopleHolder[i].properties.count = '1';
        var tempYearStart = peopleHolder[i].properties.start.split('/');
        var tempYearEnd = peopleHolder[i].properties.end.split('/');
        //cast the string as int. This took me a while to remember...
        var yearStart = parseInt(tempYearStart[2]);
        var yearEnd = parseInt(tempYearEnd[2]);

        //now check to see if the item is within the year parameters
        if ((yearStart >= start && yearStart <= end) || (yearStart <= start && yearEnd >= start)) {
            if (inArray(peopleHolder[i].properties.id, placesHolderTemp) == false) {
                // placesHolder.push(masterPlacesList[i]);
                //now need to build the place from our data
                for (var k = 0; k < placesHolder.length; k++) {
                    if (placesHolder[k].properties.id == peopleHolder[i].properties.id) {
                        tempFeature = placesHolder[k];
                        tempFeature.properties.count = 1;
                        placesHolderTemp.push(tempFeature);
                    }
                }
            } else {
                for (var k = 0; k < placesHolderTemp.length; k++) {
                    if (placesHolderTemp[k].properties.id == peopleHolder[i].properties.id) {
                        placesHolderTemp[k].properties.count++;
                    }
                }
            }
        }
    }
    //now add to layer
    for (var i = 0; i < placesHolderTemp.length; i++) {
        inputLayer.addData(placesHolderTemp[i]);
    }
    //return to style - should probably make this a fucntion
    inputLayer.eachLayer(function(layer) {

        if (layer.feature.properties.count <= 3) {
            layer.setStyle({
                radius: 3
            });
        } else if (layer.feature.properties.count <= 40) {
            layer.setStyle({
                radius: layer.feature.properties.count
            });
        } else {
            layer.setStyle({
                radius: 40
            });
        }
    });

    map.addLayer(inputLayer);
}


            function makeBamPopup(feature, map) {
console.log(feature);
                //get the data for the table

                var htmlForBox = '<center><table><tr>';
                var pleiadesPopupContent = '<td><a href="http://pleiades.stoa.org/places/' + feature.properties.id + '" target="_blank"><div id="wmsPleiades' + feature.properties.id + '" class="popupBaseButton popupPleiadesButton" title="View ' + feature.properties.label + ' as ' + feature.properties.id + ' at Pleiades"></div></a></td>';
                var pelagiosPopupContent = '<td><a href="http://pelagios.org/peripleo/pages/places/http%3A%2F%2Fpleiades.stoa.org%2Fplaces%2F' + feature.properties.id + '" target="_blank"><div id="wmsAwmc' + feature.properties.id + '" class="popupBaseButton popupPelagiosButton" title="View ' + feature.properties.label + ' at Pelagios"></div></a></td></table></center>';

                var titleForBox = '<h1><center>' + feature.properties.label + '</h1></center>' + htmlForBox;

                var authorPopupContent = '<br /><h1>Authors located at ' + feature.properties.label + '</h1>' + pleiadesPopupContent + pelagiosPopupContent + popupTable;

        
                //set here for popup external to map attribute-contents


                var attributeHtml = htmlForBox + authorPopupContent;


                $("#attributeBoxContents").html(attributeHtml);
                $("#attributeBox").show();
                var popupTableDataTable = $('#popupTable').DataTable({
                    "columns": [{
                        "data": "bamId"
                    }, {
                        "data": "abbreviation"
                    }, {
                        "data": "author_latin"
                    }, {
                        "data": "author_english"
                    }, {
                        "data": "century"
                    },{
                        "data": "location"
                    }],
                    dom: 'Bfrtip',
                    "bAutoWidth": false,
                    "sPaginationType": "full_numbers",
                    "pageLength": 5,
                    buttons: [
                        'copy', 'csv', 'print'
                    ]
                });

                buildInternalPopupPersonTable(feature.properties.id, peopleHolder, popupTableDataTable, $('#timeStart').val(), $('#timeEnd').val());
                popupTableDataTable.draw();
            }
            
            
            
function buildInternalPopupPersonTable(placeId, personList, popupTableDataTable, start, end) {

    popupTableDataTable.clear();
    for (var i = 0; i < personList.length; i++) {

        //if there is a person at the location, add that person to the table
        if (personList[i].properties.id === placeId) {
            var tempYearStart = personList[i].properties.start.split('/');
            var tempYearEnd = personList[i].properties.end.split('/');
            //cast the string as int. This took me a while to remember...
            var yearStart = parseInt(tempYearStart[2]);
            var yearEnd = parseInt(tempYearEnd[2]);

            //now check to see if the item is within the year parameters
            if ((yearStart >= start && yearStart <= end) || (yearStart <= start && yearEnd >= start)) {

                popupTableDataTable.row.add({

                    "bamId": personList[i].properties.bamId,
                    "abbreviation": personList[i].properties.abbreviation,
                    "author_latin": personList[i].properties.author_latin,
                    "author_english": personList[i].properties.author_english,
                    "century": personList[i].properties.century,
                    "date_of_birth": personList[i].properties.date_of_birth,
                    "date_of_death": personList[i].properties.date_of_death,
                    "floruit": personList[i].properties.floruit,
                    "late_antique": personList[i].properties.late_antique,
                    "christian": personList[i].properties.christian,
                    "location": personList[i].properties.location

                });
            }
        }
    }
}