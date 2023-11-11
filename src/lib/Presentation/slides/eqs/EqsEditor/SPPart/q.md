I have a svelte component Table.svlete. It is child component of SPFSPart.svelte.
The data inside the Table.svelte component is saved in stringified form into sp.code item.
The problem is that when saved the data inside Table is not saved WHY?

here is SPFSPart.svelte

<script>
//@ts-nocheck
import CodeTxt from '../CodeTxt.svelte';
import VerticalBtns from './VerticalBtns.svelte';
import Table from './Table.svelte';
// import SpToolBar from './SPToolBar.svelte';
import FSSPToolBar from './FSSPToolBar.svelte';

//theArray = eq.sp or eq.fs
export let theArray; 
export let clr;
export let arrayName;
export let redraw;

function moveUp(j) {
  if (j <= 0) {return;}

    const spToMove = theArray[j];
    theArray.splice(j, 1);
    theArray.splice(j - 1, 0, spToMove);
  redraw();
}
function moveDown(j) {
  if (j == theArray.length - 1) {return;}
    const spToMove = theArray[j];
    theArray.splice(j, 1);
    theArray.splice(j + 1, 0, spToMove);
    redraw();
}
function del(j) {
    theArray.splice(j, 1);
  redraw();
}
</script> 


<div id={`eqPart`} class= {`w-full ${clr} text-center rounded-md justify-center p-2`} >

<!-- <SpToolBar  {i} {addSpTxtCode} {addTable}/> -->
<FSSPToolBar   {theArray} {arrayName} {redraw}/>
 
{#each theArray as sp, j}

    {#if (sp.type == 'code')}
    <div class="flex justify-center bg-stone-600 rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">

        <textarea class="bg-stone-900 rounded-md w-5/12 mx-auto "
        bind:value={sp.code}></textarea>

        <div class="bg-stone-900 rounded-md w-5/12 mx-auto">
        <CodeTxt eq={sp}/>
        </div>
 
        <div class='w-2/12'>
            <VerticalBtns  {moveUp} {moveDown} {del} {j}/>
        </div>

    </div>
    {/if}

    {#if (sp.type == 'text' || sp.type == 'txt' )}
    <div class="flex justify-center  rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">

        <textarea class=" bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}></textarea>

        <div class='w-2/12'>
            <VerticalBtns {moveUp} {moveDown} {del} {j}/>
        </div>

    </div>
    {/if}
    
    {#if (sp.type == 'img' || sp.type == 'image' )}
    <div class="flex justify-center  rounded-md w-8/12 mx-auto mb-4 mt-2 gap-1">

        <input type="text" class=" bg-stone-900 rounded-md w-10/12 mx-auto" bind:value={sp.code}/> 

        <div class='w-2/12'>
            <VerticalBtns {moveUp} {moveDown} {del} {j}/>
        </div>

    </div>
    {/if}
    
    {#if (sp.type == 'table' || sp.type == 'tbl' )}
    <div class="flex justify-center  rounded-md w-full mx-auto mb-4 mt-2 gap-1">
          <Table item = {sp.code} {moveUp} {moveDown} {del}{redraw} {j}/>
    </div>
    {/if}

 
{/each}

</div>       

here is Table.svelte
<script>
//@ts-nocheck
    import { onMount } from "svelte";
import VerticalBtnsTbl from './VerticalBtnsTbl.svelte';

export let item;
export let redraw;
export let moveUp;
export let moveDown;
export let del;
export let j;

let parsedData=[];

onMount(()=>{
  parsedData = JSON.parse(item);
  // console.log(parsedData);
});


// Function to handle input change
const handleInputChange = (newValue, rowIndex, colIndex) => {
  // parsedData[rowIndex][colIndex] = newValue.code.replace(/\s+|\n/g, '');
  parsedData[rowIndex][colIndex] = newValue;
// console.log("newValue",newValue,"rowIndex", rowIndex,"colIndex", colIndex)
// console.log("parsedData" , parsedData);
  item = JSON.stringify(parsedData);
  console.log(item);
}
 // Function to add a new row
  const addRow = () => {
    const newRow = Array(parsedData[0].length).fill('');
    parsedData.push(newRow);
    item = JSON.stringify(parsedData);
    parsedData = [...parsedData];
    redraw();
  }

  // Function to add a new column
  const addCol = () => {
    parsedData.forEach(row => row.push(''));
    item = JSON.stringify(parsedData);
    parsedData = [...parsedData];
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