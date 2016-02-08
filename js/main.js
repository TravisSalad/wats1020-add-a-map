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
    peak = L.marker([46.8529, -121.7604]).bindPopup("<b>Mt Rainier Peak</b><br>Elevation 14,409 ft."),
    longmire = L.marker([46.7494, -121.8092]).bindPopup("<b>Longmire</b><br>Elevation 2,761 ft.");

var markers = L.layerGroup([paradise, crystal, peak, longmire]);

var paradiseInn = L.marker([46.7855911, -121.73671260000003]).bindPopup('<b>Paradise Inn</b><br><a href="http://www.mtrainierguestservices.com/accommodations/paradise-inn">website</a>'),
    threeBears = L.marker([46.7425697, -121.92176119999999]).bindPopup('<b>Three Bears Lodge</b><br><a href="http://www.rainierlodging.com/">website</a>'),
    stoneCreek = L.marker([46.743187, -121.92326700000001]).bindPopup('<b>Stone Creek Lodge</b><br><a href="http://www.stonecreeklodge.net/">website</a>'),
    theLodgeNear = L.marker([46.744588, -121.92504400000001]).bindPopup('<b>The Lodge Near Mt Rainier</b><br><a href="http://www.rainierlodge.com/">website</a>'),
    mountHaven = L.marker([46.7487083, -121.92782199999999]).bindPopup('<b>Mounthaven Resort</b><br><a href="http://www.mounthaven.com">website</a>'),
    stormKing = L.marker([46.752514, -121.93916100000001]).bindPopup('<b>Storm King Spa and Cabins</b><br><a href="http://www.stormkingspa.com">website</a>'),
    copperCreek = L.marker([46.756431, -121.96061400000002]).bindPopup('<b>Copper Creek Inn and Restaurant</b><br><a href="http://www.coppercreekinn.com">website</a>');

var hotels = L.layerGroup([paradiseInn, threeBears, stoneCreek, theLodgeNear, mountHaven, stormKing, copperCreek]);

var mapLayers = {
  "Satellite": satLayer,
  "Map View": drawLayer,
  "Open Street Maps": osm,
}

var overlayMaps = {
  "Markers": markers,
  "Hotels": hotels
}

var map = L.map('map-container').setView([46.852, -121.760], 10);

L.control.layers(mapLayers, overlayMaps).addTo(map);
satLayer.addTo(map);


$('#about a').click(function(el) {
  el.preventDefault();
  $(this).tab('show');
});

});
