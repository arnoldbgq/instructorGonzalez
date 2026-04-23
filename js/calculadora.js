document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("formCalculadora").addEventListener("submit", function(e){
        e.preventDefault();// evita que el formulario me vote de la pagina

        let nume1 = parseFloat(document.getElementById("numero1").value);
        let nume2 = parseFloat(document.getElementById("numero2").value);
        let operacion = document.getElementById("operacion").value;
        let resultado = document.getElementById("resultado");

        if(isNaN(nume1)||isNaN(nume2)){
            resultado.textContent = "Ingrese números válidos";
        }
    });

})