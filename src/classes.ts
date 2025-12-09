interface IPerson {
    id: number
    name: string
    age: number
    sayMyName(): String
}

class Person implements IPerson{
    id: number
    name: string
    age: number

    constructor(id: number, name:string, age:number){
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): String {
        return this.name
    }
}

const person = new Person(1,"pedro",12)