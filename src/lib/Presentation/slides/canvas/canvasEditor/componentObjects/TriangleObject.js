 //@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class LineObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
    }

    loadHandles(){
       
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'x1' ,'y1'); 
            draggerHandle.useInitialValue = true; //since its prop
            draggerHandle.color = 'pink'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x1.initialValue;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y1.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
///////////////////////////////////////////////////////////////////////////////////////          
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle2 = new DraggerHandle(this.itemData,'x2' ,'y2'); 
            draggerHandle2.useInitialValue = true; //since its prop
            draggerHandle2.color = 'green'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle2.getX = function(){
                return this.itemData.extra.x2.initialValue;
            }

            draggerHandle2.getY = function(){
                return  this.itemData.extra.y2.initialValue;
            }
            this.handleObjects.push(draggerHandle2);    
///////////////////////////////////////////////////////////////////////////////////////          
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle3 = new DraggerHandle(this.itemData,'x3' ,'y3'); 
            draggerHandle3.useInitialValue = true; //since its prop
            draggerHandle3.color = 'pink'; 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle3.getX = function(){
                return this.itemData.extra.x3.initialValue;
            }

            draggerHandle3.getY = function(){
                return  this.itemData.extra.y3.initialValue;
            }
            this.handleObjects.push(draggerHandle3);    
///////////////////////////////////////////////////////////////////////////////////////          
            
    }

   
     getX(){
        return this.itemData.extra.x.initialValue;
     }
     
     getY(){
        return this.itemData.extra.y.initialValue;
     }
    
     isHit(mouseX, mouseY) {
        const x1 = this.itemData.extra.x1.initialValue;
        const y1 = this.itemData.extra.y1.initialValue;
        const x2 = this.itemData.extra.x2.initialValue;
        const y2 = this.itemData.extra.y2.initialValue;
        const x3 = this.itemData.extra.x3.initialValue;
        const y3 = this.itemData.extra.y3.initialValue;
    
        // Helper function to calculate the area of a triangle
        const area = (x1, y1, x2, y2, x3, y3) => {
            return Math.abs((x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)) / 2.0);
        };
    
        // Calculate area of the full triangle (x1, y1), (x2, y2), (x3, y3)
        const A = area(x1, y1, x2, y2, x3, y3);
    
        // Calculate area of sub-triangle (mouseX, mouseY), (x2, y2), (x3, y3)
        const A1 = area(mouseX, mouseY, x2, y2, x3, y3);
    
        // Calculate area of sub-triangle (x1, y1), (mouseX, mouseY), (x3, y3)
        const A2 = area(x1, y1, mouseX, mouseY, x3, y3);
    
        // Calculate area of sub-triangle (x1, y1), (x2, y2), (mouseX, mouseY)
        const A3 = area(x1, y1, x2, y2, mouseX, mouseY);
    
        // Check if sum of A1, A2 and A3 is same as A
        return (A === A1 + A2 + A3);
    }
    
    
    

    
}//class
