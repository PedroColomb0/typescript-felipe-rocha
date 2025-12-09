// Type

type Car = {
    cor: string
    placa: string
}

type User = {
    firstName: string
    age: number
    email: string
    password?: string
    car?: Car
}

// Agora vamos dizer que queremos criar um objeto desse Usuario como vamos fazer isso ?
// Vamos criar uma const(variavel) tipar ele com o type User que criamos, e vamos apertar ctrl Espaço para acessar os valores que temos.


const user: User = {
    firstName: "Pedro",
    age: 12,
    email: "pedro@gmail.com",
}  

type Usuario = {
    login : string
    password? : string
}

const user2: Usuario = {
    login: "Pedro",
}  



const printLog = (message : string) => {}

printLog(user2.password!)

// Unions

type Author = {
    books : string
}

// Intercaces

interface UserInterface {
    firstName : string
    email : string
}

const emailUser: UserInterface = {
    firstName: "Pedro",
    email: "pedro@gmail.com"
} 

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    email: "Pedro",
    books: ["Livro1"],
    firstName: "Gabriel"
}

type Grade = number | string 

const grade: Grade = 1

// Interface x Funcoes

interface MathFunc {
    (x: number, y:number): number
}

const sum: MathFunc = (x: number, y: number) => {
    return x + y
}

sum(1,2)