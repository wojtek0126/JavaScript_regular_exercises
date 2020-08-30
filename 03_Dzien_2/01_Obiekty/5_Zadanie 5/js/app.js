// Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis.
//     Obiekt powinien mieć własność `title` (string),
//     `servings` (number) oraz `ingredients` (tablica stringów).
//
// Dodaj pole `ingredients` poza ciałem obiektu.
//
//     Wypisz w konsoli te wszystkie informacje.

const recipe = {
    title: 'Bobry i inne zupy z kobry',
    servings: 2,
}
recipe.ingredients = ['Bober caly', 'Kobra okularnik 200g', 'Woda',
    'Klej Butapren', 'Torba papierowa'];

console.log(recipe);