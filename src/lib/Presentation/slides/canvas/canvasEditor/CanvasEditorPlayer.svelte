<script>
    //@ts-nocheck
    import {onMount} from "$lib/util";
    // import getSelectedItem from "./getSelectedItem";
    import { onDestroy } from 'svelte';
    import DrawLibInterpretor from '../drawLib/drawLibInterpretor';
    import checkHandles from './fn/checkHandles.js';
    import RectangleObject from "./componentObjects/RectangleObject";
    import itemToObject from "./componentObjects/itemToObject";
  import DraggerHandle from "./handleObject/DraggerHandle.svelte";
    
  import setHandlesForEachItem from "./handleObject/setHandlesForEachItem";

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

///////////////////////////////////////////////////////////////////////////        
        drawLibInterpretor.interpret(items,currentTime,extra);
        
        if(selectedItem){
          // debugger;
          selectedItem.drawHandles(ctx);
         }
///////////////////////////////////////////////////////////////////////////

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
  // itemsStore.set(items);
  // console.log("itemsStore" , $itemsStore);
  ////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < items.length; i++) {
    const item =   items[i];
    const itemObj = itemToObject(item);
    if (itemObj){
      itemObjects.push(itemObj);
    }
  
  }
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

let itemObjects= [];
let selectedItem=null;
let handleObjects = [];


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
  selectedItem =  itemObjects[0];
}

// function handleClick(e){
//     setMousePosition(e);
//     //itemObjects
//     let found = false;
//     for (let i = 0; i < itemObjects.length; i++) {
//         const item = itemObjects[i];
//         const ishit  = item.isHit(mouseX,mouseY);
//         if(ishit){
//           selectedItem = item;
//           found = true;
//             return; //must
//         }
//     }
//     if(found == false){
//       selectedItem = null; //if no item found
//     }
    
// }

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
<DraggerHandle />
<div class="text-xs">x:{mouseX} y:{mouseY}</div>


