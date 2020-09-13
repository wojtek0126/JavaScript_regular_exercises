// Na stronie przypisanej do zadania znajduje się lista i przycisk. Dopisz odpowiednie eventy do
//     nich w taki sposób, żeby po kliknięciu w przycisk dodał się nowy element do listy.
//     Element powinien mieć w sobie informacje na temat tego, ile elementów jest w liście w chwili jego dodania.

// const $btn = document.querySelector('.btn');
// const $list = document.querySelector('#menu');
// let counter = 1;
// $btn.addEventListener('click', function() {
//     counter += 1;
//     const $li = document.createElement('li');
//     $li.classList.add('list-group-item');
//     $li.innerText = 'Element ' + counter + ' - w chwili dodania było ' + (counter - 1) + ' elementów'
//     $list.appendChild($li);
// });

const $btn = document.querySelector('.btn');
const $list = document.querySelector('#menu');
// const $orgLi = document.querySelector(‘#menu li’);
const $orgLi = $list.querySelector('li');
let counter = 1;
$btn.addEventListener('click', function() {
    counter += 1;
    const $li = $orgLi.cloneNode();
    $li.innerText = 'Element' + counter + ' - w chwili dodania było ' + (counter - 1) + ' elementów'
    $list.appendChild($li);
});