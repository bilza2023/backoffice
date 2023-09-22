//@ts-nocheck
import { v4 as uuid } from 'uuid';
import Content from "./content";

///////////////////////////Class Begins//////////
export default class QuizObj{

constructor(incomming){
        this._id = incomming._id;
        this.questions = incomming.questions;
        this.title = incomming.title;
        this.userId = incomming.userId;
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
// this.qObj = new QuestionsObj();        
}

addMCQ (){
const correctId = uuid();
    this.questions.push(
     {
        id : uuid(),
        content : new Content(),
        required : false,
        explanation : "",
        multiSelect: false,
        selectedOptions :[],
        correctOptions :[correctId],
        displayOptions : 'bars',
        questionType : 'mcq',
        options :[
        {id : correctId , content : "Option 01"},
        {id : uuid() , content : "Option 02"}
        ]
    });
}//----

///////////////////////////
} //quizObj
///////////////////////////
