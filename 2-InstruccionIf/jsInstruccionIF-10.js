/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
		var calificacion;	
	calificacion = Math.floor(Math.random() * 10) + 1;
	/*
	Prueba de escritorio
Ingreso 9 mensaje = "EXCELENTE"
Ingreso 6 mensaje = "APROBÓ"
Ingreso 2 mensaje = "Vamos, la proxima se puede"
	*/
	console.log(calificacion);

	if(calificacion>8)
	{
		mensaje = "EXCELENTE";
	}
	else
	{
		if(calificacion>3)
		{
			mensaje = "APROBÓ";
		}
		else
		{
			mensaje = "Vamos, la proxima se puede";
		}
	}
	alert(mensaje);

}
//Mariano Sebastián Velloso