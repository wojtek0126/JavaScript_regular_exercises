
// Na stronie znajduje się `select` i trzy obrazki.
//     Każdy z obrazków jest przypisany do jednego z wyborów w selekcie.
//     Napisz kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.
//
//     Na start powinien być wyświetlony obrazek `Windows`.
//     Następnie po wyborze innego i **zatwierdzeniu** przyciskiem `Zatwierdź` zmień wyświetlany obrazek.
const $button = document.querySelector('#select_button');

const $imageWin = document.querySelector('#win');
const $imageMac = document.querySelector('#mac');
const $imageUbuntu = document.querySelector('#ubuntu');

const $optionWin = document.querySelector('#windows');
const $optionMac = document.querySelector('#macintosh');
const $optionUbuntu = document.querySelector('#ubunt');


function displayOn(element) {
    element.style.display = 'block';
}

function displayOff(element) {
    element.style.display = 'none';
}
//initial display of windows icon below:
displayOn($imageWin);
displayOff($imageMac);
displayOff($imageUbuntu);
//adjust of macos image below:
$imageMac.style.padding = '20px';

$button.addEventListener('click', function (e) {
    e.preventDefault();
//preventDefault stops automatic comeback of windows image
    if ($optionWin.selected === true) {
        console.log('win');
        displayOn($imageWin);
        displayOff($imageMac);
        displayOff($imageUbuntu);
    }
    if ($optionMac.selected === true) {
        console.log('mac');
        displayOff($imageWin);
        displayOff($imageUbuntu)
        displayOn($imageMac);
    }
    if ($optionUbuntu.selected === true) {
        console.log('ubu');
        displayOff($imageWin);
        displayOff($imageMac)
        displayOn($imageUbuntu);
    }
});

