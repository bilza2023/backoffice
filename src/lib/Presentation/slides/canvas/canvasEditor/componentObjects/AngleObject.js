//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class AngleObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        
        let widthAdder = new AdderHandle(this.itemData,'startAngle'); 

            widthAdder.color = 'green';
            widthAdder.getX = function(){
                return this.itemData.extra.x - 20;
            }
            widthAdder.getY = function(){
                return this.itemData.extra.y + 15;
            }
            widthAdder.useInitialValue = false;

            this.handleObjects.push(widthAdder);
////////////////////////////////////////////////////////////////////////////
let handle2 = new AdderHandle(this.itemData,'endAngle'); 

handle2.color = 'lime';
handle2.getX = function(){
    return this.itemData.extra.x - 20;
}
handle2.getY = function(){
    return this.itemData.extra.y + 45;
}
handle2.useInitialValue = false;

this.handleObjects.push(handle2);
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
let handle3 = new AdderHandle(this.itemData,'radius'); 

handle3.color = 'orange';
handle3.getX = function(){
    return this.itemData.extra.x - 20;
}
handle3.getY = function(){
    return this.itemData.extra.y + 75;
}
handle3.useInitialValue = false;

this.handleObjects.push(handle3);
////////////////////////////////////////////////////////////////////////////
// let lineHeightOffsetHandle = new AdderHandle(this.itemData,'lineHeightOffset'); 

// lineHeightOffsetHandle.color = '#5f4b89';
// lineHeightOffsetHandle.lookingforX = false;
// lineHeightOffsetHandle.getX = function(){
//     return this.itemData.extra.x.initialValue - 20;
// }
// lineHeightOffsetHandle.getY = function(){
//     return this.itemData.extra.y.initialValue + 75;
// }
// lineHeightOffsetHandle.useInitialValue = false; ///===>

// this.handleObjects.push(lineHeightOffsetHandle);
/////////////////////////////////////////////////////////////////////////////    
//angle symbol x and y are not props
            let draggerHandle = new DraggerHandle(this.itemData); 
            draggerHandle.useInitialValue = false;
            draggerHandle.color = 'brown';
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x -20; // no initialValue
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y -10; //no initialValue
            }
            this.handleObjects.push(draggerHandle);    
    }

    
}//class
