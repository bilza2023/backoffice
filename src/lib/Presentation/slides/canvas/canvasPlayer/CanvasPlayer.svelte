<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    export let currentTime;
    import getProp from '../getProp';

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
      // items = dummyData;
      if (items){
        //This extra is slide extra
        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor =  extra.gridLineColor;
        drawLibInterpretor.cellWidth =  extra.cellWidth;
        drawLibInterpretor.cellHeight =  extra.cellHeight;
///////////////////////////////////
      
        drawLibInterpretor.interpret(items,currentTime,extra,playerImages);
      } else {
        drawLibInterpretor.jsonError('Invalid JSON or missing payload field');
      }
    } catch (error) {
      // debugger;
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
      // console.log("items",items);
      
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.extra.command == 'rect'){
              if(typeof item.extra.color != 'object' ){
                item.extra.color = getProp(item.extra.color);
              }
              if(typeof item.extra.filled != 'object' ){
                item.extra.filled = getProp(item.extra.filled);
              }

        }
      }
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