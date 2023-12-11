<script>
//@ts-nocheck
import {toast} from '$lib/util';
import Toolbar from './Toolbar.svelte';
import Row from './Row.svelte';

// export let pulse=0;
export let items;

function parseItem(item) {
  return {
    ...item,
    content: JSON.parse(item.content),
  };
}

function addCol() {
  if (items.length === 0) {
    toast.push('No row exists. Please add a row first');
    return;
  }
  // Add an empty cell to each row
  items.forEach((item) => {
    item.content.push({
      "content": "", // Empty content
      "showAt": 0,
      "type": "code",
      "bl": false,
      "bt": false,
      "br": false,
      "bb": false
    });
  });
  items = items;
}

function addRow() {
  if (items.length === 0) {
    items.push({
      name: "",
      content: [],
      showAt: 0,
      extra: {}
    });
    items = items;
    toast.push('Empty row added');
    return;
  }
  //get number of col in first row since all rows have equal no of col 
  const colCount = items[0].content.length;
  const newRow = {
    name: "",
    content: Array.from({ length: colCount }, () => ({
      "content": "", // Empty content
      "showAt": 0,
      "type": "code",
      "bl": false,
      "bt": false,
      "br": false,
      "bb": false
    })),
    showAt: 0,
    extra: {}
  };

  items.push(newRow);
  items = items;
}

function delRow() {
  if (items.length > 0) {
    items.pop();
    items = items;
  }
}

function delCol() {
  if (items.length > 0 && items[0].content.length > 0) {
    items.forEach((item) => {
      item.content.pop();
    });
    items = items;
  }
}

</script> 

<Toolbar  {addRow} {addCol} {delRow} {delCol}   />
<br>

<!-- <div class='flex justify-center w-full overflow-auto '> -->

{#if items}
    {#each items as item, itemIndex}
    Row:{itemIndex+1}
    <Row  rowItem= {parseItem(item)}  {itemIndex}  />
   
      <br>  
    {/each}
{/if}


<!-- </div> -->
