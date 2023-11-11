<script>
//@ts-nocheck
import ImgCodeTxt from "./ImgCodeTxt.svelte";
export let pulse;
export let items;
export let closeFs=()=>{};
export let spORfs;

$:{
   pulse;
   items = [...items];
}

function isFocus(item){
   // debugger;
   if (pulse >= item.extra.startTime && pulse < item.extra.endTime ){
       return true; 
   }else {
      return false;  
   }
}
</script> 
{#if spORfs=='fs'}
<button on:click={closeFs} class='text-xs text-yellow-600'>close fullscreen</button>
{/if}

<div class='justify-center sticky top-4   line-clamp-4 text-yellow-300'>
{#each items as item}
 {#if  isFocus(item) }    
        <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
        {#if item && item.extra[spORfs].length > 0 }    
                {#each item.extra[spORfs] as eq}    
                <ImgCodeTxt {eq} />        
                {/each}
        {/if}
        </div>
 {/if}
{/each}        
</div>
