function Basket() {

    this.products = [];

    this.addProduct = function(initName, initPrice) {
        this.products.push({
            name: initName,
            price: initPrice
        });
    };

    this.showBasket = function() {
        this.products.forEach(function(product) {
            console.log(product.name + ' - ' + product.price + 'PLN');
        });

        const sum = this.products.reduce(function (p, c) {
            return p + c.price;
        }, 0);

        console.log('RAZEM DO ZAPŁATY: ' + sum + 'PLN');
    };
}



const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();

