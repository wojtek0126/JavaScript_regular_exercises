// Na stronie znajduje się przycisk. Musisz dopisać do niego event w taki sposób,
//     żeby po kliknięciu w niego został usunięty ze strony.

const $btn = document.querySelector('#remove');
console.log($btn);

function removeElement() {
    const target = $btn;
    target.parentElement.removeChild(target);
}

$btn.addEventListener('click', removeElement);

// $btn.addEventListener('click', function () {
//     removeElement($btn);
// });
