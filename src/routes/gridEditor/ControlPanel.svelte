<script>
//@ts-nocheck
export let selectedTd;
export let rows;
export let handleInput;
export let handleStartTimeInput;
export let handleEndTimeInput;
export let handleBorder;
let seletedRow = 0;
let seletedCol = 0;

$:{
    if (selectedTd) {
        let r = selectedTd.split('-');
        seletedRow = parseInt(r[0]);
        seletedCol = parseInt(r[1]);
        console.log("rseletedRow", seletedRow,seletedCol);
        // console.log("rows", rows[seletedRow][seletedCol].bb);
    }
}
</script>

<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">Sel TD</span>
<div class="bg-yellow-600 p-1 m-1 text-xs text-center w-8/12">{ selectedTd}</div>
</div>

<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">Content</span>
<input id="tdInput" class="bg-gray-600 mx-2 my-1 w-8/12" type="text"
 on:input={handleInput}>
</div>

<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">StartTime</span>
<input id="tdStartTimeInput" class="bg-gray-600 mx-2 my-1 w-8/12" type="number"
 on:input={handleStartTimeInput}>
</div>

<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">End Time</span>
<input id="tdEndTimeInput" class="bg-gray-600 mx-2 my-1 w-8/12" type="number"
 on:input={handleEndTimeInput}>
</div>


<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">Border L</span>
<button id="tdEndTimeInput" class="bg-gray-600 mx-2 my-1 w-8/12" type="number"
 on:click={()=>handleBorder(event ,"bl")}>{rows[seletedRow][seletedCol].bl}</button>
</div>


<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">Border T</span>
<button id="tdEndTimeInput" class="bg-gray-600 mx-2 my-1 w-8/12" type="number"
 on:click={()=>handleBorder(event ,"bt")}>{rows[seletedRow][seletedCol].bt}</button>
</div>


<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">Border R</span>
<button id="tdEndTimeInput" class="bg-gray-600 mx-2 my-1 w-8/12" type="number"
 on:click={()=>handleBorder(event ,"br")}>{rows[seletedRow][seletedCol].br}</button>
</div>


<div class="flex w-full ">
<span class="m-1 p-1 w-4/12">Border B</span>
<button id="tdEndTimeInput" class="bg-gray-600 mx-2 my-1 w-8/12" type="number"
 on:click={()=>handleBorder(event ,"bb")}>{rows[seletedRow][seletedCol].bb}</button>
</div>

