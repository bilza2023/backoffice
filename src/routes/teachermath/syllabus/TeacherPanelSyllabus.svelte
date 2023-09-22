<script>
//@ts-nocheck
export let getRecords;

</script>



<div class="flex justify-center m-1 p-1 bg-gray-700">
<!-- <button class="p-1 m-1 bg-green-800 rounded-md" on:click={()=>getRecords("")}>Get All</button> -->
<button class="p-1 m-1 bg-green-700 rounded-md" on:click={()=>getRecords('empty')}>Get Empty</button>
<button class="p-1 m-1 bg-green-500 rounded-md" on:click={()=>getRecords('fill')}>Get Fill</button>

</div>