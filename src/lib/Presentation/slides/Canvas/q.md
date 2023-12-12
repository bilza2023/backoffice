please write me a function "percToPix(x,y)" this should take a percentage eg percToPix(50,50) and return the pixel value for canvas . this will help me to place items on canvas as per percentage 

for reference
Here are my 2 svelte components 
canvasPlayer.svelte
<script>
    //@ts-nocheck
  import { onMount } from '$lib/util';
  import { afterUpdate } from 'svelte';
import drawGrid from './fn/drawGrid';
  export let items;
  export let slideExtra = [];
  export let theme;

  let canvas;
  let ctx;

  onMount(() => {
    // Get the 2D context of the canvas
    ctx = canvas.getContext('2d');
    // drawLines();
  });

  afterUpdate(() => {
   const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Call the drawGrid function with the required arguments
    drawGrid(ctx, canvas, 10,'#555f6d');
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

drawGrid.svelte
//@ts-nocheck
// drawGrid.js
export default function drawGrid(ctx, canvas, gridWidthPercentage, lineColor = 'white', lineWidth = 1) {
  // Set the line color
  ctx.strokeStyle = lineColor;

  // Set the line width
  ctx.lineWidth = lineWidth;

  // Calculate the number of horizontal and vertical lines based on grid width percentage
  const horizontalLines = Math.floor(canvas.height / (100 / gridWidthPercentage));
  const verticalLines = Math.floor(canvas.width / (100 / gridWidthPercentage));

  // Draw horizontal lines
  for (let i = 1; i < horizontalLines; i++) {
    // Divide the canvas height by 100 before multiplying by the grid width percentage
    const y = Math.round((canvas.height / 100) * (gridWidthPercentage * i));
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Draw vertical lines
  for (let i = 1; i < verticalLines; i++) {
    // Divide the canvas width by 100 before multiplying by the grid width percentage
    const x = Math.round((canvas.width / 100) * (gridWidthPercentage * i));
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
}


