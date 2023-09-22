
<script>
//@ts-nocheck
import CodeTxt from '../CodeTxt.svelte';
import VerticalBtns from './VerticalBtns.svelte';
import Table from './Table.svelte';
// import SpToolBar from './SPToolBar.svelte';
import FSSPToolBar from '../FSSPToolBar.svelte';

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
          <Table item = {sp.code} {moveUp} {moveDown} {del} {j}/>
    </div>
    {/if}

 
{/each}

</div>       