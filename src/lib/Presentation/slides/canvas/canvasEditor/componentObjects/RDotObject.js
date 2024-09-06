//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class SpriteObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        

////////////////////////////////////////////////////////////////////////////
        let widthAdder = new AdderHandle(this.itemData,'xFactor'); 

            widthAdder.color = 'pink';
            widthAdder.getX = function(){
                return this.itemData.extra.initialX - 30;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.initialY + 15;
            }
            widthAdder.useInitialValue = false;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
let second = new AdderHandle(this.itemData,'yFactor'); 

second.color = '#e2db9a';
second.getX = function(){
    return this.itemData.extra.initialX - 30;
}
second.getY = function(){
    return this.itemData.extra.initialY + 40;
}
second.useInitialValue = false;

this.handleObjects.push(second);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'initialX' ,'initialY'); 
            draggerHandle.useInitialValue = false;
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.initialX -30;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.initialY -10;
            }
            this.handleObjects.push(draggerHandle);    
    }

    
}//class
