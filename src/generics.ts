const returnValue = <T>(value: T): T => value

const message = returnValue<string>('Hello World!')
const count = returnValue<number>(5)


function gerFirstValueFromArray<Type>(array: Type[]){
    return array[0]
}

const firstValueFromStringArray = gerFirstValueFromArray<string>(["1","2"])
const firstValueFromNumberArray = gerFirstValueFromArray<number>([1,2])

// Promise

const returnPromise = async (): Promise<number> => {
    return 5
}

// Classes

class GenericNumbers {
    
}