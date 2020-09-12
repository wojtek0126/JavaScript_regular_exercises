
// Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych.
//     Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
//     Napisz kod JavaScript, który wprowadzi następujące zmiany:
//
//     1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo
// (obrazek jest nastawiany za pomocą ```background-image```).
// 2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut ```href```.
// 3. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).

/*
  Poniżej napisz kod rozwiązujący zadania
 */

const chrome = document.querySelector('.chrome');
const edge = document.querySelector('.edge');
const firefox = document.querySelector('.firefox');

// logo dla edge
edge.classList.remove('edge');
edge.classList.add("firefox");
//logo dla firefox
firefox.classList.add('edge');
//logo dla chrome
chrome.style.width = "100px";
//nazwa href dla chrome
document.querySelector('a').innerText = 'Chrome';
//nazwa href dla firefox
document.querySelectorAll('a')[2].innerText = 'Firefox';
//href dla edge
document.querySelectorAll('a')[1].setAttribute('href', 'https://www.microsoft.com/pl-pl/edge');
document.querySelectorAll('a')[2].setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/?redirect_source=firefox-com');

