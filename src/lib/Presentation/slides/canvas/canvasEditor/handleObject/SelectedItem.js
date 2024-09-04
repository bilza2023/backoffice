
//@ts-nocheck
import AdderHandle from './AdderHandle';
import DraggerHandle from './DraggerHandle';



export default class SelectedItem {

 constructor(itemData){
        this.itemData = itemData;
        this.handleObjects = [];
        this.loadHandles();
 }

 loadHandles(){

        let w = new AdderHandle('width','width','red',
        this.itemData.extra.x.initialValue +  this.itemData.extra.width.initialValue -20 ,
        this.itemData.extra.y.initialValue  ,
        20,20); 
        this.handleObjects.push(w);

        let h = new AdderHandle('height','height','red',
        this.itemData.extra.x.initialValue +  this.itemData.extra.width.initialValue -20 ,
        this.itemData.extra.y.initialValue  + this.itemData.extra.height.initialValue -20,
        20,20); 
        h.lookingforX = false;
        this.handleObjects.push(h);
       
        let d = new DraggerHandle('red',
        this.itemData.extra.x.initialValue  ,
        this.itemData.extra.y.initialValue,
        20,20); 
        this.handleObjects.push(d);
 }
 update(mouseX, mouseY) {
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.update(this.itemData, mouseX, mouseY);
    }
    this.updateHandlePositions();
}


updateHandlePositions() {
    const { x, y, width, height } = this.itemData.extra;
    
    // Update width handle
    this.handleObjects[0].updateXY(x.initialValue + width.initialValue - 20, y.initialValue);
    
    // Update height handle
    this.handleObjects[1].updateXY(x.initialValue + width.initialValue - 20, y.initialValue + height.initialValue - 20);
    
    // Update dragger handle
    this.handleObjects[2].updateXY(x.initialValue, y.initialValue);
}
 drawHandles(ctx){
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.draw(ctx);
        
    }
 }
 
 updateXY(mouseX, mouseY){
    
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.updateXY(mouseX, mouseY);
        
    }
 }
 mouseUp(mouseX, mouseY){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
            handleObject.mouseUp(mouseX, mouseY);
                    
    }
 }
 mouseDown(mouseX, mouseY){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
        handleObject.mouseDown(mouseX, mouseY);
                    
    }
 }
 
mouseMove(mouseX, mouseY) {
    this.updateHandlePositions();
}

}