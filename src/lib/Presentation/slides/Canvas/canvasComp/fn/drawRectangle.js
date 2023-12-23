// @ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawRectangle(canvas, ctx, x1, y1, x3, y3, fillColor = 'white', opacity = 1, filled = true) {
    // Convert percentage coordinates to actual canvas coordinates for the given points
    x1 = percToX(canvas, x1);
    y1 = percToY(canvas, y1);
 
    x3 = percToX(canvas, x3);
    y3 = percToY(canvas, y3);

    // Calculate the other two points based on the given points
    const x2 = x3;
    const y2 = y1;

    const x4 = x1;
    const y4 = y3;

    // Set the fill color and opacity directly
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = opacity;
    // Begin a new path
    ctx.beginPath();

    // Move to the first point
    ctx.moveTo(x1, y1);

    // Draw lines to the other three points in a clockwise order
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);

    // Close the path to complete the rectangle
    ctx.closePath();

    // Fill the rectangle with specified opacity
    ctx.globalAlpha = opacity;

    if (filled) {
        ctx.fill();
    } else {
        ctx.stroke();
    }

    ctx.globalAlpha = 1; // Reset global alpha to 1
}
