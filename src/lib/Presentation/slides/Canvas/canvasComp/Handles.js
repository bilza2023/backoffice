//@ts-nocheck


export default class Handles{

constructor(){
this.arr = [];
this.isOneSelected = false;
this.isOneDragged = false;
}

add(x,y,objectId,vertexName){
this.arr.push({x,y,objectId,vertexName,isSelected:false});
}

draw(ctx){
    ctx.lineWidth =12;
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'yellow';
    ctx.globalAlpha = 1;

    for (let i = 0; i < this.arr.length; i++) {
        const point = this.arr[i];
        ctx.beginPath();
        ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
   
}

reconcile(x,y){
this.arr[0].x = x;
this.arr[0].y = y;
}

}