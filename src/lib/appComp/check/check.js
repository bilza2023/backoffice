
//@ts-nocheck
import gradeMCQ from "./gradeMCQ.js";

// import getExtraData from "./getExtraData.js";

///////////////////////////////////////////////////////////////////////
    const schemaMap = {
    "mcq"         : gradeMCQ
    // "SurveyInput"       : CheckSurveyInput,
    // "SurveyParagraph"   : CheckSurveyInput,
    // "SurveyNumber"      : CheckSurveyInput,
    // "SurveyUrl"         : CheckSurveyInput,
    // "SurveyPassword"    : CheckSurveyInput,
    // "SurveyEmail"       : CheckSurveyInput
    };

export default async function check(incommingResults,quiz){
  try{
      // debugger;
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
          if (answer.questionType == 'mcq'){
              gradeMCQ(answer,quiz);
          }
  }
}


//const SchemaConstructor = schemaMap[answer.questionType];
// SchemaConstructor(answer); 