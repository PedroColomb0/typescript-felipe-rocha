// Tipos Básicos
var age = 5;
var firstName = "Felipe";
var isValid = true;
// Any é um tipo que pode ser qualquer coisa
var idk = 5;
// é um tipo que queremos evitar no Typescript, porque ele seria como uma tipagem dinamica mas isso queremos evitar
idk = "12";
// Definindo tipo da lista
var ids = [1, 2, 3, 4, 5];
var booleans = [true, false, true, false];
var string = ["Casa", "Cama", "Mesa"];
//Tupla
var person = [1, "oi"];
//Intersections
var productId = "da";
var productId2 = 2;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
var direction = Direction.Up;
console.log(age);
