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
    // drawGrid(ctx, canvas, 1);
    // debugger;

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
                drawPoint(canvas,ctx,item.extra.x1,item.extra.y1,item.extra.width,item.extra.fillColor,item.extra.opacity);
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


<div class='flex flex-col w-full justify-center p-0 m-0'>
<ToolBar  {canvas} {ctx} bind:items = {items}/>
<canvas bind:this={canvas} on:click={ e =>getPoint(e,canvas)} />
</div>




<style>
  canvas {
    border: 1px solid white;
    display: block;
  }
</style>