
//ponizej nie dotyczy zadania, moj eksperymentalny volume meter, dodaj blokade scale po max(20)
const button = document.querySelector(".plus");
const button2 = document.querySelector(".minus");
// const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');
let clickCount = 0;
button.addEventListener("click", function count(event) {
    clickCount += 1;
    // result.innerText = ("Liczba kliknięć", clickCount);
    result2.innerText = ("Liczba kliknięć", clickCount);
    result2.style.transform += "scale(1.1)";
    if (clickCount >= 20) {
        result2.innerText = ("Liczba kliknięć", 'Max');
        clickCount = 20;
        // result2.style.transform = "scale(2.8)";

    }
});

button2.addEventListener("click", function count(event) {
    clickCount -= 1;
    // result.innerText = ("Liczba kliknięć", clickCount);
    result2.innerText = ("Liczba kliknięć", clickCount);
    result2.style.transform += "scale(0.9)";
    if (clickCount <= 0) {
        // event.target.removeEventListener('click', count);
        clickCount = 0;
        // result.innerText = ("Liczba kliknięć", 0);
        result2.innerText = ("Liczba kliknięć", 0);
    }
});

document.addEventListener('keypress', function () {
    console.log('tet');

})
// // dyskoteka ponizej;)
// const parents = document.querySelectorAll('.parent');
// console.log(parents);
//
// function showChildren(e) {
//     const children = e.target.querySelector('.children');
//     if (children) {
//         children.style.display = 'block';
//     }
//
// }
//
// function hideChildren(e) {
//     const children = e.target.querySelector('.children');
//     if(children) {
//         if (children.style.display = 'block'){
//             children.style.display = 'none';
//         }
//     }
//
// }
//
// parents.forEach(function (parent) {
//     parent.addEventListener('mouseover', showChildren);
//     parent.addEventListener('mouseout', hideChildren);
//
// })

//lepsza wersja ponizej
const parents = document.querySelectorAll('.parent');

function toggleDisplay(a) {
    a.target.classList.toggle("show");
}

parents.forEach(function (parent) {
    parent.addEventListener('mouseover', toggleDisplay);
    parent.addEventListener('mouseout', toggleDisplay);
});
