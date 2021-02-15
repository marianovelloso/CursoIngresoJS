function mostrar()
{
	//tomo el mes
	var mes;
	mes = txtIdMes.value;
	switch(mes)
	{
		case "Febrero":
		alert("Este mes tiene 28 días o más en caso de ser bisiesto");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Este mes tiene 30 días");
		break;
		default:
		alert("Este mes tiene 31 días");
	}
	
	



}/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
txtIdMes*/