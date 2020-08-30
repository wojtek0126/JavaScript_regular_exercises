const calculator = {
  save: function (newA, newB) {
    this.a = newA;
    this.b = newB;
  },
  sum: function () {
    return this.a + this.b;
  },
  multiply: function () {
    return this.a * this.b;
  }
};

calculator.save(3, 4);
console.log(calculator.sum());

const babolAleDziala  = {
  name: 'Franko',
  super_moves: ['kop w jaja', 'ze łba'],
  basic_quotes: ['cieknie ci z mordodupy, grubasie',
  'spadaj pierdoło']
}

// babolAleDziala = new name('Alex');
console.log(babolAleDziala);