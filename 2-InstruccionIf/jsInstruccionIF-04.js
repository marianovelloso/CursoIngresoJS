/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	 
	 if(edad>12 && edad<18)
	{		

	 	alert("Es adolescente");
	}
	 else
	{
	 	alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN
//Mariano Sebastián Velloso