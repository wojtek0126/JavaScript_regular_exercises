// Napisz funkcję `countHello()`, która jako parametr przyjmie liczbę całkowitą od 1-10.
// W funkcji uruchom funkcję `setInterval`.
//     Niech jego zadaniem będzie wypisywanie na konsoli tekstu "Hello" oraz
// licznika, zliczającego, który raz już został uruchomiony `setInterval`.
//     Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty `setInterval`.





function count(num) {
    let i = 1;

    const timer = setInterval(function() {
        console.log('Hello', i);

        if(i == num) {
            console.log("koniec petli");
            clearInterval(timer);
        }
        i++;  // i++ tutaj
    }, 1000);
}

count(3);