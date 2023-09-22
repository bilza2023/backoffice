//@ts-nocheck

export default function checkMCQ(question,errorsArray,i){
    checkAllCorrectOptionsExists(question,errorsArray,i);
    checkOptionMissingStatements(question,errorsArray,i);
    atleastOneCorrectOption(question,errorsArray,i);
    atleastTwoOptions(question,errorsArray,i);

}
///////////////////////////////
function checkAllCorrectOptionsExists(question,errorsArray,i) {
  const optionsIds = question.options.map(option => option.id);
 
 const result =  question.correctOptions.every(correctOptionId => optionsIds.includes(correctOptionId));
  
  if (!result) {
    errorsArray.push("Some correct options do not have a corresponding option");
    }
}

function atleastOneCorrectOption(question,errorsArray,qIndex){
    if (question.correctOptions.length < 1 ){
        const st = `Question # ${qIndex}----> does not have even a single correct option selected`;
            errorsArray.push(st);
    }

}
function atleastTwoOptions(question,errorsArray,qIndex){
    if (question.options.length < 2 ){
        const st = `Question # ${qIndex}----> There should be atleast two options in a multiple choice question.`;
            errorsArray.push(st);
    }

}
function checkOptionMissingStatements(question,errorsArray, qIndex){

    for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
            if ( option.content == "") {
            const st = `Question # ${qIndex} has missing content in option
            `;
            
            errorsArray.push(st);
    }
}
}