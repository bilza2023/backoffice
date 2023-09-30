<script>
//@ts-nocheck
    // import { onMount } from "svelte";
import VerticalBtnsTbl from './VerticalBtnsTbl.svelte';
import Katex from 'svelte-katex';

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
// onMount(()=>{
//   parsedData = JSON.parse(item);
//   // console.log(parsedData);
// });


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

  // Function to add a new column
  const addCol = () => {
    parsedData.forEach(row => row.push(''));
    // item = JSON.stringify(parsedData);
    // parsedData = [...parsedData];
    updateTableData(j,JSON.stringify(parsedData));
    redraw();
  }
  // Function to delete the last row
const delRow = () => {
  if (parsedData.length > 0) {
    parsedData.pop(); // Remove the last row
    item = JSON.stringify(parsedData);
    parsedData = [...parsedData];
    redraw();
  }
}

// Function to delete the last column
const delCol = () => {
  if (parsedData.length > 0 && parsedData[0].length > 0) {
    parsedData.forEach(row => row.pop()); // Remove the last column from each row
    item = JSON.stringify(parsedData);
    parsedData = [...parsedData];
    redraw();
  }
}

</script>

<div class="flex justify-center  rounded-md w-full mx-auto mb-4 mt-2 gap-1">
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
    <div class='w-2/12'>
            <VerticalBtnsTbl {delRow} {delCol} {moveUp} {moveDown} {del} {j} {addRow} {addCol}/>
    </div>

{/if}
</div><!--top flex for upper table-->

<!-- <hr/> -->

<div class="flex justify-center  rounded-md w-full mx-auto mb-4 mt-2 gap-1">
{#if parsedData.length > 0}
    <div class="flex flex-col justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300 w-full">
        {#each parsedData as row, rowIndex}
            <div class="flex justify-center gap-1 w-full">
                {#each row as cell, colIndex}
                    <div class='flex flex-col justify-center items-center w-full'>
                        <div class="bg-gray-900 m-1 p-1 rounded-md w-8/12">
                        <Katex>{cell}</Katex>
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
    

{/if}
</div><!--top flex for upper table-->
