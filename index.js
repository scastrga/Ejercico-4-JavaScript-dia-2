// Crear un array de objetos con 6 personas cada persona tiene las propiedades edad(numero) y nombre (string) y sexo (string)

//  Devuelve por consola un array que contenga las mujeres mayores de edad sin usar filter ni map, usando forEach y condiciones

var arrayUsu = [
  { name: "Jurgen", sexo: "Hombre", age: 19 },
  { name: "Virgolini", sexo: "Hombre", age: 21 },
  { name: "Simon", sexo: "Hombre", age: 28 },
  { name: "Alfredo", sexo: "Hombre", age: 30 },
  { name: "Cris", sexo: "Mujer", age: 20},
  { name: "Pepe", sexo: "Hombre", age: 22 }
];

var arrayOrder = [];

arrayUsu.forEach(function(element) {
  if (element.sexo == "Mujer" && element.age >= 18)
  arrayOrder.push(element);
});

console.log(arrayOrder);