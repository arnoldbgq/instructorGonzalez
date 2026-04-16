// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Hola mundo desde JavaScript");
//alert nos sirve para mostrarle un alert al usuario
alert("Hola Mundo. Esto es una Alerta");

function cambiarCarita(){
    document.getElementById("carita").src="images/sad.png";
    alert("Por que tas triste");
}
function feliz(){
    document.getElementById("carita").src="images/happy.jpg";
    
    document.getElementById("TituloJS").textContent="Ejemplo de Caritas";
}





