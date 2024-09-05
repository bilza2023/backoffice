//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class LineObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        // 15,15 is width and height x1,y1 are termForX , termForY
        let d = new DraggerHandle(
            this.itemData.extra.x  ,
            this.itemData.extra.y,
            15,15,
            'x1','y1'
            ); 

            d.updateFunction = function(item, mouseX, mouseY){
                debugger;
                item.extra[this.termForX].initialValue = mouseX;
                item.extra[this.termForY].initialValue = mouseY;
                
            }
            this.handleObjects.push(d);    
    }
    width(){
        return Math.abs( this.itemData.extra.x1.initialValue - this.itemData.extra.x2.initialValue );
     }
     height(){
        return Math.abs( this.itemData.extra.y1.initialValue - this.itemData.extra.y2.initialValue );
     }
     getX(){
        return this.itemData.extra.x1.initialValue;
     }
     
     getY(){
        return this.itemData.extra.y1.initialValue;
     }
    
    updateHandlePositions  (){
        // const { x, y, width, height } = this.itemData.extra;
        // Update width handle
        this.handleObjects[0].updateXY(this.getX() , this.getY());
        
        // // Update height handle
        // this.handleObjects[1].updateXY(this.getX() + this.width() - 20, 
        // this.getY() + this.height() - 20);
        
        // // Update dragger handle
        // this.handleObjects[2].updateXY( this.getX(), this.getY());
    } 
}//class
