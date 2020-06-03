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

* Stwórz funkcję `getDatasInfo(elements)`, do której przekaż jako argument zmienną `links` (pamiętaj o tym, że jest to pseudotablica)
* stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu **data** każdego elementu li
* zwróć tą tablicę.


## Zadanie 2

Przeanalizuj kod HTML i JavaScript. W pliku `js/app.js` jest przygotowane kilka zmiennych, w których zapisane są wyszukane elementy DOM.

Wypisz w konsoli wszystkie te zmienne. Sprawdź, które z nich to pseudotablice.

W przypadku pseudotablic przeiteruj (używając np. pętli **for**). Wypisz nazwę tagu oraz klasy dla każdego elementu.


## Zadanie 3

Wypisz w konsoli wartość ```innerText``` dla elementów zmiennej ```blocks```. Następnie ustaw wartość ```innerText``` na "Nowa wartość diva o klasie blocks".


## Zadanie 4

* Znajdź na stronie element o **class**  `superFooter`
* Stwórz funkcję ```getId(element)```, do której przekaż jako argument znaleziony element
* pobierz w funkcji nazwę id elementu i zwróć ją


## Zadanie 5

* Stwórz funkcję ```getTags(elements)```, do której przekaż jako argument zmienną ```childElements``` (pamiętaj o tym, że jest to pseudotablica)
* stwórz w funkcji nową tablicę i wypełnij ją nazwami tagów pobranymi z elementów znajdujących się w ```childElements```
* zwróć tą tablicę.


## Zadanie 6

* Stwórz funkcję ```getClassInfo(element)```, do której przekaż jako argument zmienną ```banner```
*  zwróć tablicę z listą klas, pobraną z przekazanego do funkcji argumentu.


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
