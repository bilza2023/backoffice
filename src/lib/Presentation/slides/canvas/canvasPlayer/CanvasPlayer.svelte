<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    export let currentTime;
//sprite - sheet    
    import { students } from "../sprite/students";
    import { figs } from "../sprite/figs";
    import { alphabets } from "../sprite/alphabets";
    import { people } from "../sprite/people";
   
    let spriteImgArray;
    
    let canvas;
    let ctx;

    export let extra;
    export let items;
  
function gameLoop(){
    try {
      if (items){
        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor =  extra.gridLineColor;
        drawLibInterpretor.cellWidth =  extra.cellWidth;
        drawLibInterpretor.cellHeight =  extra.cellHeight;
        // drawLibInterpretor.bgImg =  extra.bgImg;
///////////////////////////////////
        // debugger;
        drawLibInterpretor.interpret(items,currentTime,extra);
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
    spriteImgArray = [];
    
        students.img = new Image(); students.img.src = students.url;
        figs.img = new Image(); figs.img.src = figs.url;
        alphabets.img = new Image(); alphabets.img.src = alphabets.url;
        people.img = new Image(); people.img.src = people.url;
        
        spriteImgArray.push(students);
        spriteImgArray.push(figs);
        spriteImgArray.push(alphabets);
        spriteImgArray.push(people);
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    
    drawLibInterpretor = new DrawLibInterpretor(canvas, ctx,extra.backgroundColor,extra.canvasWidth,extra.canvasHeight,extra.cellWidth,extra.cellHeight,extra.xFactor,spriteImgArray,extra.bgImg);
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