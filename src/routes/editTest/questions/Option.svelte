<script>
// @ts-nocheck

export let option;
export let question;
export let deleteOption;
export let mark_correct;

</script>

   <div class="flex mb-1 border-2 border-gray-400 mx-10">    
          
          <input
          class="bg-gray-500 text-white w-8/12 " 
          type="text" bind:value={option.content} 
          />
          
          {#if question.correctOptions.includes(option.id)}
          <button class="w-2/12 bg-green-600 rounded-sm focus:outline-none active:bg-green-400 hover:bg-green-500 hover:cursor-pointer mx-2 my-1"
          on:click={mark_correct(option.id)}>
          <span class="text-xl white-icon">👍</span>  
          </button>
          {:else}
          <button class="w-2/12 bg-gray-600 rounded-sm focus:outline-none active:bg-green-900 hover:bg-green-500 hover:cursor-pointer mx-2 my-1"
          on:click={mark_correct(option.id)}>
          <span class="text-xl white-icon">👍</span>
          </button>
          {/if}
          
<button class="w-2/12 bg-gray-600 rounded-sm focus:outline-none active:bg-red-900 hover:bg-red-500 hover:cursor-pointer mx-2 my-1"
          on:click={()=>deleteOption(option.id)}>
          <span class="text-xl">🗑️</span>
</button>

</div> 