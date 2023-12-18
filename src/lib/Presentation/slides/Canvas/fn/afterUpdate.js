  //@ts-nocheck
  import drawLine from './drawLine';
  import drawGrid from './drawGrid';
  import drawRay from './drawRay';
  import drawText from './drawText';
  import drawTriangle from './drawTriangle';
  import drawRectangle from './drawRectangle';
  import drawPoly from './drawPoly';
  import drawCircle from './drawCircle';
  import drawEllipse from './drawEllipse';
  import drawHline from './drawHline';
  import drawPoint from './drawPoint';
  import drawPointWText from './drawPointWText';



export default function afterUpdateFn(canvas,ctx,items){
ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        switch (item.name) {
            case 'drawRay':
            //  debugger;
                drawRay(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.width,item.extra.color,item.extra.opacity,item.extra.dash,item.extra.gap);
            break;
            case 'drawHline':
            //  debugger;
                drawHline(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.width,item.extra.color,item.extra.opacity,item.extra.dash,item.extra.gap);
            break;
            case 'drawText':
                drawText(canvas,ctx,item.extra.x, item.extra.y,item.extra.text, item.extra.fontSize, item.extra.color,item.extra.opacity);
            break;
            case 'drawLine':
                drawLine(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.width,item.extra.color,item.extra.opacity,item.extra.dash,item.extra.gap);
            break;
            case 'drawTriangle':
                drawTriangle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.x3,item.extra.y3,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawRectangle':
                drawRectangle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawPoly':
                drawPoly(canvas,ctx,item.extra.points,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawCircle':
            // debugger;
                drawCircle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.radius,item.extra.lineWidth,item.extra.fillColor,item.extra.filled,item.extra.opacity);
            break;
            case 'drawPoint':
                drawPoint(canvas,ctx,item.extra.points,item.extra.width,item.extra.fillColor,item.extra.opacity);
            break;
            case 'drawPointWText':
                drawPointWText(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.text,item.extra.width,item.extra.color,item.extra.colorText);
            break;
            case 'drawEllipse':
                drawEllipse(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.radius1,item.extra.radius2,item.extra.borderWidth,item.extra.color,item.extra.filled,item.extra.opacity);
            break;
            case 'drawGrid':
            drawGrid(canvas,ctx);
            break;       
            default:
                break;
        }   
    }


}