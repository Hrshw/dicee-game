var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber2}.png`);
var text = document.querySelector(".container h1");


if(randomNumber1 > randomNumber2){
    text.innerText = " 🚩player 1 is winner";
}else if(randomNumber1 < randomNumber2){
    text.innerText = "player 2 is winner 🚩";
}else if(randomNumber1 = randomNumber2){
    text.innerText = "Match is draw"
}
else{
    text.innerText = " Refresh Me"
}