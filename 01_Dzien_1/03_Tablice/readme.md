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

Napisz funkcję ```distFromAverage```, która ma przyjmować tylko jeden argument &ndash; tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki a średnią wartością tablicy.
Np.

```JavaScript
distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```


## Zadanie 2

Stwórz tablicę z listą swoich ulubionych owoców. Następnie:

1. Wypisz pierwszy owoc w konsoli.
1. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
1. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).


## Zadanie 3

Zajrzyj do pliku `js/app.js`. Jest tam przykładowa funkcja, która tworzy tablicę z liczbami. Niestety nie działa ona dobrze. Znajdź błąd i napraw go, tak żeby funkcja działała.


## Zadanie 4

Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr - tablicę. Następnie przy pomocy odpowiedniej metody tablicowej przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.


## Zadanie 5

Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden argument - tablicę. Następnie funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.

```JavaScript
multiply([1,2,3,4,5,6,7]) => 5040
multiply([1,1,1,1]) => 1
multiply([2,8,3,7]) => 336
```


## Zadanie 6

Napisz funkcję ```getEvenAvarage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać średnią wartość **parzystych** liczb z tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby. Jeśli w tablicy nie ma parzystych liczb niech zwraca null.

```JavaScript
getEvenAvarage([1,2,3,4,5,6,7]) => 4
getEvenAvarage([1,1,1,1]) => null
getEvenAvarage([2,8,3,7,4]) => 4.666
```


## Zadanie 7

Napisz funkcję ```sortArray```, która ma przyjmować tylko jeden argument - tablicę zawierającą  liczby całkowite. Funkcja ta ma zwracać posortowaną rosnąco tablicę. Możesz skorzystać z metod tablicowych.

```JavaScript
sortArray([145,11,3,64,4,6,10]) => [3,4,6,10,11,64,145]
```


## Zadanie 8

Napisz funkcję ```addArrays```, która ma przyjmować dwa argumenty - dwie tablice  zawierające  liczby całkowite. Funkcja ta ma zwracać również tablicę, która będzie wynikiem dodawania każdego elementu o tym samym indeksie. Jeżeli, tablice nie są równe, elementy nadmiarowe są przepisywane do nowej tablicy.

```JavaScript
addArrays([4,0,1,3,4], [1,9,6,7,8,17]) => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]) => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]) => [5,4,77,6,3,5]
```


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
