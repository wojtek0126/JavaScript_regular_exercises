// Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych zmiennych:
//     1. Element o **id** ```home``` (na dwa sposoby).
// 2. Pierwszy element **li** posiadający atrybut ```data-direction```.
// 3. Pierwszy element o **klasie** ```block```.

let idHome = document.getElementById('home');
let idHome2 = document.querySelector('#home');

let dataDirectionFirstList = document.querySelector("li[data-direction]");

let classBlock = document.getElementsByClassName('block');
