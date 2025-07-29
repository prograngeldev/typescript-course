class Animal {
    tipo: string;
    raza: string;
    edad: number;
    private vacunado: boolean;

    constructor(tipo: string, raza: string, edad: number, vacunado: boolean) {
        this.tipo = tipo;
        this.raza = raza;
        this.edad = edad;
        this.vacunado = vacunado;
    }

    comer(): void {
        console.log(`${this.tipo} de raza ${this.raza} está comiendo.`);
    }
}

const perro = new Animal("Perro", "Labrador", 5, true);
perro.comer();