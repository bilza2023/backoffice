<script>
//@ts-nocheck
import { onMount,uuid } from '$lib/util';
import { afterUpdate,beforeUpdate } from 'svelte';
import  afterUpdateFn  from './fn/afterUpdate';
// import getPoint from './fn/getPoint'; 
import drawGrid from './fn/drawGrid';
import drawLinePure from './pure/drawLinePure';
import Line from './objects/Line';

  let canvas;
  let ctx;
  export let items;  
  export let currentX=0;  
  export let currentY=0;  
  let cursorState = 'default';
  let line;
  onMount( () => {
        ctx = canvas.getContext('2d');
         ctx.imageSmoothingEnabled = true;
  });
  // function cursorSetup(){
  //     const handleKeyUp = (event) => {
  //         if (event.key === 'Escape') {
  //         cursorState = 'default';
  //         }
  //       }
  //        window.addEventListener('keyup', handleKeyUp);

  //     return () => {
  //     // Cleanup when the component is unmounted
  //     window.removeEventListener('keyup', handleKeyUp);
  //   };
  // }
 
   // Function to handle mousemove event
  function mouseOut(event) {
   currentX = 0;
    currentY = 0;
  }
  async function  handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    currentX = Math.round(x);
    currentY = Math.round(y);
    // console.log('Mouse coordinates:', currentX, currentY);
    // await update();
   
  }  

  afterUpdate(async () => {
    await drawGrid(canvas,ctx,5,1,'#28323f');
     line = new Line(20, 20, 300, 280, 2,'red');
     line.selected = true;
     line.draw(ctx);
  
  });
////////////////////////
function getPoint(event,canvas) {
//  debugger;
    const x = parseInt(event.clientX - canvas.getBoundingClientRect().left);
    const y = parseInt(event.clientY - canvas.getBoundingClientRect().top);
    const isHit = line.isHit(x,y);
    console.log(isHit);
  return {x, y};
  }
</script>

<!-- this z protective div to prevent canvas from reacting to parent flex -->
<div class='flex justify-center'>

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
<canvas class='border-2 border-white' width="400" height="400" bind:this={canvas} on:click={ e =>getPoint(e,canvas)}  on:mousemove={handleMouseMove} on:mouseout={mouseOut}  />
</div>