//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';


export default class ImageObject extends ComponentObject {
    constructor(itemData) {
        super(itemData);
    }

    loadHandles(){
        let w = new AdderHandle('width',
            this.itemData.extra.x +  this.itemData.extra.width -20 ,
            this.itemData.extra.y); 

            w.updateFunction = function (item, mouseX, mouseY){
                if (this.oldX == null || this.oldY == null) {
                    this.oldX = mouseX;
                    this.oldY = mouseY;
                    return;
                }
                let delta = this.lookingforX ? mouseX - this.oldX : mouseY - this.oldY;
                item.extra[this.property] += delta;
                this.oldX = mouseX;
                this.oldY = mouseY;
            }
            this.handleObjects.push(w);
    
            let h = new AdderHandle('height',
            this.itemData.extra.x +  this.itemData.extra.width -20 ,
            this.itemData.extra.y  + this.itemData.extra.height -20,);
    
            h.lookingforX = false;
            h.updateFunction = function (item, mouseX, mouseY){
                if (this.oldX == null || this.oldY == null) {
                    this.oldX = mouseX;
                    this.oldY = mouseY;
                    return;
                }
                let delta = this.lookingforX ? mouseX - this.oldX : mouseY - this.oldY;
                item.extra[this.property] += delta;
                this.oldX = mouseX;
                this.oldY = mouseY;
            }
            this.handleObjects.push(h);
           
            let d = new DraggerHandle(
            this.itemData.extra.x  ,
            this.itemData.extra.y,
            ); 

            d.updateFunction = function(item, mouseX, mouseY){
                item.extra[this.termForX] = mouseX - this.width / 2;
                item.extra[this.termForY] = mouseY - this.height / 2;
                
            }
            this.handleObjects.push(d);    
    }
    width(){
        return this.itemData.extra.width;
     }
     height(){
        return this.itemData.extra.height;
     }
     getX(){
        return this.itemData.extra.x;
     }
     
     getY(){
        return this.itemData.extra.y;
     }
    
    updateHandlePositions  (){
        const { x, y, width, height } = this.itemData.extra;
        
        // Update width handle
        this.handleObjects[0].updateXY(this.getX() + this.width() - 20, this.getY());
        
        // Update height handle
        this.handleObjects[1].updateXY(this.getX() + this.width() - 20, 
        this.getY() + this.height() - 20);
        
        // Update dragger handle
        this.handleObjects[2].updateXY( this.getX(), this.getY());
    } 
}//class
