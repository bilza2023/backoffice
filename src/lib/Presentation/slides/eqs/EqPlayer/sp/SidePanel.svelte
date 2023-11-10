<script>
//@ts-nocheck
import ImgCodeTxt from "./ImgCodeTxt.svelte";
export let pulse;
export let items;
export let spORfs= 'sp';

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

<div class='justify-center line-clamp-4 text-yellow-300'>
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
