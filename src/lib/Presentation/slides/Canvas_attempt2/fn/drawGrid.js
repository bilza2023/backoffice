//@ts-nocheck


import percToX from "./percToX";
import percToY from "./percToY";
import drawLine from "./drawLine";

export default function drawGrid(canvas,ctx,lineWidth = 1,lineColor = '#4b5159') {
    // Set the line color
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;

    drawLine(canvas,ctx,0,10,100,10,lineWidth,lineColor);
    drawLine(canvas,ctx,0,20,100,20,lineWidth,lineColor);
    drawLine(canvas,ctx,0,30,100,30,lineWidth,lineColor);
    drawLine(canvas,ctx,0,40,100,40,lineWidth,lineColor);
    drawLine(canvas,ctx,0,50,100,50,lineWidth,lineColor);
    drawLine(canvas,ctx,0,60,100,60,lineWidth,lineColor);
    drawLine(canvas,ctx,0,70,100,70,lineWidth,lineColor);
    drawLine(canvas,ctx,0,80,100,80,lineWidth,lineColor);
    drawLine(canvas,ctx,0,90,100,90,lineWidth,lineColor);
///----vertical
    drawLine(canvas,ctx,10,0,10,100,lineWidth,lineColor);
    drawLine(canvas,ctx,20,0,20,100,lineWidth,lineColor);
    drawLine(canvas,ctx,30,0,30,100,lineWidth,lineColor);
    drawLine(canvas,ctx,40,0,40,100,lineWidth,lineColor);
    drawLine(canvas,ctx,50,0,50,100,lineWidth,lineColor);
    drawLine(canvas,ctx,60,0,60,100,lineWidth,lineColor);
    drawLine(canvas,ctx,70,0,70,100,lineWidth,lineColor);
    drawLine(canvas,ctx,80,0,80,100,lineWidth,lineColor);
    drawLine(canvas,ctx,90,0,90,100,lineWidth,lineColor);

}
