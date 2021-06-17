$(document).ready(function(){

    var leido = localStorage.getItem("nombre");
    
    if ( leido !=null && leido !="") {
        window.open("cuenta.html","_parent","width=120,height=300,scrollbars=NO");
    }

    $("#botonsubmit").click(function(){
        var usuario = $("#usuario").val();
        localStorage.setItem("nombre", usuario);
    });
   
});
