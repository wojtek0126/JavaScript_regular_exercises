// const className = 'test';
// const $target = document.getElementsByClassName(className);
// console.log($target);
//
// const users = [
//     {
//         name: 'Jan',
//         surname: 'Kowalski'
//     },
//     {
//         name: 'Jan',
//         surname: 'Kowalski'
//     },
//     {
//         name: 'Jan',
//         surname: 'Kowalski'
//     },
//     {
//         name: 'Jan',
//         surname: 'Kowalski'
//     }
// ]
//
// function createUser(name, surname) {
//     const $li = document.createElement('li');
//     $li.innerText = name + " " +  surname;
//     return $li;  //potrzebny return
// }
//
// const $ul = document.querySelector('.users');
// $ul.appendChild(createUser('Jan', 'Kowalski'));
//
// users.forEach(function (user) {
//     const $liuser = createUser(user.name, user.surname);
//     $ul.appendChild(element);
//     //apppendChild, insertBefore ---< wazne
//
// })

// const users = [
//     {
//         name: 'Jan',
//         surname: 'Kowalski'
//     },
//     {
//         name: 'Tomasz',
//         surname: 'Nowak'
//     },
//     {
//         name: 'John',
//         surname: 'Travolta'
//     }
// ];
//
//
// function createUser(name, surname) {
//     const $li = document.createElement('li');
//     $li.innerText = name + ' ' + surname;
//     return $li;
// }
//
//
// const $ul = document.querySelector('#users');
//
// users.forEach(function(user) {
//     const element = createUser(user.name, user.surname);
//     $ul.appendChild(element);
// });
//
// //wazne ponizej
// const $p = document.createElement('p');
// $p.innerText = 'test 2';
//
//
// const $div = document.querySelector('div');
// $div.insertBefore($p, $div.children[1]);
//cloneNode: zrob dokladna kopia elementu bez zawartosci, oraz cloneNode(true) - z zawartoscia - to z true;
// children[1] -->to sie wykrzaczy przy zmianach w html, queryselector/nadawanie unikalnych klas/id lepsze, lecz wolniejsze
//$ przed zmienna jest po to zeby wiedziec/zaznaczyc ze zmienna jest to dokument html;

// Na stronie znajduje si?? tabela z zam??wieniami. Przy ka??dym zam??wieniu znajduje si?? przycisk,
//     kt??ry s??u??y do usuwania tego zam??wienia.
//     Dopisz do niego odpowiedni event, kt??ry spowoduje, ??e dane zam??wienie zniknie z tablicy.
//     Spr??buj zrobi?? to w taki spos??b,
//     ??eby wszystkie przyciski korzysta??y z tego samego eventu (u??yj ```this```).

const $btns = document.querySelectorAll('.deleteBtn');

$btns.forEach(function ($btn) {
    $btn.addEventListener('click', function () {
        const tr = this.parentElement.parentElement;
        const tbody = this.parentElement.parentElement.parentElement;
        tbody.removeChild(tr);
    });
})
//wersja jeszcze lepsza ponizej
// const $btns = document.querySelectorAll('.deleteBtn');
//
// $btns.forEach(function($btn) {
//     $btn.addEventListener('click', function () {
//         const tr = this.parentElement.parentElement;
//         const tbody = tr.parentElement;
//         tbody.removeChild(tr);
//     });
// });