import uuid from './uuid.js';
import getContentArray from './getContentArray.js';

export default function getMCQ (){
const correctId = uuid();

    return {
        id : uuid(),
        content : getContentArray(),
        required : false,
        explanation : "",
        multiSelect: false,
        selectedOptions :[],
        correctOptions :[correctId],
        displayOptions : 'bars',
        questionType : 'SurveyMCQ',
        options :[
        {id : correctId , content : ""},
        {id : uuid() , content : ""}
        ]
    };
}