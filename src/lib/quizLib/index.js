import QuizObj from "./quiz.js";

const quiz = new QuizObj(138);
// quiz.questions.push(getMCQ());
quiz.questions.addMCQ();
quiz.questions.addDiv(0);

console.log('Quiz' ,  quiz);
console.log('content' ,  quiz.questions.getContent(0));