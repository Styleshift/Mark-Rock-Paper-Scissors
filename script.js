/* 
1. Understand the problem
        Er moet backendcode geschreven worden voor het spel.


2. plan
    a. user interface?
            Komt later.

    b. input?
            De input moet van de user komen. dit kan in het in het
            begin met een alert maar hier moet later een mooie UI voor
            komen. 

    c. desired output?
            de backend code voor het spel. de user heeft 3 keuzes 
            rock, paper en scissors. deze keuze moet vergeleken worden
            met de keuze van de pc. zo wordt er bepaald wie deze ronde
            heeft gewonnen. er komen 3 rondes? best of 3?

    d. necessary steps to get output?
            1. mannier voor user om input te geven.
            2. mannier voor pc om optie te kiezen. 
            3. mannier om de opties te vergelijken en winnen voor ronde kiezen
            4. mannier om user te laten zien wie de ronde gewonnen heeft
            5. mannier om rondes bij te houden. en de winnaar uit 3 te kiezen
            6. mannier om winnaar te laten zien. 
            7. mannier om spel opnieuw te spelen.
3. psudocode


button voor het starten van een game
bericht ronde 1
get user imput en sla op in variable
*functie voor het keuze pc, sla op in variable
functie voor het vergelijken van keuze user en keuze pc
bepaal winnaar
winnaar krijg punt bij score 
er wordt punt opgeteld bij aantal rondes. 
bepaal wie meeste punten en sla op in variable
if (meeste punten < 5) {nieuwe ronden}
esle bericht winnaar, en geef optie voor nieuw spel. 

*/

//get user input 

let playerScore = 0;
let computerScore = 0;


/* 

==========================================================
* Note from Keenan - Code needs to generate random answer.
==========================================================
*/
// added randomChoice variable to function. (Scope) 
function getComputerChoice() {
        const randomChoice = (Math.floor(Math.random() * 3)) 
        if (randomChoice === 0) {
                return 'rock';
        } 
        else if(randomChoice === 1) {
                return 'paper';
        }
        else {
                return 'scissors';
        }
}

//Test getComputerChoice - Keenan
//console.log(getComputerChoice())

/*
=-==============================================================================================================
Note from Keenan. Add playerScore++ and computerScore++ BEFORE return statement. Otherwise code is unreachable.
================================================================================================================
*/
function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'rock') {
         return 'Its a tie! You both picked rock, seems like you\'re both rock-solid.'
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                computerScore++
        return 'You lose! A rock ain\'t always a hard place, sometimes paper can cover it!'
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
                playerScore++
        return 'You win! Rock and roll baby!';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
                playerScore++
        return 'You win! Looks like the computer just got schooled, paper always wins.' 
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie! You both picked paper, but let\'s be real, paper is the best choice anyway.' 
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                computerScore++
        return 'You lose! Looks like paper just met its mortal enemy, scissors always wins!'
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                computerScore++
        return 'You lose! But I bet the rock band next door is loving this!';
         } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                playerScore++
        return 'You win! Looks like the computer got cut down to size!'
        }  else {
        return 'It\'s a tie! You both picked scissorts, seems like you both have a sharp mind and cutting edge strategy!........defealt';
}
}



//functie voor het maken van de computer's keuze
//let randomChoice;

//const randomChoice = (Math.floor(Math.random() * 3)) + 1




// Note from Keenan - Declare variables within game function.
//let playerSelection;
//let computerSelection;


function game() {
        //for (let i=0; i <=4; i++) {
          for (let i=0; i < 5; i++){
                const playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
                const computerSelection = getComputerChoice();
              //playerSelection = playerSelection.toLowerCase();
              // below added console.log for results
                console.log(playRound(playerSelection, computerSelection));
        }

        // if playerscore > computerscore player wins

        if (playerScore > computerScore) {
                return 'You Win!'
        } else if (playerScore < computerScore) {
                return 'You Lose!'
        } else {
                return 'Tie'
        }

}

//Note from Keenan - Do not need to add parameters when calling function.
/*
console.log(game(playRound(playerSelection, computerSelection))
*/

console.log(game())