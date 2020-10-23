// sprawdz ktora dluzsza i uzyj foreach lub map.
function addArrays(tab1, tab2) {
    let tabMin = tab1;
    let tabMax = tab2;
    if (tab1.length > tab2.length) {
        tabMin = tab2;
        tabMax = tab1;
    }
    return tabMax.map(function (elm, index) {
        if (tabMin[index]) {
            return elm + tabMin[index];
        } else {
            return elm;
        }
    });
}
const wynik = addArrays([4,0,1,3,4], [1,9,6,7,8,17,23,40]);
console.log(wynik);
