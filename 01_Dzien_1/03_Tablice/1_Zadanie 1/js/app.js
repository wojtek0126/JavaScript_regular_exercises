// Napisz funkcję ```distFromAverage```, która ma 
// przyjmować tylko jeden argument &ndash; tablicę.
//     Funkcja ta ma zwracać też tablicę. 
//     Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki a średnią wartością tablicy.
//     Np.
//     ```JavaScript
// distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
// distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
// distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)



function distFromAverage (tab) {
    const sum = tab.reduce(function(p, c) {
        return p + c;
    });
    const avg = sum / tab.length;

    return tab.map(function (elm) {
        const result = avg - elm;
        return Math.abs(result);
    });


}

const result = distFromAverage([2,8,3,7]);

console.log("wynik ostateczny: ", result);

// const tab = [1, 2, 3];
//
// tab.pop();
// console.log(tab);
//
// tab.push(4, 14, 36); //dodaje na koniec, .unshift dodaje na początek
//
// console.log(tab);
//
// const tab2 = ["bla", "szka", "kurde"];
// tab2.splice("bla", 1, 2, 3);
// console.log(tab2);
//
// tab2.sort();
// console.log(tab2);
//
// tab2.sort().reverse();
// // ponizej funkcja do sortowania, mozna obiekty pod a - b jest a.klucz - b.klucz
// tab2.sort(function (a, b) {
//     return a - b;  //moze byc b - a i sortuje odwrotnie
//
// })

//concat dodac do nowej zmiennej zeby nowy zbior mial gdzie sie pojawic
//join wrzuci wszystkie elementy do stringa lub zamieni
// element na string jesli jest jeden element
//jezei indexof nie ma w zbiorze - zwraca -1 !!!

// funkcja forEach i jej argumenty - sprawdz w dokumentacji

// const tab = [2,5,6,8,9,13];
//
// const result = tab.filter(function(elm) {
//     return elm % 2 === 0;
// }).map(function(elm) {
//     return elm * -10;
// }).reduce(function(p, c) {
//     return p + c;
// }, 0);
//
//
//
// const result2 = tab
//     .filter(elm => elm % 2 === 0)
//     .map(elm => elm * -10)
//     .reduce((p, c) => p + c);