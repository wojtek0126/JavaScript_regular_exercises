// Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden argument - tablicę.
//     Następnie funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w
// tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.
let nums = [1, 2, 3, 4];


function multiply(array) {
    var sum = 1;
    for (var i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

console.log(multiply(nums));


// sortArray = (arr) => {
//     return arr.sort();
// };
// console.log(sortArray([1, 2, 3]));