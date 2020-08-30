function Calculator() {
    this.history = [];
}

Calculator.prototype.clearOperations = function () {
    this.history = [];
};

Calculator.prototype.printOperations = function () {
    this.history.forEach(function(op) {
        console.log(op);
    })
};

Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " got " + result);
};


const test = new Calculator();
test.add(2,3);
test.add(5,5);
test.printOperations();