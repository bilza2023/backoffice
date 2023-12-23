
//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default class Rectangle {
    constructor(canvas, ctx, x1, y1, x3, y3, fillColor = 'white', opacity = 1, filled = true) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x1 = x1;
        this.y1 = y1; 
        this.x3 = x3;
        this.y3 = y3;
        this.fillColor = fillColor;
        this.opacity = opacity;
        this.filled = filled;
    }

    drawRectangle() {
        // Convert percentage coordinates to actual canvas coordinates for the given points
        let x1 = percToX(this.canvas, this.x1);
        let y1 = percToY(this.canvas, this.y1);
 
        let x3 = percToX(this.canvas, this.x3);
        let y3 = percToY(this.canvas, this.y3);

        // Calculate the other two points based on the given points
        const x2 = x3;
        const y2 = y1;

        const x4 = x1;
        const y4 = y3;

        // Set the fill color and opacity directly
        this.ctx.fillStyle = this.fillColor;
        this.ctx.globalAlpha = this.opacity;
        // Begin a new path
        this.ctx.beginPath();

        // Move to the first point
        this.ctx.moveTo(x1, y1);

        // Draw lines to the other three points in a clockwise order
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.lineTo(x4, y4);

        // Close the path to complete the rectangle
        this.ctx.closePath();

        // Fill the rectangle with specified opacity
        this.ctx.globalAlpha = this.opacity;

        if (this.filled) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }

        this.ctx.globalAlpha = 1; // Reset global alpha to 1
    }
}
