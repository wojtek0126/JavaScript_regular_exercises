// Dodaj do obiektu również następujące metody:
//     * `up()`, która zwiększa schodek o 1
// (modyfikuj pole step)
// * `down()`, która zmniejsza schodek o 1
// (modyfikuj pole step)
// * `printStep()`, która pokazuje,
//     na którym schodku jesteśmy.


const stairs = {
    steps: 0,
    up: function () {
        this.steps += 1;
    },
    down: function f() {
        if (this.steps > 0) {
            this.steps -= 1;
        }
        else {
            this.steps = 0  // "parter";
        }
    },
    printStep: function () {
        console.log(this.steps);
    }
}

// stairs.up();
// stairs.up();
// stairs.printStep();
stairs.down();
stairs.printStep();
// stairs.down();
// stairs.printStep();
// stairs.down();
// stairs.printStep();