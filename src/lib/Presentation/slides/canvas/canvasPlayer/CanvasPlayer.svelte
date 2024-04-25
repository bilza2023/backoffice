<script>
    //@ts-nocheck
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    let canvas;
    let ctx;
    export let extra={
      canvasWidth : 1000,
      canvasHeight : 360,
      backgroundColor : 'gray'
    };
    export let items;

$:{
    items;
    extra;
    if(canvas){
    ctx = canvas.getContext('2d');
    let drawLibInterpretor = new DrawLibInterpretor(canvas, ctx,extra.backgroundColor,extra.canvasWidth,extra.canvasHeight,extra.cellWidth,extra.cellHeight,extra.xFactor);
    
    try {
      if (items){
        drawLibInterpretor.interpret(items);
      } else {
        drawLibInterpretor.jsonError('Invalid JSON or missing payload field');
      }
    } catch (error) {
      drawLibInterpretor.jsonError();
    }
   }
}    
  
</script>

<div class="flex justify-center">
  
  <canvas bind:this={canvas} width={extra.canvasWidth} height={extra.canvasHeight}></canvas>
</div>