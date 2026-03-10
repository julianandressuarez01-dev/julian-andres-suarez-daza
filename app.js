// Lista de celulares

let celulares = [

{nombre:"iPhone 15 Pro", score:0},

{nombre:"Samsung Galaxy S24 Ultra", score:0},

{nombre:"Google Pixel 8 Pro", score:0},

{nombre:"Xiaomi 13 Pro", score:0},

{nombre:"Motorola Edge 40", score:0},

{nombre:"OnePlus 12", score:0},

{nombre:"Nothing Phone 2", score:0}

];

let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");

let ranking = document.getElementById("ranking");

let currentA;
let currentB;

function nuevaComparacion(){

currentA = Math.floor(Math.random()*celulares.length);

currentB = Math.floor(Math.random()*celulares.length);

while(currentA === currentB){

currentB = Math.floor(Math.random()*celulares.length);

}

optionA.innerText = celulares[currentA].nombre;

optionB.innerText = celulares[currentB].nombre;

}

optionA.onclick = function(){

celulares[currentA].score++;

actualizarRanking();

nuevaComparacion();

}

optionB.onclick = function(){

celulares[currentB].score++;

actualizarRanking();

nuevaComparacion();

}

function actualizarRanking(){

let orden = celulares.slice().sort(function(a,b){

return b.score - a.score;

});

ranking.innerHTML="";

orden.forEach(function(c){

let li = document.createElement("li");

li.innerText = c.nombre + "  ⭐ " + c.score;

ranking.appendChild(li);

});

}

nuevaComparacion();
