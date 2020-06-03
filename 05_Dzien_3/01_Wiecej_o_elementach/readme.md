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

Zmodyfikuj listę w sekcji `.exercise` w następujący sposób:

1. Nastaw kolor tła co drugiego elementu listy na szary (`#9e9e9e`),
2. Nastaw piątemu elementowi listy **klasę** ```big```,
3. Nastaw co trzeciemu elementowi podkreślenie.


## Zadanie 2

Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
Napisz kod JavaScript, który wprowadzi następujące zmiany:

1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```).
2. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut ```href```.
3. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).

## Zadanie 3

Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.
1. Wyszukaj odpowiednie elementy (spany) i zapisz je do  zmiennych.
2. Za pomocą ```innerText``` wypełnij w nich odpowiednie informacje.


## Zadanie 4

Na stronie jest proste menu. Zarówno kod HTML jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
1. Wyszukaj element `ul` w sekcji `.exercise` i dodaj mu klasę `menu`.
2. Wyszukaj wszystkie elementy `li` w sekcji `.exercise` i dodaj im klasę ```menuElement``` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy ```selected```.
3. Zauważ, że jeden z elementów ma czerwony kolor tekstu. Jest to spowodowane tym, że ma **klasę** ```error```. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę **klasę** wszystkim elementom, które ją mają).


## Zadanie 5

Dodaj do każdego elementu listy w sekcji `.exercise`, atrybut ```data-id``` przyjmujący kolejne liczby całkowite (zaczynając od 1).


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
