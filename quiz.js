/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

let firstAnswer = "true";
let secondAnswer = "false";
let thirdAnswer = "true";
let fourthAnswer = "false";
let fifthAnswer = "true";

// 2. Store the rank of a player
let rank = 0;
let correctAnswers = rank;



// 3. Select the <main> HTML element



/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const questionOne = prompt("true or false? The earth is round.");
  if (questionOne === firstAnswer) {
   console.log("Correct!");
   rank++;
} else {
  console.log("Wrong!");
}

const questionTwo = prompt("true or false? dogs are donut shaped.");
  if (questionTwo === secondAnswer) {
    console.log("Correct!");
    rank++;
} else {
  console.log("Wrong!");
}

const questionThree = prompt("true or false? there's a skeleton inside you.");
  if (questionThree === thirdAnswer) {
    console.log("Correct!");
    rank++;
} else {
  console.log("Wrong!");
}

const questionFour = prompt("true or false? the dinosaurs flew to another planet.");
  if (questionFour === fourthAnswer) {
  console.log("Correct!");
    rank++;
  }

const questionFive = prompt("true or false? Michael Jordan played basketball.");
  if (questionFive === fifthAnswer) {
   console.log("Correct!"); 
    rank++;
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

if (rank === 5) {
 console.log("You got GOLD!"); 
} else if (rank === 3 || rank === 4) {
 console.log("You got SILVER!"); 
} else if (rank === 1 || rank === 2) {
 console.log("You got BRONZE!"); 
} else {
 console.log("You got none of them correct!"); 
}


if (correctAnswers === 5)
  


// 6. Output results to the <main> element

document.querySelector("main").innerHTML = `<h1>You got ${correctAnswers} out of 5 correct!</h1>
                                            Your rank is <h2>${rank}</h2>`;


