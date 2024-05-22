<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    export let currentTime;
    import { students } from "../sprite/students";
    import { figs } from "../sprite/figs";
    import { alphabets } from "../sprite/alphabets";
   
    let spriteImgArray;
    
    let canvas;
    let ctx;

    export let extra={
      canvasWidth : 1000,
      canvasHeight : 360,
      backgroundColor : 'gray'
    };
    export let items;
  
function gameLoop(){
    try {
      if (items){
        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor =  extra.gridLineColor;
///////////////////////////////////
        // debugger;
        drawLibInterpretor.interpret(items,currentTime);
      } else {
        drawLibInterpretor.jsonError('Invalid JSON or missing payload field');
      }
    } catch (error) {
      drawLibInterpretor.jsonError();
    }
   
}    
//////////////////////////////////
let interval;
let drawLibInterpretor;
onMount(async ()=>{
  if(canvas){
    ctx = canvas.getContext('2d');
      ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    spriteImgArray = [];
    
        students.img = new Image(); students.img.src = students.url;
        figs.img = new Image(); figs.img.src = figs.url;
        alphabets.img = new Image(); alphabets.img.src = alphabets.url;
        
        spriteImgArray.push(students);
        spriteImgArray.push(figs);
        spriteImgArray.push(alphabets);
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    
    
    drawLibInterpretor = new DrawLibInterpretor(canvas, ctx,extra.backgroundColor,extra.canvasWidth,extra.canvasHeight,extra.cellWidth,extra.cellHeight,extra.xFactor,spriteImgArray);
  }
  interval = setInterval(gameLoop,20);
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