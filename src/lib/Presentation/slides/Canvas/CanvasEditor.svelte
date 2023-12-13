<script>
    //@ts-nocheck
  import { onMount } from '$lib/util';
  import { afterUpdate } from 'svelte';
  import drawLine from './fn/drawLine';
  import drawGrid from './fn/drawGrid';
  import drawRay from './fn/drawRay';
  import drawText from './fn/drawText';
  import getPoint from './fn/getPoint';
  import ToolBar from './Toolbar.svelte';

  export let items;
  export let slideExtra = [];
  export let theme;

  
  let canvas;
  let ctx;

  onMount(() => {
    ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 400;
  });
   


  afterUpdate(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx, canvas, 1);

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        switch (item.name) {
            case 'drawRay':
            //  debugger;
                drawRay(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.x2,item.extra.y2,item.extra.lineWidth,item.extra.lineColor);
            break;
            case 'drawText':
                drawText(canvas,ctx,item.extra.x, item.extra.y,item.extra.text, item.extra.fontSize, item.extra.textColor);

            break;
        
            default:
                break;
        }
        
    }
  
  });

</script>


<div class='flex flex-col w-full justify-center'>
<ToolBar  {canvas} {ctx} bind:items = {items}/>
<canvas bind:this={canvas} on:click={ e =>getPoint(e,canvas)} />
</div>




<style>
  canvas {
    border: 1px solid white;
    display: block;
  }
</style>