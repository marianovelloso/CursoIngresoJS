/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
var edadPersona;
	var estadoCivilPersona;

	edadPersona = txtIdEdad.value;
	edadPersona = parseInt(edadPersona);

	estadoCivilPersona = estadoCivil.value;

	if(edadPersona > 18 && estadoCivilPersona == "Soltero")
	{
alert("Es soltero y no es menor");
	}	

}
//FIN DE LA FUNCIÓN - Mariano Sebastián Velloso//
/*txtIdEdad
estadoCivil*/