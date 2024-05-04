<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    export let pulse;
    export let ignoreShowAt;
    let canvas;
    let ctx;
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
    

    try {
      if (items){
        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor =  extra.gridLineColor;
        
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