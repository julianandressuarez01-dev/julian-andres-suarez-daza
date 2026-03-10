const phones = [

"iPhone 15 Pro Max",
"iPhone 14",
"Samsung Galaxy S24 Ultra",
"Samsung Galaxy S23",
"Google Pixel 8 Pro",
"Xiaomi 14",
"Xiaomi Redmi Note 13",
"OnePlus 12",
"Motorola Edge 40",
"Huawei P60 Pro",
"Samsung Galaxy A54",
"iPhone SE",
"Realme GT 5",
"Oppo Find X6",
"Asus ROG Phone 8"

];

let votes = new Array(phones.length).fill(0);

let currentA = 0;
let currentB = 1;

function newBattle(){

currentA = Math.floor(Math.random()*phones.length);
currentB = Math.floor(Math.random()*phones.length);

while(currentA === currentB){
currentB = Math.floor(Math.random()*phones.length);
}

document.getElementById("optionA").innerText = phones[currentA];
document.getElementById("optionB").innerText = phones[currentB];

}

function vote(choice){

if(choice === 0){
votes[currentA]++;
}else{
votes[currentB]++;
}

updateRanking();
newBattle();

}

function updateRanking(){

let ranking = phones.map((phone,index)=>{

return {
phone:phone,
score:votes[index]
}

});

ranking.sort((a,b)=>b.score-a.score);

let html="";

ranking.slice(0,10).forEach((item,i)=>{

html += `
<div class="rankItem">
<span>${i+1}. ${item.phone}</span>
<span>${item.score}</span>
</div>
`;

});

document.getElementById("rankingList").innerHTML = html;

}

function showTop(){
updateRanking();
}

function resetVotes(){

votes = new Array(phones.length).fill(0);
updateRanking();

}

function exportVotes(){

let csv = "Smartphone,Votos\n";

phones.forEach((phone,i)=>{
csv += `"${phone}",${votes[i]}\n`;
});

let blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});

let link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "ranking_smartphones.csv";

link.click();

}

window.onload = function(){

newBattle();
updateRanking();

}
