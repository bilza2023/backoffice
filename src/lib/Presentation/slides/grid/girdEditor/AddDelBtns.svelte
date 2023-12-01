<script>
//@ts-nocheck
// import getNewCol from "./getNewCol.js";
// import {runningTime} from "./store.js";
// import {start,stop} from "./main.js";
// $: rTime = $runningTime;

export let addRow;
export let addCol;
export let delRow;
export let delCol;

</script>

<div class="flex justify-center w-full m-0 p-1 bg-gray-900 gap-1">
    <button class="bg-green-800 p-1 m-1 rounded-md text-xs"
    on:click={addRow}>Add Row</button>
    
    <button class="bg-green-800 p-1 m-1 rounded-md text-xs"
    on:click={addCol}>Add Col</button>
    
    <button class="bg-red-800 p-1 m-1 rounded-md text-xs"
    on:click={delRow}>Del Row</button>
    
    <button class="bg-red-800 p-1 m-1 rounded-md text-xs"
    on:click={delCol}>Del Col</button>
    
    <!-- <button class="bg-green-400 p-1 m-1 rounded-md text-xs" -->
    <!-- on:click={save}>Save</button> -->
</div>
