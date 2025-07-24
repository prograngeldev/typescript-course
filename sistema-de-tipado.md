# Tipado

El tipado estático es un componente crítico en TypeScript. Como su nombre lo sugiere, TypeScript combina tipos con JavaScript. Mientras que JavaScript es un lenguaje de tipado dinámico, TypeScript es una versión fuertemente tipada de este.

## Como tipar en TypeScript

Para tipar una variable en TypeScript, se escribe dos puntos (:) seguidos del tipo de dato que se va a almacenar.

```ts
let nombre: string = "Paul";
```

Si asignamos luego cualquier tipo de dato que no sea string a esa variable, TypeScript nos advertira al momento de compilar.

## Tipos basicos built-in

Estos tipos de datos vienen integrados en TypeScript por defecto y se utilizan para restringir una variable a un solo tipo de dato:

- string: Para cadenas de caracteres.
- number: Para numeros. (Enteros o decimales)
- boolean: Para datos booleanos. (true o false)

```ts
let nombre: string = "Arnold";
let edad: number = 23;
let casado: boolean = false;
```

## Tipos para arrays

Definir un tipo específico para un array en TypeScript obliga a que todos sus elementos sean de ese mismo tipo. A este tipo de array también se le conoce como vector. Si queremos un array que acepte diferentes tipos de datos, podemos usar el tipo any[].

Para definir tpos de un array utilizamos el tipo de dato seguido de corchetes ([]):

```ts
const arrayStrings: string[] = ["Hola", "Mundo"];
const numeros: number[] = [1, 2, 3];
const booleans: boolean[] = [true, false];
const sinRestricciones: any[] = ["Jaja", 90, false];
```

## Enum

En TypeScript, un enum (abreviatura de enumeration) es una estructura que permite definir un conjunto de constantes con nombre. Sirve para representar valores fijos y facilitar su uso con nombres legibles en lugar de números o cadenas directas.

```ts
enum Color {
  Rojo, // 0
  Verde, // 1
  Azul // 2
}

let favorito: Color = Color.Verde; // 1
```

enum con valores personalizados:

```ts
enum Rol {
  Admin = "ADMIN", // ADMIN
  Usuario = "USER" // USER
}
```

Podemos usar un enum para tipar el valor de una variable. Lo que se asigne a esa variable debe ser una de las propiedades del enum. Si las propiedades no tienen valores personalizados, el enum acepta cualquier número, lo cual es importante tener en cuenta.

Usar enum también reduce la probabilidad de errores por escritura incorrecta, ya que se accede a sus valores únicamente a través de sus propiedades, y el autocompletado del editor ayuda bastante.

## Como tipar funciones
Debemos tipar el valor que retorna una función colocando el tipo entre los paréntesis de los parámetros y las llaves del cuerpo. También es importante tipar los parámetros para evitar pasar datos del tipo incorrecto.

Si la funcion no devuelve nada, colocamos void como tipo.

```tsx
function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}

function logEdad(edad: number): void {
    console.log(`Tienes ${edad} años de edad.`);
}
```