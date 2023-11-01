// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 

// input: 15 , 3
// Output: El 15 es el número más grande

let number1 = parseInt(prompt("Ingrese el primer número:"));
let number2 = parseInt(prompt("Ingrese el segundo número:"));

if(number1>number2){
    document.write("El número más grande es " + number1);
}else if(number2>number1){
    document.write("El número más grande es " + number2);
}else{
    document.write("Los números son iguales");
}