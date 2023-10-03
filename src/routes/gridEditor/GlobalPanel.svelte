<script>
//@ts-nocheck
export let grid;

</script>



<div class="flex flex-col justify-center items-center w-full">
<br>
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Background Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={grid.bgColor}>
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Grid Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={grid.gridColor}>
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Border Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={grid.cellBorderColor}>
    </div>
   
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Font Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={grid.cellFontColor}>
    </div>
    
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Font Size</div>
        <input class="w-8/12 p-1 m-1 rounded-md bg-gray-600" type="number" bind:value={grid.fontSize} step="0.25">
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Padding</div>
        <input class="w-8/12 p-1 m-1 rounded-md bg-gray-600" type="number" bind:value={grid.padding}>
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Margin</div>
        <input class="w-8/12 p-1 m-1 rounded-md bg-gray-600" type="number" bind:value={grid.margin}>
    </div>
<br>
<br>
<br>



</div>