// 1. Nastaw kolor tła co drugiego elementu listy na szary (`#9e9e9e`),
//     2. Nastaw piątemu elementowi listy **klasę** ```big```,
//     3. Nastaw co trzeciemu elementowi podkreślenie.



const items = document.querySelectorAll('li');
for(let i = 0; i < items.length; i++) {
    if (i % 2 == 0){
        items[i].style.backgroundColor = '#9e9e9e'
    }
}

for(let i = 0; i < items.length; i++) {
    if (i == 5) {
        items[i].classList.add("big");
    }
}

for(let i = 0; i < items.length; i++) {
    if (i % 3 == 0){
        items[i].style.textDecoration = "underline";
    }
}



// const items = document.querySelectorAll(‘.exercise li:nth-child(odd)‘);
// const itemsAll = document.querySelectorAll(‘.exercise li’);
// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = ‘#9E9E9E’;
// }
// itemsAll[4].classList.add(‘big’);
// for (let i = 0; i < itemsAll.length; i+=3) {
//     itemsAll[i].style.textDecoration = ‘underline’;
// }