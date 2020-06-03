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

Stwórz obiekt `car`, utwórz dla niego odpowiednie właściwości i metody.

### Właściwości:
* `brand`,
* `color`,
* `numberOfKilometers` (na początku **0**).

### Metody:
* `printCarinfo()` - metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
* `drive(km)` - która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

```JavaScript
car.printCarinfo(); => "Czarny Mercedes, 0km"
car.drive(20);
car.printCarinfo(); => "Czerny mercedes, 20km"
```


## Zadanie do samodzielnego wykonania

Do obiektu `car` z dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).

Dodaj też następujące metody:
 1. metodę dodającą wpis do tej tablicy,
 2. metodę zwracającą wszystkie przeglądy samochodu.

Użyj słowa kluczowego `this`, żeby odwołać się do obiektu w środku metody.


## Zadanie 2 

Przeanalizuj kod, który znajduje się w pliku `js/app.js`. 

Jest tam stworzony obiekt ```calculator```, który posiada jedną metodę `save(newA,newB)`. Zadaniem tej metody jest zapisanie dla tego obiektu pod pola `a` i `b` dwóch liczb.

Dopisz metody `sum` oraz `multiply`, tak aby zwracały sumę oraz iloczyn tych dwóch liczb ustawionych w metodzie `save`.


## Zadanie 3

Stwórz obiekt `stairs`.

Niech obiekt posiada pole `step`, które na początku ustaw na 0. 

Dodaj do obiektu również następujące metody: 
* `up()`, która zwiększa schodek o 1 (modyfikuj pole step)
* `down()`, która zmniejsza schodek o 1 (modyfikuj pole step)
* `printStep()`, która pokazuje, na którym schodku jesteśmy.

Przykład wywołania:
```JavaScript
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
```


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
