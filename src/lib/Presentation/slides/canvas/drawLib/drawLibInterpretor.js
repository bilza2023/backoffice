//@ts-nocheck

import DrawLib from "./drawLib" 

export default class DrawLibInterpretor {
    constructor(canvas, ctx,backgroundColor = '#051905',width=1000,height=360,cellWidth=25,cellHeight=25,xFactor=0) {
        this.drawLib = new DrawLib(canvas, ctx);
        this.drawLib.width = width;
        this.drawLib.height = height;
        this.drawLib.backgroundColor = backgroundColor;
        
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
        this.xFactor = xFactor;
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
    
    interpret(items = {}) {
        
        this.drawLib.clear(this.drawLib.backgroundColor); 
        
        for (let i = 0; i < items.length; i++) {
            const itemWhole = items[i];
            const item = itemWhole.extra;

            switch (item.command) {
                case 'grid':
                    // debugger;
                    // keep in mind item.cellWidth is different from this.cellWidth
                    if (!item.translate || item.translate==false ){
                    this.drawLib.grid(item.cellWidth, item.cellHeight, item.lineWidth, item.lineColor);
                    }else {
                    this.drawLib.grid(this.cellWidth, this.cellHeight, item.lineWidth, item.lineColor);    
                    }
                    break;

                case 'rect':
                    if (!item.translate || item.translate==false ){
                    this.drawLib.rect(item.x, item.y, item.width, item.height, item.color, item.filled,item.dash,item.gap,item.lineWidth);
                    }else {
                    this.drawLib.rect(this.addXfactor(this.getX(item.x)), this.getY(item.y), item.width, item.height, item.color, item.filled,item.dash,item.gap,item.lineWidth);
                    }
                    break;

                case 'shape':
                    this.drawLib.shape(item.points, item.color, item.closed);
                    break;

                case 'line':
                    
                    if (!item.translate || item.translate==false ){
                        this.drawLib.line(item.x1, item.y1, item.x2, item.y2, item.color, item.lineWidth,item.dash,item.gap);
                    }else{
                        this.drawLib.line(this.addXfactor(this.getX(item.x1)), this.getY(item.y1), this.addXfactor(this.getX(item.x2)), this.getY(item.y2), item.color, item.lineWidth,item.dash,item.gap);
                    }

                    break;
                case 'lines':
                const theArr = item.arr.split(',').map(str => parseInt(str.trim(), 10));
                if (theArr.length % 2 !== 0) {
                    this.drawLib.text(`Lines: XY pair incomplete`, 100, 100, 'red', '25px Arial');
                    break; // Array length is not even
                }
            
                let x1 = item.x;
                let y1 = item.y;
            
                for (let i = 0; i < theArr.length; i += 2) {
                    const dx = theArr[i];
                    const dy = theArr[i + 1];
            
                    const x2 = x1 + dx;
                    const y2 = y1 + dy;
                    if (!item.translate || item.translate==false ){
                    this.drawLib.line(x1, y1, x2, y2, item.color, item.lineWidth, item.dash, item.gap);
                    }else{
                    this.drawLib.line(this.addXfactor(this.getX(x1)), this.getY(y1), this.addXfactor(this.getX(x2)), this.getY(y2), item.color, item.lineWidth, item.dash, item.gap);    
                    }
                    x1 = x2;
                    y1 = y2;
                }
                    break;
                    
                    
                case 'circle':
                    // (x, y, radius, color = 'black', fill = false, startingAngle = 0, endingAngle = Math.PI * 2, dash = 0, gap = 0)
                    const st_angle_rads_circle = item.startAngle * (Math.PI / 180);
                    const end_angle_rads_circle = item.endAngle * (Math.PI / 180);

                    if (!item.translate || item.translate==false ){
                        this.drawLib.circle(item.x, item.y, item.radius, item.color, item.fill,st_angle_rads_circle,end_angle_rads_circle,item.dash,item.gap,item.lineWidth);                    
                    }else{
                        this.drawLib.circle(this.addXfactor(this.getX(item.x)), this.getY(item.y), item.radius, item.color, item.fill,st_angle_rads_circle,end_angle_rads_circle,item.dash,item.gap,item.lineWidth);
                    }

                    break;

                case 'ellipse':
                    const st_angle_rads = item.startAngle * (Math.PI / 180);
                    const end_angle_rads = item.endAngle * (Math.PI / 180);
                    const rotation_rads = item.rotation * (Math.PI / 180);

                    if (!item.translate || item.translate==false ){
                    this.drawLib.ellipse(item.x, item.y, item.radiusX, item.radiusY, item.color, item.fill,rotation_rads , st_angle_rads, end_angle_rads,item.lineWidth,item.dash,item.gap);                    
                    }else{
                    this.drawLib.ellipse(this.addXfactor(this.getX(item.x)), this.getY(item.y), item.radiusX, item.radiusY, item.color, item.fill, rotation_rads, st_angle_rads, end_angle_rads,item.lineWidth,item.dash,item.gap);
                    }
                    break;

                case 'text':

                    if (!item.translate || item.translate==false ){
                    this.drawLib.text(item.text, item.x, item.y, item.color, item.font,item.shadowOffsetX,item.shadowOffsetY,item.shadowBlur,item.shadowColor,item.globalAlpha);
                    }else{
                    this.drawLib.text(item.text, this.addXfactor(this.getX(item.x)), this.getY(item.y), item.color, item.font,item.shadowOffsetX,item.shadowOffsetY,item.shadowBlur,item.shadowColor,item.globalAlpha);    
                    }
                    break;
                case 'para':

                    if (!item.translate || item.translate==false ){
                    this.drawLib.para(item.text, item.x, item.y, item.color, item.font,item.shadowOffsetX,item.shadowOffsetY,item.shadowBlur,item.shadowColor,item.globalAlpha,item.lineHeightOffset,item.xOffset);
                    }else{
                    this.drawLib.para(item.text, this.addXfactor(this.getX(item.x)), this.getY(item.y), item.color, item.font,item.shadowOffsetX,item.shadowOffsetY,item.shadowBlur,item.shadowColor,item.globalAlpha,item.lineHeightOffset,item.xOffset);    
                    }
                    break;
                case 'image':
                        const img = new Image();
                        img.onload = () => {
                            this.drawLib.image(img, item.x, item.y, item.width, item.height);
                            item.loadedImg = img;
                        };
                        img.src = item.image;
                break;

                case 'angleSymbol':
                    // debugger;
                    const st_angle_rads_angleSymbol = item.startAngle * (Math.PI / 180);
                    const end_angle_rads_angleSymbol = item.endAngle * (Math.PI / 180);

                    if (!item.translate || item.translate==false ){    
                        this.drawLib.drawAngleSymbol(item.x, item.y,item.radius, item.ticks, st_angle_rads_angleSymbol, end_angle_rads_angleSymbol, item.color,item.lineWidth,item.showOrigin);
                    }else{
                        this.drawLib.drawAngleSymbol(this.addXfactor(this.getX(item.x)), this.getY(item.y),item.radius, item.ticks, st_angle_rads_angleSymbol, end_angle_rads_angleSymbol, item.color,item.lineWidth,item.showOrigin);
                    }
                    break;
                case 'clear':
                    this.drawLib.clear();
                    break;
                case 'linearGradient':
                    this.drawLib.linearGradient(item.x, item.y, item.x1, item.y1, item.colorStops);
                    break;
                case 'gridDot':
                    this.drawLib.gridDot(item.cellWidth, item.cellHeight, item.dotSize, item.dotColor);
                    break;
                case 'bezier':
                    // debugger;
                    if (!item.translate || item.translate==false ){
                    this.drawLib.bezier(item.x, item.y, item.x1, item.y1, item.x2, item.y2, item.color, item.lineWidth, item.globalAlpha, item.showHandle, item.dash, item.gap);
                    }else{
                    this.drawLib.bezier(this.addXfactor(this.getX(item.x)), this.getY(item.y), this.addXfactor(this.getX(item.x1)), this.getY(item.y1), this.addXfactor(this.getX(item.x2)), this.getY(item.y2), item.color, item.lineWidth, item.globalAlpha, item.showHandle, item.dash, item.gap);     
                    }
                    break;
                case 'ray':
                    if (!item.translate || item.translate==false ){
                    this.drawLib.ray(item.x0, item.y0, item.x1, item.y1, item.lineColor, item.lineWidth, item.arrowWidth, item.arrowHeight, item.startArrow, item.endArrow,item.dash,item.gap);
                    }else{
                    this.drawLib.ray(this.addXfactor(this.getX(item.x0)), this.getY(item.y0), this.addXfactor(this.getX(item.x1)), this.getY(item.y1), item.lineColor, item.lineWidth, item.arrowWidth, item.arrowHeight, item.startArrow, item.endArrow,item.dash,item.gap);     
                    }
                    break;

                case 'dot':
                    if (!item.translate || item.translate==false ){
                    this.drawLib.dot(item.x, item.y, item.label, item.dot_width, item.text_size, item.dot_color, item.text_color);
                    }else{
                    this.drawLib.dot(this.addXfactor(this.getX(item.x)), this.getY(item.y), item.label, item.dot_width, item.text_size, item.dot_color, item.text_color);    
                    }
                    break;

                case 'repeatText':
                    let wordsArray = item.textArray.split(",");
                    if (!item.translate || item.translate==false ){
                    this.drawLib.repeatText(wordsArray, item.initialX, item.initialY, item.xFactor, item.yFactor, item.color, item.font);
                    }else {
                    this.drawLib.repeatText(wordsArray, this.addXfactor(this.getX(item.initialX)), parseInt(this.getY(item.initialY)),this.getX(item.xFactor), parseInt(this.getY(item.yFactor)), item.color, item.font);    
                    }
                    break;

                case 'repeatDot':
                    
                    if (!item.translate || item.translate==false ){
                    this.drawLib.repeatDot(item.numberOfDots, item.initialX, item.initialY, item.xFactor, item.yFactor, item.width, item.color);
                    }else{
                    this.drawLib.repeatDot(item.numberOfDots, this.addXfactor(parseInt(this.getX(item.initialX))),parseInt(this.getY(item.initialY)), parseInt(this.getX(item.xFactor)), parseInt(this.getY(item.yFactor)), item.width, item.color);
                    }
                    break;

                case 'regularStar':
                    this.drawLib.regularStar(item.x, item.y, item.outerRadius, item.innerRadius, item.points, item.color, item.filled);
                    break;
                case 'regularPolygon':
                    this.drawLib.regularPolygon(item.x, item.y, item.radius, item.sides, item.color, item.filled);
                    break;
                case 'triangle':
                    // debugger;
                    if (!item.translate || item.translate==false ){
                    this.drawLib.triangle(item.x1, item.y1, item.x2, item.y2, item.x3, item.y3, item.color, item.filled,item.lineWidth,item.dash,item.gap);
                    }else{
                        // debugger;
                    this.drawLib.triangle(this.addXfactor(this.getX(item.x1)), this.getY(item.y1), this.addXfactor(this.getX(item.x2)), this.getY(item.y2), this.addXfactor(this.getX(item.x3)), this.getY(item.y3), item.color, item.filled,item.lineWidth,item.dash,item.gap);    
                    }
                    break;
                case 'polygon':
                    // debugger;
                    this.drawLib.polygon(item.points, item.color, item.filled,item.lineWidth);
                    break;
                default:
                    this.drawLib.text(`Unsupported command: ${item.command}`, 200,200, 'red', '25px Arial');
                    break;
            }
        }
    }
}
