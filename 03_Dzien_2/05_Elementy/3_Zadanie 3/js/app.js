const blocks = document.querySelectorAll(".block");

blocks.forEach(block => console.log(block.textContent))

blocks.forEach(block => block.textContent = "Nowa wartość diva o klasie blocks")

blocks.forEach(block => console.log(block.textContent))