<script>
    //@ts-nocheck
    import { onMount } from "$lib/util";
    import { onDestroy } from "svelte";
    import DrawLibInterpretor from "../drawLib/drawLibInterpretor";
    import DrawLib from "../drawLib/drawLib";
    import itemToObject from "../canvasEditor/componentObjects/itemToObject";
 
 
 
 
    //////////////////////////////////
    export let items;
    export let currentTime;
    export let bgImages;
    export let spriteImgArray;
    // export let itemObjects;
    export let extra;
  
    let canvas;
    let ctx;
    let orignalExtra;//????
   let drawLib;

/////////////////////////////////////////////////////////
let itemObjects = [];

// $: {
//   items;
//     if(items.length > 0){
//       itemObjects = [];
//       updateItemObjects();
//     }
//   }
  let fnList = {
  // cloneComponent,
  // del
}
  function updateItemObjects() {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemObj = itemToObject(item , fnList,spriteImgArray);
      if (itemObj) {
        itemObjects.push(itemObj);
      }
    }
  }

/////////////////////////////////////////////////////////   
    function gameLoop() {
      try {
        if (itemObjects) {
          
          //This extra is slide extra------yesss....!!!!
          drawLibInterpretor.showGrid = extra.showGrid;
          drawLibInterpretor.gridLineWidth = extra.gridLineWidth;
          drawLibInterpretor.gridLineColor = extra.gridLineColor;
          drawLibInterpretor.cellWidth = extra.cellWidth;
          drawLibInterpretor.cellHeight = extra.cellHeight;
  
          ///////////////////////////////////////////////////////////////////////////
          
          drawLibInterpretor.interpret(currentTime, extra);
          
          for (let i = 0; i < itemObjects.length; i++) {
            const item = itemObjects[i];
            item.draw(drawLib,currentTime, extra);
    
          }
         
        }
        
      } catch (error) {
        drawLibInterpretor.jsonError();
      }
    }
    //////////////////////////////////
  
  
  
    async function init() {
      if (canvas) {
        if (interval) {
          clearInterval(interval);
        }
        //////////////////////////////////////////////
        ctx = canvas.getContext("2d");
        ////////////////////////////////////////////////////////////////////////
        drawLib = new DrawLib(canvas,ctx);
        ////////////////////////////////////////////////////////////////////////
        drawLibInterpretor = new DrawLibInterpretor(
          canvas,
          ctx,
          extra,
          spriteImgArray,
          bgImages
        );
        ///////////////////////
        itemObjects = [];
        updateItemObjects();
        ///////////////////////
      }
      interval = setInterval(gameLoop, 20);
    }
    //////////////////////////////////
    let interval;
    let drawLibInterpretor;
   
    onMount(async () => {
      await init();
    });
    onDestroy(() => {
      clearInterval(interval);
    });
  
    ///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
    ///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
    ///////////////////////////////////////////////////////UI-MOUSE-INTERACTION SECTION
    // let mouseX = 0;
    // let mouseY = 0;
  
    
  
    //--get canvas x,y from mouse x,y. rename setMousePosition to setCanvasXY
    // function setMousePosition(e) {
    //   const rect = canvas.getBoundingClientRect();
    //   const scaleX = canvas.width / rect.width;
    //   const scaleY = canvas.height / rect.height;
  
    //   mouseX = Math.round((e.clientX - rect.left) * scaleX);
    //   mouseY = Math.round((e.clientY - rect.top) * scaleY);
    // }
  
    function handleMouseMove(e) {
    
        
    }
    function handleMouseDown(e) {
  
    }
    function handleMouseUp(e) {
  
    }
    function handleClick(e) {
    }
   
   
  </script>
  
  <div class="flex justify-center w-full">
    <canvas
      class="w-full m-2"
      bind:this={canvas}
      width={extra.canvasWidth}
      height={extra.canvasHeight}
      on:mousemove={handleMouseMove}
      on:mousedown={(e) => handleMouseDown(e)}
      on:mouseup={handleMouseUp}
      on:click={handleClick}
    ></canvas>
  </div>
  <!-- <div class="text-xs">x:{mouseX} y:{mouseY}</div> -->
  