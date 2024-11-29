
const listaDeCompras = ["Pan", "Coca Cola", "Huevos", "Manzana", "Tomates"];


console.log("Lista de compras:");
listaDeCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});