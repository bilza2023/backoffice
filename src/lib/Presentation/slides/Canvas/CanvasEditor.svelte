<script>
    //@ts-nocheck
  import { onMount,uuid } from '$lib/util';
  import { afterUpdate,beforeUpdate } from 'svelte';
  
  import CanvasComp from './canvasComp/CanvasComp.svelte';
  // import  afterUpdateFn  from './fn/afterUpdate';
  // import getPoint from './fn/getPoint';
  import ToolBar from './Toolbar.svelte';
  import EditPanel from './editPanels/EditPanel.svelte'
  import Dd from './Dd.svelte';
  export let items;
  export let slideExtra = [];
  export let theme;
/**
 * Learning from 2 hours of trouble shooting is that we can use beforeUpdate if we want to edit the incomming data before we use it.
 */
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
 

  onMount( () => {
        addUuid();
  });

</script>

<div class='flex justify-start items-start  '>
 
  <div class={`flex flex-col justify-center p-0 m-0 ${showEditorPanel ? 'w-10/12 ' : 'w-full'} border-2 border-gray-600`} style="cursor: {cursorState};" >

    <ToolBar  bind:items = {items} {currentX} {currentY}  {toggleShowEditorPanel} bind:cursorState={cursorState}/>

    <CanvasComp {items}  bind:currentX={currentX} bind:currentY={currentY}/>

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