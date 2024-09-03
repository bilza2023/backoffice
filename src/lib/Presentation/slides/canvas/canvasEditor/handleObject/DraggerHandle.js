
//@ts-nocheck

export default class DraggerHandle {
    constructor(color, x, y, width, height) {
      this.color = color;

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
  
    mouseDown(mouseX, mouseY){
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

    update(item, mouseX, mouseY) {
        if(!this.isSelected) {return;}
        
        item.extra.x.initialValue =  mouseX;
        item.extra.y.initialValue =  mouseY;
    }
    
  }
 
//     update(item, mouseX, mouseY) {
//       item.extra[this.property].initialValue = this.property === 'x' ? mouseX : mouseY;
//     }
//   }
  