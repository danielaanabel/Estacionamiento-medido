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
//---------------------------------------------------------de aca para abajo es lugares para estacionar
     var puntos= ([
        L.latLng(-34.484957,-58.726786),
        L.latLng(-34.483360,-58.730272),
        L.latLng(-34.487044,-58.737139),
        L.latLng(-34.497686,-58.728847),
        L.latLng(-34.490258,-58.714778),
        L.latLng(-34.488977,-58.717864),
        L.latLng(-34.490666,-58.721035),
        L.latLng(-34.488411,-58.722823),
        L.latLng(-34.492055,-58.729584),
        L.latLng(-34.488178,-58.732676),
        L.latLng(-34.484959,-58.726795)
    ]);
    var polygonVerde = L.polygon(puntos, {color: "#30fc4f"});

    var polygonAzul =L.polygon([
        L.latLng(-34.485019,-58.726833),
        L.latLng(-34.488186,-58.732638),
        L.latLng(-34.492033,-58.729585),
        L.latLng(-34.488383,-58.722814),
        L.latLng(-34.490655,-58.721033),
        L.latLng(-34.488966,-58.717879),
        L.latLng(-34.484974,-58.726776),
        L.latLng(-34.484992,-58.726809)      
    ]);

    var LeafIcon = L.Icon.extend({
            options: {
                iconSize: [33, 40],
                iconAnchor: [16, 40],
                popupAnchor:  [1, -40]
            }
        });


    var blueIcon = new LeafIcon({iconUrl: 'leaflet/images/punto_azul.png'});
    var greenIcon = new LeafIcon({iconUrl:'leaflet/images/punto_verde.png'});
    
    var lugar1=L.marker([-34.484771,-58.728169], {icon: greenIcon}).bindPopup("<b>Lugar Libre</b><br> código: 9you");
    var lugar2=L.marker([-34.484453,-58.730143], {icon: greenIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: vbxo");
    var lugar3=L.marker([-34.486009,-58.730873], {icon: greenIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: ds6w");
    var lugar4=L.marker([-34.486681,-58.732203], {icon: greenIcon}).bindPopup("<b>Lugar Libre</b><br> código: ceai");
    var lugar5=L.marker([-34.487530,-58.733920], {icon: greenIcon}).bindPopup("<b>Lugar Libre</b><br> código: ivsq");
    var lugar6=L.marker([-34.490218,-58.732804], {icon: greenIcon}).bindPopup("<b>Lugar Libre</b><br> código: v87i");
    var lugar7=L.marker([-34.492482,-58.731045], {icon: greenIcon}).bindPopup("<b>Lugar Libre</b><br> código: i3i9");
    var lugar8=L.marker([-34.494781,-58.729242], {icon: greenIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: t7yt");
    var lugar9=L.marker([-34.492836,-58.725208], {icon: greenIcon}).bindPopup("<b>Lugar Libre</b><br> código: d8x4");
    var lugar10=L.marker([-34.490324,-58.723320], {icon: greenIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: ncae");
    
    var lugar11=L.marker([-34.486186,-58.726538], {icon: blueIcon}).bindPopup("<b>Lugar Libre</b><br> código: u95h");
    var lugar12=L.marker([-34.487389,-58.726624], {icon: blueIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: zetn");
    var lugar13=L.marker([-34.487601,-58.729500], {icon: blueIcon}).bindPopup("<b>Lugar Libre</b><br> código: peb7");
    var lugar14=L.marker([-34.487813,-58.723234], {icon: blueIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: 48fa");
    var lugar15=L.marker([-34.489723,-58.726667], {icon: blueIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: 9you");
    var lugar16=L.marker([-34.489794,-58.729628], {icon: blueIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: vbxo");
    var lugar17=L.marker([-34.490572,-58.728899], {icon: blueIcon}).bindPopup("<b>Lugar Libre</b><br> código: ds6w");
    var lugar18=L.marker([-34.490926,-58.728684], {icon: blueIcon}).bindPopup("<b>Lugar Ocupado</b><br> código: ceai");
    
    
    var zonas_estacionamiento = L.markerClusterGroup();
    zonas_estacionamiento.addLayers([
      lugar1,lugar2,lugar3,lugar4,lugar5,lugar6,lugar7,lugar8,lugar9,
      lugar10,lugar11,lugar12,lugar13,lugar14,lugar15,lugar16,lugar17,lugar18
     ])


    var zonas = L.layerGroup([polygonVerde, polygonAzul, zonas_estacionamiento]);

    var comercios = L.layerGroup([cluster]);

     var overlayMaps = {
      "Puntos de venta": comercios,
      "Zonas": zonas
     };

   
    L.control.layers(overlayMaps).addTo(map);
    
    //cluster.addTo(map);

   
    //map.addLayer(cluster);

}
  
  