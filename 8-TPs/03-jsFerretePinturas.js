/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//txtIdTemperatura//
function FahrenheitCentigrados () 
{
	var Fahrenheit
	var centigrados

	temperatura=txtIdTemperatura.value

	Fahrenheit= parseInt(Fahrenheit);
	centigrados= parseInt(centigrados);

	temperaturaC= (Fahrenheit - 32)* 5/9;

	alert("La temperatura en centígrados es de:" + " " + temperaturaC + "grados");
}

function CentigradosFahrenheit () 
{
	
}
