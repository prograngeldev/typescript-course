interface Animal {
    tipo: string;
    raza?: string; // Los signos de interrogacion hara la propiedad opcional
    edad: number;
    vacuna: boolean;
}

const perro: Animal = {
    tipo: "Canino",
    raza: "Pitbull",
    edad: 3,
    vacuna: true,
}

const vaca: Animal = {
    tipo: "Bovino",
    edad: 4,
    vacuna: false
}

function animalInfo(animal: Animal): void {
    let vacunado: string;
    
    if (animal.vacuna) {
        vacunado = "si";
    } else {
        vacunado = "no";
    }

    console.log(`El animal es un ${animal.tipo} de ${animal.edad} años de edad y ${vacunado} esta vacunado`);
}

animalInfo({tipo: "Felino", edad: 2, vacuna: true});
animalInfo(perro);
animalInfo(vaca);