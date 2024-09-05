//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class CircleObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        // debugger;
        let w = new AdderHandle('radius',
            this.itemData.extra.x.initialValue +  this.itemData.extra.radius.initialValue  ,
            this.itemData.extra.y.initialValue);
            w.color = "green"; 
            this.handleObjects.push(w);
    
            
            let d = new DraggerHandle(
            this.itemData.extra.x.initialValue  ,
            this.itemData.extra.y.initialValue,
            ); 

            this.handleObjects.push(d);    
    }

    updateHandlePositions  (){
        const { x, y, width, height } = this.itemData.extra;
        
        this.handleObjects[0].updateXY(x.initialValue -10, y.initialValue-10);
        
        this.handleObjects[1].updateXY(
            this.itemData.extra.x.initialValue +  this.itemData.extra.radius.initialValue,
            this.itemData.extra.y.initialValue);
        
    } 
    width(){
        return this.itemData.extra.radius.initialValue;
     }
     height(){
        return this.itemData.extra.radius.initialValue;
     }
     getX(){
        return this.itemData.extra.x.initialValue;
     }
     
     getY(){
        return this.itemData.extra.y.initialValue;
     }
    
}//class
