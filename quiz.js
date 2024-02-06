/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;
let firstAnswer = 25;
let secondAnswer = "dogs";
let thirdAnswer = 4;
let fourthAnswer = "yes";
let fifthAnswer = "red";

// 2. Store the rank of a player
let playerRank = score;

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const firstQuestion = prompt("What is 5 * 5 equal?");
const secondQuestion = prompt("What animal is a descendent of wolves?");
const thirdQuestion = prompt("How many legs does an elephant have?");
const fourthQuestion = prompt("Is ice cream usually served cold?");
const fifthQuestion = prompt("What is the color of a stop sign?"); 

if (firstAnswer === 25) {
  console.log("Correct!");
  score + 1;
} else {
 console.log("Wrong!"); 
}

if (secondAnswer === "dog") {
  console.log("Correct!");
  score + 1;
} else {
 console.log("Wrong!"); 
}

if (thirdAnswer === 4) {
  console.log("Correct!");
  score + 1;
} else {
 console.log("Wrong!"); 
}

if (fourthAnswer === "yes") {
  console.log("Correct!");
  score + 1;
} else {
 console.log("Wrong!"); 
}

if (fourthAnswer === "red") {
  console.log("Correct!");
  score + 1;
} else {
 console.log("Wrong!"); 
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element
if (playerRank == 5) {
  console.log("GOLD");
} else if (playerRank == 3 || 4) {
  console.log("SILVER"); 
} else if (playerRank == 1 || 2) {
  console.log("BRONZE");
} else {
  console.log("0 Correct"); 
}



document.querySelector("main").innerHTML = `<h1>You got ${score} out of 5 correct!</h1>
                                            <h2>Your rank is: ${playerRank}</h2>`


