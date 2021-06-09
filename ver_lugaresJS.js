function ejecutarMapa() {

    var ubicacionInicial = [-34.491136, -58.724671];
    var map = L.map('mapa').setView(ubicacionInicial, 15);
  
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.polygon([
      L.latLng(-34.489710, -58.737936),
      L.latLng(-34.484465, -58.728136),
      L.latLng(-34.490211, -58.714997),
      L.latLng(-34.498609, -58.730696)
    ]).addTo(map);

  }
  