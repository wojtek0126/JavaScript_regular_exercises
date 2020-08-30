// const spoon = {
//     isExist: true
// }
//
// const fork = spoon;
// fork.isExist  = true;
//
// console.log(spoon);

const franko = {
    tekst: 'Spadaj pierdoło',
    kwestia1: function() {
        console.log(this.tekst)
    }
}

franko.kwestia1();