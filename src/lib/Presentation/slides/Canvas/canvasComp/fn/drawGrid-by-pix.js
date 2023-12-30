//@ts-nocheck

import percToX from "./percToX";
import percToY from "./percToY";
import drawLine from "./drawLine";

// Define a function to draw a grid on canvas
export default function drawGrid(canvas, ctx, percent, lineWidth = 1, lineColor = '#4b5159') {
  // Set the line color and width
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;

  // Calculate the size of each grid cell in pixels
  let cellSize = percent / 100 * canvas.width;

  // Loop through the horizontal and vertical lines
  for (let x = 0; x <= canvas.width; x += cellSize) {
    // Draw a horizontal line
    drawLine(canvas, ctx, x, 0, x, canvas.height, lineWidth, lineColor);
  }

  for (let y = 0; y <= canvas.height; y += cellSize) {
    // Draw a vertical line
    drawLine(canvas, ctx, 0, y, canvas.width, y, lineWidth, lineColor);
  }
}
