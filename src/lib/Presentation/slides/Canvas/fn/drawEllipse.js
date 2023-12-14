//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawEllipse(canvas, ctx, x1, y1, x2, y2, x3, y3, lineWidth = 2, lineColor = 'white') {
    // Convert percentage coordinates to actual coordinates
    x1 = percToX(canvas, x1);
    y1 = percToY(canvas, y1);
    x2 = percToX(canvas, x2);
    y2 = percToY(canvas, y2);
    x3 = percToX(canvas, x3);
    y3 = percToY(canvas, y3);

    // Calculate radii from the differences in x and y coordinates
    const radiusX = Math.abs(x2 - x1);
    const radiusY = Math.abs(y2 - y1);

    // Set the ellipse's line color
    ctx.strokeStyle = lineColor;
    // Set the line width
    ctx.lineWidth = lineWidth;
    // Begin a new path
    ctx.beginPath();
    // Draw the ellipse
    ctx.ellipse(x1, y1, radiusX, radiusY, 0, 0, 2 * Math.PI);
    // Stroke the ellipse
    ctx.stroke();
}
