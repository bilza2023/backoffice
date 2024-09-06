//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class EllipseObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        
        let widthAdder2 = new AdderHandle(this.itemData,'radiusY'); 

            widthAdder2.color = 'green';
            widthAdder2.getX = function(){
                return this.itemData.extra.x.initialValue - this.itemData.extra.radiusX.initialValue ;
            }
            widthAdder2.getY = function(){
                return this.itemData.extra.y.initialValue;
            }
            widthAdder2.useInitialValue = true;

            this.handleObjects.push(widthAdder2);

///////////////////////////////////////////////////////////////////////////////       
            let widthAdder = new AdderHandle(this.itemData,'radiusX'); 

            widthAdder.color = 'green';
            // widthAdder.lookingforX = false;
            widthAdder.getX = function(){
                return this.itemData.extra.x.initialValue + this.itemData.extra.radiusX.initialValue ;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.y.initialValue;
            }
            widthAdder.useInitialValue = true;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
    }

    
}//class
