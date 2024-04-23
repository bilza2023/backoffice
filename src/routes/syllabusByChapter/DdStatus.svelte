<script>
//@ts-nocheck
import { Icons } from "$lib/util";

export let setStatus;
export let selectedStatus;
export let toggleShowAllStatus;
export let showAllStatus;

export let totalChapterQuestions;
export let totalChapterUnlocked;
export let totalChapterFill;
export let totalChapterLocked;
export let totalChapterFinal;


</script>

<div class="flex justify-center">
    <div class="bg-gray-600 text-white w-8/12 text-center rounded-md">
        Select Status
    </div>
</div>

<div class="flex justify-center w-full flex-wrap ">
<button on:click={toggleShowAllStatus}  class={`p-1 m-1 rounded-lg  px-2 ${showAllStatus ? 'bg-green-800':'bg-stone-700' }`}>
All ( {totalChapterQuestions} )
{#if showAllStatus }
{Icons.BULB}
{:else}
{Icons.CROSS}
{/if }
</button>

<button on:click={()=>setStatus('unlocked')}  class={`p-1 m-1 rounded-lg  px-2 ${(selectedStatus == 'unlocked' && showAllStatus ==false)? 'bg-gray-400':'bg-gray-600' }`}>Empty ( {totalChapterUnlocked} )</button>

<button on:click={()=>setStatus('fill')}  class={`p-1 m-1 rounded-lg  px-2 ${(selectedStatus== 'fill'  && showAllStatus ==false)? 'bg-gray-400':'bg-gray-600' }`}>Fill ( {totalChapterFill} )</button>

<button on:click={()=>setStatus('locked')}  class={`p-1 m-1 rounded-lg  px-2 ${(selectedStatus== 'locked' && showAllStatus ==false)  ? 'bg-gray-400':'bg-gray-600' }`}>Locked ( {totalChapterLocked} )</button>

<button on:click={()=>setStatus('final')}  class={`p-1 m-1 rounded-lg  px-2 ${(selectedStatus== 'final'  && showAllStatus ==false) ? 'bg-gray-400':'bg-gray-600' }`}>Final ( {totalChapterFinal} )</button>
</div>

<!-- </div> -->
