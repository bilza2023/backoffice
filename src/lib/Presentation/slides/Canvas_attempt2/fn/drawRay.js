//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

function drawArrowhead(ctx, fromX, fromY, toX, toY, radius) {
    let x_center = toX;
    let y_center = toY;

    let angle;
    let x;
    let y;

    ctx.beginPath();

    angle = Math.atan2(toY - fromY, toX - fromX)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;

    ctx.moveTo(x, y);

    angle += (1/3)*(2*Math.PI)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;

    ctx.lineTo(x, y);

    angle += (1/3)*(2*Math.PI)
    x = radius * Math.cos(angle) + x_center;
    y = radius * Math.sin(angle) + y_center;

    ctx.lineTo(x, y);
    ctx.closePath();

    ctx.fill();
}

export default function drawRay(canvas, ctx, x1, y1, x2, y2, width = 2,
 color = 'white',opacity=1,dash=5,gap=0) {

    x1 = percToX(canvas, x1);
    x2 = percToX(canvas, x2);
    y1 = percToY(canvas, y1);
    y2 = percToY(canvas, y2);

    // Set the line color
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.setLineDash([dash,gap]);

    // Set the line width
    ctx.lineWidth = width;
    ctx.globalAlpha = opacity;
    // Begin a new path
    ctx.beginPath();

    // Move the pen to the starting point
    ctx.moveTo(x1, y1);

    // Draw a line to the ending point
    ctx.lineTo(x2, y2);

    // Stroke the line
    ctx.stroke();

    ctx.setLineDash([]);
    // Draw arrowheads at both ends
    drawArrowhead(ctx, x2, y2, x1, y1, 10);
    drawArrowhead(ctx, x1, y1, x2, y2, 10);
}
