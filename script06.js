
const precioDolares = parseFloat(prompt("Ingrese el precio del producto en dólares:"));


const precioPesos = precioDolares * 1130;


const iva = precioPesos * 0.21;


const precioFinal = precioPesos + iva;


alert(`El precio del producto es:
Precio en pesos (sin IVA): $${precioPesos}
IVA (21%): $${iva}
Precio final con IVA: $${precioFinal}`);