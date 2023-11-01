// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 

// input: 20


// Output: El 20 es divisible por 2.

let number = parseInt(prompt("Ingrese un número:"));

if(number%2 === 0 || number%3 === 0 || number%5 === 0 || number%7 === 0){
    alert(number + " es divisible por 2 o 3 o 5 o 7");
}else{
    alert(number + " no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}