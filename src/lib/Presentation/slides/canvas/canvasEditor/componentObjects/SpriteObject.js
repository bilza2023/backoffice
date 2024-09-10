//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class SpriteObject extends ComponentObject {
    constructor(itemData , fnList , spriteImgArray) {
        super(itemData , fnList);
        this.spriteImgArray = spriteImgArray;
    }

    loadHandles() {
        ////////////////////////////////////////////////////////////////////////////
        let btnHandle = new ButtonHandle(this.itemData,this.fnList); 
        btnHandle.color = 'silver';

        btnHandle.getX = function() {
            return this.itemData.extra.dx.initialValue - 15;
        }

        btnHandle.getY = function() {
            return this.itemData.extra.dy.initialValue + 15;
        }
        btnHandle.useInitialValue = true;

        this.handleObjects.push(btnHandle);        
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////    
        let draggerHandle = new DraggerHandle(this.itemData,'dx' ,'dy'); 
        draggerHandle.getX = function() {
            return this.itemData.extra.dx.initialValue - 15;
        }

        draggerHandle.getY = function() {
            return this.itemData.extra.dy.initialValue - 10;
        }
        this.handleObjects.push(draggerHandle);    
    }

    draw(drawLib, currentTime) { 
        try {
            let sprite;
            for (let i = 0; i < this.spriteImgArray.length; i++) {
                const element = this.spriteImgArray[i];
                if(element.name == this.itemData.extra.sheet) {
                    sprite = element;
                    break;
                }
            }
            if(!sprite) { throw Error("Sprite not found"); }                            
            sprite.applyItem(this.itemData.extra.sheetItem);
            if (!sprite.selectedData) { console.warn("sheetItem not found"); return; }

            this.itemData.extra.x = getVal(currentTime , this.itemData.extra.dx);
            this.itemData.extra.y = getVal(currentTime , this.itemData.extra.dy);

            drawLib.sprite(sprite, this.itemData.extra);
        } catch (error) {
            console.error(error);
        }
    }

    getX() {
        return this.itemData.extra.x.initialValue;
    }

    getY() {
        return this.itemData.extra.y.initialValue;
    }

    isHit(mouseX, mouseY) {
        const hitMargin = 40;

        return (
            mouseX >= this.itemData.extra.dx.initialValue - hitMargin &&
            mouseX <= this.itemData.extra.dx.initialValue + hitMargin &&
            mouseY >= this.itemData.extra.dy.initialValue - hitMargin &&
            mouseY <= this.itemData.extra.dy.initialValue + hitMargin
        );
    }
} // class
