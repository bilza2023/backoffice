//@ts-nocheck
import uuid from './fn/uuid.js';
import Content from './content.js';
////////////////////////////////////

/**
 * 21-Aug-2023 : When a pice of software is working fine do not add more code to it , write another layer another plug where the first code is plugged.If you have a well tested layer you can add more layers to it.
 */
//-The purpose of Questions is to save and store questions and contents as per the structure. Do not add more complexity

export default class Questions {

constructor(userId){
this.userId = userId;
this.questionsArray = [];
}

getQuestion(id){
    for (let i = 0; i < this.questionsArray.length; i++) {
        const q = this.questionsArray[i];
        if (q.id === id){
        return q;
        }
    }
}

getQuestions(){
return this.questionsArray;
}

getContent(questionIndex){
 return this.questionsArray[ questionIndex  ].content.getContent();
}

//---Adding Questions
addMCQ (){
const correctId = uuid();
    this.questionsArray.push(
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
        {id : correctId , content : ""},
        {id : uuid() , content : ""}
        ]
    });
}//----

//---Add to content
addDiv(questionIndex,payload){
    this.questionsArray[questionIndex].content.addDiv(payload);
}

getDivs(questionIndex){return this.questionsArray[questionIndex].content.getDivs();
}

getImages(questionIndex){return this.questionsArray[questionIndex].content.getImages();
}

getLists(questionIndex){return this.questionsArray[questionIndex].content.getLists();
}

getPres(questionIndex){return this.questionsArray[questionIndex].content.getPres();
}

getTables(questionIndex){return this.questionsArray[questionIndex].content.getTables();
}

getYoutubes(questionIndex){return this.questionsArray[questionIndex].content.getYoutubes();
}


}//