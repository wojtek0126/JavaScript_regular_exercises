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

Znajdź i zapisz do zmiennych następujące elementy:
1. Element o **klasie** ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
2. Element o **id** ```second``` -> jego rodzic -> jego czwarte dziecko.
3. Element o **atrybucie** ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).
4. **Div** o **klasie** ```forth``` -> jego rodzic -> jego pierwsze dziecko o tagu ```article``` -> jego drugie dziecko o tagu ```<p>```.

Wszystkie te elementy mają atrybut ```data-answer``` nastawiony na numer zadania, dla którego są odpowiedzią.


## Zadanie 2 - rozwiązywane z wykładowcą

W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki). Po kliknięciu w którykolwiek z nich &ndash; element, który znajduje się bezpośrednio po nim, powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Następny element ma być wyszukiwany zależnie od położenia ```this```.
3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu, czy następny element nie równa się ```null```).


## Zadanie 3

W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki). Po kliknięciu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Rodzic ma być wyszukiwany zależnie od położenia ```this```.
3. Kolor tła musi być losowy.

Hint:
Żeby uzyskać losowy kolor, użyj poniższego kodu:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```


## Zadanie 4

W pliku znajdują się trzy listy (każda osadzona w elemencie ```div```). Po najechaniu myszką na element ```div``` zmienić się mają kolory tła elementów jego listy. Odpowiednio:
1. Pierwszy element w liście ma mieć kolor czerwony.
2. Ostatni element w liście ma mieć kolor niebieski.
3. Wszystkie inne elementy mają mieć kolor zielony.

Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie divy musi być założony ten sam event.
2. Elementy listy mają być wyszukane w zależności od ```this```.


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
