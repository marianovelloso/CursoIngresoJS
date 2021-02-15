function mostrar()
{
var mes;

mes = txtIdMes.value;

switch(mes)
{
	case "Febrero":
	alert("Este mes no tiene más de 29 días");
	break;
	default:
	alert("Este mes tiene 30 o más días");
}


}//FIN DE LA FUNCIÓN
/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
txtIdMes*/