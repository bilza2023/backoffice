//@ts-nocheck

import DrawLib from "./drawLib";
import getVal from "../getVal"; 
/////////////////////////////////////////////////////////////
export default class DrawLibInterpretor {
    constructor(canvas, ctx,backgroundColor = '#051905',width=1000,height=360,cellWidth=25,cellHeight=25,xFactor=0,spriteImgArray,bgImages) {
        this.img = null;
        this.drawLib = new DrawLib(canvas, ctx);
        this.drawLib.width = width;
        this.drawLib.height = height;
        this.drawLib.backgroundColor = backgroundColor;
        
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.xFactor = xFactor;
        this.showGrid = false;
        this.gridLineWidth = 1;
        this.gridLineColor = 'white';
        this.spriteImgArray = spriteImgArray;
        this.bgImages = bgImages;
        this.systemImagesCache = [];
        
    }
    getX(val){
        // debugger;
        const r = parseInt( val * this.cellWidth );  
        return r;
    }    
    addXfactor(val){
        // debugger;
        const r = parseInt( val  + (this.xFactor * this.cellWidth));  
        return r;
    }    
    getY(val){
        return parseInt( (val * this.cellHeight).toFixed(0));
    }    
    jsonError(txt='Json Parsing Error',x=200,y=75,font_color='red',font='25px Arial'){
        this.drawLib.text(txt, x,y,font_color , font);
    }
    
    interpret(items,currentTime=0,extra,playerImages) {
        //--keep 
        if(!extra.bgGlobalAlpha){extra.extra.bgGlobalAlpha=1;}

        // this.drawLib.clear('green'); 
        this.drawLib.clear(extra.backgroundColor);
        // debugger;
        if(extra.bgImg !== "null"){
            // console.log("this.bgImages[0]==>",this.bgImages[0].name);
            for (let i = 0; i < this.bgImages.length; i++) {
                const element = this.bgImages[i];
                if(element.name == extra.bgImg){
                    // debugger;
                    this.drawLib.bgImage(element.img,extra.bgGlobalAlpha || 1);
                    break;
                }
            }
        }         
        
        if(this.showGrid){
            this.drawLib.grid(this.cellWidth, this.cellHeight, this.gridLineWidth, this.gridLineColor);
        }

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            // item in this loop is actually item.extra ==>
    
            const extra = item.extra;

            //-- fields that are added later must be added to older items
            if(!extra.useShowHide){ extra.useShowHide = false;}
            if(!extra.showAt){ extra.showAt = 0;}

            if( currentTime >= extra.showAt ){
            switch (extra.command) {
                case 'grid':
                    break;
                case 'rect':
                    // debugger;
                    this.drawLib.rect(
                        this.addXfactor(this.getX(
                            getVal(currentTime , extra.x.initialValue, extra.x.setCommands)
                        )), 
                        
                        this.getY(
                            getVal(currentTime , extra.y.initialValue, extra.y.setCommands)
                        ),
                        
                        getVal(currentTime , extra.width.initialValue, extra.width.setCommands), 
                        getVal(currentTime , extra.height.initialValue, extra.height.setCommands),
                         
                        
                        getVal(currentTime , extra.color.initialValue, extra.color.setCommands),
                        
                        getVal(currentTime , extra.filled.initialValue, extra.filled.setCommands),
                        
                        extra.dash,extra.gap,
                        
                         getVal(currentTime , extra.lineWidth.initialValue, extra.lineWidth.setCommands),
                        extra.globalAlpha);
                    break;
                case 'shape':
                    this.drawLib.shape(extra.points, extra.color, extra.closed,extra.globalAlpha);
                    break;
                case 'sysImage':
                    // debugger;
                    // extra.name = "system_images/gen/wood.jpg"; 
                    const image_ret = sysImageExists(this.systemImagesCache,extra.src);
                    if ( image_ret !== null){
                        this.drawLib.image(image_ret, this.addXfactor(this.getX(extra.x)), this.getY(extra.y), this.getX(extra.width), this.getY(extra.height));
                    }else {
                        cacheSysImage(this.systemImagesCache,extra.src);
                        // this.drawLib.image(image_ret, 100, 100, 100, 100);
                    }

                    break;
                case 'line':
                    
                    if (!extra.translate || extra.translate==false ){
                        this.drawLib.line(extra.x1, extra.y1, extra.x2, extra.y2, extra.color, extra.lineWidth,extra.dash,extra.gap,extra.globalAlpha);
                    }else{
                        this.drawLib.line(this.addXfactor(this.getX(extra.x1)), this.getY(extra.y1), this.addXfactor(this.getX(extra.x2)), this.getY(extra.y2), extra.color, extra.lineWidth,extra.dash,extra.gap,extra.globalAlpha);
                    }

                    break;
                case 'lines':
                const theArr = extra.arr.split(',').map(str => parseInt(str.trim(), 10));
                if (theArr.length % 2 !== 0) {
                    this.drawLib.text(`Lines: XY pair incomplete`, 100, 100, 'red', '25px Arial');
                    break; // Array length is not even
                }
            
                let x1 = extra.x;
                let y1 = extra.y;
            
                for (let i = 0; i < theArr.length; i += 2) {
                    const dx = theArr[i];
                    const dy = theArr[i + 1];
            
                    const x2 = x1 + dx;
                    const y2 = y1 + dy;
                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.line(x1, y1, x2, y2, extra.color, extra.lineWidth, extra.dash, extra.gap);
                    }else{
                    this.drawLib.line(this.addXfactor(this.getX(x1)), this.getY(y1), this.addXfactor(this.getX(x2)), this.getY(y2), extra.color, extra.lineWidth, extra.dash, extra.gap);    
                    }
                    x1 = x2;
                    y1 = y2;
                }
                    break;
                case 'circle':
                    // (x, y, radius, color = 'black', fill = false, startingAngle = 0, endingAngle = Math.PI * 2, dash = 0, gap = 0)
                    const st_angle_rads_circle = extra.startAngle * (Math.PI / 180);
                    const end_angle_rads_circle = extra.endAngle * (Math.PI / 180);

                    if (!extra.translate || extra.translate==false ){
                        this.drawLib.circle(extra.x, extra.y, extra.radius, extra.color, extra.fill,st_angle_rads_circle,end_angle_rads_circle,extra.dash,extra.gap,extra.lineWidth,extra.globalAlpha);                    
                    }else{
                        this.drawLib.circle(this.addXfactor(this.getX(extra.x)), this.getY(extra.y), extra.radius, extra.color, extra.fill,st_angle_rads_circle,end_angle_rads_circle,extra.dash,extra.gap,extra.lineWidth,extra.globalAlpha);
                    }

                    break;
                case 'ellipse':
                    const st_angle_rads = extra.startAngle * (Math.PI / 180);
                    const end_angle_rads = extra.endAngle * (Math.PI / 180);
                    const rotation_rads = extra.rotation * (Math.PI / 180);

                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.ellipse(extra.x, extra.y, extra.radiusX, extra.radiusY, extra.color, extra.fill,rotation_rads , st_angle_rads, end_angle_rads,extra.lineWidth,extra.dash,extra.gap,extra.globalAlpha);                    
                    }else{
                    this.drawLib.ellipse(this.addXfactor(this.getX(extra.x)), this.getY(extra.y), extra.radiusX, extra.radiusY, extra.color, extra.fill, rotation_rads, st_angle_rads, end_angle_rads,extra.lineWidth,extra.dash,extra.gap,extra.globalAlpha);
                    }
                    break;
                case 'text':
                   
                    this.drawLib.text(
                        getVal(currentTime , extra.text.initialValue, extra.text.setCommands),

                        this.addXfactor(this.getX(extra.x)), 
                        this.getY(extra.y), 
                        extra.color, extra.font,extra.shadowOffsetX,extra.shadowOffsetY,extra.shadowBlur,extra.shadowColor,extra.globalAlpha);    
                
                    break;
                case 'para':

                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.para(extra.text, extra.x, extra.y, extra.color, extra.font,extra.shadowOffsetX,extra.shadowOffsetY,extra.shadowBlur,extra.shadowColor,extra.globalAlpha,extra.lineHeightOffset,extra.xOffset);
                    }else{
                    this.drawLib.para(extra.text, this.addXfactor(this.getX(extra.x)), this.getY(extra.y), extra.color, extra.font,extra.shadowOffsetX,extra.shadowOffsetY,extra.shadowBlur,extra.shadowColor,extra.globalAlpha,extra.lineHeightOffset,extra.xOffset);    
                    }
                    break;
                case 'angleSymbol':
                    // debugger;
                    const st_angle_rads_angleSymbol = extra.startAngle * (Math.PI / 180);
                    const end_angle_rads_angleSymbol = extra.endAngle * (Math.PI / 180);

                    if (!extra.translate || extra.translate==false ){    
                        this.drawLib.drawAngleSymbol(extra.x, extra.y,extra.radius, extra.ticks, st_angle_rads_angleSymbol, end_angle_rads_angleSymbol, extra.color,extra.lineWidth,extra.showOrigin);
                    }else{
                        this.drawLib.drawAngleSymbol(this.addXfactor(this.getX(extra.x)), this.getY(extra.y),extra.radius, extra.ticks, st_angle_rads_angleSymbol, end_angle_rads_angleSymbol, extra.color,extra.lineWidth,extra.showOrigin);
                    }
                    break;
                case 'clear':
                    this.drawLib.clear();
                    break;
                case 'linearGradient':
                    this.drawLib.linearGradient(extra.x, extra.y, extra.x1, extra.y1, extra.colorStops);
                    break;
                case 'gridDot':
                    this.drawLib.gridDot(extra.cellWidth, extra.cellHeight, extra.dotSize, extra.dotColor);
                    break;
                case 'bezier':
                    // debugger;
                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.bezier(extra.x, extra.y, extra.x1, extra.y1, extra.x2, extra.y2, extra.color, extra.lineWidth, extra.globalAlpha, extra.showHandle, extra.dash, extra.gap);
                    }else{
                    this.drawLib.bezier(this.addXfactor(this.getX(extra.x)), this.getY(extra.y), this.addXfactor(this.getX(extra.x1)), this.getY(extra.y1), this.addXfactor(this.getX(extra.x2)), this.getY(extra.y2), extra.color, extra.lineWidth, extra.globalAlpha, extra.showHandle, extra.dash, extra.gap);     
                    }
                    break;
                case 'ray':
                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.ray(extra.x0, extra.y0, extra.x1, extra.y1, extra.color, extra.lineWidth, extra.arrowWidth, extra.arrowHeight, extra.startArrow, extra.endArrow,extra.dash,extra.gap);
                    }else{
                    this.drawLib.ray(this.addXfactor(this.getX(extra.x0)), this.getY(extra.y0), this.addXfactor(this.getX(extra.x1)), this.getY(extra.y1), extra.color, extra.lineWidth, extra.arrowWidth, extra.arrowHeight, extra.startArrow, extra.endArrow,extra.dash,extra.gap);     
                    }
                    break;
                case 'dot':
                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.dot(extra.x, extra.y, extra.label, extra.dot_width, extra.text_size, extra.color, extra.text_color);
                    }else{
                    this.drawLib.dot(this.addXfactor(this.getX(extra.x)), this.getY(extra.y), extra.label, extra.dot_width, extra.text_size, extra.color, extra.text_color);    
                    }
                    break;
                case 'repeatText':
                    let wordsArray = extra.textArray.split(",");
                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.repeatText(wordsArray, extra.initialX, extra.initialY, extra.xFactor, extra.yFactor, extra.color, extra.font);
                    }else {
                    this.drawLib.repeatText(wordsArray, this.addXfactor(this.getX(extra.initialX)), parseInt(this.getY(extra.initialY)),this.getX(extra.xFactor), parseInt(this.getY(extra.yFactor)), extra.color, extra.font);    
                    }
                    break;
                case 'repeatDot':
                    
                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.repeatDot(extra.numberOfDots, extra.initialX, extra.initialY, extra.xFactor, extra.yFactor, extra.width, extra.color);
                    }else{
                    this.drawLib.repeatDot(extra.numberOfDots, this.addXfactor(parseInt(this.getX(extra.initialX))),parseInt(this.getY(extra.initialY)), parseInt(this.getX(extra.xFactor)), parseInt(this.getY(extra.yFactor)), extra.width, extra.color);
                    }
                    break;
                case 'regularStar':
                    this.drawLib.regularStar(extra.x, extra.y, extra.outerRadius, extra.innerRadius, extra.points, extra.color, extra.filled);
                    break;
                case 'regularPolygon':
                    this.drawLib.regularPolygon(extra.x, extra.y, extra.radius, extra.sides, extra.color, extra.filled);
                    break;
                case 'triangle':
                    // debugger;
                    if (!extra.translate || extra.translate==false ){
                    this.drawLib.triangle(extra.x1, extra.y1, extra.x2, extra.y2, extra.x3, extra.y3, extra.color, extra.filled,extra.lineWidth,extra.dash,extra.gap);
                    }else{
                        // debugger;
                    this.drawLib.triangle(this.addXfactor(this.getX(extra.x1)), this.getY(extra.y1), this.addXfactor(this.getX(extra.x2)), this.getY(extra.y2), this.addXfactor(this.getX(extra.x3)), this.getY(extra.y3), extra.color, extra.filled,extra.lineWidth,extra.dash,extra.gap);    
                    }
                    break;
                case 'polygon':
                    // debugger;
                    this.drawLib.polygon(extra.points, extra.color, extra.filled,extra.lineWidth);
                    break;
                case 'image':
                    // debugger;
                    for (let i = 0; i < playerImages.length; i++) {
                        const playerImage = playerImages[i];
                        if(playerImage.id == item._id){
                            this.drawLib.image(
                                playerImage.image, 
                            this.addXfactor(this.getX(extra.x)), 
                            this.getY(extra.y),
                            this.getX(extra.width), 
                            this.getX(extra.height),
                            extra.globalAlpha
                            );
                        }
                    }
                    break;
                case 'sprite':
                    try{
                            let sprite;
                            for (let i = 0; i < this.spriteImgArray.length; i++) {
                                const element = this.spriteImgArray[i];
                                if(element.name == extra.sheet){
                                    sprite = element;
                                    break;
                                }
                            }
                    if(!sprite){throw Error("Sprite not found");}                            
                    sprite.applyItem(extra.sheetItem);
                    if (!sprite.selectedData){console.warn("sheetItem not found");break;}        

                    if (!extra.translate || extra.translate==false ){
                        this.drawLib.sprite(sprite,extra);
                        }else {
                        
                        const newItem = JSON.parse(JSON.stringify(extra));

                        newItem.dx = this.addXfactor(this.getX(extra.dx));
                        newItem.dy = this.getY(extra.dy);

                        this.drawLib.sprite(sprite,newItem);
                        }
                    
                    break;
                    }catch(e){
                        break;
                    }
                default:
                    this.drawLib.text(`Unsupported command: ${extra.command}`, 200,200, 'red', '25px Arial');
                    break;
            }
        }// if showAt
        }
    }

 
}//class ends
    


///////////////////////////////////
function sysImageExists(systemImagesCache,systemImageName){

    for (let i = 0; i < systemImagesCache.length; i++) {
        const element = systemImagesCache[i];
        if(element.name == systemImageName){
            return element.img;
        }
    }
return null;    
}

async function cacheSysImage(systemImagesCache,systemImageName){
        const i = new Image();
        i.src= systemImageName;
        i.onload = () => {
            systemImagesCache.push({"name" : systemImageName , "img": i});
        };
}