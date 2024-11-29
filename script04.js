
let a = parseFloat(prompt("Ingrese el valor de a:"));
let b = parseFloat(prompt("Ingrese el valor de b:"));


document.write(`<p>Valores iniciales:</p>`);
document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);


let temp = a;
a = b;
b = temp;


document.write(`<p>Valores intercambiados:</p>`);
document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
