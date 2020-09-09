// 1. Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej **tag** ```article``` o **klasie** ```first```.
// 2. W kolejnym etapie:
//     * wypisz w konsoli, ile elementów **h2** znajduje się w tym **tagu**.
//
// Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy.

const firstArticle = document.querySelector('article.first');

console.log(firstArticle.querySelectorAll('h2'));
console.log("W tym tagu znajdują się " + firstArticle.querySelectorAll('h2').length +
" elementy h2");
