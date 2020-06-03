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

W pliku `js/app.js` stwórz konstruktor `Basket`. Na jego bazie stwórz obiekt, który będzie miał następujące pola:
* products - tablica z wszystkimi produktami
* sum - kwota do zapłaty za wszystkie produkty

Do prototypu konstruktora dodaj metody:
* `addProduct(name, price)`, która jako parametry będzie przyjmowała nazwę produktu oraz jego cenę. Cenę podawaj jako typ number, a nazwę jako string. Umieść te dane jako obiekt w tablicy this.products.
* `showBasket()`, której zadaniem będzie wyświetlenie wszystkich produktów z koszyka wraz ceną, oraz kwotą do zapłaty.

Przykładowe wywołanie:

```JavaScript
const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
```


## Zadanie 2 

W pliku `js/app.js` możesz znaleźć przykładowy konstruktor dla robota. Konstruktor oczekuje, że podasz tylko imię robota.
Metody dodane są do prototypu funkcji.
Utwórz kilka robotów i poszukaj, czy w napisanym kodzie nie ma błędów.
Nie bój się sprawdzić w konsoli jak wyglądają poszczególne roboty oraz sam konstruktor.


## Zadanie 3

Stwórz konstruktor ```Calculator``` dla przyszłych obiektów. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji.
Następnie przy pomocy prototypu dodaj  następujące metody:
  1. ```add(num1, num2)``` &ndash; metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  2. ```multiply(num1, num2)``` &ndash; metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  3. ```subtract(num1, num2)``` &ndash; metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  4. ```divide(num1, num2)``` &ndash; metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  5. ```printOperations()``` &ndash; metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
  6. ```clearoperations()``` &ndash; metoda ma wyczyścić wszystkie operacje z pamięci.

**Pamiętaj o używaniu ```this```**.


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
