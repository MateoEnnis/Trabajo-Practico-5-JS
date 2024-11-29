
const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));


const operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");


let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Error: División por cero no permitida.";
    }
} else {
    resultado = "Operación no válida.";
}

alert(`El resultado de la operación es: ${resultado}`);
