var userClickedPattern =[];
var colourArray =  ["red","yellow" ,"blue","green"];
var gamePattern =[];
var level = 0;
var started = false;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level " + level);
      nextSequence();
      started=true;
  };
});


$(".btn").on("click", function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  console.log("User Pattern:" + userClickedPattern);
  playSound(userChosenColor);
  console.log("User: " + userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var sound = new Audio ("sounds/" + name + ".mp3");
  sound.play();
};

function animatePress(currentColour){
  $("." + currentColour).addClass("pressed");
  setTimeout(function(){
  $("." + currentColour).removeClass("pressed")
  },100);
};

function nextSequence(){
  userClickedPattern=[];
  level ++;

  $("#level-title").text("Level " + level);
  var randomNumber  = Math.floor(Math.random()*colourArray.length);
  var randomChosenColor = colourArray[randomNumber];
  gamePattern.push(randomChosenColor);

  console.log("Game Pattern:" + gamePattern)
  console.log("Game: " + randomChosenColor);
  //flash buttons
  $("#" + randomChosenColor).animate({opacity:0.3})
  setTimeout(function(){
  $("#" + randomChosenColor).animate({opacity:1})
  },100);

  //remember to enable autoplay of video and audio in chrome browsers
  playSound(randomChosenColor);

};

function checkAnswer(currentLevel){
  console.log("userClickedPattern Level: " + (currentLevel +1))
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    console.log("correct");
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence()}, 1000
      );}
    }
  else{
    console.log("wrong, game over");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over")},200);

    $("h1").text("Game Over, Press Any Key to Restart.");

    startOver();
    }
  }

  function startOver(){
    level = 0;
    gamePattern = [];
    started = false;

  }

//-----------------------------------------------------------------------------
