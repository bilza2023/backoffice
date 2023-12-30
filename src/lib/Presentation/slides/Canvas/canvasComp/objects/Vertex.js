//@ts-nocheck


export default class Vertex{

constructor(x,y){
this.x = x  ;
this.y = y  ;
this.selected = false;
this.isDragged = false;
}

draw(ctx){
        if(!this.selected){return;}
    ctx.lineWidth =12;
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'yellow';
    ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
}

reconcile(x,y){
this.x = x;
this.y = y;
}

}