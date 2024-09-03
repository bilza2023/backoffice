<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    import isHit from './fn/isHit.js';
    import checkHandles from './fn/checkHandles.js';
    import AdderHandle from './handleObject/AdderHandle';
    import DraggerHandle from './handleObject/DraggerHandle';
  import { HandleObject } from "./handleObject/HandleObject";

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
                // drawLibInterpretor.drawHandles(handles);

                for (let i = 0; i < handleObjects.length; i++) {
                    const handleObject = handleObjects[i];
                    handleObject.draw(ctx);
                    
                }
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
let mouseX=0;
let mouseY=0;

let selectedItem=null;
let handleObjects = [];


function selectItem(item){
    selectedItem = item;
            handleObjects = [];

            let w = new AdderHandle('width','width','red',
            selectedItem.extra.x.initialValue +  selectedItem.extra.width.initialValue -20 ,
            selectedItem.extra.y.initialValue  ,
            20,20); 
            handleObjects.push(w);

            let h = new AdderHandle('height','height','red',
            selectedItem.extra.x.initialValue +  selectedItem.extra.width.initialValue -20 ,
            selectedItem.extra.y.initialValue  + selectedItem.extra.height.initialValue -20,
            20,20); 
            h.lookingforX = false;
            handleObjects.push(h);
           
            let d = new DraggerHandle('red',
            selectedItem.extra.x.initialValue  ,
            selectedItem.extra.y.initialValue,
            20,20); 
            handleObjects.push(d);

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
    if(!selectedItem){return;}

    setMousePosition(e);

    for (let i = 0; i < handleObjects.length; i++) {
        const handleObject = handleObjects[i];
        handleObject.update(selectedItem,mouseX, mouseY);
        
    }
    handleObjects[0].updateXY(selectedItem.extra.x.initialValue +  selectedItem.extra.width.initialValue -20, 
    selectedItem.extra.y.initialValue);

    handleObjects[1].updateXY(selectedItem.extra.x.initialValue +  selectedItem.extra.width.initialValue -20, 
    selectedItem.extra.y.initialValue  +  selectedItem.extra.height.initialValue -20);
    
    handleObjects[2].updateXY(selectedItem.extra.x.initialValue, 
    selectedItem.extra.y.initialValue );
    
}

function handleMouseDown(e) {
    setMousePosition(e);

    for (let i = 0; i < handleObjects.length; i++) {
        const handleObject = handleObjects[i];
        handleObject.mouseDown(mouseX, mouseY);
                    
    }

}

function handleMouseUp(e) {

    for (let i = 0; i < handleObjects.length; i++) {
        const handleObject = handleObjects[i];
        handleObject.mouseUp(mouseX, mouseY);
                    
    }
 
}

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


