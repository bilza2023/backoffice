<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    export let currentTime;
    
    import Sprite from "../sprite/Sprite";
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
      debugger;
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
    debugger;
    spriteImgArray = [];
    let students = new Sprite(
            "students",
            "http://localhost:5173/sprites/students.png",
        );
        students.img = new Image();
        students.img.src = students.url;
        students.addItem("student_w_tablet", 183, 317, 225, 350);
        students.addItem("student_red", 254, 0, 275, 250); //527,254
        students.addItem("student_female", 424, 288, 220, 250); //646,542
        students.addItem("three_students", 0, 0, 700, 250); //646,542
        students.addItem("student_black", 540, 0, 260, 266); //

        spriteImgArray.push(students);
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