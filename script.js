function searchTool(){

let input=document.getElementById("search").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let text=cards[i].innerText.toLowerCase();

if(text.includes(input)){
cards[i].style.display="block";
}else{
cards[i].style.display="none";
}

}

}

function filterCategory(cat){

let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

if(cat=="all"){
cards[i].style.display="block";
}

else if(cards[i].classList.contains(cat)){
cards[i].style.display="block";
}

else{
cards[i].style.display="none";
}

}

}

function copyLink(link){
navigator.clipboard.writeText(link);
alert("Link Copied!");
}






