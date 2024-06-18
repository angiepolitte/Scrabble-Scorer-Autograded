const input = require("readline-sync");

const oldPointStructure = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function transform(oldPointStructure) {
    let newPointStructure = {};
  for(key in oldPointStructure){
    for (let i = 0; i < oldPointStructure[key].length; i++) {
      newPointStructure[oldPointStructure[key][i].toLowerCase()] = Number(key);
    }
  } 
  return newPointStructure;
}
let newPointStructure = transform(oldPointStructure);

function scrabbleScorer(word) {
  word = word.toLowerCase();
  let score = 0;

  for (let i = 0; i < word.length; i++) {
      score += newPointStructure[word[i]];
      }

  return score;
}

let onePointStructure = {
  1: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

function simpleScorer(word) {
  word = word.toUpperCase();
let score= 0;

  for (let i = 0; i < word.length; i++) {
    for (let pointValue in onePointStructure) {
      if (onePointStructure[pointValue].includes(word[i])) {
        score += Number(pointValue);
      }
    }
  }
  return score;
}

let bonusPointVowelStructure = {
   1: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"],
   3: ["A", "E", "I", "O", "U", "Y"]
 };
function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let score = 0;
 
   for (let i = 0; i < word.length; i++) {
     for (let pointValue in bonusPointVowelStructure) {
       if (bonusPointVowelStructure[pointValue].includes(word[i])) {
        score += Number(pointValue);
       }
     }
   }
   return score;
 }

function initialPrompt() {
  let word = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
  return word;
}
let word = initialPrompt();


console.log(); //console.log for spacing



let scoringAlgorithms = [
{
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScorer 
},
{
  name: "Bonus Vowels",
  description: "Vowels are 3 points, consonants are 1 point.",
  scorerFunction: vowelBonusScorer
},
{
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: scrabbleScorer
}
];

function scorerPrompt() {
   let numScoringAlgoritms = input.question("Which scoring method would you prefer? Enter the corresponding number.\n0 - Simple Scoring\n1 - Bonus Points for Vowels\n2 - Traditional Scrabble Scoring\n");
   if (numScoringAlgoritms == 0) {
    console.log(`Points for '${word}': ${scoringAlgorithms[0].scorerFunction(word)}\n`);
   } else if (numScoringAlgoritms == 1) {
    console.log(`Points for '${word}': ${scoringAlgorithms[1].scorerFunction(word)}\n`);
   } else if (numScoringAlgoritms == 2) {
    console.log(`Points for '${word}': ${scoringAlgorithms[2].scorerFunction(word)}\n`);;
   } else {
    console.log("Please select 0, 1, or 2. ")
   }
      
}
let numScoringAlgoritms = scorerPrompt();

// let newPointStructure =   {
//   "a": 1, 
//   "b": 3, 
//   "c": 3, 
//   "d": 2, 
//   "e": 1, 
//   "f": 4, 
//   "g": 2, 
//   "h": 4, 
//   "i": 1, 
//   "j": 8, 
//   "k": 5, 
//   "l": 1, 
//   "m": 3, 
//   "n": 1, 
//   "o": 1, 
//   "p": 3, 
//   "q": 10, 
//   "r": 1, 
//   "s": 1, 
//   "t": 1, 
//   "u": 1, 
//   "v": 4, 
//   "w": 4, 
//   "x": 8, 
//   "y": 4, 
//   "z": 10
// };

function runProgram() {
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScorer: simpleScorer,
  vowelBonusScorer: vowelBonusScorer,
  scrabbleScorer: scrabbleScorer,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt,
};
