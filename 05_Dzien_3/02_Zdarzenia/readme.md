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

Uruchom stronę `index.html`.  Na stronie znajdują się dwa elementy o klasach ```parent``` i ```children```
Stwórz event, który po najechaniu na element ```parent``` pokaże element ```children```. Zauważ, że element ```children``` ma ustawiony display: none w css.
Stwórz drugi event, który po zjechaniu z elementów schowa z powrotem element ```children```.
Pamiętaj o tym, aby nie chować wszystkich elementów naraz.


## Zadanie 2

Uruchom stronę przygotowaną dla zadania. Sprawdź w konsoli, czy są jakieś błędy. Następnie:
  1. Przenieś tag ```<script>``` do sekcji ```<head>```. Zobacz, co się zmieniło w działaniu skryptu. Spróbuj to wytłumaczyć.
  2. Stwórz event ```DOMContentLoaded``` dla elementu ```document``` i przenieś kod do środka tego eventu. Czy poprawiło to sytuację?
  3. Przenieś znowu tag ```<script>``` na koniec pliku &ndash; czy jest jakaś różnica?
  
  

## Zadanie 3

Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się przycisk. Podepnij do niego event, który po kliknięciu spowoduje, że w konsoli wyświetli się napis "Hura! Działa!".


## Zadanie 4

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i jeden licznik. Napisz jeden wspólny event dla wszystkich przycisków, który spowoduje, że po kliknięciu w przycisk licznik zwiększy wartość o jeden.


## Zadanie 5

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i trzy liczniki (elementy ```span``` o klasie ```counter```). Do każdego przycisku dopisz event, który spowoduje, że po kliknięciu w przycisk przypisany do niego licznik zwiększy swoją wartość o jeden.


## Zadanie 6

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy elementy ```div```. Napisz **jeden** wspólny event dla nich wszystkich, który będzie zmieniał kolor tła tylko w klikniętym **divie**. Użyj do tego słowa kluczowego ```this```.

**Hint**:
Żeby uzyskać losowy kolor użyj poniższego kodu:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```


## Zadanie 7

Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się jeden element **div**. Napisz dla niego event, który będzie wypisywał położenie kursora myszy w chwili, gdy znajduje się nad tym elementem.
Wyszukaj zarówno położenie kursora globalne (czyli odległość od górnego lewego rogu okna), jak i lokalne (czyli odległość od lewego górnego rogu elementu).


## Zadanie 8

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się zagnieżdżone elementy. Do każdego dopisane są eventy. Użyj metod ```stopPropagation``` i ```stopImmediatePropagation``` w taki sposób, aby:

1. Wywoływały się eventy dla elementu pierwszego i drugiego, a nie wywoływał się event dla elementu trzeciego.
2. Wywoływały się wszystkie eventy dla elementu czwartego i pierwszy event dla elementu piątego.
  

## Zadanie 9

Uruchom stronę przygotowaną dla zadania.
Na stronie znajdują się dwa elementy, które pokazują wielkość okna. Dopisz event do okna (element ```window```), który spowoduje, że elementy te będą pokazywały poprawne wartości (`innerWidth`, `innerHeight`) nawet po przeskalowaniu okna (`resize`).


## Zadanie 10

Uruchom stronę przygotowaną dla zadania. Prześledź dokładnie kod i przeczytaj komentarze.
Skoncentruj się na każdej linijce kodu. Zastanów się nad taką sytuacją:
Potrzebujesz użyć elementu o id ```b``` wewnątrz funkcji ```innerFuncOne```, żeby zmienić mu kolor.
Jak to zrobisz? Odpowiedź umieść w komentarzu.


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
