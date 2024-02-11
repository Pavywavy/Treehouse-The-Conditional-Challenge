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
let score = 0;

// 3. Select the <main> HTML element



/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const questionOne = prompt("true or false? The earth is round.");
  if (questionOne === firstAnswer) {
   console.log("Correct!");
   score++;
} else {
  console.log("Wrong!");
}

const questionTwo = prompt("true or false? dogs are donut shaped.");
  if (questionTwo === secondAnswer) {
    console.log("Correct!");
    score++;
} else {
  console.log("Wrong!");
}

const questionThree = prompt("true or false? there's a skeleton inside you.");
  if (questionThree === thirdAnswer) {
    console.log("Correct!");
    score++;
} else {
  console.log("Wrong!");
}

const questionFour = prompt("true or false? the dinosaurs flew to another planet.");
  if (questionFour === fourthAnswer) {
  console.log("Correct!");
    score++;
  }

const questionFive = prompt("true or false? Michael Jordan played basketball.");
  if (questionFive === fifthAnswer) {
   console.log("Correct!"); 
    score++;
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

let bronzeRank = score === 1 || score === 2;
let silverRank = score === 3 || score === 4;
let goldRank = score === 5;
let finalRank = score === bronzeRank || score === silverRank || score === goldRank;

if (score === 5) {
 console.log("You got GOLD!");
} else if (score === 3 || score === 4) {
 console.log("You got SILVER!"); 
} else if (score === 1 || score === 2) {
 console.log("You got BRONZE!"); 
} else {
 console.log("You got none of them correct!"); 
}

if (finalRank === goldRank) {
    finalRank = "GOLD!"; 
} else if (finalRank === silverRank){
    finalRank = "SILVER!";
} else if (finalRank === bronzeRank){
    finalRank = "BRONZE!";
} else {
  finalRank = "FAILED TOTALLY!"; 
}

// 6. Output results to the <main> element

document.querySelector("main").innerHTML = `<h1>You got ${score} out of 5 correct!</h1>
                                            Your rank is <h2>${finalRank}</h2>`;


