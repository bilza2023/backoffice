//@ts-nocheck
import uuid from './fn/uuid.js';
import Content from './content/content.js';

export default class Question {
  
  constructor(userId,incoming = {}) {

        const correctId = incoming.correctId || uuid();
  
    this.id = incoming.id || uuid();
    this.userId = userId; //--must
    this.content =  new Content(incoming.content); //
    this.required = incoming.required || false;
    this.explanation = incoming.explanation || "";
    this.multiSelect = incoming.multiSelect || false;
    this.selectedOptions = incoming.selectedOptions || [];
    this.correctOptions = incoming.correctOptions || [correctId];
    this.displayOptions = incoming.displayOptions || 'bars';
    this.questionType = incoming.questionType || 'mcq';
    this.options = incoming.options || [
        {id : correctId , content : "Option 1"},
        {id : uuid() , content : "Option 2"}
    ];
  }
}
