//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class ParaObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        
        let widthAdder = new AdderHandle(this.itemData,'fontSize'); 

            widthAdder.color = 'pink';
            widthAdder.getX = function(){
                return this.itemData.extra.x.initialValue - 20;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.y.initialValue + 15;
            }
            widthAdder.useInitialValue = true;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
let xOffsetHandle = new AdderHandle(this.itemData,'xOffset'); 

xOffsetHandle.color = 'blue';
xOffsetHandle.getX = function(){
    return this.itemData.extra.x.initialValue - 20;
}
xOffsetHandle.getY = function(){
    return this.itemData.extra.y.initialValue + 45;
}
xOffsetHandle.useInitialValue = false; ///===>

this.handleObjects.push(xOffsetHandle);
////////////////////////////////////////////////////////////////////////////
let lineHeightOffsetHandle = new AdderHandle(this.itemData,'lineHeightOffset'); 

lineHeightOffsetHandle.color = '#5f4b89';
lineHeightOffsetHandle.lookingforX = false;
lineHeightOffsetHandle.getX = function(){
    return this.itemData.extra.x.initialValue - 20;
}
lineHeightOffsetHandle.getY = function(){
    return this.itemData.extra.y.initialValue + 75;
}
lineHeightOffsetHandle.useInitialValue = false; ///===>

this.handleObjects.push(lineHeightOffsetHandle);
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue -20;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }

    
}//class
