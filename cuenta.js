$(document).ready(function(){

    $("#salir").click( function() {
        localStorage.removeItem("nombre");
        localStorage.clear();
        location.reload();
    });

    var ubicacionInicial = [-34.484453,-58.730143];
    var map = L.map('mapa').setView(ubicacionInicial, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(ubicacionInicial).bindPopup("Su vehículo con estacionamiento activo <br> se encuentra aquí").addTo(map);

});
