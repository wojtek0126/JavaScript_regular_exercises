// Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr
// - tablicę. Następnie przy pomocy odpowiedniej metody tablicowej przeiteruj
// (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.
tablica = [1, 2, 3, 4, 5, "szympans Gerwazy", "orangutan Jerzy"]
function printTable(array) {
    array.forEach(function (item, index) {
        console.log(array[index]);
    })
}

printTable(tablica);

