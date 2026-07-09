const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let keyword = search.value.toLowerCase();

let card = document.querySelectorAll(".card");

card.forEach(function(item){

let nama = item.querySelector("h2").innerText.toLowerCase();

if(nama.indexOf(keyword)>-1){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

const tombol = document.querySelectorAll("button");

tombol.forEach(function(btn){

btn.addEventListener("click",function(){

alert("Terima kasih telah memilih mobil ini!");

});

});