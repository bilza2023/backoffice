//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawPoint(canvas, ctx, points, width = 10, color = 'yellow') {
  // debugger;
      const canvasPoints = points.map(point => ({
        x: percToX(canvas, point.x),
        y: percToY(canvas, point.y),
    }));

    // Set the point's fill color
    
    // Begin a new path
    
    // Draw the filled circle (point)
    ctx.fillStyle = color;
    for (let i =0; i < canvasPoints.length; i++) {
    ctx.beginPath();
    ctx.arc(parseInt(canvasPoints[i].x), parseInt(canvasPoints[i].y), width / 2, 0, 2 * Math.PI);
    ctx.fill();
    }
    
    // Fill the circle
}
