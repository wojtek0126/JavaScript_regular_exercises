![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)

# Kilka ważnych informacji

Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

## Jak zacząć?

1. Stwórz [*fork*](https://guides.github.com/activities/forking/) repozytorium z zadaniami.
2. Sklonuj repozytorium na swój komputer. Użyj do tego komendy `git clone adres_repozytorium`
Adres repozytorium możesz znaleźć na stronie repozytorium po naciśnięciu w guzik "Clone or download".
3. Rozwiąż zadania i skomituj zmiany do swojego repozytorium. Użyj do tego komend `git add nazwa_pliku`.
Jeżeli chcesz dodać wszystkie zmienione pliki użyj `git add .` 
Pamiętaj że kropka na końcu jest ważna!
Następnie skommituj zmiany komendą `git commit -m "nazwa_commita"`
4. Wypchnij zmiany do swojego repozytorium na GitHubie.  Użyj do tego komendy `git push origin master`
5. Stwórz [*pull request*](https://help.github.com/articles/creating-a-pull-request) do oryginalnego repozytorium, gdy skończysz wszystkie zadania.

Poszczególne zadania rozwiązuj w odpowiednich plikach.

# Poniżej znajdziesz wytyczne do zadań

## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz obiekt `country`. Dopisz do niego następujące właściwości:

* `capital` - string, 
* `population` - number,
* `president` - string,
* `ministers` - tablica stringów

Wypisz w konsoli wszystkie właściwości.


## Zadanie 2 - rozwiązywane z wykładowcą

Stwórz obiekt `timeMachine`. Dopisz do niego następujące właściwości:

* `shape` - string, 
* `model` - string,
* `run(date, place)` - metoda, dzięki której można się przenieść w czasie. Argument `date` to data, do jakiej chcemy się przenieść, a `place` to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi. 

Wypisz w konsoli wszystkie właściwości i uruchom metodę `run`.


## Zadanie 3

Stwórz obiekt `book`. Dopisz do niego następujące właściwości:

* `title`,
* `author`,
* `numberOfPages`

Wypisz te właściwości w konsoli.


## Zadanie 4

Stwórz obiekt `person`. Dopisz do niego następujące właściwości i metodę:

* `name`,
* `age`,
* `sayHello()` - wypisującą string "hello"

Wypisz właściwości w konsoli, wywołaj metodę.


## Zadanie 5

Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis. Obiekt powinien mieć własność `title` (string), `servings` (number) oraz `ingredients` (tablica stringów). 

Dodaj pole `ingredients` poza ciałem obiektu. 

Wypisz w konsoli te wszystkie informacje.


## Zadanie 6

Do pliku ```js/app.js``` przekopiuj poniższy kod:

```js
const spoon = {
  isExist: true
}

const fork = spoon;
fork.isExist  = false;
```

Następnie sprawdź czy łyżka istnieje.


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
