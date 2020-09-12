// W pliku ```app.js```  za pomocą konstruktora stwórz funkcję ```Tree```.
//     Niech funkcja ta ma jedną właściwość ```type```, która będzie przechowywać typ drzewa.
//     Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.
//
//     Dopisz do prototypu konstruktora również metodę ```bloom()```, która będzie zwracała tekst "I am blooming".

// const Tree = function (type) {
//     this.type = type;
// };
//
// Tree.prototype.bloom = function () {
//     return  console.log(this.type + " is blooming");
// };
//
//
//
// const tree1 = new Tree("Brzoza");
// console.log(tree1);
// const tree2 = new Tree("Lipa");
// console.log(tree2);
// const tree3 = new Tree("Kasztan");
// console.log(tree3);
// const a = tree1.bloom();
// console.log(a);

// let numArray = [6,7,8,9,10,12,13,14,15];
// let missing = [];
// const getMissingElement = function () {
//     for(let i = 0; i < numArray.length; i++) {
//         if(numArray[i+1] - numArray[i] !==1) {
//             return numArray[i] + 1;
//         }
//     }
// }
// console.log(getMissingElement(missing));