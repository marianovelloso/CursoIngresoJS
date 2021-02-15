/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
//txtIdNombre
var elNombre;
elNombre = prompt("Ingrese su nombre", "Ejemplo: Romina");
txtIdNombre.value = elNombre;


}
/*
Entradas: prompt - id.value o document.getElementById("....").value
Procesos: concatenar (+)
Salidas: console.log
