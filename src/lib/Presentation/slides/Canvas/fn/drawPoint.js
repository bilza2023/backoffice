//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawPoint(canvas, ctx, x1, y1, width = 10, color = 'yellow') {
    // Convert percentage coordinates to actual coordinates
    x1 = percToX(canvas, x1);
    y1 = percToY(canvas, y1);
    
    // Set the point's fill color
    ctx.fillStyle = color;
    
    // Begin a new path
    ctx.beginPath();
    
    // Draw the filled circle (point)
    ctx.arc(x1, y1, width / 2, 0, 2 * Math.PI);
    
    // Fill the circle
    ctx.fill();
}
