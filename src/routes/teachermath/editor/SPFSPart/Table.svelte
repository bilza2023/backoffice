<script>
//@ts-nocheck
    // import { onMount } from "svelte";
import VerticalBtnsTbl from './VerticalBtnsTbl.svelte';

export let item;
export let redraw;
export let moveUp;
export let moveDown;
export let del;
export let j;
export let updateTableData;

let parsedData=[];
$: {
  parsedData = JSON.parse(item);
}

// Function to handle input change
const handleInputChange = (newValue, rowIndex, colIndex) => {
  parsedData[rowIndex][colIndex] = newValue;
  updateTableData(j,JSON.stringify(parsedData));
}
 // Function to add a new row
  const addRow = () => {
    const newRow = Array(parsedData[0].length).fill('');
    parsedData.push(newRow);
    // item = JSON.stringify(parsedData);
    // parsedData = [...parsedData];
    updateTableData(j,JSON.stringify(parsedData));
    redraw();
  }

  const addCol = () => {
    parsedData.forEach(row => row.push(''));
    updateTableData(j,JSON.stringify(parsedData));
    redraw();
  }
const delRow = () => {
  if (parsedData.length > 0) {
    parsedData.pop(); // Remove the last row
    updateTableData(j,JSON.stringify(parsedData));
    redraw();
    
  }
}
const delCol = () => {
  if (parsedData.length > 0 && parsedData[0].length > 0) {
    parsedData.forEach(row => row.pop()); // Remove the last column from each row
   updateTableData(j,JSON.stringify(parsedData));
    redraw();
  }
}

</script>
{#if parsedData.length > 0}

<div class="flex flex-col justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300">
  {#each parsedData as row, rowIndex}
    <div class="flex justify-center gap-1">
      {#each row as cell, colIndex}
        <div class='flex flex-col justify-center items-center'>
          <input
            class="bg-gray-900 m-1 p-1 rounded-md w-8/12"
            type="text"
            value={cell}
             on:input={(e) => handleInputChange(e.target.value, rowIndex, colIndex)}
          />
        </div>
      {/each}
    </div>
  {/each}
</div>

{/if}

 <div class='w-2/12'>
            <VerticalBtnsTbl {delRow} {delCol} {moveUp} {moveDown} {del} {j} {addRow} {addCol}/>
        </div>
<!-- 
<button on:click={addCol}>AddCol</button>
<button on:click={addRow}>AddRow</button> -->