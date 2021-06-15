
var bootstrap = function() {

    //Para el ejemplo
    var heroku = 'https://infraccionesweb.herokuapp.com/api/';
    var urlInfracciones = '/infracciones/';
    var urlTiposInfraccion = 'tiposInfraccion/';
    var patente_id = 'ABC123';
    var urlAcarreo = '/acarreos/';



    fetch(heroku + patente_id + urlInfracciones)  //pedimos la ubicacion al servidor
    .then(data => data.json()) //parseamos la respuesta a un JSON
    .then(data => {data['infracciones'].forEach(function(infraccion) {
        fetch(heroku + urlTiposInfraccion + infraccion.tipoInfraccion)
        .then( data => data.json())
        .then(data => {
            // console.log(infraccion.tipoInfraccion)
            infraccion.tipoInfraccion = data.tipo.descripcion
            // console.log(infraccion.tipoInfraccion)
        })
        if(infraccion.existeAcarreo == true){
            fetch(heroku + patente_id + urlAcarreo + infraccion.id)
            .then(data => data.json())
            .then(data => {
                infraccion.deposito = data.acarreo.deposito
                console.log(infraccion.deposito)
                console.log(infraccion.deposito.ubicacion.lat)
            })
        }
    })



});

}
$(bootstrap)
