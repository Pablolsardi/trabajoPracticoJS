// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

let number = parseInt(prompt("Ingrese un número:"));

if(number%2 === 0){
    alert(number + " es divisible por 2");
}else{
    alert(number + " no es divisible por 2");
}