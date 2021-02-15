/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edad;
	edad= txtIdEdad.value;
	var nombre;
 nombre = txtIdNombre.value;
 var apellido;
 apellido = prompt("Ingrese su apellido","Aquí");
	alert("Usted se llama" + " " + nombre + " " + apellido + " "+ "y tiene" + " " + edad + " " + "años");
}

