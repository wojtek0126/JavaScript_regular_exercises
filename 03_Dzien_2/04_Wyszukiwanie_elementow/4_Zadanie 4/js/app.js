// Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
//     1. Wszystkie elementy **li** znajdujące się w **tagu** ```nav``` z klasą `navigation`.
// 2. Wszystkie **paragrafy** należące do wszystkich elementów **div**.
// 3. Wszystkie **divy** znajdujące się w **tagu** ```article```.
//
//     Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Pamiętaj, żeby używać funkcji,
//     które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile znalazłeś elementów.


let navListWithNavigationClass = document.getElementsByTagName('nav .navigation li');
console.log(navListWithNavigationClass);
let allParagraphsInDivs = document.querySelectorAll('div > p');
console.log(allParagraphsInDivs);
let allDivsInArticles = document.querySelectorAll('article > div');
console.log(allDivsInArticles);