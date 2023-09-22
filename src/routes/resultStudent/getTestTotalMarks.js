//@ts-nocheck

export default  function getTestTotalMarks(quiz){
    let ttl = 0;
    for (let i = 0; i < quiz.questions.length; i++) {
        const question = quiz.questions[i];
        if (question.marks == 0 ){
            ttl += quiz.marks;
        }else {
            ttl += question.marks;
        }   
    }
return ttl;
}