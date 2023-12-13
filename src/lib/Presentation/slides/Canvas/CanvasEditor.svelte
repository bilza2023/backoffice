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
    items = [];
    // drawRay
    items[0] = {name: 'drawRay',showAt :  0 , itemExtra : {x1:20, y1:3, x2:20, y2:99, lineWidth : 2, lineColor : 'white'}};
    items[1] = {name: 'drawRay',showAt :  0 , itemExtra : {x1:21, y1:88, x2:90, y2:10, lineWidth : 2, lineColor : 'white'}};
    items[2] = {name: 'drawRay',showAt :  0 , itemExtra : {x1:10, y1:90, x2:90, y2:90, lineWidth : 2, lineColor : 'white'}};

    // drawText
    items[3] = {name: 'drawText',showAt :  0 , itemExtra : {x:21, y:10, text:'Y', fontSize : 24, textColor : 'white'}};
    items[4] = {name: 'drawText',showAt :  0 , itemExtra : {x:21, y:98, text:'Y\'', fontSize : 24, textColor : 'white'}};

    items[5] = {name: 'drawText',showAt :  0 , itemExtra : {x:85, y:89, text:'X', fontSize : 24, textColor : 'white'}};
    items[6] = {name: 'drawText',showAt :  0 , itemExtra : {x:12, y:89, text:'X\'', fontSize : 24, textColor : 'white'}};

    items[7] = {name: 'drawText',showAt :  0 , itemExtra : {x:17, y:17, text:'1.6', fontSize : 24, textColor : 'white'}};
    items[8] = {name: 'drawText',showAt :  0 , itemExtra : {x:17, y:60, text:'3.2', fontSize : 24, textColor : 'white'}};
    items[9] = {name: 'drawText',showAt :  0 , itemExtra : {x:17, y:48, text:'4.8', fontSize : 24, textColor : 'white'}};
    items[10] = {name: 'drawText',showAt :  0 , itemExtra : {x:17, y:25, text:'6.4', fontSize : 24, textColor : 'white'}};

    items[11] = {name: 'drawText',showAt :  0 , itemExtra : {x:35, y:96, text:'1', fontSize : 24, textColor : 'white'}};
    items[12] = {name: 'drawText',showAt :  0 , itemExtra : {x:50, y:96, text:'2', fontSize : 24, textColor : 'white'}};
    items[13] = {name: 'drawText',showAt :  0 , itemExtra : {x:65, y:96, text:'3', fontSize : 24, textColor : 'white'}};
    items[14] = {name: 'drawText',showAt :  0 , itemExtra : {x:80, y:96, text:'4', fontSize : 24, textColor : 'white'}};

  });
   


  afterUpdate(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx, canvas, 1);

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        switch (item.name) {
            case 'drawRay':
                drawRay(canvas,ctx,item.itemExtra.x1,item.itemExtra.y1,item.itemExtra.x2,item.itemExtra.y2,item.itemExtra.lineWidth,item.itemExtra.lineColor);
            break;
            case 'drawText':
                drawText(canvas,ctx,item.itemExtra.x, item.itemExtra.y,item.itemExtra.text, item.itemExtra.fontSize, item.itemExtra.textColor);

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