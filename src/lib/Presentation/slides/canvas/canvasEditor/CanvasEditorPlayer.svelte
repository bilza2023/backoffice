<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    import isHit from './fn/isHit.js';
    import checkHandles from './fn/checkHandles.js';
    import AdderHandle from './handleObject/AdderHandle';
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

let oldMouseX = null;
let oldMouseY = null;

let isDragging = false;

let state = null; //can be drag , widen , stretch
let selectedItem=null;

let handles = null;
let handleObjects = [];




function selectItem(item){
    selectedItem = item;
            handleObjects = [];

            let w = new AdderHandle('width','width','red',
            selectedItem.extra.x.initialValue +  selectedItem.extra.width.initialValue -20 ,
            selectedItem.extra.y.initialValue  ,
            20,20); 
            handleObjects.push(w);


            handles = [];
            // add 3 empty objects 1 for drag , widen and stretch
            handles.push({width:20,height:20});handles.push({width:20,height:20});handles.push({width:20,height:20});

            handles[0].name = 'drag' ;
            handles[0].color = 'brown';
            handles[0].x = selectedItem.extra.x.initialValue - 20 ;
            handles[0].y = selectedItem.extra.y.initialValue  ;

            handles[1].name = 'widen';
            handles[1].color = 'pink';
            handles[1].x = selectedItem.extra.x.initialValue +  selectedItem.extra.width.initialValue ;
            handles[1].y = selectedItem.extra.y.initialValue  ;

            handles[2].name = 'stretch';
            handles[2].color = 'gray';
            handles[2].x = item.extra.x.initialValue +  item.extra.width.initialValue ;
            handles[2].y = item.extra.y.initialValue  -20 ;

}
//--get canvas x,y from mouse x,y. rename setMousePosition to setCanvasXY 
function setMousePosition(e){
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    mouseX = Math.round((e.clientX - rect.left) * scaleX);
    mouseY = Math.round((e.clientY - rect.top) * scaleY);
}

function updateSizeBasedOnMouseMove(item) {
    const dx = mouseX - oldMouseX;
    const dy = mouseY - oldMouseY;

    if (state === "widen") {
        item.extra.width.initialValue = Math.max(1, item.extra.width.initialValue + dx);

    } else if (state === "stretch") {
        item.extra.height.initialValue = Math.max(1, item.extra.height.initialValue + dy);
    }

    widthHandle.updateXY(
        item.extra.x.initialValue + item.extra.width.initialValue,
        item.extra.y.initialValue
    );

    handles[1].x = item.extra.x.initialValue + item.extra.width.initialValue;
    handles[1].y = item.extra.y.initialValue;
    handles[2].x = item.extra.x.initialValue + item.extra.width.initialValue;
    handles[2].y = item.extra.y.initialValue - 20;

    oldMouseX = mouseX;
    oldMouseY = mouseY;
}


function handleMouseMove(e) {
    if(!selectedItem){return;}

    setMousePosition(e);

    for (let i = 0; i < handleObjects.length; i++) {
        const handleObject = handleObjects[i];
        handleObject.update(selectedItem,mouseX, mouseY);
        handleObject.updateXY(selectedItem,mouseX, mouseY);
                    
    }
    
    // if (state == "drag") {
    //     const item = items[0];
    //     item.extra.x.initialValue = mouseX;
    //     item.extra.y.initialValue = mouseY;

    //     // Update handle positions during drag
    //     handles[0].x = item.extra.x.initialValue - 20;
    //     handles[0].y = item.extra.y.initialValue;
 
    //     handles[1].x = item.extra.x.initialValue + item.extra.width.initialValue;
    //     handles[1].y = item.extra.y.initialValue;
 
    //     handles[2].x = item.extra.x.initialValue + item.extra.width.initialValue;
    //     handles[2].y = item.extra.y.initialValue - 20;
    // }
    
    // if (state == "widen" || state ==  "stretch" ) {
    //     updateSizeBasedOnMouseMove(selectedItem);
    // }
    oldMouseX = mouseX;
    oldMouseY = mouseY;
}

function handleMouseDown(e) {
    if (!selectedItem) return;
    
    setMousePosition(e);

    for (let i = 0; i < handleObjects.length; i++) {
        const handleObject = handleObjects[i];
        handleObject.mouseDown(mouseX, mouseY);
                    
    }

    let handleName = checkHandles(handles, mouseX, mouseY);

    switch (handleName) {
        case 'drag':
        case 'widen':
        case 'stretch':
             state = handleName;
            isDragging = true;
            oldMouseX = mouseX;
            oldMouseY = mouseY;
            break;
        default:
            break;
    }
}

function handleMouseUp(e) {

    for (let i = 0; i < handleObjects.length; i++) {
        const handleObject = handleObjects[i];
        handleObject.mouseUp(mouseX, mouseY);
                    
    }
    if (isDragging) {
        // If we were dragging, just end the drag operation
        state = null;
        oldMouseX = null;
        oldMouseY = null;
        isDragging = false;  // Reset the dragging state
    }
    // We don't need to else { handleClick(e); } here
}

function handleClick(e){
    if (isDragging) { return;}

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
    handles = null;
    
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


