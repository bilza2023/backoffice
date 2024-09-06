//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class SpriteObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        
        // let widthAdder = new AdderHandle(this.itemData,'fontSize'); 

        //     widthAdder.color = 'pink';
        //     widthAdder.getX = function(){
        //         return this.itemData.extra.x.initialValue - 15;
        //     }
        //     widthAdder.getY = function(){
        //         return this.itemData.extra.y.initialValue + 15;
        //     }
        //     widthAdder.useInitialValue = true;

        //     this.handleObjects.push(widthAdder);
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

    
}//class
