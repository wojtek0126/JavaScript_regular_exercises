// Na stronie znajduje się tabela z informacjami na temat zamówień (z dwoma już wprowadzonymi zamówieniami).
// Poniżej znajduje się formularz do wypełnienia nowego zamówienia. Napisz event, który pobierze informacje z inputów
// (```el.value```) i wprowadzi nowy wpis do tabeli.
const $form = document.querySelector('form');
const $orderId = $form.querySelector('#orderId');
const $item = $form.querySelector('#item');
const $quantity = $form.querySelector('#quantity');
const $tbody = document.querySelector('#orders tbody');

$form.addEventListener('submit', function(event) {

    event.preventDefault();

    if ($orderId.value === '' || $item.value === '' || $quantity.value === '') {
        return;
    }

    const $tr = document.createElement('tr');
    const $tdOrderId = document.createElement('td');
    const $tdItem = document.createElement('td');
    const $tdQuantity = document.createElement('td');

    $tdOrderId.innerText = $orderId.value;
    $tdItem.innerText = $item.value;
    $tdQuantity.innerText = $quantity.value;
    $tr.appendChild($tdOrderId);
    $tr.appendChild($tdItem);
    $tr.appendChild($tdQuantity);

    $tbody.appendChild($tr);
    $orderId.value = '';
    $item.value = '';
    $quantity.value = '';
})
