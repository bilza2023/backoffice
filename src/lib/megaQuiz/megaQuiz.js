//@ts-nocheck
// import uuid  from './fn/uuid.js';
import Questions from './questions.js';

///////////////////////////Class Begins//////////
// MegaQuiz -> questions -> question -> content
export default class MegaQuiz{

constructor(incomming){
        this._id = incomming._id;
        this.userId = incomming.userId;
        this.questions = new Questions(this.userId ,incomming.questions);
        ////////////////////////////////
        this.title = incomming.title;
        this.saveResponse = incomming.saveResponse;
        this.showIntro = incomming.showIntro;
        this.introText = incomming.introText;
        this.showResult = incomming.showResult;
        this.showfarewellText = incomming.showfarewellText;
        this.farewellText = incomming.farewellText;
        this.classId = incomming.classId;
        this.createdAt== incomming.createdAt;
        this.members = incomming.members;
        this.marks = incomming.marks;
        this.publishObj = incomming.publishObj;
        this.tags== incomming.tags;
        this.displayQOneByOne== incomming.displayQOneByOne;
        this.private== incomming.private;
//----
}


///////////////////////////
} //quizObj
///////////////////////////
