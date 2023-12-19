<script>
    //@ts-nocheck
  import { onMount,uuid } from '$lib/util';
  import { afterUpdate,beforeUpdate } from 'svelte';
  
  import  afterUpdateFn  from './fn/afterUpdate';
  import getPoint from './fn/getPoint';
  import ToolBar from './Toolbar.svelte';
  import EditPanel from './editPanels/EditPanel.svelte'
  import Dd from './Dd.svelte';
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
  let cursorState = 'default';

function toggleShowEditorPanel(){
      showEditorPanel = !showEditorPanel;
      items = [...items];
}

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
        cursorSetup();
      
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
     afterUpdateFn(canvas,ctx,items);
  });

</script>

<div class='flex justify-start items-start  '>
 
  <div class={`flex flex-col justify-center p-0 m-0 ${showEditorPanel ? 'w-10/12 ' : 'w-full'}`} style="cursor: {cursorState};" >

    <ToolBar  bind:items = {items} {currentX} {currentY}  {toggleShowEditorPanel} bind:cursorState={cursorState}/>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <canvas width="1200" height="400" bind:this={canvas} on:click={ e =>getPoint(e,canvas)} 
    on:mousemove={handleMouseMove} on:mouseout={mouseOut}  />
  </div>

    {#if showEditorPanel}
      <div class='w-2/12 bg-gray-600'>

      <Dd  {items} />
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