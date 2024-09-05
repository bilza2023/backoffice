//@ts-nocheck
import Handle from './Handle';

export default class AdderHandle extends Handle {
    constructor(property, x, y, width=20, height=20,color='red') {
        super(color, x, y, width, height);
        this.property = property;
        //which mouse move to take into account x or y ? lookingforX
        this.lookingforX = true;
        this.oldX = null;
        this.oldY = null;
    }


    

    update(item, mouseX, mouseY) {
        if (!this.isSelected) return;
        this.updateFunction(item, mouseX, mouseY);

    } 
    updateFunction(item, mouseX, mouseY){
// debugger;
        if (this.oldX == null || this.oldY == null) {
            this.oldX = mouseX;
            this.oldY = mouseY;
            return;
        }

        let delta = this.lookingforX ? mouseX - this.oldX : mouseY - this.oldY;

        if(this.useInitialValue){
            item.extra[this.property].initialValue += delta;
            }else {
            item.extra[this.property] += delta;
            }
        

        this.oldX = mouseX;
        this.oldY = mouseY;
    }
}
