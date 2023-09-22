<script>
export let inc;
export let dec;
export let count;
export let length;
</script>


<div class="flex justify-center">
<div class="inline-flex bg-gray-600 gap-1 border-1 border-white justify-center 
p-1 rounded-md">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold 
    py-2 px-1 rounded" on:click={dec}>&#8592;</button>
    <div class="text-2xl font-bold text-white mx-4">{count+1}/{length}</div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white 
    font-bold py-2 px-1 rounded" on:click={inc}>&#8594;</button>
</div>
</div>
