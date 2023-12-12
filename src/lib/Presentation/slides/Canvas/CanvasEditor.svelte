<script>
    //@ts-nocheck
  import { onMount } from '$lib/util';
  import { afterUpdate } from 'svelte';

  export let items;
  export let slideExtra = [];
  export let theme;

  let canvas;
  let ctx;

  onMount(() => {
    // Get the 2D context of the canvas
    ctx = canvas.getContext('2d');
    drawLines();
  });

  afterUpdate(() => {
    // Redraw lines when component updates
    drawLines();
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

<style>
  canvas {
    border: 1px solid white;
    width: 100%; /* Set canvas width to 100% */
    height: 70vh; /* Set canvas height to 100% of viewport height */
    display: block; /* Ensure canvas behaves as a block element */
  }
</style>

<canvas bind:this={canvas}></canvas>
