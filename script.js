/* ========================= Leaflet Map ========================= */
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* ===== Marker ===== */
var myIcon = L.icon({
  iconUrl: "icon.png",
  iconSize: [66, 88],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});
L.marker([51.5, -0.09], { icon: myIcon }).addTo(map);

/* ===== Popup ===== */
var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);

L.tileLayer(
  "https://api.maptiler.com/maps/uk-openzoomstack-light/{z}/{x}/{y}.png?key=8zsRMBn3tij55lsu8vNA"
).addTo(map);
