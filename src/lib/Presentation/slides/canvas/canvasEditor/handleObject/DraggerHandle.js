//@ts-nocheck
import Handle from './Handle';

export default class DraggerHandle extends Handle {
    constructor(color, x, y, width, height) {
        super(color, x, y, width, height);
    }

    update(item, mouseX, mouseY) {
        if (!this.isSelected) return;

        item.extra.x.initialValue = mouseX - this.width / 2;
        item.extra.y.initialValue = mouseY - this.height / 2;

        // TODO: Consider checking if the new position differs significantly from the current one
        // before updating the item's coordinates for better performance.
    }
}
