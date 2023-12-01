<script>
//@ts-nocheck
import Cell from './Cell.svelte';

export let pulse = 0;
export let save = 0;

function gameLoop(){pulse+=1;console.log(pulse);currentSlide=currentSlide;}

let currentSlide = {
        startTime : 0,
        endTime : 100,
        slideExtra : [],
        type : 'grid',

       items: [
    {
        name: "",
        content: [
            { "content": "aaa", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false },
            { "content": "bbb", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false }
        ],
        showAt: 0,
        extra: {}
    },
    {
        name: "",
        content: [
            { "content": "ccc", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false },
            { "content": "ddd", "showAt": 0, "bl": true, "bt": false, "br": false, "bb": false }
        ],
        showAt: 0,
        extra: {}
    }
]

}

function addCol() {
  // Add an empty cell to each row
  currentSlide.items.forEach((item) => {
    item.content.push({
      "content": "", // Empty content
      "showAt": 0,
      "bl": false,
      "bt": false,
      "br": false,
      "bb": false
    });
  });
  currentSlide = currentSlide;
}

function addRow() {
  if (currentSlide.items.length === 0 || currentSlide.items[0].content.length === 0) {
    return;
  }
  const colCount = currentSlide.items[0].content.length;
  const newRow = {
    name: "",
    content: Array.from({ length: colCount }, () => ({
      "content": "", // Empty content
      "showAt": 0,
      "bl": false,
      "bt": false,
      "br": false,
      "bb": false
    })),
    showAt: 0,
    extra: {}
  };

  currentSlide.items.push(newRow);
  currentSlide = currentSlide;
}

function delRow() {
  if (currentSlide.items.length > 0) {
    currentSlide.items.pop();
    currentSlide = currentSlide;
  }
}

function delCol() {
  if (currentSlide.items.length > 0 && currentSlide.items[0].content.length > 0) {
    currentSlide.items.forEach((item) => {
      item.content.pop();
    });
    currentSlide = currentSlide;
  }
}

</script> 


<div class='bg-gray-800 text-white w-full min-h-screen'>

<br>

<button class='btn'  on:click={addCol}>Add Col</button>
<button class='btn'  on:click={addRow}>Add Row</button>
<button class='btnRed'  on:click={delRow}>Del Row</button>
<button class='btnRed'  on:click={delCol}>Del Col</button>
<button class='btn'  on:click={save}>Save</button>

<br>
<br>

<div class='flex justify-center w-full table-container'>

{#if currentSlide}
  <table>
    {#each currentSlide.items as item, itemIndex}
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
</div><!--page wrapper-->

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
