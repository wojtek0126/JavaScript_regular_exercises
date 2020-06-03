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

## Zadanie 1

W pliku ```app.js```  za pomocą konstruktora stwórz funkcję ```Tree```. Niech funkcja ta ma jedną właściwość ```type```, która będzie przechowywać typ drzewa.
Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.

Dopisz do prototypu konstruktora również metodę ```bloom()```, która będzie zwracała tekst "I am blooming".
## Zadanie 2

Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.

 * **1. Pobranie informacji z atrybutu data:**
    - znajdź element o **id** ```menu```,
    - stwórz funkcję ```getDataInfo(element)``` do której przekaż , jako argument , znaleziony element,
    - stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data-info każdego elementu **li**. Zauważ, że
    elementy **li** to dzieci elementu o id ```menu```.
    - zwróć tą tablicę.

* **2. Szukanie elementu po id:**
    - Znajdź element o **id** ```main-contener```.
    - stwórz funkcję ```getElementClass(element)``` do której przekaż , jako argument , znaleziony element.
    - zwróć tablicę złożoną z nazw klas tego elementu.

* **3. Szukanie elementu po klasie:**
    - Znajdź element o **klasie** ```pink-color```.
    - stwórz funkcję ```getElementText(element)``` do której przekaż , jako argument , znalezione elementy.
    - zwróć z funkcji tekst, znajdujący się w tym elemencie

* **4. Szukanie elementu po klasie:**
    - Znajdź elementy o **klasie** ```images```.
    - stwórz funkcję ```getElementAlt(element)``` do której przekaż , jako argument , znalezione elementy.
    - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. Pobierz te atrybuty z przekazanych jako argument elementów.

* **5. Szukanie elementu po klasie:**
    - Znajdź elementy o **klasie** ```my-link```.
    - stwórz funkcję ```getElementHref(element)``` do której przekaż , jako argument , znalezione elementy.
    - stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. Pobierz te atrybuty z przekazanych jako argument elementów.
---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
