<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    import isHit from './fn/isHit.js';
    import checkHandles from './fn/checkHandles.js';
    import AdderHandle from './handleObject/AdderHandle';
    import DraggerHandle from './handleObject/DraggerHandle';
    import SelectedItem from "./handleObject/SelectedItem";
    export let currentTime;
     
    export let spriteImgArray;
    export let bgImages;
     
    let canvas;
    let ctx;
    export let extra;
    export let items;
    
    let orignalExtra;


function gameLoop(){
    try {
      
      if (items){
        //This extra is slide extra------yesss....!!!!
        drawLibInterpretor.showGrid = extra.showGrid;
        drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
        drawLibInterpretor.gridLineColor =  extra.gridLineColor;
        drawLibInterpretor.cellWidth =  extra.cellWidth;
        drawLibInterpretor.cellHeight =  extra.cellHeight;
///////////////////////////////////
        drawLibInterpretor.interpret(items,currentTime,extra);

        if(selectedItem){

              selectedItem.drawHandles(ctx);

        }

        ///////////////
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
  drawLibInterpretor = new DrawLibInterpretor(canvas, ctx,extra,spriteImgArray,bgImages);
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

///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
let mouseX=0;
let mouseY=0;

let selectedItem=null;
let handleObjects = [];


function selectItem(item){
    selectedItem = new SelectedItem(item);
}
//--get canvas x,y from mouse x,y. rename setMousePosition to setCanvasXY 
function setMousePosition(e){
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    mouseX = Math.round((e.clientX - rect.left) * scaleX);
    mouseY = Math.round((e.clientY - rect.top) * scaleY);
}

function handleMouseMove(e) {
  if (!selectedItem) return;
  setMousePosition(e);
  //update the item and update the handles as per that
  selectedItem.update(mouseX, mouseY);
}

function handleMouseDown(e) {
  if (!selectedItem) return;
  setMousePosition(e);
  selectedItem.selectHandlesIfHit(mouseX, mouseY);
}

function handleMouseUp(e) {
        if (!selectedItem) return;
        setMousePosition(e);
        selectedItem.deselect();
}
//......................................
function handleClick(e){
  
    setMousePosition(e);
    // debugger;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const isHitResult = isHit(item.extra.x.initialValue , item.extra.y.initialValue ,
        item.extra.width.initialValue,
        item.extra.height.initialValue,
        mouseX,mouseY);

        if(isHitResult){
            selectItem(item);
            return; //must
        }
    }
///THIS IS THE PROD BRANCH
    //un-select 
    selectedItem = null; //if no item found
    
}

</script>

<div class="flex justify-center w-full" >
    <canvas
    class="w-full m-2"
    bind:this={canvas}
    width={extra.canvasWidth}
    height={extra.canvasHeight}
    on:mousemove={handleMouseMove}
    on:mousedown={(e)=>handleMouseDown(e)}
    on:mouseup=  {handleMouseUp}
    on:click=    {handleClick}
  ></canvas>
  
</div>

<div class="text-xs">x:{mouseX} y:{mouseY}</div>


