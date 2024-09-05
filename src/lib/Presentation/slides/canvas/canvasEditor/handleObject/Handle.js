//@ts-nocheck

export default class Handle {
  constructor(color, x, y, width, height) {
      this.color = color;
      this.x = x;
      this.y = y;
      this.width = width;
      this.useInitialValue = true; //some x and y or props are animated to need initial value
      this.height = height;
      this.isSelected = false;
  }

  isHit(mouseX, mouseY) {
      return mouseX >= this.x && mouseX <= this.x + this.width &&
             mouseY >= this.y && mouseY <= this.y + this.height;
  }
//--mouse down
  selectIfHit(mouseX, mouseY) {
      this.isSelected = this.isHit(mouseX, mouseY);
  }
//--mouse up
  deselect() {
      this.isSelected = false;
  }

  draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  //to update its own x and y--it updates itsself and  not the item .. item is edited in upper level
  updateXY(x, y) {
      this.x = x;
      this.y = y;
  }
  update(item, mouseX, mouseY) {} ///for child objects to fill
}
