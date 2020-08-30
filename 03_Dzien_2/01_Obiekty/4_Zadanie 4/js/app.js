// Stwórz obiekt `person`. Dopisz do niego następujące właściwości i metodę:
//
//     * `name`,
// * `age`,
// * `sayHello()` - wypisującą string "hello"
//
// Wypisz właściwości w konsoli, wywołaj metodę.

const person = {
    name: 'Bazyli',
    age: '132',
    sayHello: function () {
        console.log("hello");
    }
}

console.log(person);
person;
person.sayHello();