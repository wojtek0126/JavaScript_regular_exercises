const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const links = document.querySelectorAll('#list1 a, #list2 a');

links.forEach(function(link) {
    link.addEventListener('click', function() {
        if(this.parentElement === list1) {
            list2.appendChild(this);
        } else {
            list1.appendChild(this);
        }
    });
});