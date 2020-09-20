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


const checkboxes = document.querySelectorAll('.form-check-input');
console.log(checkboxes);

const $extraCheeseCheckbox = document.getElementById('cheese');
const $extraHamCheckbox = document.getElementById('ham');
const $extraSauceCheckbox = document.getElementById('sauce');
const $extraPineappleCheckbox = document.getElementById('pineapple');
const $extraMushroomCheckbox = document.getElementById('mushrooms');
console.log($extraCheeseCheckbox, $extraHamCheckbox, $extraSauceCheckbox, $extraPineappleCheckbox, $extraMushroomCheckbox);

const $extrasValue = document.getElementById('price');
console.log($extrasValue);

const orderInfo = document.querySelector('.order-info');
console.log(orderInfo);

const addAllExtrasBtn = document.getElementById('all_extras_btn');
const removeAllExtrasBtn = document.getElementById('clear_extras_btn');
const submitBtn = document.getElementById('sub_btn');
console.log(addAllExtrasBtn, removeAllExtrasBtn, submitBtn);

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

let prices = [3.50, 2.20, 5.00, 4.10, 3.50];
// let extras = [cheese, ham, sauce, pineapple, mushroom];

// extras.forEach(function (e) {
//
//
// })


const extraCheesePrice = prices[0];
const extraHAmPrice = prices[2];
const extraSaucePrice = prices[1];
const extraPineapplePrice = prices[3];
const extraMushroomPrice = prices[4];
console.log(extraPineapplePrice, extraHAmPrice, extraSaucePrice, extraCheesePrice, extraMushroomPrice);




checkboxes.forEach(function (e) {
    e.checked = false;
});
let price = 0;
let basePrice = 35;
let totalFull = price + basePrice;
//zobacz czy tu sie nie da sformatowac
function addExtra(checkbox, ingredientPrice) {
    checkbox.addEventListener( 'click', function () {

        if (checkbox.checked === true){
            let priceAdded = price += ingredientPrice;
            const addFinal = formatPrice(priceAdded);
            let wholeCostUp = basePrice += ingredientPrice;
            let addFinalFormatted = formatPrice(wholeCostUp);
            $extrasValue.innerHTML = `${addFinal} zł`;
            orderInfo.innerHTML = `${addFinalFormatted} zł`
            console.log(addFinal);
            console.log(wholeCostUp);

        } else {
            let priceDeducted = price -= ingredientPrice;
            const reduceFinal = formatPrice(priceDeducted);
            let wholeCostDown = basePrice -= ingredientPrice;
            let reduceFinalFormatted = formatPrice(wholeCostDown)
            $extrasValue.innerHTML = `${reduceFinal} zł`;
            orderInfo.innerHTML = `${reduceFinalFormatted} zł`
            console.log(reduceFinal);
            console.log(wholeCostDown);

        }

    })
}

addExtra($extraCheeseCheckbox, extraCheesePrice );
addExtra($extraHamCheckbox, extraHAmPrice );
addExtra($extraPineappleCheckbox, extraPineapplePrice );
addExtra($extraSauceCheckbox, extraSaucePrice );
addExtra($extraMushroomCheckbox, extraMushroomPrice );









