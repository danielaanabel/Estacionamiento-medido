
var verificarPatente = function() {

    
    var heroku = 'https://infraccionesweb.herokuapp.com/api/';
    var urlInfracciones = '/infracciones/';
    var patente_id = localStorage.getItem("patente");

    var patente_id;
 
    $("#boton").click(function(){
        patente_id = $('#patente').val();
        localStorage.setItem("patente",patente_id);
        if (patente_id.length > 1){ //Si se ingresa una patente se pide al servidor
            fetch(heroku +  localStorage.getItem("patente") + urlInfracciones)//pedimos las infracciones para esa patente
            .then(data => data.json())
            .then(data => { 
                console.log(data.infracciones);
                if(data.infracciones.length === 0){ // nos fijamos que existan infracciones para esa patente
                    document.getElementById("no-tiene").innerHTML = `<p>No existen infracciones para la patente ${patente_id}</p>`;
                }
                else{
                    window.open("mostrar_deposito.html","_parent","width=120,height=300,scrollbars=NO"); //si existen las mostramos
                }
            })
        }
        else{
            document.getElementById("no-tiene").innerHTML = `<p> Debe ingresar una patente ${patente_id}</p>`;// si no ingreso nada le decimos
        }

 });
   
}

$(verificarPatente);
