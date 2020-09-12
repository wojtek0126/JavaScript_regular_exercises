// Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się przycisk. Podepnij do niego event,
//     który po kliknięciu spowoduje, że w konsoli wyświetli się napis "Hura! Działa!".


var element = document.getElementById("mainBtn");
element.onclick = function(){
    console.log("Hura! Działa!");

}