<script>
    //@ts-nocheck
  import { onMount,uuid } from '$lib/util';
  import { afterUpdate,beforeUpdate } from 'svelte';
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
  import EditPanel from './editPanels/EditPanel.svelte'
  export let items;
  export let slideExtra = [];
  export let theme;
/**
 * Learning from 2 hours of trouble shooting is that we can use beforeUpdate if we want to edit the incomming data before we use it.
 */
  
  let canvas;
  let ctx;
  let currentX=0;  
  let currentY=0;  
  let showEditorPanel = true;

  function toggleShowEditorPanel(){showEditorPanel = !showEditorPanel;
  items = [...items];}
   async function addUuid() {
  for (let i = 0; i < items.length; i++) {
    items[i].uuid = uuid();
  }
  }
  // function gameLoop() {items = [...items];}
  beforeUpdate(async() => {
  console.log("Before Update");
    
  });

  onMount( () => {
        addUuid();
        ctx = canvas.getContext('2d');
        updateCanvasSize(); // Call the function initially
        window.addEventListener('resize', updateCanvasSize);
        // setInterval(gameLoop,100);
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
                drawRay(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.width,item.extra.color,item.extra.opacity,item.extra.dash,item.extra.gap);
            break;
            case 'drawHline':
            //  debugger;
                drawHline(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.width,item.extra.color,item.extra.opacity,item.extra.dash,item.extra.gap);
            break;
            case 'drawText':
                drawText(canvas,ctx,item.extra.x, item.extra.y,item.extra.text, item.extra.fontSize, item.extra.textColoritem.extra.opacity);
            break;
            case 'drawLine':
                drawLine(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.width,item.extra.color,item.extra.opacity,item.extra.dash,item.extra.gap);
            break;
            case 'drawTriangle':
                drawTriangle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.x3,item.extra.y3,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawRectangle':
                drawRectangle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawPoly':
                drawPoly(canvas,ctx,item.extra.points,item.extra.fillColor,item.extra.opacity,item.extra.filled);
            break;
            case 'drawCircle':
            // debugger;
                drawCircle(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.radius,item.extra.lineWidth,item.extra.fillColor,item.extra.filled,item.extra.opacity);
            break;
            case 'drawPoint':
                drawPoint(canvas,ctx,item.extra.points,item.extra.width,item.extra.fillColor,item.extra.opacity);
            break;
            case 'drawPointWText':
                drawPointWText(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.text,item.extra.width,item.extra.color,item.extra.colorText);
            break;
            case 'drawEllipse':
                drawEllipse(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.radius1,item.extra.radius2,item.extra.borderWidth,item.extra.color,item.extra.filled,item.extra.opacity);
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

<div class='flex'>
 
  <div class={`flex flex-col justify-center p-0 m-0 ${showEditorPanel ? 'w-10/12 ' : 'w-full'}`}>

    <ToolBar  bind:items = {items} {currentX} {currentY}  {toggleShowEditorPanel}/>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <canvas width="1200" height="400" bind:this={canvas} on:click={ e =>getPoint(e,canvas)} 
    on:mousemove={handleMouseMove} on:mouseout={mouseOut}  />
  </div>

    {#if showEditorPanel}
      <div class='w-2/12 bg-gray-600'>
      <EditPanel bind:items = {items} />
      </div>
    {/if}
 
</div> 




<style>
  canvas {
    border: 1px solid white;
    display: block;
  }
</style>