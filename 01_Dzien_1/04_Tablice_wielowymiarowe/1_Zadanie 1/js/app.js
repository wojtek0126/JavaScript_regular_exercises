// 1. Wypisz element znajdujący się w położeniu `3`, `2`.
// 1. Wypisz długość tablicy znajdującej się w drugim rzędzie.
// 1. Wypisz element znajdujący się w położeniu `4`, `2`.



const multiValueArray = [
  [2, 3],
  ["Ala", "Ola"],
  [true, false],
  [5, 6, 7, 8],
  [12, 15, 67]
];

console.log(multiValueArray[3][2]);
console.log(multiValueArray[2].length);
console.log(multiValueArray[4][2]);
//odlicza od zera czyli 3 to [0][1]
console.log(multiValueArray[0][1]);
