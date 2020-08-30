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
    say: ['hello', 'goodbye', 'spadaj pierdoło'],
    sayHello: function () {
        console.log(this.say);
    }
}

// console.log(person);

person.sayHello();