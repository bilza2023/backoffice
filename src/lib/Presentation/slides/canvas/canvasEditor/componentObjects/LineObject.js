//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';

export default class LineObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
    }

    loadHandles(){
        
     
        
////////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

            btnHandle.color = 'silver';
            btnHandle.getX = function(){
                return this.itemData.extra.x1.initialValue ;
            }
            btnHandle.getY = function(){
                return this.itemData.extra.y1.initialValue + 25;
            }
            btnHandle.useInitialValue = true;

            this.handleObjects.push(btnHandle);  
           
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData,'x1' ,'y1'); 
            draggerHandle.useInitialValue = true; //since its prop
            draggerHandle.color = '#a8baea'; 
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
///////////////////////////////////////////////////////////////////////////
width(){
    // debugger;
let left = Math.min(this.itemData.extra.x1.initialValue, this.itemData.extra.x2.initialValue);
let top = Math.min(this.itemData.extra.y1.initialValue, this.itemData.extra.y2.initialValue);
let right = Math.max(this.itemData.extra.x1.initialValue, this.itemData.extra.x2.initialValue);
let bottom = Math.max(this.itemData.extra.y1.initialValue, this.itemData.extra.y2.initialValue);
return Math.abs(right - left);
 }
 height(){
    let left = Math.min(this.itemData.extra.x1.initialValue, this.itemData.extra.x2.initialValue);
    let top = Math.min(this.itemData.extra.y1.initialValue, this.itemData.extra.y2.initialValue);
    let right = Math.max(this.itemData.extra.x1.initialValue, this.itemData.extra.x2.initialValue);
    let bottom = Math.max(this.itemData.extra.y1.initialValue, this.itemData.extra.y2.initialValue);
    return Math.abs(bottom - top);    
 }
 getX(){
    return this.itemData.extra.x1.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y1.initialValue;
 }
////////////////////////////////////////////////////////////////////
isHit(mouseX , mouseY){
    let left = Math.min(this.itemData.extra.x1.initialValue, this.itemData.extra.x2.initialValue);
    let top = Math.min(this.itemData.extra.y1.initialValue, this.itemData.extra.y2.initialValue);
    let right = Math.max(this.itemData.extra.x1.initialValue, this.itemData.extra.x2.initialValue);
    let bottom = Math.max(this.itemData.extra.y1.initialValue, this.itemData.extra.y2.initialValue);
    return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}

///////////////////////////////////////////////////////////////////////////
    
}//class
