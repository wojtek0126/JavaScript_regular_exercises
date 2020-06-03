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

Przy rozwiązywaniu tego zadania pamiętaj, aby teksty wypisywane w elementach ```#error-message``` i ```#success-message``` były identyczne jak w treści zadania. Elementy te mają nadane klasy `d-none` które je ukrywają. Należy tę klasę usunąć aby pokazać odpowiednie pole.

Na stronie znajduje się formularz rejestracyjny.
Napisz walidację tego formularza w taki sposób, żeby informacja o sukcesie pojawiła się tylko i wyłącznie wtedy, kiedy spełnione zostaną następujące warunki:

1. Email zawiera w sobie @.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```#error-message``` informację: **Email musi posiadać znak @**,
2. Imię jest dłuższe niż 2 znaki.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```#error-message``` informację: **Twoje imię jest za krótkie**,
3. Nazwisko jest dłuższe niż 2 znaki.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```#error-message``` informację: **Twoje nazwisko jest za krótkie**,
4. Hasło i hasło drugie są identyczne, ale nie puste.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```#error-message``` informację: **Hasła nie są takie same lub puste**,
5. Checkbox musi być zaznaczony.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```#error-message``` informację: **Musisz zaakceptować warunki**.

Jeżeli walidacja przebiegła poprawnie, wpisz w polu `#success-message` informację: **Formularz wysłany!**.


## Zadanie 2

Na stronie znajduje się formularz do zamówienia. Jest w nim sekcja odpowiedzialna za wystawienie faktury.

Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".

Ma to również działać przy starcie strony: sekcja z danymi do faktury powinna być ukryta!


## Zadanie 3

Na stronie znajduje się `select` i trzy obrazki.
Każdy z obrazków jest przypisany do jednego z wyborów w selekcie. Napisz kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.

Na start powinien być wyświetlony obrazek `Windows`. Następnie po wyborze innego i **zatwierdzeniu** przyciskiem `Zatwierdź` zmień wyświetlany obrazek.


## Zadanie 4

Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich. Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.
Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
1. Obie drużyny muszą być różne.
2. Liczba goli powinna być nieujemna.

Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.


## Walidacja karty kredytowej - dodatkowe

Zadanie polega na walidacji kart kredytowych wpisywanych w formularz na stronie. Walidacja ma następować w czasie rzeczywistym (czyli po wprowadzeniu każdej cyfry).
W elemencie `#type` znajdują się trzy elementy reprezentujące odpowiednie firmy obsługujące karty kredytowe. Powinna być wyświetlona **tylko** ikona tego rodzaju karty której numer wpisujemy w polu obok, jak tylko jest możliwe jej ustalenie Poprawność karty ma być pokazana po wpisaniu odpowiedniej liczby cyfr - zmiana koloru ikony na zieloną.

## Zasady rozpoznawania kart:
1. Karty Visa zaczynają się od cyfry 4.
1. Karty Mastercard zaczynają się od cyfry 5.
1. Karty American Express zaczynają się od cyfry 3. Następną cyfrą musi być 4 lub 7.

## Zasady walidacji kart:
1. Karty Visa mają od 13 do 16 cyfr.
1. Karty Mastercard mają równo 16 cyfr.
1. Karty American Express mają równo 15 cyfr.

Zasady walidacji kart są uproszczone (nie powinniście ich stosować w rzeczywistych projektach).
Jeżeli chcesz poznać prawdziwe zasady walidacji kart kredytowych, to są one opisane tutaj:
[https://en.wikipedia.org/wiki/Bank_card_number](https://en.wikipedia.org/wiki/Bank_card_number), [https://en.wikipedia.org/wiki/Luhn_algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).


---

Repozytorium z ćwiczeniami zostanie usunięte 2 tygodnie po zakończeniu kursu. Spowoduje to też usunięcie wszystkich forków, które są zrobione z tego repozytorium.
