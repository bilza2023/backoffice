<script>
export let setPageState;
</script>



<div class="w-20">
  <button class="w-full flex flex-col items-center p-2 bg-gray-800 rounded hover:bg-gray-700 active:bg-gray-900"
  on:click={()=>setPageState('combined')}
    >
      <span class="text-2xl">👥</span>
      <span class="text-sm font-medium text-white">Combined</span>
    </button>
  </div>