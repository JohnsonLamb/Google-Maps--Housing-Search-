//Variables
var _startPosition ={lat:60.1699,lng:24.9384}; //Starting in Helsinki. Possibility for the user to later define the startpoint
var _map; //declared globally in case I need to use somewhere else in the code.

loadScript();

$( document ).ready(function() {
	
	

}); //Document ready


$( window ).on( "load", function() { 

/* --------------- Autocomplete Text Box Code --------------- */

//Setting up the Search Box
var _input = $('#searchTextField')[0];//assigns the text box with the id=searchTextField to the variable _input
//options to restric the search. In this case it will be restricted to Finland
var _searchOptions = { 
  componentRestrictions: {country: 'fi'}
};

autocomplete = new google.maps.places.Autocomplete(_input,_searchOptions);

var infowindow = new google.maps.InfoWindow(); //creates the infowindow object
var infowindowContent = $('#infowindow-content')[0]; //specifies the div where the address info will be inserted
infowindow.setContent(infowindowContent);

//creates the marker that will appear when an adress is selected
var marker = new google.maps.Marker({
			map: _map,
			anchorPoint: new google.maps.Point(0, -29)
			});
			
//adds a listener to the autocomplete to detect when the adress searched has changed.
autocomplete.addListener('place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace(); //gets the adress information
    if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
    }
    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
        _map.fitBounds(place.geometry.viewport);
        } else {
            _map.setCenter(place.geometry.location);
            _map.setZoom(17);  // Zooms in on the adress
        }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
        address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
           ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(_map, marker);
});

/* --------------- Autocomplete Text Box Code --------------- */

}); //window LOAD



//function that puts the map on the "map" div and centers it on the _startPosition coordinaties.
function initMap() {
    //_map = new google.maps.Map(document.getElementById('map'), {
    _map = new google.maps.Map($("#map")[0], {
    center: _startPosition,
    zoom: 10
    });	
}


//adds the API key to the body element and allows to mask the API key
function loadScript() {
  var script = document.createElement('script');
  var _myKey = config.MY_KEY; //variable that contains the API key that is stored in the config.js file
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _myKey + '&libraries=places&callback=initMap';
  document.head.appendChild(script);
}



	