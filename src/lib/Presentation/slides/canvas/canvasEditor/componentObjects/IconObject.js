//@ts-nocheck
import ComponentObject from './ComponentObject';
import DraggerHandle from '../handleObject/DraggerHandle';
import AdderHandle from '../handleObject/AdderHandle';
import ButtonHandle from '../handleObject/ButtonHandle';
import getVal from "../../getVal";

export default class IconObject extends ComponentObject {
    constructor(itemData , fnList) {
        super(itemData , fnList);
        this.dialogueBox = [
            {
              componentName: 'TrPropNumber',
              title: 'x',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'y',
              props: {}
            },
            {
              componentName: 'TrPropText',
              title: 'label',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'dot_width',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'text_color',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'text_size',
              props: {}
            },
            // CommonCommands
            {
              componentName: 'TrText',
              title: 'name',
              props: {}
            },
            {
              componentName: 'TrPropColor',
              title: 'color',
              props: {}
            },
            {
              componentName: 'TrNo',
              title: 'showAt',
              props: {}
            },
            {
              componentName: 'TrPropNumber',
              title: 'globalAlpha',
              props: {
                min: '0.0',
                max: '1.0',
                step: '0.1'
              }
            }
          ];
          
    }

    loadHandles(){
////////////////////////////////////////////////////////////////////////////
let btnHandle = new ButtonHandle(this.itemData,this.fnList); 

btnHandle.getX = function(){
    return this.itemData.extra.x.initialValue ;
}
btnHandle.getY = function(){
    return this.itemData.extra.y.initialValue + 25;
}
btnHandle.useInitialValue = true;

this.handleObjects.push(btnHandle);  

/////////////////////////////////////////////////////////////////////////////          
////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////    
            //    debugger;
            let draggerHandle = new DraggerHandle(this.itemData); 
//--every Component-object can have different x and y e.g x1 x0 etc 
            draggerHandle.getX = function(){
                return this.itemData.extra.x.initialValue -15;
            }

            draggerHandle.getY = function(){
                return  this.itemData.extra.y.initialValue -10;
            }
            this.handleObjects.push(draggerHandle);    
    }
////////////////////////////////////////////////////////////
draw(drawLib, currentTime) {
    // debugger;
    drawLib.ctx.save();
    const percent_rect_extra = 20; 
    
    drawLib.ctx.font = '28px Arial'; // Set the font before measuring
    const textWidth = drawLib.ctx.measureText('This is an Icon').width;
    const textHeight = drawLib.ctx.measureText('W').width;
    
    drawLib.ctx.font = '100px Arial'; // Set the font before measuring
    const iconWidth = drawLib.ctx.measureText('🦏').width;
    const iconHeight = drawLib.ctx.measureText('W').width;
    
    const largerWidth = textWidth >= iconWidth ? textWidth : iconWidth;
    const extraWidth = (percent_rect_extra * (largerWidth/100)); 
    const rectangleWidth = largerWidth + extraWidth; 
    
     const rectangleHeight = textHeight + iconHeight;
     const textXAdjest = Math.abs((rectangleWidth - textWidth)/3); 
     const iconXAdjest = Math.abs((iconWidth - rectangleWidth)/2); 

// roundRect    
drawLib.roundRect(
        this.itemData.extra.x.initialValue ,
        this.itemData.extra.y.initialValue, 
        rectangleWidth ,
        rectangleHeight  +  (30* rectangleHeight/100), 
        30,
        '#3a4a75',
        true);

//    icon
    drawLib.text("🦏", 
        this.itemData.extra.x.initialValue + iconXAdjest, 
        this.itemData.extra.y.initialValue, 
        this.itemData.extra.color.initialValue, 
        this.itemData.extra.iconSize.initialValue + 'px Arial'
    );
   
    //text
    drawLib.text(
        this.itemData.extra.text.initialValue , 
        this.itemData.extra.x.initialValue + textXAdjest, 
        this.itemData.extra.y.initialValue + (iconHeight + (20* iconHeight/100)) , 
        this.itemData.extra.color.initialValue, 
        this.itemData.extra.fontSize.initialValue + 'px '+ this.itemData.extra.fontFamily
    );
    drawLib.ctx.restore();
    // console.log("textWidth" , wd );
}
////////////////////////////////////////////////////

width(){
    return this.itemData.extra.x.initialValue + (this.itemData.extra.dot_width.initialValue *  1.5);
 }
 height(){
    return this.itemData.extra.x.initialValue + (this.itemData.extra.dot_width.initialValue *  1.5);
 }
 getX(){
    return this.itemData.extra.x.initialValue;
 }
 
 getY(){
    return this.itemData.extra.y.initialValue;
 }


 getHitAreaRadius() {
    // Base the hit area radius on font size and text length
    const baseRadius = 20;
    const textLength = 10;
    return baseRadius + (textLength * 2); // Adjust this formula as needed
}

isHit(mouseX, mouseY) {
    const centerX = this.getX();
    const centerY = this.getY();
    const radius = this.getHitAreaRadius();

    // Calculate the distance between the mouse click and the text origin
    const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );

    // Check if the distance is less than or equal to the hit area radius
    return distance <= radius;
}

 
////////////////////////////////////////////////////////////
    
}//class
