var Animal = /** @class */ (function () {
    function Animal(tipo, raza, edad, vacunado) {
        this.tipo = tipo;
        this.raza = raza;
        this.edad = edad;
        this.vacunado = vacunado;
    }
    Animal.prototype.comer = function () {
        console.log("".concat(this.tipo, " de raza ").concat(this.raza, " est\u00E1 comiendo."));
    };
    return Animal;
}());
var perro = new Animal("Perro", "Labrador", 5, true);
perro.comer();
