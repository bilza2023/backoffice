


import uuid from '../fn/uuid.js';
 
export default class TableObj{

constructor( payload ='' ){
    
/////////////////////////    
 this.id  = uuid();
 this.payload = [
            [ "1" , "2" , "3" ],
            [ "4" , "5" , "6" ]
         ];
this.type = 'table';


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