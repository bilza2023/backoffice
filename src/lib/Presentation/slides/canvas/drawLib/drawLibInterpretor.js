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
    

            const extra = item.extra;
            
            if(extra.showAt === undefined || extra.showAt === null){ 
                extra.showAt = 0;
            }

            if( currentTime >= extra.showAt ){
            switch (extra.command) {
                case 'grid':
                    break;
                case 'rect':
                    // debugger;
                    this.drawLib.rect(
                        this.addXfactor(this.getX(getVal(currentTime , extra.x) )), 
                        this.getY(getVal(currentTime , extra.y)),
                        
                        getVal(currentTime , extra.width), 
                        getVal(currentTime , extra.height),
                         
                        getVal(currentTime , extra.color),
                        
                        getVal(currentTime , extra.filled),
                        
                        getVal(currentTime , extra.dash),
                        
                        getVal(currentTime , extra.gap),
                        
                        getVal(currentTime , extra.lineWidth),

                        getVal(currentTime , extra.globalAlpha),
                    
                    );
                    break;
                case 'shape':
                    this.drawLib.shape(extra.points, extra.color, extra.closed,extra.globalAlpha);
                    break;
                case 'sysImage':
                    // debugger;
                    // extra.name = "system_images/gen/wood.jpg"; 
                    const image_ret = sysImageExists(this.systemImagesCache,extra.src);
                    if ( image_ret !== null){
                        this.drawLib.image(
                            image_ret, 
                            this.addXfactor(this.getX(extra.x)), 
                            this.getY(extra.y), 
                            this.getX(extra.width), 
                            this.getY(extra.height));
                    }else {
                        cacheSysImage(this.systemImagesCache,extra.src);
                        // this.drawLib.image(image_ret, 100, 100, 100, 100);
                    }

                    break;
                case 'line':
                    // debugger;
                this.drawLib.line(
                    this.addXfactor(this.getX(getVal(currentTime , extra.x1) )), 
                    this.getY(getVal(currentTime , extra.y1)),

                    this.addXfactor(this.getX(getVal(currentTime , extra.x2) )), 
                    this.getY(getVal(currentTime , extra.y2)),                     
                    getVal(currentTime , extra.color),
                    
                    getVal(currentTime , extra.lineWidth),
                    
                    getVal(currentTime , extra.dash),
                    getVal(currentTime , extra.gap),
                    getVal(currentTime , extra.globalAlpha),
                    );

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
                 
                    
                    this.drawLib.line(
                        this.addXfactor(this.getX(x1)), 
                        this.getY(y1), 
                        this.addXfactor(this.getX(x2)), 
                        this.getY(y2), 
                        extra.color, 
                        extra.lineWidth, 
                        extra.dash, 
                        extra.gap
                    );    
                
                    x1 = x2;
                    y1 = y2;
                }
                    break;
                case 'circle':
                   
                        this.drawLib.circle(
                            this.addXfactor(this.getX(getVal(currentTime , extra.x) )), 
                            this.getY(getVal(currentTime , extra.y)),
                            
                            getVal(currentTime , extra.radius),
                            getVal(currentTime , extra.color),
                            getVal(currentTime , extra.fill),
                            (getVal(currentTime , extra.startAngle) * (Math.PI / 180)),
                            (getVal(currentTime , extra.endAngle) * (Math.PI / 180)),
                            
                            getVal(currentTime , extra.dash),
                            getVal(currentTime , extra.gap),
                            getVal(currentTime , extra.lineWidth),
                            getVal(currentTime , extra.globalAlpha)
                            
                        );

                    break;
                case 'ellipse':
                    this.drawLib.ellipse(
                        this.addXfactor(this.getX(getVal(currentTime , extra.x) )), 
                        this.getY(getVal(currentTime , extra.y)),
                        
                        getVal(currentTime , extra.radiusX),
                        getVal(currentTime , extra.radiusY),
                        getVal(currentTime , extra.color),
                        getVal(currentTime , extra.fill),

                        getVal(currentTime , extra.rotation) * (Math.PI / 180),
                        getVal(currentTime , extra.startAngle) * (Math.PI / 180),
                        getVal(currentTime , extra.endAngle) * (Math.PI / 180),

                        getVal(currentTime , extra.lineWidth),
                        getVal(currentTime , extra.dash),
                        getVal(currentTime , extra.gap),
                        getVal(currentTime , extra.globalAlpha)
                    );
                    
                    break;
                case 'text':
                   
                    this.drawLib.text(
                        getVal(currentTime ,extra.text),
                        this.addXfactor(this.getX(getVal(currentTime , extra.x) )), 
                        this.getY(getVal(currentTime , extra.y)),
                        getVal(currentTime , extra.color), 
                        extra.font,
                        extra.shadowOffsetX,
                        extra.shadowOffsetY,
                        extra.shadowBlur,
                        extra.shadowColor,

                        getVal(currentTime , extra.globalAlpha)
                    );    
                
                    break;
                case 'para':
                    // debuggerP;
                    this.drawLib.para(
                        extra.text, 
                        this.addXfactor(this.getX(getVal(currentTime , extra.x) )), 
                        this.getY(getVal(currentTime , extra.y)),

                        getVal(currentTime , extra.color), 
                        extra.font,
                        extra.shadowOffsetX,
                        extra.shadowOffsetY,
                        extra.shadowBlur,
                        extra.shadowColor,
                        getVal(currentTime , extra.globalAlpha), 
                        extra.lineHeightOffset,
                        extra.xOffset
                    );    
                    
                    break;
                case 'angleSymbol':
                    // debugger;
                    const st_angle_rads_angleSymbol = extra.startAngle * (Math.PI / 180);
                    const end_angle_rads_angleSymbol = extra.endAngle * (Math.PI / 180);

                        this.drawLib.drawAngleSymbol(
                            this.addXfactor(this.getX(extra.x)), 
                            this.getY(extra.y),
                            extra.radius, 
                            extra.ticks, 
                            st_angle_rads_angleSymbol, 
                            end_angle_rads_angleSymbol, 
                            getVal(currentTime , extra.color),
                            extra.lineWidth,
                            extra.showOrigin
                        );
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
                // debugger;      
                    this.drawLib.ray(
                        this.addXfactor(this.getX(getVal(currentTime , extra.x0) )), 
                        this.getY(getVal(currentTime , extra.y0)),
                        this.addXfactor(this.getX(getVal(currentTime , extra.x1) )), 
                        this.getY(getVal(currentTime , extra.y1)),

                        getVal(currentTime , extra.color),
                        getVal(currentTime , extra.lineWidth),
                        
                        getVal(currentTime , extra.arrowWidth),
                        getVal(currentTime , extra.arrowHeight),
                        extra.startArrow,
                        extra.endArrow,
                        getVal(currentTime , extra.dash),
                        getVal(currentTime , extra.gap),
                        getVal(currentTime , extra.globalAlpha),
                    );     
                    
                    break;
                case 'dot':
                    this.drawLib.dot(
                        this.addXfactor(this.getX(getVal(currentTime , extra.x) )), 
                        this.getY(getVal(currentTime , extra.y)),
                        
                        getVal(currentTime , extra.label), 
                        getVal(currentTime , extra.dot_width), 
                        getVal(currentTime , extra.text_size), 

                        getVal(currentTime , extra.color), 
                        getVal(currentTime , extra.text_color), 
                        getVal(currentTime , extra.globalAlpha) 
                        );    
                
                    break;
                case 'repeatText':
                    
                    let wordsArray = extra.textArray.initialValue.split(",");
                  
                    this.drawLib.repeatText(
                        wordsArray,
                        
                        this.addXfactor(this.getX(getVal(currentTime , extra.initialX) )), 
                        this.getY(getVal(currentTime , extra.initialY)),
                        
                        (getVal(currentTime , extra.xFactor) * this.cellWidth), 
                        (getVal(currentTime , extra.yFactor) * this.cellHeight), 
                        getVal(currentTime , extra.color), 
                        extra.font
                    );    
                    
                    break;
                case 'repeatDot':
                    this.drawLib.repeatDot(
                        extra.numberOfDots, 
                        this.addXfactor(parseInt(this.getX(extra.initialX))),
                        parseInt(this.getY(extra.initialY)), 
                        parseInt(this.getX(extra.xFactor)), 
                        parseInt(this.getY(extra.yFactor)), 
                        extra.width, 
                        getVal(currentTime , extra.color),
                    );
                    
                    break;
                case 'regularStar':
                    this.drawLib.regularStar(extra.x, extra.y, extra.outerRadius, extra.innerRadius, extra.points, extra.color, extra.filled);
                    break;
                case 'regularPolygon':
                    this.drawLib.regularPolygon(extra.x, extra.y, extra.radius, extra.sides, extra.color, extra.filled);
                    break;
                case 'triangle':
                    this.drawLib.triangle(
                        this.addXfactor(this.getX(getVal(currentTime , extra.x1))), 
                        this.getY(getVal(currentTime , extra.y1)),
                        this.addXfactor(this.getX(getVal(currentTime , extra.x2))), 
                        this.getY(getVal(currentTime , extra.y2)),
                        this.addXfactor(this.getX(getVal(currentTime , extra.x3))), 
                        this.getY(getVal(currentTime , extra.y3)),

                        getVal(currentTime , extra.color),
                        getVal(currentTime , extra.filled),
                        getVal(currentTime , extra.lineWidth),
                        getVal(currentTime , extra.dash),
                        getVal(currentTime , extra.gap),
                        getVal(currentTime , extra.globalAlpha)
                    );    
                    
                    break;
                case 'polygon':
                    // debugger;
                    this.drawLib.polygon(extra.points, extra.color, extra.filled,extra.lineWidth);
                    break;
                case 'image':
                    // debugger;
                            this.drawLib.image(
                            extra.image, 
                            this.addXfactor(this.getX(extra.x)), 
                            this.getY(extra.y),
                            this.getX(extra.width), 
                            this.getX(extra.height),
                            getVal(currentTime , extra.globalAlpha)
                            );
                    break;
                case 'sprite':
                    // debugger;
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

                   
                        
                        // const newItem = JSON.parse(JSON.stringify(extra));

                        extra.x =this.addXfactor(this.getX(getVal(currentTime , extra.dx) )), 
                        extra.y =this.getY(getVal(currentTime , extra.dy)),

                        this.drawLib.sprite(sprite,extra);
                        
                    
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