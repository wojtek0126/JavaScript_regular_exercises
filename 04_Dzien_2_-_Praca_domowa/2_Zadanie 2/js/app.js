
// const menu = document.getElementById("menu");
//
// function getDataInfo(element) {
//     let array = [];
//     element.childNodes.forEach(function (node) {
//         if (node.tagName) {
//             array.push(node.getAttribute('data-info'));
//         }
//     })
//     return array;
// }

const menu = document.querySelector("#menu").querySelectorAll("li");

function getDataInfo(element){
    let array = [];
    element.forEach(function (elm){
        array.push(elm.getAttribute("data-info"));
    });
    return array;
}

// const getDataInfo = (element) => {
//     let array = [];
//     element.childNodes.forEach((node) => {
//         if (node.tagName) {
//             array.push(node.getAttribute("data-info"));
//         }
//     });
//     return array;
// };
console.log("1. data info from menu items: ", getDataInfo(menu));
// ** Zadanie 2:

// const mainContainer = document.getElementById("main-container");
// const getElementClass = (element) => {
//     array2 = [];
//     array2.push(element.classList);
//     return array2;
// };

const mainContainer = document.getElementById("main-container");
const getElementClass = (element) => {
    return Array.from(element.classList);
};
console.log(
    "2. class list of main-container: ",
    getElementClass(mainContainer)
);
// ** Zadanie 3:
const pinkColor = document.getElementsByClassName("pink-color");
const getElementText = (elements) => {
    let array = [];
    Array.from(elements).forEach((element) => {
        array.push(element.textContent);
    });
    return array;
};

// const getElementText = (elements, num = 0) => {
//     let array = [];
//     const x = elements.forEach((element) => {
//        return console.log('dldldld');
//     });
//     return x;
// }
console.log("3. pink text: ", getElementText(pinkColor));
// ** Zadanie 4:
const images = document.getElementsByClassName("images");
const getElementAlt = (elements) => {
    let array = [];
    Array.from(elements).forEach((element) => {
        array.push(element.getAttribute("alt"));
    });
    return array;
};
console.log("4. alt attribute of images: ", getElementAlt(images));
// ** Zadanie 5:
const myLink = document.getElementsByClassName("my-link");
const getElementHref = (elements) => {
    let array = [];
    Array.from(elements).forEach((element) => {
        array.push(element.getAttribute("href"));
    });
    return array;
};
console.log("5. href attributes: ", getElementHref(myLink));
