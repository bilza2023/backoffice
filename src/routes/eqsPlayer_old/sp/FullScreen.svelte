<head:svelte>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</head:svelte>
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
                        {#each eq.fs as fs}    
                        <ImgCodeTxt  eq={fs} />
                        {/each}
                {/if}
        {/each}
        </div>

</div>
