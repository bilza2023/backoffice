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

    
}//class
