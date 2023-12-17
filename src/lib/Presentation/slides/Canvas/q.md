I think I have a svelte reactivity problem

1: The parent component CanvasEditor.svelte has "items" and "selectedItem". 
2: The parent component CanvasEditor.svelte has 1 child  Dd.svelte (which contained a drop-down menu / HTML Select element and its task is to set the selectedItem based on user input).
3: The parent component CanvasEditor.svelte has another child EditPanel.svelte which will display an editor panel based on the selectedItem.

The problem is that the Dd.svelte changed the selectedItem but this change is not reflected in the EditorPanel.svelte

CanvasEditor.svelte
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
  let selectedItem = null;

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
     afterUpdateFn(canvas,ctx,items);
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

      <Dd bind:items = {items} bind:selectedItem={selectedItem}/>
      <EditPanel bind:items = {items} {selectedItem}/>
      </div>
    {/if}
 
</div> 




<style>
  canvas {
    border: 1px solid white;
    display: block;
  }
</style>

Dd.svelte
<script>
  //@ts-nocheck
  export let items;
  let selectedItem=null;
//   onMount(async () =>{
//   selectedItem = items.length-1;
//   });
  function handleSelection(event) {
    const selectedUuid = event.target.value;
    selectedItem = items.find(item => item.uuid === selectedUuid);
   
  }
</script>

<select on:change={handleSelection} class="w-full bg-gray-800 text-white text-center">
    <option class="bg-gray-700" value=''>Select Item</option>
  {#each items.slice().reverse() as item}
    {#if item.name !== 'drawGrid'}
    <option class="bg-gray-700" value={item.uuid}>{item.name}</option>
    {/if}
  {/each}
</select>

EditPanel.svelte
<script>
//@ts-nocheck
import {onMount} from '$lib/util';
import RayEditPanel from './RayEditPanel.svelte';
import TriangleEditPanel from './TriangleEditPanel.svelte';
import RectangleEditPanel from './RectangleEditPanel.svelte';
import CircleEditPanel from './CircleEditPanel.svelte';
import EllipseEditPanel from './EllipseEditPanel.svelte';
import PolyEditPanel from './PolyEditPanel.svelte';

  export let items;
  export let selectedItem;
 
</script>


<div class='p-2 overflow-y-auto'>

{#if selectedItem && selectedItem.name == 'drawRay'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawLine'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawHline'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawTriangle'}
<TriangleEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawRectangle'}
<RectangleEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawCircle'}
<CircleEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawEllipse'}
<EllipseEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawPoly'}
<PolyEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}


</div>