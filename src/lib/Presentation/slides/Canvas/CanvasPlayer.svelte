<script>
    //@ts-nocheck
  import { onMount } from '$lib/util';
  import { afterUpdate } from 'svelte';
  import drawLine from './fn/drawLine';
  import drawGrid from './fn/drawGrid';
  import drawRay from './fn/drawRay';

  export let items;
  export let slideExtra = [];
  export let theme;

  let canvas;
  let ctx;

  onMount(() => {
    ctx = canvas.getContext('2d');
  });



  afterUpdate(() => {
   const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Call the drawGrid function with the required arguments
    drawGrid(ctx, canvas, 10,'#555f6d');
    // drawLine(canvas,ctx,0,0,100,100);
    drawRay(canvas,ctx,20,20,60,60);
  });

  function drawLines() {
    // Set canvas width and height to match the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the line color to white
    ctx.strokeStyle = 'white';

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 150);
    ctx.stroke();
  }
</script>

<div class='flex w-full justify-center'>
<canvas bind:this={canvas}></canvas>
</div>




<style>
  canvas {
    border: 1px solid white;
    width: 75%; /* Set canvas width to 60% of the screen */
    height: calc(60% * 9 / 16); /* Calculate height for a 16:9 aspect ratio */
    display: block;
  }
</style>