<script>
//@ts-nocheck
import CanvasCommand from "./json-ui/commands/CanvasCommand.svelte";  
import EditorToolbar from './EditorToolbar.svelte';
import Toolbar from "./json-ui/Toolbar.svelte";
import CanvasPlayer from '../canvasPlayer/CanvasPlayer.svelte';  
import SelectItemMenu from './json-ui/SelectItemMenu.svelte';  
import CommandUi from './json-ui/CommandUi.svelte';  
import PremadeCommad from './json-ui/commands/PremadeCommad.svelte';  
import { toast } from "@zerodevx/svelte-toast";
   
export let items;
export let extra;
export let currentTime;
export let startTime;
export let endTime;
export let spriteImgArray;
export let bgImages;
export let playerImages;

  
let itemIndexInRightBar =0;
let showSideBar = 0;
let ignoreShowAt =true;
let slideImages = [];

function toggleIgnoreShowAt(){
  ignoreShowAt = !ignoreShowAt;
}
function toggleShowCanvas(){
  if(showSideBar >= 2){
    showSideBar=0;
  }else {
    showSideBar+=1;
  }
}


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


function copyItem(index) {
  // debugger;
  if (index >= 0 && index < items.length) {
      localStorage.setItem("copiedItem" , JSON.stringify(items[index]));
      toast.push("item copied");
  }
}
function pasteItem() {
  // debugger;
  const copiedItem = localStorage.getItem("copiedItem");
  if ( copiedItem ) {
      const item = JSON.parse( copiedItem );
      item._id = null;
      items = [...items,item];
      toast.push("item pasted");
  }else {
    toast.push("no copied item found");
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
{pasteItem}
/> 
    
<!-- ////////////////////////////////////////////////////////  -->
<div class='flex justify-between gap-2'>

<div class='w-75'> 
  <CanvasPlayer {items} {extra} {currentTime} {ignoreShowAt} {spriteImgArray} {bgImages} {playerImages}/>
   
  <!-- slider for current slide time -->
    <div class="w-full">
      <span>Seconds:{currentTime}</span>
      <input class="w-full" type="range"  min={startTime} max={endTime}  
      bind:value={currentTime}/>
    </div>
   
</div> 
 
<!-- div for json-ui -->
<div class='w-25 max-w-[25%] min-w-[25%]  bg-stone-600 rounded-md p-2'>
          
  
          {#if showSideBar==0}
              <SelectItemMenu {items} bind:itemIndexInRightBar={itemIndexInRightBar}/>
              <CommandUi  bind:item={items[itemIndexInRightBar]}  {redraw}/>
              <Toolbar  index={itemIndexInRightBar}  {moveUp} {moveDown} {del}  {clone} {copyItem}/>
          {:else if showSideBar==1}
            <CanvasCommand  bind:extra={extra}   />
          {:else if showSideBar==2}
            <PremadeCommad  bind:items={items}   />
          {/if}
          
</div>
</div>

</div><!--the editor top level div-->
{/if}
