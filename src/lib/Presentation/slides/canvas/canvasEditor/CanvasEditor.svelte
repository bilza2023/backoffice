<script>
  //@ts-nocheck
  import CanvasCommand from "./json-ui/commands/CanvasCommand.svelte";  
  import EditorToolbar from './EditorToolbar.svelte';
  import Toolbar from "./json-ui/Toolbar.svelte";
  import CanvasPlayer from '../canvasPlayer/CanvasPlayer.svelte';  
  import SelectItemMenu from './json-ui/SelectItemMenu.svelte';  
  import CommandUi from './json-ui/CommandUi.svelte';  

  export let items;
  export let extra;
  export let currentTime;
  export let startTime;
  export let endTime;
  export let spriteImgArray;
  export let bgImages;

  let itemIndexInRightBar =0;
  let showCanvasInSdieBar =true;
  let ignoreShowAt =true;


  function toggleIgnoreShowAt(){
    ignoreShowAt = !ignoreShowAt;
  }
  function toggleShowCanvas(){showCanvasInSdieBar = !showCanvasInSdieBar;}
  

  function moveUp(index) {
    debugger;
    if (index > 0 && index < items.length) {
        const item = items.splice(index, 1)[0];
        items.splice(index - 1, 0, item);
        items = [...items];
    }
}

  function moveDown(index) {
    // debugger;
    if (index >= 0 && index < items.length - 1) {
        const item = items[index];
        items.splice(index, 1);
        items.splice(index + 1, 0, item);
        items = [...items];
    }
  }


  function clone(index) {
    // debugger;
    if (index >= 0 && index < items.length) {
        const clonedItem = JSON.parse(JSON.stringify(items[index]));
        items.unshift(clonedItem);
        items = [...items];
    }
  }

  function del(index) {
      items.splice(index, 1);
      items = [...items];
  }
  
  
  
  function redraw(){items = [...items];}
  
  function handlePulseChange(event) {
        // debugger;
        currentTime = parseInt(event.target.value);
  }

</script>
  
{#if items }
<!-- the editor top level div -->
<div class='p-2 bg-stone-900 '>

<EditorToolbar
bind:items={items}

{toggleShowCanvas}
{toggleIgnoreShowAt}
{ignoreShowAt}
/>
   
<!-- ////////////////////////////////////////////////////////  -->
<div class='flex justify-between gap-2'>

<div class='w-75'> 
  <CanvasPlayer {items} {extra} {currentTime} {ignoreShowAt} {spriteImgArray} {bgImages}/>
   
  <!-- slider for current slide time -->
    <div class="w-full">
      <span>Seconds:{currentTime}</span>
      <input class="w-full" type="range"  min={startTime} max={endTime}  
      bind:value={currentTime}/>
    </div>
   
</div> 

<!-- div for json-ui -->
<div class='w-25 max-w-[25%] min-w-[25%]  bg-stone-600 rounded-md p-2'>
          
  
          {#if showCanvasInSdieBar}
              <SelectItemMenu {items} bind:itemIndexInRightBar={itemIndexInRightBar}/>
              <CommandUi  bind:item={items[itemIndexInRightBar]}  {redraw}/>
              <Toolbar  index={itemIndexInRightBar}  {moveUp} {moveDown} {del}  {clone}/>
          {:else}
              <CanvasCommand  bind:extra={extra}   />
          {/if}
          
</div>
</div>

</div><!--the editor top level div-->
{/if}
