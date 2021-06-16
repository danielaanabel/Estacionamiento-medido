var vehiculo = new Object();
var bootstrap = function() {   

    // $("#salir").click( function() { //fsdfasdfnsdajfhsdh
    //     localStorage.removeItem("patente");
    //     localStorage.clear();
    //     location.reload();
    // });

    var heroku = 'https://infraccionesweb.herokuapp.com/api/';
    var urlInfracciones = '/infracciones/';
    var urlTiposInfraccion = 'tiposInfraccion/';
    var patente_id ="ABC123"; //localStorage.getItem("patente");
    var urlAcarreo = '/acarreos/';
   

    fetch(heroku + patente_id + urlInfracciones)  //pedimos la ubicacion al servidor
    .then(data => data.json()) //parseamos la respuesta a un JSON
    .then(data => {data['infracciones'].forEach(function(infraccion) {
        fetch(heroku + urlTiposInfraccion + infraccion.tipoInfraccion)
        .then( data => data.json())
        .then(data => {

            var li = $('<div id="infraccion">')
            .append('Infracción nro: ').append(infraccion.id).append('<br>')
            .append(infraccion.fechaHoraRegistro).append('<br>')
            .append(infraccion.direccionRegistrada).append('<br>')
            .append(data.tipo.descripcion).append('<br>')
            .append(infraccion.montoAPagar).append('<br>')
            $("#container").append(li);
           
        })
        if(infraccion.existeAcarreo == true){
            fetch(heroku + patente_id + urlAcarreo + infraccion.id)
            .then(data => data.json())
            .then(data => {
                vehiculo.deposito = data.acarreo.deposito;
                console.log(vehiculo.deposito.nombre);
                
            let deposito = $('<p>')
            .append('Su vehículo ha sido remolcado al deposito: ').append('<br>')
            .append(vehiculo.deposito.nombre).append('<br>')
            .append(vehiculo.deposito.direccion).append('<br>')
            .append(vehiculo.deposito.telefono).append('<br>')
            .append(vehiculo.deposito.horarios).append('<br>')
            $("#infraccion").append(deposito);
            })
        }

    });//aca termina foreach

    });  
}

$(bootstrap);