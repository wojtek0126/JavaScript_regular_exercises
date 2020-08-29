// Stwórz tablicę z listą swoich ulubionych owoców. Następnie:

// 1. Wypisz pierwszy owoc w konsoli. v
// 1. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).v
// 1. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).

fruits = ["malina", "borówka", "agrest", "kujowy_kokos"];

console.log(fruits[0]);

// console.log(fruits.slice(-1)[0]);

function last(array) {
    return array[array.length - 1];
}

console.log(last(fruits));
// zrob wersje z length ponizej tylko wersja na szybko
fruits.forEach(function(item, index) {
    console.log('index ' + index + ': ' + item);
});