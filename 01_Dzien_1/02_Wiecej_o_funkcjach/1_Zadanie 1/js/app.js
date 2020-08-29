// Zajrzyj do pliku `js/app.js` i przetestuj działanie obu funkcji.
// Dlaczego funkcja o nazwie `firstFunc` nie ma dostępu do zmiennej o nazwie `otherInt`?
function firstFunc() {
  const someInt = 1;

  function secondFunc() {
    console.log(someInt);

    const otherInt = 3;
  }
// otherInt dziala tylko w obrebie klamerek, po czym jest destroyed
  secondFunc();

  console.log(someInt);  // po zmianie z otherInt na someInt funkcja działa
}

firstFunc();