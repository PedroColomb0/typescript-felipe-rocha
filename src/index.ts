// Tipos Básicos

let age: number = 5;
const firstName: string = "Felipe";
const isValid: boolean = true;

// Any é um tipo que pode ser qualquer coisa
let idk: any = 5;

// é um tipo que queremos evitar no Typescript, porque ele seria como uma tipagem dinamica mas isso queremos evitar
idk = "12";

// Definindo tipo da lista
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const string: string[] = ["Casa", "Cama", "Mesa"];

//Tupla
const person: [number,string] = [1,"oi"] 


//Intersections
const productId: string | number = "da"
const productId2: string | number = 2

//Enum
enum Direction{
    Up = 1,
    Down = 2
}

const direction = Direction.Up

console.log(age);
