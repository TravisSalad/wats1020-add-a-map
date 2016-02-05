$(document).ready(function() {

var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href=<a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
  subdomains: ['otile1', 'otile2', 'otile3', 'otile4']
});

var drawLayer = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
  subdomains: ['otile1','otile2','otile3','otile4']
});

var paradise = L.marker([46.7858, -121.7376]).bindPopup("<b>Paradise Valley</b><br>Elevation 5,400 ft."),
    crystal = L.marker([46.9353181, -121.47469790000002]).bindPopup("<b>Crystal Mountain Resort</b><br>Elevation 3,912 ft."),
    peak = L.marker([46.8529, -121.7604]).bindPopup("<b>Mt Rainier Peak</b><br>Elevation 14,409 ft.");
    longmire = L.marker([46.7494, -121.8092]).bindPopup("<b>Longmire</b><br>Elevation 2,761 ft.")

var markers = L.layerGroup([paradise, crystal, peak, longmire]);

var mapLayers = {
  "Satellite": satLayer,
  "Map View": drawLayer,
  "Open Street Maps": osm,
}

var overlayMaps = {
  "Markers": markers
}

var map = L.map('map-container').setView([46.852, -121.760], 10);

L.control.layers(mapLayers, overlayMaps).addTo(map);
satLayer.addTo(map);


$('#about a').click(function(el) {
  el.preventDefault();
  $(this).tab('show');
});

});
