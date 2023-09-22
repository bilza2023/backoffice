//@ts-nocheck
import gradeMCQ from "./gradeMCQ.js";

///////////////////////////////////////////////////////////////////////
  
export default async function check4MarksObtained(quiz ,incommingResults){
  try{
      
      for (let i = 0; i < incommingResults.length; i++) {
        const result = incommingResults[i];
               checkSingleResult(result,quiz)
      }
    return true;    
  }catch (e) {
    return false;
  }
}
/////////////////////////////////////////////////////////

function checkSingleResult(singleResult,quiz){

  for (let i = 0; i < singleResult.answers.length; i++) {
    const answer = singleResult.answers[i];
          if (answer.questionType == 'SurveyMCQ'){
              gradeMCQ(answer,quiz);
          }
  }
}

