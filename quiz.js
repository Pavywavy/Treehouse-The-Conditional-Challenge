/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const firstQuestion = "yes";
const secondQuestion = "no";
const thirdQuestion = "yes";
const fourthQuestion = "no";
const fifthQuestion = "yes";

// 2. Store the rank of a player

let playerScore = 0;

// 3. Select the <main> HTML element



/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

let firstAnswer = prompt("Is a dog a canine?");
  if (firstAnswer === firstQuestion) {
    playerScore++;
  }

let secondAnswer = prompt("Is the earth square shaped?");

if (secondAnswer === secondQuestion) {
    playerScore++;
}  

let thirdAnswer = prompt("Does yes start with the letter y?");
  if (thirdAnswer === thirdQuestion) {
    playerScore++;
  }  

let fourthAnswer = prompt("How do you spell no?");
  if (fourthAnswer === fourthQuestion) {
    playerScore++;
  }

let fifthAnswer = prompt("How do you spell yes?");
  if (fifthAnswer === fifthQuestion) {
    playerScore++;
  }





/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

let crownRank = playerScore;

  if (playerScore === 5) {
   console.log("Gold!");
   crownRank = "Gold";
   } else if ( playerScore === 3 || playerScore === 4 ) {
     console.log("Silver!");
     crownRank = "Silver";
     } else if ( playerScore === 1 || playerScore === 2) {
       console.log("Bronze!");
       crownRank = "Bronze";
       } else { (playerScore === 0)
         console.log("0 Correct - No crown");
         crownRank = "0 correct, Game over..";
}    
               
               

// 6. Output results to the <main> element

document.querySelector("main").innerHTML =
`<h1>You got ${playerScore} out of 5 !</h1>
 <h2>Crown Earned: ${crownRank}</h2>`;
