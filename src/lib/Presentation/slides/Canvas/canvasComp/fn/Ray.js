//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default class Ray {
    constructor(canvas, ctx, x1, y1, x2, y2, width = 2, color = 'white', opacity=1, dash=5, gap=0) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x1 = x1;
        this.y1 = y1; 
        this.x2 = x2;
        this.y2 = y2;
        this.width = width;
        this.color = color;
        this.opacity = opacity;
        this.dash = dash;
        this.gap = gap;
    }

    drawArrowhead(ctx, fromX, fromY, toX, toY, radius) {
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

    draw() {
        this.x1 = percToX(this.canvas, this.x1);
        this.x2 = percToX(this.canvas, this.x2);
        this.y1 = percToY(this.canvas, this.y1);
        this.y2 = percToY(this.canvas, this.y2);

        // Set the line color
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;
        this.ctx.setLineDash([this.dash, this.gap]);

        // Set the line width
        this.ctx.lineWidth = this.width;
        this.ctx.globalAlpha = this.opacity;
        // Begin a new path
        this.ctx.beginPath();

        // Move the pen to the starting point
        this.ctx.moveTo(this.x1, this.y1);

        // Draw a line to the ending point
        this.ctx.lineTo(this.x2, this.y2);

        // Stroke the line
        this.ctx.stroke();

        this.ctx.setLineDash([]);
        // Draw arrowheads at both ends
        this.drawArrowhead(this.ctx, this.x2, this.y2, this.x1, this.y1, 10);
        this.drawArrowhead(this.ctx, this.x1, this.y1, this.x2, this.y2, 10);
    }
}

