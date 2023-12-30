//@ts-nocheck
import drawLine from "./drawLine";

export default function drawGrid(canvas, ctx, percent, lineWidth = 1, lineColor = '#4b5159') {
    // Set the line color
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;

    const step = (canvas.width / 100) * percent;

    // Draw horizontal lines
    for (let i = 0; i <= 100; i += percent) {
        const y = percToY(canvas, i);
        drawLine(canvas, ctx, 0, y, canvas.width, y, lineWidth, lineColor);
    }

    // Draw vertical lines
    for (let i = 0; i <= 100; i += percent) {
        const x = percToX(canvas, i);
        drawLine(canvas, ctx, x, 0, x, canvas.height, lineWidth, lineColor);
    }
}

export function percToY(canvas, percentage) {
    return (canvas.height * percentage) / 100;
}

// Utility function to convert percentage to X coordinate
export function percToX(canvas, percentage) {
    return (canvas.width * percentage) / 100;
}