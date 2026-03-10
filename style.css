let equipos = [

{nombre:"Real Madrid", score:1000},
{nombre:"Barcelona", score:1000},
{nombre:"Manchester City", score:1000},
{nombre:"Liverpool", score:1000},
{nombre:"Bayern Munich", score:1000},
{nombre:"PSG", score:1000},
{nombre:"Juventus", score:1000},
{nombre:"Chelsea", score:1000},
{nombre:"Inter Milan", score:1000},
{nombre:"AC Milan", score:1000}

];

let equipoA = document.getElementById("equipoA");
let equipoB = document.getElementById("equipoB");
let ranking = document.getElementById("ranking");

let A;
let B;

function nuevoDuelo(){

A = Math.floor(Math.random()*equipos.length);
B = Math.floor(Math.random()*equipos.length);

while(A === B){
B = Math.floor(Math.random()*equipos.length);
}

equipoA.innerText = equipos[A].nombre;
equipoB.innerText = equipos[B].nombre;

}

equipoA.onclick = function(){

equipos[A].score += 10;

actualizarRanking();

nuevoDuelo();

}

equipoB.onclick = function(){

equipos[B].score += 10;

actualizarRanking();

nuevoDuelo();

}

function actualizarRanking(){

let orden = equipos.slice().sort((a,b)=>b.score-a.score);

ranking.innerHTML = "";

orden.forEach((e,i)=>{

let li = document.createElement("li");

li.innerText = (i+1) + ". " + e.nombre + " — " + e.score;

ranking.appendChild(li);

});

}

function reiniciar(){

equipos.forEach(e => e.score = 1000);

actualizarRanking();

nuevoDuelo();

}

nuevoDuelo();
actualizarRanking();
