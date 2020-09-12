// Na stronie znajduje się sekcja z dwoma elementami ```article```.
//     W każdym artykule znajdują się elementy `h2`, `a` oraz `div` o klasie `content`,
//     który jest ukryty w CSS (klasa `d-none`).
//
//     Twoim zadaniem jest:
//
//     * ustawienie na pierwszym linku eventu, który spowoduje, że kiedy użytkownik w
// niego kliknie pokaże się element o klasie `content` (należący do tego artykułu).
// * ustawienie na drugim linku eventu, który spowoduje, że kiedy użytkownik
// na niego najedzie pokaże się element o klasie 'content'
// (należący do tego artykułu).
//
const articleButtons = document.querySelectorAll('.btn');
const invisibleDivs = document.querySelectorAll('.content');

const invDiv1 = invisibleDivs[0];
const invDiv2 = invisibleDivs[1];
const btn1 = articleButtons[0];
const btn2 = articleButtons[1];
console.log(btn1);
console.log(btn2);

function showContentOnClick(){
    invDiv1.classList.toggle('d-none');
}

function showContentOnHover(){
    invDiv2.classList.toggle('d-none');
}

btn1.addEventListener("click", showContentOnClick);
btn2.addEventListener("mouseover", showContentOnHover);
btn2.addEventListener("mouseout", showContentOnHover);




// //czy mozna zbudowac uniwersalna funkcje template do eventow, pseudokod ponizej, byc moze mix jquery i JS, ma to sens?
// function eventForSingleElement(elementMain--->element_do_obrobki, eventName--->np onClick, action-->np.
//     toggleClass, element2-->np_nazwa_nowej_klasy, timerInterval, timerIntValue--->np_4000) {
//
//     document.querySelector('elementMain').eventName = function() {
//         action('element2); //dodac warunek czy takie zdazenie ma miejsce czy nie?
//             if timerInterval ='timer'{
//                 setTimer = timerIntValue;
//             }
//             else if timerInterval = "interval"
//                 setInterval = timerIntValue;
//     }
//
//     });
// }
// //wywolanie:
// eventForSingleElement(menu, onClick, toggleClass, menuExtra, Interval, 4000)
// lub
// eventForSingleElement(menu, onClick, toggleClass, menuExtra, instant, 0)

