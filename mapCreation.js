/******************************************************************************
 * Función para crear un mapa.
 */
 var createMap = function(nodeId) {
    // Ubicación de la UNGS.
    var ubicacionInicial = [-34.491136, -58.724671];

    // Creación del componente mapa de Leaflet.
    var map = L.map(nodeId).setView( ubicacionInicial, 15);

    // Agregamos los Layers de OpenStreetMap.
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    return map;
}
