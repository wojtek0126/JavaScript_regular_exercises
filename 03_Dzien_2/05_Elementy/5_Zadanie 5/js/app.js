const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

const getTags = (elements) => {
    let array = []
    elements.forEach(element => array.push(element.tagName))
    return Array.from(array);
}

console.log(getTags(childElements))