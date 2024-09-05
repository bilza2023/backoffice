
//@ts-nocheck
import AdderHandle from '../handleObject/AdderHandle';



export default class ComponentObject {

 constructor(itemData){
        this.itemData = itemData;
        this.handleObjects = [];
        this.loadHandles(); 
 }
 loadHandles(){} //child objects will use it
//****************************************************************** */
 
 update(mouseX, mouseY) {
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
//****************************************************************** *        
        obj.update(this.itemData, mouseX, mouseY);
    }
    this.updateHandlePositions();
}

//****************************************************************** *
updateHandlePositions() {

}

 drawHandles(ctx){
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.draw(ctx);
        
    }
 }

 deselect(){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
            handleObject.deselect();
    }
 }
 selectHandlesIfHit(mouseX, mouseY){

    for (let i = 0; i < this.handleObjects.length; i++) {
        const handleObject = this.handleObjects[i];
        handleObject.selectIfHit(mouseX, mouseY);
    }

 }
 width(){
    return this.itemData.extra.width.initialValue;
 }
 height(){
    return this.itemData.extra.height.initialValue;
 }
 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }

 isHit(mouseX , mouseY){

      return (
          mouseX  >= this.getX() &&
          mouseX  <= this.getX() + this.width() &&
          mouseY  >= this.getY() &&
          mouseY  <= this.getY() + this.height()
      );
  
 }
}