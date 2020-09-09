const banner = document.querySelector(".ban");

const getClassInfo = (element) => {
    return Array.from(element.classList)
}

console.log(getClassInfo(banner))