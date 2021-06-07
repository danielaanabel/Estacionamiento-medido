$(document).ready(function() {
    
    var correo = localStorage.getItem('usuario');
    
    if ( correo !=  null ) {
        //Notar los accesos al DOM, tomamos los elementos del DOM y les damos un comportamiento
        alert("login exitoso")
     

        $("#saludo").append("Bienvenido "+ correo);
    }else{
        $("#salir").hide();
      
    }
    $("#salir").click( function() {
        localStorage.removeItem('usuario');
        localStorage.clear();
        location.reload();
    });
}); 

function saludar() {
    var nombre = $("#usuario").val();
    localStorage.setItem('usuario', nombre);
}