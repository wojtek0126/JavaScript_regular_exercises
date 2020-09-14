// Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich.
//     Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.
//     Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
//     1. Obie drużyny muszą być różne.
// 2. Liczba goli powinna być nieujemna.
//
//     Jeżeli formularz zostanie zweryfikowany poprawnie,
//     odpowiednia informacja o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.

//tabl wynikow: tr:drugi child(pierwszy to opis tabeli,
// w nim: 1child = 1druzyna; 2 child = druga druzyna; 3 child = wynik a + " - " + b..zrobim id do nich
// const $team1Nameinput =
// const $team2Nameinput =
// const $team1PointsResultInput =
// const $team2PointsResultInput =
//appendchild do results_displayed
// const newTeam1 = document.createElement('td');
// const newTeam2 = document.createElement('td');
// function createTeams(team1, team2) {
//
//     newTeam1.innerHTML = `${team1}`;
//     $resultsDisplay.appendChild(newTeam1);
//
//
//     newTeam2.innerHTML = `${team2}`;
//     $resultsDisplay.appendChild(newTeam2);
//
//
// }
// const result = document.createElement('td');
// function createResult(team1_points, team2_points) {
//
//     result.innerHTML = `${team1_Points + " - " + team2_Points}`;
//     $resultsDisplay.appendChild(result);
// }
// createTeams('sss', 'ddd');
// createResult(3, 3)

const $resultsDisplay = document.querySelector('#results_displayed');
console.log($resultsDisplay);

const newTeam1 = document.createElement('td');
newTeam1.innerHTML ="RKS Chuwdu";
$resultsDisplay.appendChild(newTeam1);

const newTeam2 = document.createElement('td');
newTeam2.innerHTML ="Polonia Napletun";
$resultsDisplay.appendChild(newTeam2);
const team1Points = 7;
const team2Points = 5;
const result = document.createElement('td');
result.innerHTML = `${team1Points + " - " + team2Points}`;
$resultsDisplay.appendChild(result);


const $form = document.querySelector('#form');
console.log($form);

//to na submita doda wynik, w srodku validatory
$form.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('sssss');
});

