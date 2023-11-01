<script>
//@ts-nocheck
export let setStatus;
export let selectedStatus;
</script>

<div class="flex justify-center">
    <div class="bg-gray-600 text-white w-8/12 text-center rounded-md">
        Select Status
    </div>
</div>

<div class="flex justify-center w-full flex-wrap ">
<button on:click={()=>setStatus('all')}  class={`p-1 m-1 rounded-lg  px-2 ${selectedStatus== 'all'? 'bg-gray-400':'bg-gray-600' }`}>All</button>

<button on:click={()=>setStatus('unlocked')}  class={`p-1 m-1 rounded-lg  px-2 ${selectedStatus== 'unlocked'? 'bg-gray-400':'bg-gray-600' }`}>Unlocked</button>
<button on:click={()=>setStatus('fill')}  class={`p-1 m-1 rounded-lg  px-2 ${selectedStatus== 'fill'? 'bg-gray-400':'bg-gray-600' }`}>Fill</button>
<button on:click={()=>setStatus('locked')}  class={`p-1 m-1 rounded-lg  px-2 ${selectedStatus== 'locked'  ? 'bg-gray-400':'bg-gray-600' }`}>Locked</button>
<button on:click={()=>setStatus('final')}  class={`p-1 m-1 rounded-lg  px-2 ${selectedStatus== 'final' ? 'bg-gray-400':'bg-gray-600' }`}>Final</button>
</div>

<!-- </div> -->
