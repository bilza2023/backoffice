<script>
    //@ts-nocheck
  import { onMount,uuid } from '$lib/util';
  import CanvasComp from './canvasComp/CanvasComp.svelte';
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
  // let cursorState = 'default';

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

<div class='p-2'>
 
    <ToolBar  bind:items = {items} {currentX} {currentY}  {toggleShowEditorPanel} />

 
    {#if showEditorPanel}
      <br>
      <EditPanel bind:items = {items} />
    {:else}  
   <CanvasComp  {items} bind:currentX={currentX} bind:currentY={currentY} />
    {/if}
 
</div> 


