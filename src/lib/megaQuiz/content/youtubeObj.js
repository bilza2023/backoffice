
import uuid from '../fn/uuid.js';
 
export default class YoutubeObj{

constructor( payload='https://www.youtube.com/embed/psN1gCbTgLc?si=iZcObX6OmiRuycMT' ){
    
/////////////////////////    
 this.id  = uuid();
 this.payload  = payload; //give is a local image url
 this.type = 'youtube'; //permanant vaue cant be changed

 this.bgColor = 'gray';
 this.borderColor = 'black';

 this.opacity = 1;
 this.borderWidth = 0;
 this.borderStyle = 'solid';
 this.borderRadius = 0;

 this.marginX = 0;
 this.marginY = 0;
 this.paddingX = 2;
 this.paddingY = 2;

 this.backgroundColor = 'white';

 this.fontColor = 'white';
 this.fontStyle = 'normal';
 this.fontSize = 16;
 this.fontWeight = 'normal';
 this.textAlign = 'left';

}


}