
<script>
//@ts-nocheck
import EqTypeCode from './EqTypeCode.svelte';
import EqTypeText from './EqTypeText.svelte';
import EqTypeHdg from './EqTypeHdg.svelte';
export let eq;
export let i;
// export let status;
</script> 
 
 <div class="flex justify-centre   w-full p-0 m-1 gap-1 rounded-md ">
    <div class="bg-stone-700 w-1/12 p-0 m-0 rounded-md">{i+1}</div>
      <!--- first eq.eqStartTime must be 0 always  -->
    {#if i==0}
    <input type="text" class="bg-stone-700 w-1/12 p-0 m-0 rounded-md" value={0}  disabled={true}/>
    {:else}
    <input type="text" class="bg-stone-700 w-1/12 p-0 m-0 rounded-md" bind:value={eq.eqStartTime}  disabled={status !== "final" ? true:false}/>
    {/if}  

{#if eq.type == undefined || eq.type == 'code' || eq.type == ''}
<EqTypeCode {eq} {i}/>
{/if}

{#if eq.type == 'text' || eq.type == 'txt'}
<EqTypeText {eq} {i}/>
{/if}
    
{#if eq.type == 'heading' || eq.type == 'hdg'}
<EqTypeHdg {eq} {i}/>
{/if}
    
    
</div>

