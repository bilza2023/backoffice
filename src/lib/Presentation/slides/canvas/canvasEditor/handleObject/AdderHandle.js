//@ts-nocheck
import Handle from './Handle';

export default class AdderHandle extends Handle {
    constructor(property, name, color, x, y, width, height) {
        super(color, x, y, width, height);
        this.property = property;
        this.name = name;
        this.lookingforX = true;
        this.oldX = null;
        this.oldY = null;
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
