/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
txtIdLargo
txtIdAncho
txtIdRadio
*/

function Rectangulo () 
{
var largo;
var ancho;
var cantidad;

largo=txtIdLargo.value;
ancho=txtIdAncho.value;

largo= parseInt(largo);
ancho= parseInt(ancho);
cantidad=parseInt(cantidad);


alambre= (2*largo + 2*ancho)*3;

alert("La cantidad de alambre que se necesita es" + " "+ alambre + " "+ "metros");

}
function Circulo () 
{
	var radio;

	radio=txtIdRadio.value;

	radio=parseInt(radio);

	radio=(2*3.14*radio)*3

alert("La cantidad de alambre que se necesita es de" + " " + radio + "metros");
}
function Materiales () 
{
	var base;
	var altura;
	var area;
	var cantidadDecemento;
	var cantidadDeCal;

	base=txtIdLargo.value;
	altura=txtIdAncho.value;


base=parseInt(base);
altura=parseInt(altura);
area= base*altura;

	cantidadDecemento= area*2;
	cantidadDeCal= area*3;

	alert("La cantidad de cemento que necesitas es de:" + " " + cantidadDecemento);
	alert("La cantidad de cal que neceistas es de:" + " " + cantidadDeCal);


}
/*Mariano Sebastián Velloso*/