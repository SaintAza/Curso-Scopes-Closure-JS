var hello = 'hello'
var hello = 'hello +'
let world = 'world'
const hw = 'hello world'


console.log(hello);


function anotherFuction() {
    console.log(hello);
    console.log(world);
    console.log(hw);
}

anotherFuction();


/*

Scopes de:

--var puede sobrescribir la declaración y asignación de una variable y alterar su valor
---let no permite volver a declarar una variable con el mismo nombre pero permite la asignación de un nuevo valor
---const tampoco permite reasignar una declaración ni asignación de un nuevo valor

Una variable sin var, let o const, dentro de una función puede ser reconocida como una variable global pero esto es una mala práctica.



*/