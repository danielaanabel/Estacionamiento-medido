function ejecutarMapa() {


    var ubicacionInicial = [-34.491136, -58.724671];
    var map = L.map('mapa').setView(ubicacionInicial, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  

    var comercio1=L.marker([-34.488436, -58.725576]);
    comercio1.addTo(map);
    var comercio2=L.marker([-34.497772, -58.728851]);
    comercio2.addTo(map);
    var comercio3=L.marker([-34.492622, -58.730610]);
    comercio3.addTo(map);
    var comercio4=L.marker([-34.493962, -58.720538]);
    comercio4.addTo(map);
    var comercio5=L.marker([-34.487477, -58.720972]);
    comercio5.addTo(map);
    var comercio6=L.marker([-34.487001, -58.732645]);
    comercio6.addTo(map);
    var comercio7=L.marker([-34.496992, -58.718191]);
    comercio7.addTo(map);

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
  
  