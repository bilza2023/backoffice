<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    import Sprite from "../sprite/Sprite";
    export let pulse;
    export let ignoreShowAt;
    let canvas;
    let ctx;
    const img = new Image();
    img.src = "";
    export let extra={
      canvasWidth : 1000,
      canvasHeight : 360,
      backgroundColor : 'gray'
    };
    export let items;
    onMount(()=>{
      // debugger;
    });

$:{
    items;
    extra;
    if(canvas){
    ctx = canvas.getContext('2d');
    
    let drawLibInterpretor = new DrawLibInterpretor(canvas, ctx,extra.backgroundColor,extra.canvasWidth,extra.canvasHeight,extra.cellWidth,extra.cellHeight,extra.xFactor);
    // drawLibInterpretor.img =  new Image();
    // drawLibInterpretor.img.src = "http://localhost:5173/sprites/students.png";
      let sprite = new Sprite("http://localhost:5173/sprites/students.png");
      sprite.addItem("student_w_tablet",183, 317, 225, 350, 0, 0,  225, 350);
      sprite.applyItem("student_w_tablet");
      drawLibInterpretor.sprite = sprite;

    try {
      if (items){
        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor =  extra.gridLineColor;
///////////////////////////////////
        

        // debugger;
        drawLibInterpretor.interpret(items,pulse,ignoreShowAt);
      } else {
        drawLibInterpretor.jsonError('Invalid JSON or missing payload field');
      }
    } catch (error) {
      drawLibInterpretor.jsonError();
    }
   }
}    
  
</script>

<div class="flex justify-center w-full" >
  <canvas 
  class="w-full m-2"
  bind:this={canvas} width={extra.canvasWidth} height={extra.canvasHeight}></canvas>
</div>