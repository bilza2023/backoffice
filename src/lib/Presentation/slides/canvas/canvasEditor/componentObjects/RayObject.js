//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class LineObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
   
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'x0' ,'y0'); 
            draggerHandle.useInitialValue = true; //since its prop
            draggerHandle.color = 'silver'; 
//--every Component-object can have different x and y e.g x0 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x0.initialValue;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y0.initialValue;
            }
            this.handleObjects.push(draggerHandle);    
///////////////////////////////////////////////////////////////////////////////////////          
            let draggerHandle2 = new DraggerHandle(this.itemData,'x1' ,'y1'); 
            draggerHandle2.useInitialValue = true; //since its prop
            draggerHandle2.color = 'blue'; //since its prop
//--every Component-object can have different x and y e.g x0 x0 etc 
            draggerHandle2.getX = function(){
                return this.itemData.extra.x1.initialValue;
            }

            draggerHandle2.getY = function(){
                return  this.itemData.extra.y1.initialValue;
            }
            this.handleObjects.push(draggerHandle2);    
    }
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
width(){
    // debugger;
let left = Math.min(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
let top = Math.min(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
let right = Math.max(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
let bottom = Math.max(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
return Math.abs(right - left);
 }
 height(){
    let left = Math.min(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let top = Math.min(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    let right = Math.max(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let bottom = Math.max(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    return Math.abs(bottom - top);    
 }
 getX(){
    return this.itemData.extra.x0.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y0.initialValue;
 }
////////////////////////////////////////////////////////////////////
isHit(mouseX , mouseY){
    let left = Math.min(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let top = Math.min(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    let right = Math.max(this.itemData.extra.x0.initialValue, this.itemData.extra.x1.initialValue);
    let bottom = Math.max(this.itemData.extra.y0.initialValue, this.itemData.extra.y1.initialValue);
    return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
    
}//class
