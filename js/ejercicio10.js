// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 

// input: 20


// Output: El 20 es divisible por 2.

let number = parseInt(prompt("Ingrese un número:"));
let bandera = 0;

if(number%2 === 0){
    alert(number + " es divisible por 2");
    bandera=1;
}
if(number%3 === 0){
    alert(number + " es divisible por 3");
    bandera=1;
}
if(number%5 === 0){
    alert(number + " es divisible por 5");
    bandera=1;
}
if(number%7 === 0){
    alert(number + " es divisible por 7");
    bandera=1;
}

if(bandera===0){
    alert(number + " no es divisible por 2, 3, 5, ni 7");
}