//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class RectangleObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        let w = new AdderHandle('width',
            this.itemData.extra.x.initialValue +  this.itemData.extra.width.initialValue -20 ,
            this.itemData.extra.y.initialValue); 
            this.handleObjects.push(w);
    
            let h = new AdderHandle('height',
            this.itemData.extra.x.initialValue +  this.itemData.extra.width.initialValue -20 ,
            this.itemData.extra.y.initialValue  + this.itemData.extra.height.initialValue -20,);
    
            h.lookingforX = false;
            this.handleObjects.push(h);
           
            let d = new DraggerHandle(
            this.itemData.extra.x.initialValue  ,
            this.itemData.extra.y.initialValue,
            ); 
            this.handleObjects.push(d);    
    }

    updateHandlePositions  (){
        const { x, y, width, height } = this.itemData.extra;
        
        // Update width handle
        this.handleObjects[0].updateXY(x.initialValue + width.initialValue - 20, y.initialValue);
        
        // Update height handle
        this.handleObjects[1].updateXY(x.initialValue + width.initialValue - 20, y.initialValue + height.initialValue - 20);
        
        // Update dragger handle
        this.handleObjects[2].updateXY(x.initialValue, y.initialValue);
    } 
}//class
