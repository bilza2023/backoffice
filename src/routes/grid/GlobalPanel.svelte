<script>
//@ts-nocheck
export let global;

</script>



<div class="flex flex-col justify-center items-center w-full">
<br>
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Background Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={global.bgColor}>
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Grid Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={global.gridColor}>
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Border Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={global.cellBorderColor}>
    </div>
   
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Font Color</div>
        <input class="w-8/12 p-1 m-1 rounded-md" type="color" bind:value={global.cellFontColor}>
    </div>
    
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Font Size</div>
        <input class="w-8/12 p-1 m-1 rounded-md bg-gray-600" type="number" bind:value={global.fontSize} step="0.25">
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Padding</div>
        <input class="w-8/12 p-1 m-1 rounded-md bg-gray-600" type="number" bind:value={global.padding}>
    </div>
   
    <div class="flex items-center justify-center w-6/12">
        <div class="w-4/12 p-1 m-1 rounded-md">Cell Margin</div>
        <input class="w-8/12 p-1 m-1 rounded-md bg-gray-600" type="number" bind:value={global.margin}>
    </div>
<br>
<br>
<br>



</div>