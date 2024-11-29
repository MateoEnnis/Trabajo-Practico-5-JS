
const auto = {
    marca: "Tesla",
    modelo: "Model S",
    color: "Rojo",
    motor: "Eléctrico",
    potencia: "1020 HP",
    velocidadMaxima: "322 km/h",
    precio: "$85,000",
    anio: 2024
};


console.log(auto);


document.write(`
    <p>El auto ${auto.marca} ${auto.modelo} es uno de los autos más potentes en el mercado, alcanzando una velocidad de ${auto.velocidadMaxima} </p>
`);