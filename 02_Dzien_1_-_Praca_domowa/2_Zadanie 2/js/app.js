// const showMax = function(a,b,c) {
//     let array = [];
//     // array.push(a);
//     array.push(a, b, c);
//     // array.push(c);
//         return Math.max(array);
// }
// let a = showMax(1,123,500);
// console.log(a);

// const showMax = function(a,b,c) {
//     for (let i = 0; i < arguments.length; i++) {
//         return Math.max(arguments);
//     }
//     return result;
// }
// let b = showMax(1,123,500);
// console.log(b);

// const showMax = function(a,b,c) {
//     let arguments = [a, b, c];
//     for (let i = 0; i < arguments.length; i++) {
//         return Math.max(a,b,c);
//     }
// }
// console.log(showMax(1,123,500));

let a = "Bardzo dobra obsługa";
let b = "Dobra obsługa";
let c = "Średnia obsługa";
let d = 'Zła obsługa';
function calculateTip(amount, rating) {
    if (rating === a ) {
        return (amount + (amount * 0.25) +  " " + a);
    }
    if (rating === b ) {
        return (amount + (amount * 0.2) +  " " + b);
    }
    if (rating === c ) {
        return (amount + (amount * 0.15) +  " " + c);
    }
    if (rating === d ) {
        return console.log("Brak napiwku!" + " " + d);
    }
    else {
        return console.log("Niewłaściwe dane");
    }
}
console.log(calculateTip(200, b));