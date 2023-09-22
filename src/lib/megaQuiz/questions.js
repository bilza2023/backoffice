//@ts-nocheck
import uuid from './fn/uuid.js';
import Content from './content/content.js';
import Question from './question.js';
////////////////////////////////////
 
/**
 * 21-Aug-2023 : When a pice of software is working fine do not add more code to it , write another layer another plug where the first code is plugged.If you have a well tested layer you can add more layers to it.
 */

export default class Questions {

constructor(userId,questions=[]){
 this.userId = userId;
 this.questionsArray  = []; // start with empty array

    for (let i = 0; i < questions.length; i++) {
                const q = questions[i];
                this.questionsArray.push(new Question(this.userId , q));
    }
}
//-get one question by index
getQuestion(questionIndex){
    return this.questionsArray[questionIndex];
}
//-get one question by id
getQuestionById(id){
    for (let i = 0; i < this.questionsArray.length; i++) {
        const q = this.questionsArray[i];
        if (q.id === id){
        return q;
        }
    }
}
//-get all questions
getQuestions(){
return this.questionsArray;
}
deleteQuestion(id) {
    this.questionsArray = this.questionsArray.filter(question => question.id !== id);
} 
moveQuestionDown(id) {
    const index = this.questionsArray.findIndex(question => question.id === id);
    if (index < this.questionsArray.length - 1) {
        const temp = this.questionsArray[index];
        this.questionsArray[index] = this.questionsArray[index + 1];
        this.questionsArray[index + 1] = temp;
    }
}

moveQuestionUp(id) {
    const index = this.questionsArray.findIndex(question => question.id === id);
    if (index > 0) {
        const temp = this.questionsArray[index];
        this.questionsArray[index] = this.questionsArray[index - 1];
        this.questionsArray[index - 1] = temp;
    }
}

//---Adding Questions
addMCQ (){
    const mcq = new Question(this.userId)
    this.questionsArray.push(mcq);
}//----


}//