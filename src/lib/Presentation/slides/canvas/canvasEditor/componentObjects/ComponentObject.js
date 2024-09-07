
//@ts-nocheck
import AdderHandle from '../handleObject/AdderHandle';



export default class ComponentObject {

 constructor(itemData,fnList){
        this.itemData = itemData;
        this.fnList = fnList;
        this.handleObjects = [];
        this.loadHandles(); 
 }
 loadHandles(){} //child objects will use it
//****************************************************************** */
 
 update(mouseX, mouseY) {
   // debugger;
    for (let i = 0; i < this.handleObjects.length; i++) {
        const obj = this.handleObjects[i];
        obj.update(this.itemData, mouseX, mouseY);
    }
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
 //comp object also has width height x,y for its on isHit
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