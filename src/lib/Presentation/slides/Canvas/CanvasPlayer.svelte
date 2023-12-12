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

    drawRay(canvas,ctx,20,3,20,99);
    drawText(canvas, ctx,21,10,'Y',24);
    drawText(canvas, ctx,21,98,'Y\'',24);

    drawRay(canvas,ctx,10,90,90,90);
    drawText(canvas, ctx,12,89,'X\'',24);
    drawText(canvas, ctx,85,89,'X',24);

    drawRay(canvas,ctx,21,88,90,10);

    drawText(canvas, ctx,17,77,'1.6',24);
    drawText(canvas, ctx,17,60,'3.2',24);
    drawText(canvas, ctx,17,48,'4.8',24);
    drawText(canvas, ctx,17,25,'6.4',24);
    // drawText(canvas, ctx,17,10,'8.0',24);

    drawText(canvas, ctx,35,96,'1',24);
    drawText(canvas, ctx,50,96,'2',24);
    drawText(canvas, ctx,65,96,'3',24);
    drawText(canvas, ctx,80,96,'4',24);
  });

</script>


<div class='flex flex-col w-full justify-center'>
<ToolBar />
<canvas bind:this={canvas} on:click={ e =>getPoint(e,canvas)} ></canvas>
</div>




<style>
  canvas {
    border: 1px solid white;
    display: block;
  }
</style>