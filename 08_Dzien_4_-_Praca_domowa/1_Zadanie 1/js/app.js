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

const $extraCheeseCheckbox = document.getElementById('cheese');
const $extraHamCheckbox = document.getElementById('ham');
const $extraSauceCheckbox = document.getElementById('sauce');
const $extraPineappleCheckbox = document.getElementById('pineapple');
const $extraMushroomCheckbox = document.getElementById('mushrooms');

const $extrasValue = document.getElementById('price');

const orderInfo = document.querySelector('.order-info');

const addAllExtrasBtn = document.getElementById('all_extras_btn');
const removeAllExtrasBtn = document.getElementById('clear_extras_btn');
const submitBtn = document.getElementById('sub_btn');

const PizzaPrices = {
    small: 30,
    medium: 35,
    large: 40,

    extraCheese: 3.5,
    extraHam: 5,
    extraSauce: 2.2,
    extraMushrooms: 3.5,
    extraPineapple: 4.1
}

const extraCheesePrice = PizzaPrices.extraCheese;
const extraHAmPrice = PizzaPrices.extraHam;
const extraSaucePrice = PizzaPrices.extraSauce;
const extraPineapplePrice = PizzaPrices.extraPineapple;
const extraMushroomPrice = PizzaPrices.extraMushrooms;

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}
function mediumPlainPizzaPrice() {
   return PizzaPrices.medium;
}
function  allIExtraIngredientsPrice() {
    let total = (PizzaPrices.extraCheese + PizzaPrices.extraHam + PizzaPrices.extraMushrooms + PizzaPrices.extraSauce + PizzaPrices.extraPineapple);
    return total;
}



checkboxes.forEach(function (e) {
    e.checked = false;
});
let price = 0;
let plainPrice = mediumPlainPizzaPrice();
let allExtrasPrice = allIExtraIngredientsPrice();
let fullLoadedPrice = plainPrice + allExtrasPrice;
function allCheckboxesEnabled() {
    return checkboxes.forEach(function (element) {
        element.checked = true;
    })
}

function addRemoveSingleExtraIngredient(checkbox, ingredientPrice) {
    checkbox.addEventListener( 'click', function () {

        if (checkbox.checked === true) {
            let priceAdded = price += ingredientPrice;
            const addFinal = formatPrice(priceAdded);
            let wholeCostUp = plainPrice += ingredientPrice;
            let addFinalFormatted = formatPrice(wholeCostUp);
            $extrasValue.innerHTML = `${addFinal} zł`;
            orderInfo.innerHTML = `Cała kwota: ${addFinalFormatted} zł`
        }
        if (checkbox.checked === false) {
            // price = 0;
            let priceDeducted = price -= ingredientPrice;
            console.log(ingredientPrice);
            const reduceFinal = formatPrice(priceDeducted);
            let wholeCostDown = plainPrice -= ingredientPrice;
            let reduceFinalFormatted = formatPrice(wholeCostDown)
            $extrasValue.innerHTML = `${reduceFinal} zł`;
            orderInfo.innerHTML = `Cała kwota: ${reduceFinalFormatted} zł`
        }
    })
}

addRemoveSingleExtraIngredient($extraCheeseCheckbox, extraCheesePrice );
addRemoveSingleExtraIngredient($extraHamCheckbox, extraHAmPrice );
addRemoveSingleExtraIngredient($extraPineappleCheckbox, extraPineapplePrice );
addRemoveSingleExtraIngredient($extraSauceCheckbox, extraSaucePrice );
addRemoveSingleExtraIngredient($extraMushroomCheckbox, extraMushroomPrice );


addAllExtrasBtn.addEventListener('click', function () {

    checkboxes.forEach(function (element) {
        element.checked = true;
    })


    allExtras = allIExtraIngredientsPrice();
    console.log(allExtras);
    plainPrice = mediumPlainPizzaPrice();
    console.log(plainPrice);
    fullPrice = plainPrice + allExtras;
    console.log(fullPrice);

    let allExtrasFormatted = formatPrice(allExtras);
    let plainAndExtrasFormatted = formatPrice(fullPrice);

    $extrasValue.innerHTML = `${allExtrasFormatted} zł`;
    orderInfo.innerHTML = `Cała kwota: ${plainAndExtrasFormatted} zł`;
    price = allExtras;
    plainPrice = fullPrice;
    console.log(price, plainPrice, 'extras and whole after add all pressed');
})

removeAllExtrasBtn.addEventListener('click', function () {
    checkboxes.forEach(function (element) {
        element.checked = false;
    })
    price = 0;
    plainPrice = mediumPlainPizzaPrice();
    plainPriceFormatted = formatPrice(plainPrice);
    priceOfNoExtrasFormatted = formatPrice(price);
    console.log('remall');
    $extrasValue.innerHTML = `${priceOfNoExtrasFormatted} zł`;
    orderInfo.innerHTML = `Cała kwota: ${plainPriceFormatted} zł`
})

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('sub');
})





