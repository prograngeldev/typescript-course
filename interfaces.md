# Interface

En TypeScript, una interface se utiliza para definir la estructura que debe tener un objeto, especificando sus propiedades y los tipos de datos correspondientes. Si intentamos crear un objeto con una propiedad que no está en la interface, o usamos un tipo de dato incorrecto, TypeScript mostrará un error.

También podemos usar una interface para tipar los parámetros de una función. Si luego intentamos pasar un parámetro que no cumple con la estructura definida por la interface, TypeScript también nos alertará.

Todos las propiedades definidas en la interface son obligatorias a la hora de crear un objeto, a no ser que coloquemos un signo de interrogacion en la propiedad, eso la hara opcional.

## Sintaxis

```ts
interface Animal {
  tipo: string;
  raza?: string; // Los signos de interrogacion haran la propiedad opcional
  edad: number;
  vacuna: boolean;
}

const perro: Animal = {
  tipo: "Canino",
  raza: "Pitbull",
  edad: 3,
  vacuna: true,
};

const vaca: Animal = {
  tipo: "Bovino",
  edad: 4,
  vacuna: false,
};

function animalInfo(animal: Animal): void {
  let vacunado: string;

  if (animal.vacuna) {
    vacunado = "si";
  } else {
    vacunado = "no";
  }

  console.log(
    `El animal es un ${animal.tipo} de ${animal.edad} años de edad y ${vacunado} esta vacunado`
  );
}

animalInfo({ tipo: "Felino", edad: 2, vacuna: true }); // Ejemplo con objeto literal
animalInfo(perro);
animalInfo(vaca);
```
