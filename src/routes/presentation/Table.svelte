<script>
//@ts-nocheck
    // import { onMount } from "svelte";
// import VerticalBtnsTbl from './VerticalBtnsTbl.svelte';
// import Katex from 'svelte-katex';

export let code;
// export let j;
// export let updateTableData;

let parsedData=[];
$: {
  parsedData = JSON.parse(code);
}
</script>

<div class="flex justify-center  rounded-md w-full mx-auto mb-4 mt-2 gap-1">
{#if parsedData.length > 0}
    <div class="flex flex-col justify-center items-center m-1 p-1 rounded-md border-2 border-gray-300">
        {#each parsedData as row, rowIndex}
            <div class="flex justify-center gap-1">
                {#each row as cell, colIndex}
                    <div class='flex flex-col justify-center items-center bg-gray-900 m-1 p-1 px-4  rounded-md w-8/12'>
                    {cell}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
{/if}
</div><!--top flex for upper table-->
