
//@ts-nocheck

export default class AdderHandle {
    constructor(property, name, color, x, y, width, height) {
      this.property = property;
      this.name = name;
      this.color = color;

      this.lookingforX = true;
      this.x = x;
      this.y = y;

      this.isSelected = false;

      this.oldX = null;
      this.oldY = null;
      this.width = width;
      this.height = height;
    }
  
    isHit(mouseX, mouseY) {
      return mouseX >= this.x && mouseX <= this.x + this.width &&
             mouseY >= this.y && mouseY <= this.y + this.height;
    }
  
    selectIfHit(mouseX, mouseY){
        if (this.isHit(mouseX, mouseY)){
            this.isSelected = true; 
        }else {
            this.isSelected = false; 
        }
    }
    mouseUp(mouseX, mouseY){
        this.isSelected = false; 
    }
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    updateXY(x,y){
        this.x = x ;
        this.y =   y;
    }
    markIsSelectedFalse(){
        this.isSelected = false; 
    }
    update(item, mouseX, mouseY) {
        if (!this.isSelected) return;

        if (this.oldX == null || this.oldY == null) {
            this.oldX = mouseX;
            this.oldY = mouseY;
            return;
        }
        
        let delta = this.lookingforX ? mouseX - this.oldX : mouseY - this.oldY;
        
        item.extra[this.property].initialValue += delta;
        
        this.oldX = mouseX;
        this.oldY = mouseY;
    }

    
}
 
//     update(item, mouseX, mouseY) {
//       item.extra[this.property].initialValue = this.property === 'x' ? mouseX : mouseY;
//     }
//   }
  