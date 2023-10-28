<script>
//@ts-nocheck
import ImgCodeTxt from "./ImgCodeTxt.svelte";
import {currentEqStore} from "../store";

$:currentEq   = $currentEqStore;

</script> 
{#if currentEq}
<div class='justify-center line-clamp-4 text-yellow-300'>
   
        <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
        {#if currentEq && currentEq.sp.length > 0 }    
                {#each currentEq.sp as eq}    
                <ImgCodeTxt {eq} />        
                {/each}
        {/if}
        </div>

</div>
{/if}
