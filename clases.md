# Class

Las clases en TypeScript definen un plano para crear objetos, incluyendo propiedades, métodos y un constructor. A diferencia de las interfaces, las clases no solo describen la forma del objeto, sino que también contienen lógica. Cada vez que se instancia una clase, se crea un nuevo objeto independiente.

## Constructor

El constructor es una función especial dentro de una clase que se ejecuta automáticamente cada vez que se crea una nueva instancia. Su función principal es asignar valores iniciales a las propiedades del objeto.

## Metodos

Los métodos son funciones definidas dentro de una clase que representan las acciones que un objeto puede realizar. Cuando se instancia un objeto desde esa clase, ese objeto hereda esos métodos y puede usarlos.

## Tipos de propiedades

Además de definir el tipo de dato de una propiedad en TypeScript, también podemos controlar quién puede accederla y cómo, usando modificadores como public, private, protected, static y readonly.

- public: Accesible desde cualquier lugar, dentro o fuera de la clase.
- private: Solo accesible dentro de la clase.
- protected: Accesible dentro de la clase y de sub-clases (Clases que heredan de ella).
- static: Perteneciente a la clase y no a las instancias.
- read-only: No puede modificarse, solo leerse.

## Sintaxis

```ts
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
```
