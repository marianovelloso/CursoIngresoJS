/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;

	productoUno=txtIdPrecioUno.value;
	productoDos=txtIdPrecioDos.value;
	productoTres=txtIdPrecioTres.value;

	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);

	suma = productoUno + productoDos + productoTres;

	alert("La suma de los productos es:"+" "+suma);
	
	}
	/*
	var precioUno
    var precioDos
    var precioTres
    var resultado
    var respuesta

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    resultado=precioUno+precioDos+precioTres;

    respuesta=("Resultado: ")+resultado

    alert (respuesta);
    */
	
function Promedio () 
{
var productoUno;
	var productoDos;
	var productoTres;
	var promedio;

	productoUno=txtIdPrecioUno.value;
	productoDos=txtIdPrecioDos.value;
	productoTres=txtIdPrecioTres.value;

	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);

	promedio = (productoUno + productoDos + productoTres) / 3;
alert("El promedio de los productos es:"+" "+ promedio);
}
function PrecioFinal () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var precioFinal;

productoUno=txtIdPrecioUno.value;
	productoDos=txtIdPrecioDos.value;
	productoTres=txtIdPrecioTres.value;

productoUno=parseInt(productoUno);
productoDos=parseInt(productoDos);
productoTres=parseInt(productoTres);
precioFinal= (productoUno + productoDos + productoTres) + (productoUno + productoDos + productoTres) * 21/100

alert("El precio final de los productos es:"+" "+precioFinal);
}
/*Mariano Sebastián Velloso*/
/*txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres*/