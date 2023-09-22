//@ts-nocheck
import Content from './content.js';
////////////////////////////////////

/**
 * 21-Aug-2023 : When a pice of software is working fine do not add more code to it , write another layer another plug where the first code is plugged.If you have a well tested layer you can add more layers to it.
 */

export default class Question {

constructor(userId){
this.content = new Content(userId);
this.userId = userId;
}

getContent(){
 return this.content.getContent();
}


//---Add to content
addDiv(questionIndex,payload){
    this.content.addDiv(payload);
}

getDivs(){
return this.content.getDivs();
}

getImages(){
return this.content.getImages();
}

getLists(){
return this.content.getLists();
}

getPres(){
return this.content.getPres();
}

getTables(){
return this.content.getTables();
}

getYoutubes(){
return this.content.getYoutubes();
}


}//