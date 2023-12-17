//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawLine(canvas,ctx, x1, y1, x2,y2, lineWidth=2, color='white',opacity=1,dash=5,gap=0) {
// debugger;
x1 = percToX(canvas,x1);
x2 = percToX(canvas,x2);
y1 = percToY(canvas,y1);
y2 = percToY(canvas,y2);

    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    // Set the line width
    ctx.lineWidth = lineWidth;
     ctx.setLineDash([dash,gap]);
    // Begin a new path
    ctx.beginPath();

    // Move the pen to the starting point
    ctx.moveTo(x1, y1);

    // Draw a line to the ending point
    ctx.lineTo(x2, y2);

    // Stroke the line
    ctx.stroke();
    ctx.setLineDash([]);
}
