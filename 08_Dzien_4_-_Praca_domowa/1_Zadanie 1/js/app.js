// Na stronie znajduje się formularz do zamówienia pizzy. W formularzu znajduje się pole z checkboxami,
//     w którym użytkownik może wybrać sobie dodatki.
//
//     Cena każdego z dodatków jest trzymana w atrybucie ```data-price```.
//
//     Napisz takie eventy, żeby po zaznaczeniu checkboxa wyświetlała się poprawna
// kwota zamówienia oraz po wysłaniu formularza wewnątrz elementu ```order-info``` wyświetliła
// się następująca informacja: **"Do zapłaty: [odpowiednia kwota]"**, gdzie [odpowiednia kwota] to
// wartość zamówienia (cena za dodatki + 35zł podstawy za pizze). Pamiętaj o tym, że kliknięcie w przycisk
// wywołuje domyślną akcję przeładowania strony. Zablokuj tą akcję, aby móc zobaczyć wpisaną informację
// do elementu ```order-info```.
//
//     Zwróć uwagę na dwa specjalne przyciski:
//     * Wyczyść &ndash; powinien odznaczyć wszystkie opcje,
// * Wszystkie dodatki &ndash; powinien zaznaczyć wszystkie opcje

//najpierw wyciagne wszystkie potrzebne elementy do zmiennych, dodalem ID do html, zeby nie szukac po atrybucie for:

const $extraCheeseCheckbox = document.getElementById('cheese');
const $extraHamCheckbox = document.getElementById('ham');
const $extraSauceCheckbox = document.getElementById('sauce');
const $extraPineappleCheckbox = document.getElementById('pineapple');
const $extraMushroomCheckbox = document.getElementById('mushrooms');

$extraCheeseCheckbox.checked = false;
$extraHamCheckbox.checked = false;
$extraPineappleCheckbox.checked = false;
$extraSauceCheckbox.checked = false;
$extraMushroomCheckbox.checked = false;


console.log($extraCheeseCheckbox, $extraHamCheckbox, $extraSauceCheckbox, $extraPineappleCheckbox, $extraMushroomCheckbox);
//wyciagam kwote za dodatki
const $extrasValue = document.getElementById('price');
console.log($extrasValue);
//dodaje eventa na heckboxa extracheese.checked, ktory doda do extras value
const extraCheesePrice = 3.5;
const extraHAmPrice = 2.20;
const extraSaucePrice = 5;
const extraPineapplePrice = 4.1;
const extraMushroomPrice = 3.5;

// function setCheckboxesUncheckedAtLoad(checkbox) {
//     checkbox.checked === false;
// }
//
// setCheckboxesUncheckedAtLoad($extraMushroomCheckbox);
// setCheckboxesUncheckedAtLoad($extraHamCheckbox);
// setCheckboxesUncheckedAtLoad($extraSauceCheckbox);
// setCheckboxesUncheckedAtLoad($extraPineappleCheckbox);
// setCheckboxesUncheckedAtLoad($extraMushroomCheckbox);


// $extraCheeseCheckbox.addEventListener( 'click', function () {
//     if ($extraCheeseCheckbox.checked == true){
//         $extrasValue.innerHTML = `${price += cheese} zł`;
//         console.log('as');
//     } else {
//         $extrasValue.innerHTML = `${price -= cheese} zł`;
//         console.log('ton');
//     }
// })
//
// $extraHamCheckbox.addEventListener( 'click', function () {
//     if ($extraHamCheckbox.checked == true){
//         $extrasValue.innerHTML = `${price += ham} zł`;
//         console.log('as');
//     } else {
//         $extrasValue.innerHTML = `${price -= ham} zł`;
//         console.log('ton');
//     }
// })
let price = 0;
function addExtra(checkbox, extrasTogetherValue, ingredientPrice) {

    checkbox.addEventListener( 'click', function () {

        if (checkbox.checked === true){
            extrasTogetherValue.innerHTML = `${price += ingredientPrice} zł`;
        } else {
            extrasTogetherValue.innerHTML = `${price -= ingredientPrice} zł`;
        }
    })
}

addExtra($extraCheeseCheckbox, $extrasValue, extraCheesePrice );
addExtra($extraHamCheckbox, $extrasValue, extraHAmPrice );
addExtra($extraPineappleCheckbox, $extrasValue, extraPineapplePrice );
addExtra($extraSauceCheckbox, $extrasValue, extraSaucePrice );
addExtra($extraMushroomCheckbox, $extrasValue, extraMushroomPrice );

// function myFunction() {
//     const checkBox = $extraCheeseCheckbox;
//
//     if (checkBox.checked == true){
//         $extrasValue.innerHTML = `${cheese} zł`;
//         console.log('as');
//     } else {
//         $extrasValue.innerHTML = `${price} zł`;
//         console.log('ton');
//     }
// }
//
// myFunction();

// $extrasValue.innerText = `${cheese} zł`;


//ok jest teraz extrasvalue wartosc do zmiennej


// const extrasCheckboxes = document.getElementsByTagName('input');
// const extraCheese = extrasCheckboxes[0]
// const cheesePrice = extraCheese.getAttribute('data-price');
// console.log(extrasCheckboxes);
// console.log(extraCheese);
// console.log(cheesePrice);
// const extraCheesePrice = extrasPrices[0];

// function addPrice(checkbox) {
//     if(checkbox.checked == true){
//         document.getElementById("price").innerText += ;
//     }

// const cheeseP = 3.50;
// const sauceP = 2.20;
// const hamP = 5;
// const pineappleP = 4.10;
// const mushroomP =3.50;
// let priceForExtras = 0;
// priceTable = [];
// priceTable.push(cheeseP, sauceP, hamP, pineappleP, mushroomP);
// console.log(priceTable);
//
//
// const checkboxes = Array.from(document.querySelectorAll('[id]'));
// console.log(checkboxes)
// let checked = function () {
//     for (let i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             $extrasValue.innerText = `pleple `;
//         }
//     }
// }

// function checkAll() {
//     for (let i = 0; i < checkboxes.length; i++) {
//         checkboxes[i].checked = true;
//
// }}
//     function clearAll() {
//         for (let i = 0; i < checkboxes.length; i++) {
//             checkboxes[i].checked = false;
//
//         } }
// allExtrasBtn.addEventListener('click', checkAll);
// clearAllExtras.addEventListener('click', clearAll);

