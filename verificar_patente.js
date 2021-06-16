
var verificarPatente = function() {

    var patente_id;
 

    $("#boton").click(function(){
        patente_id = $('#patente').val();
        localStorage.setItem("patente",patente_id);
        if(patente_id == 'ABC123' || patente_id == 'AAA000' || patente_id == 'BBB111'){
            window.open("mostrar_deposito.html","_parent","width=120,height=300,scrollbars=NO");
        }
        else if (patente_id.length < 1){
            document.getElementById("no-tiene").innerHTML = `<p> Debe ingresar una patente ${patente_id}</p>`;
        }
        else{
            document.getElementById("no-tiene").innerHTML = `<p>No existen infracciones para la patente ${patente_id}</p>`;
        }

 });
   
}

$(verificarPatente);
