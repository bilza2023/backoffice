

import MegaQuiz from "./megaQuiz.js";
import  {fakeData}  from "./fn/fakeData.js";
// debugger;

//////////////////////////////////////////
const quiz = new MegaQuiz( fakeData );
// debugger;
quiz.questions.addMCQ();
const q = quiz.questions.getQuestion(0);
q.content.addDiv('This is the payload');

console.log('Quiz' ,  quiz);