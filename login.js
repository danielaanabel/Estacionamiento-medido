$(document).ready(function(){


   
    var leido = localStorage.getItem("nombre");
    
    if ( leido !=null && leido !="") {
        alert("login exitoso")
        $("#salir").show();
    }
    else{
        $("#salir").hide();
    }

    $("#botonsubmit").click(function(){
        var usuario = $("#usuario").val();
        localStorage.setItem("nombre", usuario);
    });

    $("#salir").click( function() {
        localStorage.removeItem("nombre");
        localStorage.clear();
        location.reload();
    });

   
});
