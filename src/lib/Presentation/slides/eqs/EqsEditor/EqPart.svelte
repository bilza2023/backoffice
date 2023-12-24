
<script>
//@ts-nocheck
import EqTypeCode from './EqTypeCode.svelte';
import EqTypeText from './EqTypeText.svelte';
import EqTypeHdg from './EqTypeHdg.svelte';
export let item;
export let i;
// export let status;
</script> 
 
 <div class="flex justify-centre   w-full p-0 m-1 gap-1 rounded-md ">
 
    <div class="bg-stone-700 w-1/12 p-0 m-0 rounded-md">{i+1}</div>
  
    <input type="number" class="bg-stone-700 w-1/12 p-0 m-0 rounded-md" bind:value={item.extra.startTime} />
  
  
{#if item.extra.type == undefined || item.extra.type == 'code' || item.extra.type == ''}
<EqTypeCode {item} {i}/>
{/if}

{#if item.extra.type == 'text' || item.extra.type == 'txt'}
<EqTypeText {item} {i}/>
{/if}
    
{#if item.extra.type == 'heading' || item.extra.type == 'hdg'}
<EqTypeHdg {item} {i}/>
{/if}
    
    
</div>

