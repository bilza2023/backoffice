<script>
    //@ts-nocheck
  import { onMount } from '$lib/util';
  import { afterUpdate } from 'svelte';
  import drawLine from './fn/drawLine';
  import drawGrid from './fn/drawGrid';
  import drawRay from './fn/drawRay';
  import drawText from './fn/drawText';
  import drawTriangle from './fn/drawTriangle';
  import drawRectangle from './fn/drawRectangle';
  import drawPoly from './fn/drawPoly';
  import drawCircle from './fn/drawCircle';
  import drawEllipse from './fn/drawEllipse';
  import drawHline from './fn/drawHline';
  import drawPoint from './fn/drawPoint';
  import drawPointWText from './fn/drawPointWText';

  import getPoint from './fn/getPoint';
  import ToolBar from './Toolbar.svelte';
  import EditPanel from './EditPanel.svelte'
  export let items;
  export let slideExtra = [];
  export let theme;

  
  let canvas;
  let ctx;
  let currentX=0;  
  let currentY=0;  
  let showEditorPanel = false;
  onMount(() => {
    ctx = canvas.getContext('2d');
    updateCanvasSize(); // Call the function initially
    window.addEventListener('resize', updateCanvasSize);
  });
   
  function updateCanvasSize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    console.log( 'x' , canvas.width, 'Y' , canvas.height  );
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        switch (item.name) {
            case 'drawRay':
            //  debugger;
                drawRay(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.lineWidth,item.extra.lineColor);
            break;
            case 'drawHline':
            //  debugger;
                drawHline(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.lineWidth,item.extra.lineColor);
            break;
            case 'drawText':
                drawText(canvas,ctx,item.extra.x, item.extra.y,item.extra.text, item.extra.fontSize, item.extra.textColor);
            break;
            case 'drawLine':
                drawLine(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.lineWidth,item.extra.lineColor);
            break;
            case 'drawTriangle':
                drawTriangle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.x3,item.extra.y3,item.extra.x4,item.extra.y4,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawRectangle':
                drawRectangle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawPoly':
                drawPoly(canvas,ctx,item.extra.points,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawCircle':
                drawCircle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawPoint':
                drawPoint(canvas,ctx,item.extra.points,item.extra.width,item.extra.fillColor,item.extra.opacity);
            break;
            case 'drawPointWText':
                drawPointWText(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.text,item.extra.width,item.extra.color,item.extra.colorText);
            break;
            case 'drawEllipse':
                drawEllipse(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.x3,item.extra.y3,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawGrid':
            drawGrid(canvas,ctx);
            break;       
            default:
                break;
        }
        
    }
  
  });

</script>

{#if showEditorPanel}

<div class='flex w-full'>
  <div class='flex flex-col justify-center p-0 m-0 w-10/12'>
    <ToolBar  {canvas} {ctx} bind:items = {items} {currentX} {currentY} bind:showEditorPanel={showEditorPanel}/>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <canvas width="1200" height="400" bind:this={canvas} on:click={ e =>getPoint(e,canvas)} 
    on:mousemove={handleMouseMove} on:mouseout={mouseOut}  />
  </div>

  <div class='w-2/12 bg-green-800'>
  <EditPanel />
  </div> 
</div> 

{:else}
<div class='flex flex-col  justify-center p-0 m-0 w-full'>
  <ToolBar  {canvas} {ctx} bind:items = {items} {currentX} {currentY}/>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <canvas width="1200" height="400" bind:this={canvas} on:click={e =>getPoint(e,canvas)} 
  on:mousemove={handleMouseMove} on:mouseout={mouseOut} />
</div>
{/if}




<style>
  canvas {
    border: 1px solid white;
    display: block;
  }
</style>