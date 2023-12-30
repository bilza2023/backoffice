//@ts-nocheck

export default function drawLinePure(ctx, x1, y1, x2,y2, lineWidth=1, color='white',opacity=1,dash=0,gap=0) {

// ctx.imageSmoothingEnabled = true;
    // ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    // Set the line width
    ctx.lineWidth = lineWidth;
     ctx.lineJoin = 'round'; // You can experiment with 'bevel' or 'miter' as well
    ctx.lineCap = 'round'; // You can experiment with 'butt' or 'square' as well

    //  ctx.setLineDash([dash,gap]);
    // Begin a new path
    ctx.beginPath();
    // Move the pen to the starting point
    ctx.moveTo(x1, y1);
    // Draw a line to the ending point
    ctx.lineTo(x2, y2);
    // Stroke the line
    ctx.stroke();
    // ctx.setLineDash([]);
}

