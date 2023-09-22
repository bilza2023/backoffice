//@ts-nocheck

import checkQuiz from "./checkQuiz";
import checkQuestion from "./checkQuestion";
import checkMCQ from "./checkMCQ";
import checkMCQMultiSelect from "./checkMCQMultiSelect";
import checkMCQSingleSelect from "./checkMCQSingleSelect";
 

export default function checkBeforePub(quiz){
const errorsArray = [];
// errorsArray.push("Test");
checkQuiz(quiz,errorsArray);


        for (let i = 0; i < quiz.questions.questionsArray.length; i++) {
        const qIndex = i+1;
            const question = quiz.questions.questionsArray[i];
                checkQuestion(question,errorsArray,qIndex);

            if (question.questionType === 'mcq'){
                checkMCQ(question,errorsArray,qIndex);
                    if (question.multiSelect == true){
                        checkMCQMultiSelect(question,errorsArray,qIndex);
                    }else{
                        checkMCQSingleSelect(question,errorsArray,qIndex);
                    }

            }else {
                        // no test yet 
                        // checkInput(question,errorsArray);
            }
            
        }
return errorsArray;
}