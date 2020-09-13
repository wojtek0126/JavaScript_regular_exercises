// Na stronie znajduje się formularz do zamówienia. Jest w nim sekcja odpowiedzialna za wystawienie faktury.
//
//     Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i
// wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".
//
//     Ma to również działać przy starcie strony: sekcja z danymi do faktury powinna być ukryta!


const $addressInput = document.querySelector('#address');
const $nameInput = document.querySelector('#name');
const $surnameInput = document.querySelector('#surname');
const $invoiceCheckbox = document.querySelector('#invoice');

const $invoiceData = document.querySelector('#invoiceData');

$invoiceData.classList.add('hide');
$invoiceData.style.display = 'none';

//checkbox unchecked every time after reload
if ($invoiceCheckbox.type == 'checkbox')   {
    $invoiceCheckbox.checked = false;
}

console.log($addressInput, $nameInput, $surnameInput, $invoiceCheckbox, $invoiceData);

//add preventDefault
addEventListener('change', function (e) {
    e.preventDefault();

    if ($invoiceCheckbox.checked == false){
        $invoiceData.style.display = 'none';
    }
    else if ($invoiceCheckbox.checked == true) {
        $invoiceData.style.display = 'block';
    }
});


