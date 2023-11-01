// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 

// input: 15 , 3, 9


// Output: El 15 es el número más grande

let number1 = parseInt(prompt("Ingrese el primer número:"));
let number2 = parseInt(prompt("Ingrese el segundo número:"));
let number3 = parseInt(prompt("Ingrese el tercer número:"));

if(number1>=number2 && number1>=number3){
    document.write("El número más grande es " + number1);
}else if(number2>=number1 && number2>=number3){
    document.write("El número más grande es " + number2);
}else if(number3>=number2 && number3>=number1){
    document.write("El número más grande es " + number3);
}