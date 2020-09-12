//
// Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i jeden licznik.
//     Napisz jeden wspólny event dla wszystkich przycisków, który spowoduje, że po kliknięciu w przycisk
// licznik zwiększy wartość o jeden.
const btns = document.querySelectorAll('.btn');
const counterElm = document.querySelector('.counter');
let counter = 0;
function upCounter () {
    counter += 1;
    counterElm.innerText = counter;
};
btns.forEach(function (btn) {
    btn.addEventListener('click', upCounter);
})