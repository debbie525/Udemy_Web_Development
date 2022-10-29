//Image 1
var randomNumber1=Math.floor(Math.random()*6)+1; //random number between 1 & 6

var randomDiceImage1= randomNumber1 + ".png" //dice1.png - dice6.png

var randomImageSource1= "images/dice" + randomDiceImage1//images/dice1.png- images/dice6.png

var image1=document.querySelector("img.img1");

image1.setAttribute("src", randomImageSource1)

//Image 2
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2=randomNumber2 + ".png"

var randomImageSource2= "images/dice" + randomDiceImage2

var  image2=document.querySelector("img.img2");

image2.setAttribute("src", randomImageSource2)

// Determine the winner
var heading=document.querySelector("h1");

if (randomNumber1>randomNumber2){
  heading.innerHTML="Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
  heading.innerHTML="Player 2 Wins!"
}
else{
  heading.innerHTML="It's a draw!"
}
