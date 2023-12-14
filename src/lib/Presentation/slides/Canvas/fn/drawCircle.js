//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawCircle(canvas, ctx, x1, y1, x2, y2, lineWidth = 2, lineColor = 'white') {
    // Convert percentage coordinates to actual coordinates
    x1 = percToX(canvas, x1);
    y1 = percToY(canvas, y1);
    x2 = percToX(canvas, x2);
    y2 = percToY(canvas, y2);
    // Calculate radius from the difference in x and y coordinates
    const radius = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    // Set the circle's line color
    ctx.strokeStyle = lineColor;
    // Set the line width
    ctx.lineWidth = lineWidth;
    // Begin a new path
    ctx.beginPath();
    // Draw the circle
    ctx.arc(x1, y1, radius, 0, 2 * Math.PI);
    // Stroke the circle
    ctx.stroke();
}
