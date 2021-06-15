function ejecutarMapa() {

    var map = createMap('mapa');
  
    L.polygon([
      L.latLng(-34.489710, -58.737936),
      L.latLng(-34.484465, -58.728136),
      L.latLng(-34.490211, -58.714997),
      L.latLng(-34.498609, -58.730696)
    ]).addTo(map);

  }
  