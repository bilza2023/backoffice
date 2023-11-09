
<script>
//@ts-nocheck

export let fs; 
import HdgImgEd from "./editors/HdgImgEd.svelte";
import Hdg2img2 from "./editors/Hdg2img2.svelte";
import HdgGp from "./editors/HdgGp.svelte";
import TxtGp from "./editors/TxtGp.svelte";
import ToolBar from "./ToolBar.svelte";
function redraw(){fs=fs;}

</script> 

<ToolBar bind:fs={fs} {redraw}/>

<div id={`eqPart`} class= {`w-full bg-stone-900 text-center rounded-md justify-center p-2`} >

    
    {#if (fs.type == 'hdg_img' )}
    <HdgImgEd bind:fs={fs}/>
    {/if}
    
    {#if (fs.type == 'hdg2_img2' )}
    <Hdg2img2 bind:fs={fs} />
    {/if}
    {#if (fs.type == 'hdg_gp' )}
    <HdgGp bind:fs={fs} />
    {/if}
    
    {#if (fs.type == 'txt_gp' )}
    <TxtGp bind:fs={fs} />
    {/if}
   
    
 
</div>       