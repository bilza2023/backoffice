
<script>
//@ts-nocheck

export let fs; 
import HeadingImageEditor from "./HeadingImageEditor.svelte";
</script> 


<div id={`eqPart`} class= {`w-full bg-stone-900 text-center rounded-md justify-center p-2`} >

    
    {#if (fs.type == 'heading_image' )}
    <HeadingImageEditor bind:fs={fs} />
    {/if}
   
    
 
</div>       