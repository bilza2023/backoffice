<script> 
//@ts-nocheck
import ToolbarContent from '../../routes/editTest/ToolbarContent.svelte';
import sortContent from '$lib/quizLib/fn/sortContent';
export let contentObj;
export let redraw;
// export let qIndex;
$: sorted =  sortContent(contentObj);

import {DivDisplay,DivEditor,TableDisplay , TableEditor ,ImageDisplay,ListDisplay , PreDisplay , YoutubeDisplay ,ImageEditor , PreEditor,YoutubeEditor ,ListEditor } from './index';
let showEditor = false;
function toggleShowEditor(){showEditor = !showEditor;}

//xxxxxxxxxxxxxxxxxxx=======>>
function moveUp(contentId) {
  const sortOrder = contentObj.sortOrder;
    let index = sortOrder.indexOf(contentId);
    if (index > 0) {
        // Swap the contentId with the previous element
        [sortOrder[index], sortOrder[index - 1]] = [sortOrder[index - 1], sortOrder[index]];
    }
    return sortOrder;
}
//xxxxxxxxxxxxxxxxxxx=======>>
function deleteItem(contentId) {
  const sortOrder = contentObj.sortOrder;
  let index = sortOrder.indexOf(contentId);
  if (index !== -1) {
      sortOrder.splice(index, 1);
       deleteById(contentId, sortOrder)
  }
  return sortOrder;
}

function deleteById(id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            // Remove the object from the array
            array.splice(i, 1);
            break;
        }
    }
    return array;
}
//xxxxxxxxxxxxxxxxxxx=======>>
function moveDown(contentId) {
    const sortOrder = contentObj.sortOrder;
    let index = sortOrder.indexOf(contentId);
    if (index < sortOrder.length - 1) {
        // Swap the contentId with the next element
        [sortOrder[index], sortOrder[index + 1]] = [sortOrder[index + 1], sortOrder[index]];
    }
    return sortOrder;
}

</script>
<!-- <button on:click={(e)=>contentObj.addDiv('ffff')}>Add</button> -->
<ToolbarContent  {redraw} {toggleShowEditor} {contentObj}/>
{#each sorted as contentItem }
<!-- { console.log('contentObj' , contentObj) } -->

        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'div'}
        <DivDisplay {contentItem} />

          {#if  showEditor}
           <DivEditor {contentItem}  {redraw}  {moveUp} {moveDown} {deleteItem}/>
          {/if}
        {/if}
        
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'table'}
        <TableDisplay {contentItem} />

          {#if  showEditor}
           <TableEditor {contentItem}  {redraw} {moveUp} {moveDown} {deleteItem}/>
          {/if}
        {/if}
        
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'image'}
        <ImageDisplay {contentItem} />

          {#if  showEditor}
           <ImageEditor {contentItem}  {redraw} {moveUp} {moveDown} {deleteItem}/>
          {/if}
        {/if}
       
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'pre'}
        <PreDisplay {contentItem} />

          {#if  showEditor}
           <PreEditor {contentItem}  {redraw}  {moveUp} {moveDown} {deleteItem}/>
          {/if}
        {/if}
        
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'list'}
        <ListDisplay {contentItem} />

          {#if  showEditor}
           <ListEditor {contentItem}  {redraw} {moveUp} {moveDown} {deleteItem}/>
          {/if}
        {/if}
       
        <!--xxxxxxxxxxxxxxxxxxx=======>> -->
        {#if contentItem.type === 'youtube'}
        <YoutubeDisplay {contentItem} />

          {#if  showEditor}
        <YoutubeEditor {contentItem}  {redraw}{moveUp} {moveDown} {deleteItem}/>
          {/if}
        {/if}
        

{/each}
