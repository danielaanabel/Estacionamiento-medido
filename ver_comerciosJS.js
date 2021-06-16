function ejecutarMapa() {

    var map = createMap('mapa');
 
    var comercio1=L.marker([-34.488436, -58.725576]).bindPopup("<b>Kiosco Luz!</b><br>abierto de 9 a 19hrs.<br> Hipólito Bouchard 1366");
    var comercio2=L.marker([-34.497772, -58.728851]).bindPopup("<b>Almacen Sarita!</b><br>abierto de 8 a 21hrs.<br> Paso de los Patos & Pasco");
    var comercio3=L.marker([-34.492622, -58.730610]).bindPopup("<b>Locutorio Dandroid!</b><br>abierto de 10 a 18hrs.<br> Padre Stoppler 917");
    var comercio4=L.marker([-34.493962, -58.720538]).bindPopup("<b>Kiosco Ave Fénix!</b><br>abierto de 9 a 19hrs.<br> El Callao 750");
    var comercio5=L.marker([-34.487477, -58.720972]).bindPopup("<b>Libreria Koko!</b><br>abierto de 11 a 17hrs.<br> Juan Francisco Seguí 1214");
    var comercio6=L.marker([-34.487001, -58.732645]).bindPopup("<b>Kiosco Latino!</b><br>abierto de 8 a 22hrs.<br> Luis Vernet 1139");
    var comercio7=L.marker([-34.496992, -58.718191]).bindPopup("<b>Celulares Nirvana!</b><br>abierto de 9 a 19hrs.<br> El Callao 525");

     var cluster = L.markerClusterGroup();
    cluster.addLayers([
        comercio1,
        comercio2,
        comercio3,
        comercio4,
        comercio5,
        comercio6,
        comercio7
     ])

    //  var puntos= ([
    //   L.latLng(-34.489710, -58.737936),
    //   L.latLng(-34.484465, -58.728136),
    //   L.latLng(-34.490211, -58.714997),
    //   L.latLng(-34.498609, -58.730696)
    // ]);
    
    var puntos = [[-34.489710, -58.737936], [-34.484465, -58.728136], [-34.490211, -58.714997], [-34.498609, -58.730696]];
  
    var polygon = L.polygon(puntos, {color: "#32a844"});
    
    // var myIcon = L.icon({ // ajustes para los iconos
    //     iconUrl: 'leaflet/images/punto_verde.png',
    //     iconSize: [33, 40],
    //     iconAnchor: [16, 40],
    //     popupAnchor:  [1, -40]
    // });

    // var LeafIcon = L.Icon.extend({
    //     options: {
    //         shadowUrl: 'leaf-shadow.png',
    //         iconSize: [33, 40],
    //         iconAnchor: [16, 40],
    //         popupAnchor:  [1, -40]
    //     }
    // });

    var zonas = L.layerGroup([polygon]);

    var comercios = L.layerGroup([cluster]);

     var overlayMaps = {
      "Puntos de venta": comercios,
      "Zonas": zonas
     };

   
    L.control.layers(overlayMaps).addTo(map);
    
    //cluster.addTo(map);

   
    //map.addLayer(cluster);

}
  
  