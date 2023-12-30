//@ts-nocheck

export default class Line{

constructor(x1=0,y1=0,x2=200,y2=200,lineWidth=1,lineColor='gray'){

    this.x1 =x1;
    this.y1 =y1;
    this.x2 =x2;
    this.y2 =y2;
    
    this.lineWidth =lineWidth;
    this.lineColor =lineColor;
    this.opacity=1;
    this.dash=0;
    this.gap=0;

    this.selected = false;
}

draw(ctx){
    ctx.globalAlpha = this.opacity;
    ctx.strokeStyle = this.lineColor;
    ctx.fillStyle = this.lineColor;
    ctx.lineWidth = this.lineWidth;
    // ctx.lineJoin = 'round'; // You can experiment with 'bevel' or 'miter' as well
    // ctx.lineCap = 'round'; // You can experiment with 'butt' or 'square' as well
    // ctx.setLineDash([this.dash,this.gap]);
    // Begin a new path
    ctx.beginPath();
    // Move the pen to the starting point
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    if(this.selected){
        drawSelected(ctx,this.x1,this.y1,this.x2,this.y2);
    }

}

isHit(x,y){
    return isPointOnLine(x, y, this.x1, this.y1, this.x2, this.y2);
}
reconcile(x,y){
this.x1 = x;
this.y1 = y;
}

}
//////////////////////////////////////////////
function drawSelected(ctx,x1,y1,x2,y2){
    drawCircle(ctx,x1,y1,x2,y2);
}
//////////////////////////////////////////////
function isPointOnLine(x, y, x1, y1, x2, y2) {
    // Calculate the distance from the point to both ends of the line
    let d1 = distance(x, y, x1, y1);
    let d2 = distance(x, y, x2, y2);

    // Calculate the total length of the line
    let lineLength = distance(x1, y1, x2, y2);

    // Allow for a small margin of error due to floating-point precision
    let epsilon = 0.1;

    // Check if the sum of distances is approximately equal to the line length
    return Math.abs(d1 + d2 - lineLength) < epsilon;
}

function distance(x1, y1, x2, y2) {
    // Calculate the Euclidean distance between two points
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function drawCircle(ctx, x1, y1,x2,y2) {
    // debugger;
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'yellow';
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
    ctx.arc(x2, y2, 5, 0, 2 * Math.PI);
    ctx.fill();
}