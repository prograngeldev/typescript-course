var perro = {
    tipo: "Canino",
    raza: "Pitbull",
    edad: 3,
    vacuna: true,
};
var vaca = {
    tipo: "Bovino",
    edad: 4,
    vacuna: false
};
function animalInfo(animal) {
    var vacunado;
    if (animal.vacuna) {
        vacunado = "si";
    }
    else {
        vacunado = "no";
    }
    console.log("El animal es un ".concat(animal.tipo, " de ").concat(animal.edad, " a\u00F1os de edad y ").concat(vacunado, " esta vacunado"));
}
animalInfo({ tipo: "Felino", edad: 2, vacuna: true });
animalInfo(perro);
animalInfo(vaca);
