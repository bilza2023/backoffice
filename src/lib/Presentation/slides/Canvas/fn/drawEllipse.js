//@ts-nocheck
import percToX from "./percToX";
import percToY from "./percToY";

export default function drawEllipse(canvas, ctx, x1, y1, radius1, radius2, borderWidth=2, color = 'white', filled=false,opacity=1) {
    // Convert percentage coordinates to actual coordinates
    x1 = percToX(canvas, x1);
    y1 = percToY(canvas, y1);
 
    ctx.globalAlpha = opacity;
    ctx.lineWidth = borderWidth;
      ctx.strokeStyle = color;
    ctx.fillStyle = color;
    // Begin a new path
    ctx.beginPath();
    // Draw the ellipse
    ctx.ellipse(x1, y1, radius1, radius2, 0, 0, 2 * Math.PI);
     if(filled){
        ctx.fill();
    }else {
        ctx.stroke();
    }
}
