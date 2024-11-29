
const minutos = parseFloat(prompt("Ingrese un número de minutos:"));


const segundos = minutos * 60;
const horas = minutos / 60;


alert(`El valor ingresado equivale a:
Segundos: ${segundos}
Horas: ${horas.toFixed(1)}`);