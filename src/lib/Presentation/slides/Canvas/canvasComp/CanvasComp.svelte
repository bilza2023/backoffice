<script>
//@ts-nocheck
import { onMount,uuid } from '$lib/util';
import { afterUpdate,beforeUpdate } from 'svelte';
import  afterUpdateFn  from './fn/afterUpdate';
import getPoint from './fn/getPoint'; 

  let canvas;
  let ctx;
  export let items;  
  export let currentX=0;  
  export let currentY=0;  
  let cursorState = 'default';

  onMount( () => {
        ctx = canvas.getContext('2d');
        updateCanvasSize(); // Call the function initially
        window.addEventListener('resize', updateCanvasSize);
        // cursorSetup();
      
  });
  function cursorSetup(){
      const handleKeyUp = (event) => {
          if (event.key === 'Escape') {
          cursorState = 'default';
          }
        }
         window.addEventListener('keyup', handleKeyUp);

      return () => {
      // Cleanup when the component is unmounted
      window.removeEventListener('keyup', handleKeyUp);
    };
  }
  function updateCanvasSize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
} 
   // Function to handle mousemove event
  function mouseOut(event) {
   currentX = 0;
    currentY = 0;
  }
  function handleMouseMove(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    currentX = Math.round(x);
    currentY = Math.round(y);
    // console.log('Mouse coordinates:', currentX, currentY);
  }  
  
  afterUpdate(() => {
     afterUpdateFn(canvas,ctx,items);
  });

</script>

    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
<canvas width="1200" height="400" bind:this={canvas} on:click={ e =>getPoint(e,canvas)}  on:mousemove={handleMouseMove} on:mouseout={mouseOut}  />