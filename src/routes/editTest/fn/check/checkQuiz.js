//@ts-nocheck

export default function checkQuiz(quiz ,errorsArray){
    checkTitle(quiz,errorsArray);
    checkQuestionsNo(quiz ,errorsArray);
//--i needed to check for members when there were no templates. now i just need members in test and not tmeplates.    
    // mustHaveOneMember(quiz ,errorsArray);

}

///////////////////////////
// function mustHaveOneMember(quiz ,errorsArray){
//       if ( quiz.members.length < 1 ) {
//         const st = `There are no members / students attached to this product`;
//             errorsArray.push(st);
//     }
// }

function checkTitle(quiz ,errorsArray){
if (quiz.title == ""){
        errorsArray.push("Title can not be empty");
    }

}
function checkQuestionsNo(quiz ,errorsArray){

    if (quiz.questions.questionsArray.length == 0){
        errorsArray.push("Quiz must have at least one question");
    }
}