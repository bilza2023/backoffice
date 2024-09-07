//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class RTextObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
    }

    loadHandles(){
        
        let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

        btnHandle.color = 'silver';
        btnHandle.getX = function(){
            return this.itemData.extra.x.initialValue - 20;
        }
        btnHandle.getY = function(){
            return this.itemData.extra.y.initialValue + 25;
        }
        btnHandle.useInitialValue = true;

        this.handleObjects.push(btnHandle);  
////////////////////////////////////////////////////////////////////////////
        let widthAdder = new AdderHandle(this.itemData,'xFactor'); 

            widthAdder.color = 'pink';
            widthAdder.getX = function(){
                return this.itemData.extra.initialX.initialValue - 30;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.initialY.initialValue + 15;
            }
            widthAdder.useInitialValue = true;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
let second = new AdderHandle(this.itemData,'yFactor'); 

second.color = '#e2db9a';
second.getX = function(){
    return this.itemData.extra.initialX.initialValue - 30;
}
second.getY = function(){
    return this.itemData.extra.initialY.initialValue + 40;
}
second.useInitialValue = true;

this.handleObjects.push(second);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'initialX' ,'initialY'); 
            draggerHandle.useInitialValue = true;
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.initialX.initialValue -30;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.initialY.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }

    ////////////////////////////
    
    
     getX(){
        return this.itemData.extra.initialX.initialValue;
     }
     
     getY(){
        return this.itemData.extra.initialY.initialValue;
     }
    
     getHitAreaRadius() {
        // Base the hit area radius on font size and text length
        const baseRadius = 20;
        const textLength = 5;
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
    ////////////////////////////
}//class
