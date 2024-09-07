//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';


export default class DotObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
    }

    loadHandles(){
////////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

btnHandle.color = 'silver';
btnHandle.getX = function(){
    return this.itemData.extra.x.initialValue ;
}
btnHandle.getY = function(){
    return this.itemData.extra.y.initialValue + 25;
}
btnHandle.useInitialValue = true;

this.handleObjects.push(btnHandle);  

/////////////////////////////////////////////////////////////////////////////          
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue -15;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }
////////////////////////////////////////////////////////////
// dot_width
////////////////////////////////////////////////////

width(){
    return this.itemData.extra.x.initialValue + (this.itemData.extra.dot_width.initialValue *  1.5);
 }
 height(){
    return this.itemData.extra.x.initialValue + (this.itemData.extra.dot_width.initialValue *  1.5);
 }
 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }


 getHitAreaRadius() {
    // Base the hit area radius on font size and text length
    const baseRadius = 20;
    const textLength = 10;
    return baseRadius + (textLength * 2); // Adjust this formula as needed
}

isHit(mouseX, mouseY) {
    const centerX = this.getX();
    const centerY = this.getY();
    const radius = this.getHitAreaRadius();

    // Calculate the distance between the mouse click and the text origin
    const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );

    // Check if the distance is less than or equal to the hit area radius
    return distance <= radius;
}

 
////////////////////////////////////////////////////////////
    
}//class
