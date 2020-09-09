const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");


console.log('#home:')
console.log(home)

console.log('children elements of .offers:')
children.forEach(child => console.log(child))

console.log('.ban:')
console.log(ban)

console.log('.block elements:')
someBlocks.forEach(block => console.log(block))

console.log('.links > li:')
listElements.forEach(li => console.log(li))