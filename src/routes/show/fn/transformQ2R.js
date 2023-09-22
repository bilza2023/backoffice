//@ts-nocheck
import { v4 as uuid } from 'uuid';

///////////////////////////////////////////////////////////////////////

export default async function transformQ2R(quiz){
  try{
  const answers = [];

      for (let i = 0; i < quiz.questions.length; i++) {
        const question = quiz.questions[i];
            if (question.questionType == 'mcq'){
                const rMCQ = transformMCQ(question);
                answers.push(rMCQ);
            }else {
                const rInput = transformInput(question);
                answers.push(rInput);
            }
      }
  return answers;    

  }catch (e) {
    return false;
  }
}
/////////////////////////////////////////////////////////

/**
 *  correctOptions are not saved.
 */
function transformMCQ(question) {
     return {
        id              : uuid(),
        questionId      : question.id,
        required        : question.required,
        marks           : question.marks,
        payload         : question.payload,
        multiSelect     : question.multiSelect,
        selectedOptions : question.selectedOptions,
        questionType    : question.questionType
    };
}

/**
 * correctOptions are not saved.
 */
function transformInput(question) {
     return {
        id           : uuid(),
        questionId   : question.id,
        required     : question.required,
        marks        : question.marks,
        payload      : question.payload,
        questionType : question.questionType
    };
}


