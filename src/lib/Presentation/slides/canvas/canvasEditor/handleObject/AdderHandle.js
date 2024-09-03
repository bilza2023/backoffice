
//@ts-nocheck

export default class AdderHandle {
    constructor(property, name, color, x, y, width, height) {
      this.property = property;
      this.name = name;
      this.color = color;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    isHit(mouseX, mouseY) {
      return mouseX >= this.x && mouseX <= this.x + this.width &&
             mouseY >= this.y && mouseY <= this.y + this.height;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    updateXY(x,y){

        this.x = x;
        this.y = y;
    }
    update(item, dx, dy) {
        const delta = this.property === 'width' ? dx : dy;
        item.extra[this.property].initialValue = Math.max(1, item.extra[this.property].initialValue + delta);
    }
  }
 
//     update(item, mouseX, mouseY) {
//       item.extra[this.property].initialValue = this.property === 'x' ? mouseX : mouseY;
//     }
//   }
  