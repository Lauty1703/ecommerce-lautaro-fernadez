/*
//ejercicio de iteracion de hola pedido por el usuario
let cantHola;

cantHola=parseInt(prompt('ingrese la cantidad de veces que quiere ver un "HOLA" por pantalla'));

for (var i =1; i <= cantHola; i++) {
    alert("#"+i +" Hola" );
}


/*Ejercicio: Visualizar los números pares en entre los valores dado*/
/*
let numero=0;
let numeroInicio;
numero=parseInt(prompt('le diremos todos los numeros pares a partir del numero que nos de:'));

numFin=parseInt(prompt('hasta que numero quiere ver, por favor el numero tiene que ser mayor a la primera iteracion que ya se guardo:'));
for(let numeroInicio=numero; numero<=numFin ; numero=numero+2 ) {
  console.log( numero );
}*/
//ejercicio bart
/*
let nombreGuardado='bart';
let nombre;

nombre=prompt('ingrese un nombre por favor');

if (nombre===nombreGuardado) {
  alert('Fui yo');
  
}
else{
  alert('yo no fui');
}*/

//ejercicio sobre booleanos
/*
let y='y';
let Y='Y';
let entrada;

entrada=prompt('precione una tecla');

if(entrada==Y||entrada==y){
  alert('correcto');
}
else{
  alert('incorrecto')
}*/
//ejercicio de personajes
/*
let entrada;
let homero=1;
let marge=2;
let bart=3;
let lisa=4;

entrada= parseInt(prompt('ingrese un numero entre en "1" y "4" para ver un personaje'));

if (entrada==homero) {
  alert('tu personaje es HOMERO');
}
else if(entrada==marge){
  alert('tu personaje es marge');
}
else if(entrada==bart){
  alert('tu personaje es bart');
}
else if(entrada==lisa){
  alert('tu personaje es lisa');
}
else{
  alert('el numero que tecleaste no es valido')
}*/

//ejercicio de presupuesto
/*
let entrada = 0;

entrada = parseInt(prompt('ingrese un numero'));

if (entrada <= 1000) {
  alert('presupuesto bajo')

}
else if (entrada >= 1001 && entrada <= 3000) {
  alert('presupuesto medio')
}
else if (entrada >= 3001 && entrada <= 4000) {
  alert('presupuesto alto')
}

else {
  alert("ERROR");
}
*/
/*
let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " + "2) " + producto2 + " " + "3) " + producto3 + " " +"4) " + producto4;
  alert(heladera);
} else {
    alert("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}

*/
/*let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let i = 1; i<= cantidad; i++) {
    alert('# '+i+ texto);
}*/

// let num = 0;
// let text = ' lado'

// num = parseInt(prompt('ingrese un valor'));

// for (let i = 1; i <= num; i++) {
//   if (num <= 4) {
//     alert('#' + i + text);

//   }
//   else if (num > 4) {
//     alert('error')
//     break
//   }
// }
/*
function validacion(cadena){
  return cadena != '' ;
  
}
let entrada =  prompt("INGRESAR CADENA");
while (entrada != 'ESC') {
  alert(validacion(entrada));
  entrada = prompt("INGRESAR CADENA");
}
*/
/*
MJEINGRESO();

let resultado;

let num1 = parseFloat(prompt('ingrese su nota del primer trimestes'));
let num2 = parseFloat(prompt('ingrese su nota del segundo trimeste'));
let num3 = parseFloat(prompt('ingrese su nota del tercer trimeste'));



resultado = promedio(num1,num2,num3);

if (resultado >= 7) {
  alert('felicidades has terminado el año con el promedio de: ' + resultado)
}
else if (resultado < 7) {
  alert('lamentamos que no hallas podido promocionar la materia tu promedio fue tenes que dar el final: ' + resultado)
  
}


function MJEINGRESO() {
    alert('conozca su promedio, acontinuacion le solicitaremos las notas de los siguientes trimestres');
  }

function promedio(num1, num2, num3){
   resu = (num1 + num2 + num3) / 3;
   return resu;
}*/

/*
MJEINGRESO();

let resultado;

let num1 = parseFloat(prompt('ingrese su nota del primer trimestes'));
let num2 = parseFloat(prompt('ingrese su nota del segundo trimeste'));
let num3 = parseFloat(prompt('ingrese su nota del tercer trimeste'));




if (num1 <= 10&&num2 <= 10 &&num3 <= 10 &&  num1 >= 7&&num2 >= 7 &&num3 >= 7 ) {
  //alert('felicidades has terminado el año con el promedio de: ' + resultado)
  resultado = promedio(num1,num2,num3);
  alert('felicidades has terminado el año con el promedio de: ' + resultado)
}
else if(num1 < 7&&num2 < 7 &&num3 < 7 &&  num1 >= 4&&num2 >= 4 &&num3 >= 4){
  resultado = promedio(num1,num2,num3);
  alert('te falto poco pero tenes que ir a finales tu promedio fue de: ' + resultado) 
}else{
  resultado = promedio(num1,num2,num3);
  alert('tenes que recursar la materia tu promedio fue de: '+resultado)
}

function MJEINGRESO() {
    alert('conozca su promedio, acontinuacion le solicitaremos las notas de los siguientes trimestres');
  }

function promedio(num1, num2, num3){
   resu = (num1 + num2 + num3) / 3;
   return resu;
}

*/
/*
class personaje{
  constructor(nombre,apellido,edad,){
      this.nombre=nombre
      this.apellido=apellido
      this.edad=edad;
  }


}
let ingreso='';
let cantPer=parseInt(prompt('ingrese la cantida de personajes a crear'));

for (let i = 0; i < cantPer; i++) {
   let persojes=new personaje(prompt('ingrese el nombre'),
                              prompt('ingrese el apellido'),
                              parseInt(prompt('edad ')));
    ingreso+=`nombre: ${persojes.nombre},
    apellido ${persojes.apellido},
    edad: ${persojes.edad}`

}
console.log(ingreso)
*/
const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
  
]

const resultado = cursos.filter((el) => el.nombre === "ReactJS")
const resultado2 = cursos.filter((el) => el.precio === 1400)

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined


const actualizado = cursos.map((el) => {
  return {
      nombre: el.nombre,
      precio: el.precio * 1.25
  }
})

console.log(actualizado)
/* [
   { nombre: 'Javascript', precio: 18750 },
   { nombre: 'ReactJS', precio: 27500 },
   { nombre: 'AngularJS', precio: 27500 },
   { nombre: 'Desarrollo Web', precio: 20000 }
] */
