function ejecutarMapa() {


    var ubicacionInicial = [-34.491136, -58.724671];
    var map = L.map('mapa').setView(ubicacionInicial, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  

   

    var comercio1=L.marker([-34.488436, -58.725576]);
    comercio1.addTo(map).bindPopup("<b>Kiosco Luz!</b><br>abierto de 9 a 19hrs.<br> Hipólito Bouchard 1366");
    var comercio2=L.marker([-34.497772, -58.728851]);
    comercio2.addTo(map).bindPopup("<b>Almacen Sarita!</b><br>abierto de 8 a 21hrs.<br> Paso de los Patos & Pasco");
    var comercio3=L.marker([-34.492622, -58.730610]);
    comercio3.addTo(map).bindPopup("<b>Locutorio Dandroid!</b><br>abierto de 10 a 18hrs.<br> Padre Stoppler 917");
    var comercio4=L.marker([-34.493962, -58.720538]);
    comercio4.addTo(map).bindPopup("<b>Kiosco Ave Fénix!</b><br>abierto de 9 a 19hrs.<br> El Callao 750");
    var comercio5=L.marker([-34.487477, -58.720972]);
    comercio5.addTo(map).bindPopup("<b>Libreria Koko!</b><br>abierto de 11 a 17hrs.<br> Juan Francisco Seguí 1214");
    var comercio6=L.marker([-34.487001, -58.732645]);
    comercio6.addTo(map).bindPopup("<b>Kiosco Latino!</b><br>abierto de 8 a 22hrs.<br> Luis Vernet 1139");
    var comercio7=L.marker([-34.496992, -58.718191]);
    comercio7.addTo(map).bindPopup("<b>Celulares Nirvana!</b><br>abierto de 9 a 19hrs.<br> El Callao 525");

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

    cluster.addTo(map);
    //map.addLayer(cluster);

}
  
  