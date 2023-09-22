<script>
//@ts-nocheck
import ImgCodeTxt from "./ImgCodeTxt.svelte";
// export let permContent;
export let eqs;
</script>

<div class='justify-center line-clamp-4 text-yellow-300'>
   
        <div class='w-full  rounded-md m-1 p-1 bg-stone-600 text-center'>
        {#each eqs as eq}
                {#if (eq.isf ==true)}    
                        {#each eq.sp as theSp}    
                        <ImgCodeTxt  eq={theSp} />
                        {/each}
                {/if}
        {/each}
        </div>

</div>
