// Na stronie znajduje się lista z wpisami i przycisk. Napisz taki event, żeby po kliknięciu w przycisk z
// listy zostały usunięte wszystkie jej dzieci. Element ```ul#list``` powinien pozostać na stronie.

const $btn = document.getElementById('remove');
const $allList = document.querySelectorAll('li');
const $list = document.querySelector('li');
console.log($list);



function removeElement() {
    for(i = 0;i <= $allList.length;i++) {
        const target = $allList[i];
        target.parentElement.removeChild(target);
    }
}

$btn.addEventListener('click', removeElement);

//dziala lecz jest tez error w konsoli
