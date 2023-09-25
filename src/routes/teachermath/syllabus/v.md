
---------This can be a seperate Comp-----------
<div class="flex justify-center m-1 p-1 bg-gray-700">
<button class= {`${questionStatus == 'empty' ? 'bg-green-700' : 'bg-gray-600'} p-1 m-1  rounded-md`} 
on:click={()=>setQuestionStatus('empty')}>Get Empty</button>
<button class={`${questionStatus == 'fill' ? 'bg-green-700' : 'bg-gray-600'} p-1 m-1  rounded-md`}  on:click={()=>setQuestionStatus('fill')}>Get Fill By Me</button>
{#if isAdmin == true}
<button class={`${questionStatus == 'final' ? 'bg-green-700' : 'bg-gray-600'} p-1 m-1  rounded-md`}  on:click={()=>setQuestionStatus('final')}>Get Final</button>
{/if}
</div>
<!------------------------>
