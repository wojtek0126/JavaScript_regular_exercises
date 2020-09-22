//swamp coding ---> kod bagienny

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

function checkboxesDisabledAtStartup() {
    checkboxes.forEach(function (e) {
        e.checked = false;
    });
}

function enableDisableAllCheckboxes(bool) {
    checkboxes.forEach(function (element) {
        element.checked = bool;
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
            let priceDeducted = price -= ingredientPrice;
            const reduceFinal = formatPrice(priceDeducted);
            let wholeCostDown = plainPrice -= ingredientPrice;
            let reduceFinalFormatted = formatPrice(wholeCostDown)
            $extrasValue.innerHTML = `${reduceFinal} zł`;
            orderInfo.innerHTML = `Cała kwota: ${reduceFinalFormatted} zł`
            // fix of minus zero result below
            if (price < 0) {
                fixedZero = 0;
                fixedZeroFormatted = formatPrice(fixedZero);
                $extrasValue.innerHTML = `${fixedZeroFormatted} zł`;
            }
        }
    })
}

function addAllExtrasButtonActive () {
    addAllExtrasBtn.addEventListener('click', function () {
    enableDisableAllCheckboxes(true);
        allExtras = allIExtraIngredientsPrice();
        plainPrice = mediumPlainPizzaPrice();
        fullPrice = plainPrice + allExtras;
        allExtrasFormatted = formatPrice(allExtras);
        plainAndExtrasFormatted = formatPrice(fullPrice);
        $extrasValue.innerHTML = `${allExtrasFormatted} zł`;
        orderInfo.innerHTML = `Cała kwota: ${plainAndExtrasFormatted} zł`;
        price = allExtras;
        plainPrice = fullPrice;
    })
}

function removeAllExtrasButtonActive () {
    removeAllExtrasBtn.addEventListener('click', function () {
    enableDisableAllCheckboxes(false);
        price = 0;
        plainPrice = mediumPlainPizzaPrice();
        plainPriceFormatted = formatPrice(plainPrice);
        priceOfNoExtrasFormatted = formatPrice(price);
        $extrasValue.innerHTML = `${priceOfNoExtrasFormatted} zł`;
        orderInfo.innerHTML = `Cała kwota: ${plainPriceFormatted} zł`
    })
}

function subButtonActive() {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('sub');
    })
}

checkboxesDisabledAtStartup();
addAllExtrasButtonActive();
removeAllExtrasButtonActive();
subButtonActive();
addRemoveSingleExtraIngredient($extraCheeseCheckbox, extraCheesePrice );
addRemoveSingleExtraIngredient($extraHamCheckbox, extraHAmPrice );
addRemoveSingleExtraIngredient($extraPineappleCheckbox, extraPineapplePrice );
addRemoveSingleExtraIngredient($extraSauceCheckbox, extraSaucePrice );
addRemoveSingleExtraIngredient($extraMushroomCheckbox, extraMushroomPrice );








