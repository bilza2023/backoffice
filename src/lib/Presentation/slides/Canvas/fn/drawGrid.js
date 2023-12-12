//@ts-nocheck


import percToX from "./percToX";
import percToY from "./percToY";

export default function drawGrid(ctx, canvas, gridWidthPercentage, lineColor = 'white', lineWidth = 1) {
    // Set the line color
    ctx.strokeStyle = lineColor;

    // Set the line width
    ctx.lineWidth = lineWidth;

    // Calculate the number of horizontal and vertical lines based on grid width percentage
    const horizontalLines = Math.floor(100 / gridWidthPercentage) + 1;
    const verticalLines = Math.floor(100 / gridWidthPercentage) + 1;

    // Draw horizontal lines
    for (let i = 0; i < horizontalLines; i++) {
        const y = percToY(canvas, gridWidthPercentage * i);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Draw vertical lines
    for (let i = 0; i < verticalLines; i++) {
        const x = percToX(canvas, gridWidthPercentage * i);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
}
