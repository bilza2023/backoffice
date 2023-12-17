//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawTriangle(canvas, ctx, x1, y1, x2, y2, x3, y3, fillColor = 'white', opacity = 1,filled=true) {
    // Convert percentage coordinates to actual canvas coordinates
    x1 = percToX(canvas, x1);
    x2 = percToX(canvas, x2);
    x3 = percToX(canvas, x3);
    y1 = percToY(canvas, y1);
    y2 = percToY(canvas, y2);
    y3 = percToY(canvas, y3);
  
    ctx.globalAlpha = opacity;
    ctx.fillStyle = fillColor;

    // Begin a new path
    ctx.beginPath();

    // Move to the first point
    ctx.moveTo(x1, y1);

    // Draw lines to the other two points
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);

    // Close the path to complete the triangle
    ctx.closePath();

    // Fill the triangle with specified opacity
    ctx.globalAlpha = opacity;
        if(filled){
            ctx.fill();
        }else {
            ctx.stroke();
        }
    ctx.globalAlpha = 1; // Reset global alpha to 1
}
