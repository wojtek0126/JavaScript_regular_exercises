// Stwórz obiekt `car`, utwórz dla niego odpowiednie
// właściwości i metody.
//
//     ### Właściwości:
// * `brand`,
// * `color`,
// * `numberOfKilometers` (na początku **0**).
//
// ### Metody:
// * `printCarinfo()` - metoda powinna wypisywać
// informacje o samochodzie (kolor,
//     markę i liczbę przejechanych kilometrów).
// * `drive(km)` - która dodaje
// do przejechanych kilometrów podaną wartość.
//     Użyj słowa kluczowego ```this```,
//     żeby odwołać się do obiektu w środku metody.
//
//     ```JavaScript
// car.printCarinfo(); => "Czarny Mercedes, 0km"
// car.drive(20);
// car.printCarinfo(); => "Czerny mercedes, 20km"
// ```

const car = {
    brand: 'Fiat',
    model: 'Truplo',
    engine: '1.3 Diesel',
    color: 'red',
    kilometerCounter: 0,
    testedDates: [2020],
    printCarInfo: function () {
        console.log(this.brand + " " + this.color + " " + this.numberOfKilometers);
    },
    drive: function (km) {
        if (km > 0) {this.kilometerCounter += km;}
        else {
            console.log("spadaj pierdoło, wpiasłeś wartość ujemną");
        }
    },
    addTestDate: function (year) {
        this.testedDates.push(year);
    },
    printAllTestDates: function () {
        // console.log(this.testedDates);
        this.testedDates.forEach(function (check) {
            console.log(check);
        })

    }

};

// car.printCarInfo();
car.addTestDate(2016);
car.addTestDate(2017);
car.addTestDate(2018);
// car.drive(30);
// car.drive(-150);
// car.testedDates;
car.testedDates[1];
car.printAllTestDates();

// console.log(car);