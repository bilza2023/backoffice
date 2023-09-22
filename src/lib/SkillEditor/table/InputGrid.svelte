<script>
//@ts-nocheck
import {onMount,Icons} from '$lib/util';
import {questionsStore} from '../../../routes/editTest/store';
export let questionIndex;
export let contentIndex;

export let colWidth = 200;
$:content =  $questionsStore[questionIndex].content[contentIndex].content;

</script>
<div>

</div>


{#if content.length > 0}

<div class='flex flex-col w-full overflow-x-auto overflow-y-auto'>
  {#each content as row, i}
    <div class='flex justify-center w-full overflow-x-auto overflow-y-auto'>
      {#each row as col, j}
        <textarea 
         style={`width: ${colWidth}px`}
        class= 'bg-gray-900 text-white p-1 m-1 border-2 
        border-gray-400'
        bind:value={$questionsStore[questionIndex].content[contentIndex].content[i][j]}></textarea>
      {/each}
    </div>
  {/each}
</div>

{/if}
