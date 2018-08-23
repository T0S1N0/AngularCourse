function getUserChoice(){
 var choice = Math.round(Math.random()*2);
  if(choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}

function getComputerChoice(){
 var choice = Math.round(Math.random()*2);
  if(choice === 0) return "rock";
  else if (choice === 1) return "paper";
  else return "scissors";
}

function determineWinner(userChoice,computerChoice){
  if(userChoice === computerChoice){
    return "the game was a tie";
  }
  if(userChoice === 'rock' && computerChoice === 'paper'){
    return "Computer won";
  }else{
    return "User won";
  }
  
  if (userChoice === 'paper'&& computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
  
  if (userChoice === 'scissors'&& computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}

function playGame(){
  userChoice = getUserChoice();
  console.log('User: '+userChoice);
  computerChoice = getComputerChoice();
  console.log('Computer: '+computerChoice); 
  console.log(determineWinner(userChoice,computerChoice));
 } 
  
  playGame();
