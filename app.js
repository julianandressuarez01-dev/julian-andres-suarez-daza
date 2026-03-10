let celulares = [

{nombre:"iPhone 15 Pro", score:1000},

{nombre:"Samsung Galaxy S24", score:1000},

{nombre:"Google Pixel 8", score:1000},

{nombre:"Xiaomi 13", score:1000},

{nombre:"OnePlus 12", score:1000},

{nombre:"Motorola Edge 40", score:1000}

];

let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let ranking = document.getElementById("ranking");

let A;
let B;

function nuevoDuelo(){

A = Math.floor(Math.random()*celulares.length);
B = Math.floor(Math.random()*celulares.length);

while(A===B){

B = Math.floor(Math.random()*celulares.length);

}

optionA.innerText = celulares[A].nombre;
optionB.innerText = celulares[B].nombre;

}

optionA.onclick = function(){

celulares[A].score += 10;

actualizarRanking();

nuevoDuelo();

}

optionB.onclick = function(){

celulares[B].score += 10;

actualizarRanking();

nuevoDuelo();

}

function actualizarRanking(){

let orden = celulares.slice().sort((a,b)=>b.score-a.score);

ranking.innerHTML="";

orden.forEach(c=>{

let li = document.createElement("li");

li.innerText = c.nombre + " : " + c.score;

ranking.appendChild(li);

});

}

function reiniciar(){

celulares.forEach(c=>c.score=1000);

actualizarRanking();

}

nuevoDuelo();
