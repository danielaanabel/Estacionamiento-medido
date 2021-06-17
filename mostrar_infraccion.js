var vehiculo = new Object();
var bootstrap = function() {   

    var heroku = 'https://infraccionesweb.herokuapp.com/api/';
    var urlInfracciones = '/infracciones/';
    var urlTiposInfraccion = 'tiposInfraccion/';
    var patente_id = localStorage.getItem("patente");
    var urlAcarreo = '/acarreos/';
   

    fetch(heroku + patente_id + urlInfracciones)  //pedimos la ubicacion al servidor
    .then(data => data.json()) //parseamos la respuesta a un JSON
    .then(data => {data['infracciones'].forEach(function(infraccion) {
        fetch(heroku + urlTiposInfraccion + infraccion.tipoInfraccion)
        .then( data => data.json())
        .then(data => {

            var li = $('<div id="infraccion">')
            .append('<b>Infracción nro: </b>').append(infraccion.id).append('<br>')
            .append(infraccion.fechaHoraRegistro).append('<br>')
            .append('<b>Dirección: </b>').append(infraccion.direccionRegistrada).append('<br>')
            .append('<b>infracción tipo: </b>').append(data.tipo.descripcion).append('<br>')
            .append('<b>monto a abonar: </b>').append(infraccion.montoAPagar).append('<br>')
            $("#container").append(li);
           
        })
        if(infraccion.existeAcarreo == true){
            fetch(heroku + patente_id + urlAcarreo + infraccion.id)
            .then(data => data.json())
            .then(data => {
                vehiculo.deposito = data.acarreo.deposito;
                console.log(vehiculo.deposito.nombre);
                
            let deposito = $('<p>')
            .append('<b>Su vehículo ha sido remolcado al deposito: </b>').append('<br>')
            .append(vehiculo.deposito.nombre).append('<br>')
            .append(vehiculo.deposito.direccion).append('<br>')
            .append(vehiculo.deposito.telefono).append('<br>')
            .append(vehiculo.deposito.horarios).append('<br>')
            $("#infraccion").append(deposito);
            

            let mapaid = $('<div id="mapid">');
            $("#container").append(mapaid);
            

            var ubicacionInicial = vehiculo.deposito.ubicacion;
            var map = L.map('mapid').setView(ubicacionInicial, 15);
            console.log(ubicacionInicial);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker(ubicacionInicial).bindPopup("Su vehículo se encuentra aquí").addTo(map);
            })
        }

    });

    });  
}

$(bootstrap);
