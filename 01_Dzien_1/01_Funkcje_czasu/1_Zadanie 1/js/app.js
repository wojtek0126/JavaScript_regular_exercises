// Przetestuj działanie setTimeout i setInterval. Uruchom interwał który co
// 10s będzie wyświetlał napis "Wygenerowano z setInterval" w konsoli.
//     A także timer który po 4s wypisze w konsoli: "JavaScript Rules".

setInterval(function () {
console.log("Wygenerowano z setInterval")
}, 10000);

setTimeout(function () {
    console.log("JS Rules")
}, 4000);