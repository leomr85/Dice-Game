var playeOneTotalScore = 0;
var playeTwoTotalScore = 0;

function roll(){

  // Player 1
  var playerOneScore = Math.floor(Math.random() * 6) + 1;

  switch (playerOneScore) {
    case 1:
      document.body.querySelector(".score#p1-score").innerHTML = "<i class='fas fa-dice-one'></i>";
      break;
    case 2:
      document.body.querySelector(".score#p1-score").innerHTML = "<i class='fas fa-dice-two'></i>";
      break;
    case 3:
      document.body.querySelector(".score#p1-score").innerHTML = "<i class='fas fa-dice-three'></i>";
      break;
    case 4:
      document.body.querySelector(".score#p1-score").innerHTML = "<i class='fas fa-dice-four'></i>";
      break;
    case 5:
      document.body.querySelector(".score#p1-score").innerHTML = "<i class='fas fa-dice-five'></i>";
      break;
    case 6:
      document.body.querySelector(".score#p1-score").innerHTML = "<i class='fas fa-dice-six'></i>";
      break;
  }

  // Player 2
  var playerTwoScore = Math.floor(Math.random() * 6) + 1;

  switch (playerTwoScore) {
    case 1:
      document.body.querySelector(".score#p2-score").innerHTML = "<i class='fas fa-dice-one'></i>";
      break;
    case 2:
      document.body.querySelector(".score#p2-score").innerHTML = "<i class='fas fa-dice-two'></i>";
      break;
    case 3:
      document.body.querySelector(".score#p2-score").innerHTML = "<i class='fas fa-dice-three'></i>";
      break;
    case 4:
      document.body.querySelector(".score#p2-score").innerHTML = "<i class='fas fa-dice-four'></i>";
      break;
    case 5:
      document.body.querySelector(".score#p2-score").innerHTML = "<i class='fas fa-dice-five'></i>";
      break;
    case 6:
      document.body.querySelector(".score#p2-score").innerHTML = "<i class='fas fa-dice-six'></i>";
      break;
  }

  // Total score count
  if(playerOneScore > playerTwoScore){
    playeOneTotalScore++;
    document.body.querySelector(".score-align#p1-number").innerHTML = playeOneTotalScore;
  }
  else{
    if(playerOneScore < playerTwoScore){
      playeTwoTotalScore++;
      document.body.querySelector(".score-align#p2-number").innerHTML = playeTwoTotalScore;
    }
  }

}


function reset(){
  // Reset dice
  document.body.querySelector(".score#p1-score").innerHTML = "<i class='fas fa-stop'></i>";
  document.body.querySelector(".score#p2-score").innerHTML = "<i class='fas fa-stop'></i>";

  // Reset score counting
  playeOneTotalScore = 0;
  playeTwoTotalScore = 0;

  // Reset score display
  document.body.querySelector(".score-align#p1-number").innerHTML = playeOneTotalScore;
  document.body.querySelector(".score-align#p2-number").innerHTML = playeTwoTotalScore;
}
