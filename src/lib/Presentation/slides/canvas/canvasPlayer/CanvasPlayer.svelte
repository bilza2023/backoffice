<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    export let currentTime;
   
    export let spriteImgArray;
    export let bgImages;
    
    let canvas;
    let ctx;
    export let extra;
    let orignalExtra;
    export let items;
    export let playerImages;

function gameLoop(){
    try {
      if (items){

        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor =  extra.gridLineColor;
        drawLibInterpretor.cellWidth =  extra.cellWidth;
        drawLibInterpretor.cellHeight =  extra.cellHeight;
///////////////////////////////////
        // debugger;
        drawLibInterpretor.setSet(currentTime,items);
        drawLibInterpretor.interpret(items,currentTime,extra,playerImages);
      } else {
        drawLibInterpretor.jsonError('Invalid JSON or missing payload field');
      }
    } catch (error) {
      drawLibInterpretor.jsonError();
    }
   
}    
//////////////////////////////////

async function init(){
  if(canvas){
    if(interval){clearInterval(interval);}
    //////////////////////////////////////////////
    ctx = canvas.getContext('2d');
      ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    drawLibInterpretor = new DrawLibInterpretor(canvas, ctx,extra.backgroundColor,extra.canvasWidth,extra.canvasHeight,extra.cellWidth,extra.cellHeight,extra.xFactor,spriteImgArray,bgImages);
  }
  interval = setInterval(gameLoop,20);
}
//////////////////////////////////
let interval;
let drawLibInterpretor;
onMount(async ()=>{
 debugger;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.orignalExtra = JSON.parse(JSON.stringify(item.extra));  
    // item.setCommandsOrignal = JSON.parse(JSON.stringify(item.extra.setCommands));  
  }
  
  await init();
});  
onDestroy(() => {
		clearInterval(interval);
});

</script>

<div class="flex justify-center w-full" >
  <canvas 
  class="w-full m-2"
  bind:this={canvas} width={extra.canvasWidth} height={extra.canvasHeight}></canvas>
</div>