//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class LineObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        
        // let widthAdder = new AdderHandle(this.itemData,'width'); 
        //     // no initialValue
        //     widthAdder.getX = function(){
        //         return this.itemData.extra.x + this.itemData.extra.width -20;
        //     }
        //     widthAdder.getY = function(){
        //         return this.itemData.extra.y;
        //     }
        //     widthAdder.useInitialValue = false;

        //     this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////

            // let heightAdder = new AdderHandle(this.itemData,'height'); 

            // heightAdder.getX = function(){
            //     return this.itemData.extra.x +  this.itemData.extra.width -20;
            // }
            // heightAdder.getY = function(){
            //     return this.itemData.extra.y  + this.itemData.extra.height -20;
            // }
            // heightAdder.useInitialValue = false;
            // heightAdder.lookingforX = false;

            // this.handleObjects.push(heightAdder);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'x1' ,'y1'); 
            draggerHandle.useInitialValue = true; //since its prop
            draggerHandle.color = 'blue'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x1.initialValue;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y1.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
///////////////////////////////////////////////////////////////////////////////////////          
            let draggerHandle2 = new DraggerHandle(this.itemData,'x2' ,'y2'); 
            draggerHandle2.useInitialValue = true; //since its prop
            draggerHandle2.color = 'blue'; //since its prop
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle2.getX = function(){
                return this.itemData.extra.x2.initialValue;
            }

            draggerHandle2.getY = function(){
                return  this.itemData.extra.y2.initialValue;
            }
            this.handleObjects.push(draggerHandle2);    
    }

    
}//class
