// @ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawPoly(canvas, ctx, points, fillColor = 'white', opacity = 1, filled = true) {
    // debugger;
    const canvasPoints = points.map(point => ({
        x: percToX(canvas, point.x),
        y: percToY(canvas, point.y),
    }));

    // Set the fill color and opacity directly
    ctx.fillStyle = fillColor;
    ctx.globalAlpha = opacity;
    
    // Begin a new path
    ctx.beginPath();
    
    // Move to the first point
    ctx.moveTo(canvasPoints[0].x, canvasPoints[0].y);

    // Loop over all the points and draw lines to them
    for (let i = 1; i < canvasPoints.length; i++) {
        ctx.lineTo(canvasPoints[i].x, canvasPoints[i].y);
    }
 
    // Close the path to complete the polygon
    ctx.closePath();

    // Fill the polygon with specified opacity
    ctx.globalAlpha = opacity;

    if (filled) {
        ctx.fill();
    } else {
        ctx.stroke();
    }

    ctx.globalAlpha = 1; // Reset global alpha to 1
}
