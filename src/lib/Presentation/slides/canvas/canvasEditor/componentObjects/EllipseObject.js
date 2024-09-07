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
    ////////////////////////////////////////////////////
    width(){
        return this.itemData.extra.radiusX.initialValue * 2;
     }
     height(){
        return this.itemData.extra.radiusY.initialValue * 2;
     }
     getX(){
        return this.itemData.extra.x.initialValue;
     }
     
     getY(){
        return this.itemData.extra.y.initialValue;
     }

     isHit(mouseX, mouseY) {
        const centerX = this.getX();
        const centerY = this.getY();
        const radiusX = this.itemData.extra.radiusX.initialValue;
        const radiusY = this.itemData.extra.radiusY.initialValue;

        // Calculate the normalized distance
        const normalizedX = (mouseX - centerX) / radiusX;
        const normalizedY = (mouseY - centerY) / radiusY;

        // Check if the normalized distance is less than or equal to 1
        return (normalizedX * normalizedX + normalizedY * normalizedY) <= 1;
    }

    
}//class
