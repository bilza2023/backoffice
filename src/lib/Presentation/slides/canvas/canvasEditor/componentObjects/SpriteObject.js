//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';


export default class SpriteObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
    }

loadHandles(){
////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

btnHandle.color = 'silver';

btnHandle.getX = function(){
    return this.itemData.extra.dx.initialValue - 15;
}

btnHandle.getY = function(){
    return this.itemData.extra.dy.initialValue + 15;
}
btnHandle.useInitialValue = true;

this.handleObjects.push(btnHandle);        
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'dx' ,'dy'); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.dx.initialValue -15;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.dy.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }
/////////////////////////////////
////////////////////////////////////////////////////

 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }


 isHit(mouseX, mouseY) {
    const hitMargin = 40;

    return (
        mouseX >= this.itemData.extra.dx.initialValue - hitMargin &&
        mouseX <= this.itemData.extra.dx.initialValue + hitMargin &&
        mouseY >= this.itemData.extra.dy.initialValue - hitMargin &&
        mouseY <= this.itemData.extra.dy.initialValue + hitMargin
    );
}

/////////////////////////////////
    
}//class
