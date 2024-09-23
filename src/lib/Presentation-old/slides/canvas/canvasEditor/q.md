Requirement : Write me a svelte reactive statement / function that on every change of selectedItem updated the  selectedItemIndex variable.


some thing like 
let selectedItemIndex = null;
$:{
    selectedItem;
    selectedItemIndex = ...
}


Explanation: in my svelte component i have "items" array which i convert to itemsObjects array of objects (convert data into objects in updateItemObjects) since that is better for editing however to delete, clone etc i still need selectedItemIndex since "items" is the "main source of truth"


Code
<script>
//@ts-nocheck
import CanvasCommand from "./json-ui/commands/CanvasCommand.svelte";  
import EditorToolbar from './EditorToolbar.svelte';
import Toolbar from "./json-ui/Toolbar.svelte";
import CanvasEditorPlayer from './CanvasEditorPlayer.svelte';  
import SelectItemMenu from './json-ui/SelectItemMenu.svelte';   
import CommandUi from './dialogueBoxModule/CommandUi.svelte';  
// import PremadeCommad from './json-ui/commands/PremadeCommad.svelte';  
import { toast } from "@zerodevx/svelte-toast";
import SaveSlideTemplate from './SaveSlideTemplate.svelte'   
import {getNewItem} from '$lib/Presentation';
import itemToObject from "./componentObjects/itemToObject";
////////////////////////////////////////////////////////////////////////


function addNewItem(newItemExtraFn){
  const newItemExtra = newItemExtraFn();
  const newItem = getNewItem();
  newItem.extra = newItemExtra;      
  items.unshift(newItem);      
  items = [...items];
}

let itemObjects = [];
let selectedItem = null;

$: {
  items;
    if(items.length > 0){
      itemObjects = [];
      updateItemObjects();
    }
  }
  let fnList = {
  cloneComponent,
  del
}
  function updateItemObjects() {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemObj = itemToObject(item , fnList,spriteImgArray);
      if (itemObj) {
        itemObjects.push(itemObj);
      }
    }
  }

  function setSelectedItem(index){
    selectedItem = itemObjects[index];
  }

  function handleClickParent(e,mouseX, mouseY) {
    // debugger;
   
    let found = false;
    for (let i = 0; i < itemObjects.length; i++) {
      const item = itemObjects[i];
      const ishit = item.isHit(mouseX, mouseY);
      if (ishit) {
        setSelectedItem(i);
        // selectedItem = item;
        found = true;
        return; //must
      }
    }
    if (found == false) {
      selectedItem = null; //if no item found
      itemIndexInRightBar = null;
    }
  }
 //////////////////////////////////////////////////////////////// 
export let items;
export let extra;
export let currentTime;
export let startTime;
export let endTime;
export let spriteImgArray;
export let bgImages;
export let playerImages;
export let saveCurrentSlideAsSlideTemplate;

  
let itemIndexInRightBar =null;
let showSideBar = 0;
let ignoreShowAt =true;
let slideImages = [];
let showSaveSlideTemplateDialogue = false;

// we need selectedItemIndex since we have to delete , moveup etc the items and not the itemsOBjects aaray thus we need the index. this must always be set when selectedItem is set, thats why we must just set selectedItem in one place setSelectedItem
let selectedItemIndex = null;

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
  // debugger;
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
//--7-sep-2024 we are inside Presentation module this there is just one slide at a time . There are no more slides so the "items" are what we have to display on canvas (and not some upper level items).
// --7-sep-2024 Here the items are a data structure inside CanvasEditorPlayer they become ComponentObjects. 
function clone(index) {
  // debugger;
  if (index >= 0 && index < items.length) {
      const clonedItem = JSON.parse(JSON.stringify(items[index]));
      items.unshift(clonedItem);
      items = [...items];
  }
}
function cloneComponent(itemData) {
  // debugger;
      const clonedItem = JSON.parse(JSON.stringify(itemData));
      delete clonedItem._id; ///===> 
      items.unshift(clonedItem);
      items = [...items];
}
function del() {
  if(!selectedItem){
    toast.push("No Selected item");
    return;
  }
  const index = itemObjects.findIndex(item => item === selectedItem);
  
  if (index !== -1) {
    itemObjects.splice(index, 1);
    // items = [...items];
    toast.push("Item deleted");
  } else {
    toast.push("Item not found");
  }
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
bind:showSaveSlideTemplateDialogue ={showSaveSlideTemplateDialogue}
{toggleShowCanvas}
{toggleIgnoreShowAt}
{ignoreShowAt}
{pasteItem}
{addNewItem}
/> 
     
<!-- ////////////////////////////////////////////////////////  --> 
<div class='flex justify-between gap-2'>

<div class='w-75'> 
{#if showSaveSlideTemplateDialogue}
  <SaveSlideTemplate  {saveCurrentSlideAsSlideTemplate}/>
{/if}

  <CanvasEditorPlayer {items} {extra} {currentTime} {ignoreShowAt} {spriteImgArray} {bgImages} {playerImages} {handleClickParent} {itemObjects} {selectedItem}/>
   
  <!-- slider for current slide time -->
    <div class="w-full">
      <span>Seconds:{currentTime}</span>
      <input class="w-full" type="range"  min={startTime} max={endTime}  
      bind:value={currentTime}/>
    </div>
   
</div> 
 
<!-- div for json-ui -->
<div class='w-25 max-w-[25%] min-w-[25%]  bg-stone-600 rounded-md p-2'>
          
              <SelectItemMenu {itemObjects} {selectedItem} {setSelectedItem}/>
              {#if selectedItem !== null}
              <Toolbar   {moveUp} {moveDown} {del}  {clone} {copyItem}/>
              {/if}
              <CommandUi  bind:selectedItem={selectedItem} />

</div>
</div>
</div><!--the editor top level div-->
{/if}
