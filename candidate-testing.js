const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;

questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
correctAnswers = ["Sally Ride", "true", "40", "Trajectory", 	"3"]

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  // Candidate Name: Can Twin
  candidateName = input.question("What is your name? ");
  
  console.log(`Candidate Name: ${candidateName}`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  // 1) Who was the first American woman in space?
  // Your Answer: sally ride
  // Correct Answer: Sally Ride

  candidateAnswer = input.question("Who was the first American woman in space? ");

  // correctAnswer = "Sally Ride";
  correctAnswer = correctAnswers[0];
  candidateAnswers = [candidateAnswer];
  console.log(`check: ${candidateAnswers[0]}`);

  console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswer}`);
  

  // if (candidateAnswer == correctAnswer) {
  //   correctAnswers = 1;
  // } else {
  //   correctAnswers = 0;
  // }

  // 2) True or false: 5000 meters = 5 kilometers.
  // Your Answer: false
  // Correct Answer: true

  candidateAnswer = input.question("True or false: 5000 meters = 5 kilometers. ");
  correctAnswer = correctAnswers[1];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);
  console.log(candidateAnswers);

  console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswer}`);

  // if (candidateAnswer == correctAnswer) {
  //   correctAnswers += 1;
  // } 

  // 3) (5 + 3)/2 * 10 = ?
  // Your Answer: 45
  // Correct Answer: 40

  candidateAnswer = input.question("(5 + 3)/2 * 10 = ? ")

  correctAnswer = correctAnswers[2];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);
  console.log(candidateAnswers);

  console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswer}`);

  // if (candidateAnswer == correctAnswer) {
  //   correctAnswers += 1;
  // } 

  // 4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
  // Your Answer: trajectory
  // Correct Answer: Trajectory

  candidateAnswer = input.question('Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ');
  correctAnswer = correctAnswers[3];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);
  console.log(candidateAnswers);

  console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswer}`);

  // if (candidateAnswer == correctAnswer) {
  //   correctAnswers += 1;
  // } 

  // 5) What is the minimum crew size for the ISS?
  // Your Answer: 10
  // Correct Answer: 3

  candidateAnswer = input.question("What is the minimum crew size for the ISS? ");

  correctAnswer = correctAnswers[4];
  candidateAnswers = candidateAnswers.concat(candidateAnswer);
  console.log(candidateAnswers);
  
  console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswer} `);}

  // if (candidateAnswer == correctAnswer) {
  //   correctAnswers += 1;
  // } 

  return candidateAnswer;

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = 0;

  console.log(`check-${askQuestion.candidateAnswers}`);
  for (i = 0; i < correctAnswers.length; i++) {
    if (askQuestion.candidateAnswers[i] == correctAnswers[i]) {
      grade += 1
    }
  }

  // grade = (grade / questions.length) * 100;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);

  console.log(`>>> Overall Grade: ${(grade / questions.length) * 100}% (${grade} of ${questions.length} responses correct) <<<`)
  
  if (grade > 2) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<")
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};