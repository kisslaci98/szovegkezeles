"use strict"

function valtoztat(elem) {
    let tartalom = elem.innerHTML;
    let tomb = tartalom.split(' ');
    let szoveg = "<ul>";
    for (let i = 0; i < tomb.length; i++) {
        szoveg += `<li>${tomb[i]}</li>`;
        
    }
    szoveg += "</ul>"
    elem.innerHTML = szoveg;
}