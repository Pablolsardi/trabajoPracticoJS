// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:

// input: Hola mundo
// Output: oauo


const frase = prompt('Ingrese una frase para averiguar sus vocales:');
const lengthFrase = frase.length;

for (let i = 0; i < lengthFrase; i++) {
    let char = frase.charAt(i);

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||
        char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
        document.write(char);
    }
}
