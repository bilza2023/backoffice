//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawCircle(canvas, ctx, x1, y1,radius, lineWidth = 20, fillColor = 'white',filled=false,opacity=1) {
    // debugger;
    x1 = percToX(canvas, x1);
    y1 = percToY(canvas, y1);
    // Set the circle's line color
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = fillColor;
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = opacity;
    // Set the line width
    // Begin a new path
    ctx.beginPath();
    // Draw the circle
    ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
    // Stroke the circle
    if(filled){
        ctx.fill();
    }else {
        ctx.stroke();
    }
}
