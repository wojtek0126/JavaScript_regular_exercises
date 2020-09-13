const $form = document.querySelector('form');
const $emailInput = document.querySelector('#email');
const $nameInput = document.querySelector('#name');
const $surnameInput = document.querySelector('#surname');
const $pass1Input = document.querySelector('#pass1');
const $pass2Input = document.querySelector('#pass2');
const $agreeInput = document.querySelector('#agree');
const $errorMsg = document.querySelector('#error-message');
const $successMsg = document.querySelector('#success-message');

$form.addEventListener('submit', function(e) {
    e.preventDefault();
    const errors = [];
    $errorMsg.classList.add('d-none');
    $errorMsg.innerText = '';
    $successMsg.classList.add('d-none');
    $successMsg.innerText = '';
    if (!$emailInput.value.includes('@')) {
        errors.push('mail musi posiadać znak @');
    }
    if ($nameInput.value.length <= 2) {
        errors.push('Twoje imię jest za krótkie');
    }
    if ($surnameInput.value.length <= 2) {
        errors.push('Twoje nazwisko jest za krótkie');
    }
    if($pass1Input.value !== $pass2Input.value || $pass1Input.value === '') {
        errors.push('Hasła nie są takie same lub puste')
    }
    if(!$agreeInput.checked) {
        errors.push('Musisz zaakceptować warunki');
    }
    if(errors.length === 0) {
        $successMsg.innerText = 'Formularz wysłany!';
        $successMsg.classList.remove('d-none');
    } else {
        // wiem, ze sa jakies bledy
        errors.forEach(function(error) {
            const $p = document.createElement('p');
            $p.innerText = error;
            $errorMsg.appendChild($p);
        });
        $errorMsg.classList.remove('d-none');
    }
});


