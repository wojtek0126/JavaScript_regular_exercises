// Napisz funkcję ```getEvenAvarage```, która ma
// przyjmować tylko jeden argument - tablicę. Funkcja ta ma
// zwracać średnią wartość **parzystych** liczb z tej tablicy.
//     Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.
//     Jeśli w tablicy nie ma parzystych liczb niech zwraca null.
//     ```JavaScript
// getEvenAvarage([1,2,3,4,5,6,7]) => 4
// getEvenAvarage([1,1,1,1]) => null
// getEvenAvarage([2,8,3,7,4]) => 4.666
// ```
// var numberArray = [1, 2, 3, 4, 5, 6, 7];
// var thisTotal = 0;
// var thisAverage = 0;
//
// function getEvenAvarage(array) {
//     return thisAverage;
// }
// var evenArray = numberArray.filter(function(val) {
//     return val % 2 === 0;
// });
// var thisTotal = evenArray.reduce(function(accumulator, currentValue) { return  accumulator + currentValue;
// });
// var thisAverage = thisTotal / evenArray.length;
//
// console.log(getEvenAvarage(numberArray));

function getEvenAverage(tab) {
    const evenTab = tab.filter(function(elm) {
        return elm % 2 === 0;
    });

    const len = evenTab.length;

    const sum = evenTab.reduce(function (a, b) {
        return a +b;
    })

    return sum / len;

}



const result = getEvenAverage([1,2,3,4,5,6,7]);

console.log('wynik: ', result);