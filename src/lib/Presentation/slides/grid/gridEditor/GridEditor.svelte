<script>
//@ts-nocheck
import Cell from './Cell.svelte';
import {NavBtn2} from '$lib/cmp';
import {Icons} from '$lib/util';

// export let pulse = 0;
export let items;

function addCol() {
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
  if (items.length === 0 || items[0].content.length === 0) {
    return;
  }
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


<div class='flex'>
  <NavBtn2 title='Add Col' icon={Icons.BULB}  clk={addCol} />
  <NavBtn2 title='Add Row' icon={Icons.BULB} clk={addRow} />
  <NavBtn2 title='Del Row' icon={Icons.DEL} clk={delRow} />
  <NavBtn2 title='Del Col' icon={Icons.DEL} clk={delCol} />

</div>

<br>
<br>

<div class='flex justify-center w-full table-container'>

{#if items}
  <table>
    {#each items as item, itemIndex}
      <tr>
        {#each item.content as item, cellIndex}
          <!-- {#if cell.showAt <= pulse} -->
          <Cell  bind:item={item} />
            
          <!-- {/if} -->
        {/each}
      </tr>
    {/each}
  </table>
{/if}


</div>

<style>
  .bg-gray-800 {
    overflow-x: auto; /* Add this line to enable horizontal scrolling */
  }

  .table-container {
    overflow-x: auto;
  }
.btn {
    border-radius: 10px;
    background-color: cadetblue;
    padding :2px;
}
.btnRed {
    border-radius: 10px;
    background-color: red;
    padding :2px;
}
  /* Rest of your styles remain unchanged */
</style>
