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
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue -15;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }
////////////////////////////////////////////////////////////
// dot_width
////////////////////////////////////////////////////

width(){
    return this.itemData.extra.x.initialValue + (this.itemData.extra.dot_width.initialValue *  1.5);
 }
 height(){
    return this.itemData.extra.x.initialValue + (this.itemData.extra.dot_width.initialValue *  1.5);
 }
 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }


 
////////////////////////////////////////////////////////////
    
}//class
