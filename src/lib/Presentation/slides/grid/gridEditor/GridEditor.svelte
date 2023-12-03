<script>
//@ts-nocheck
import Cell from './Cell.svelte';

// export let pulse = 0;
export let save;
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



<button class='btn'  on:click={addCol}>Add Col</button>
<button class='btn'  on:click={addRow}>Add Row</button>
<button class='btnRed'  on:click={delRow}>Del Row</button>
<button class='btnRed'  on:click={delCol}>Del Col</button>
<button class='btn'  on:click={save}>Save</button>

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
