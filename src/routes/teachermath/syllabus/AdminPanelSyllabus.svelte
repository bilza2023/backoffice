<script>
//@ts-nocheck
export let setQuestionStatus;

</script>



<div class="flex justify-center m-1 p-1 bg-gray-700">
<!-- <button class="p-1 m-1 bg-green-800 rounded-md" on:click={()=>setQuestionStatus("")}>Get All</button> -->
<button class="p-1 m-1 bg-green-700 rounded-md" on:click={()=>setQuestionStatus('empty')}>Get Empty</button>
<button class="p-1 m-1 bg-green-500 rounded-md" on:click={()=>setQuestionStatus('fill')}>Get Fill</button>
<button class="p-1 m-1 bg-green-400 rounded-md" on:click={()=>setQuestionStatus('final')}>Get Final</button>

</div>