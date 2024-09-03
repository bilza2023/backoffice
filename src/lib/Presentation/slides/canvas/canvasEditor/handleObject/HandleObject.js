
//@ts-nocheck

// Base class for all handles
class HandleObject {
    constructor(name, color, x, y, width, height) {
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
  }
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  // Handle that sets a property equal to the mouse position
  class EqualHandle extends HandleObject {
    constructor(name, color, x, y, width, height, property) {
      super(name, color, x, y, width, height);
      this.property = property;
    }
    
    update(item, mouseX, mouseY) {
      item.extra[this.property].initialValue = this.property === 'x' ? mouseX : mouseY;
    }
  }
  
  // Handle that adds/subtracts from a property based on mouse movement
  class AdderHandle extends HandleObject {
    constructor(name, color, x, y, width, height, property) {
      super(name, color, x, y, width, height);
      this.property = property;
    }
  
    update(item, dx, dy) {
      const delta = this.property === 'width' ? dx : dy;
      item.extra[this.property].initialValue = Math.max(1, item.extra[this.property].initialValue + delta);
    }
  }
  
  export { HandleObject, EqualHandle, AdderHandle };