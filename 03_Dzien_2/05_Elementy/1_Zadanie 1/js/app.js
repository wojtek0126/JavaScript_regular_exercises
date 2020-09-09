// * Stwórz funkcję `getDatasInfo(elements)`, do której przekaż jako argument zmienną `links`
// (pamiętaj o tym, że jest to pseudotablica)
// * stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu **data** każdego elementu li
// * zwróć tą tablicę.


const links = document.querySelector(".links").querySelectorAll("li");

function getDatasInfo(elements) {
    let array = [];
    elements.forEach(function (value) {
        array.push(value.getAttribute("data-color"));
    })
    return array;
}

// const getDatasInfo = (elements) => {
//     let array = [];
//     elements.forEach((element) => array.push(element.getAttribute("data-color")));
//     return array;
// };

console.log(getDatasInfo(links))

