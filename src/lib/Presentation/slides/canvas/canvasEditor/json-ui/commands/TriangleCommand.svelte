<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import ShadowCommands from "./ShadowCommands.svelte";   

import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   

import TrNo from "./TrNo.svelte";   
// import TrText from "./TrText.svelte";   
// import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
            <TrTf title="filled"    bind:itemFiled={item.filled} />
           
 
<TrStrWithSet title="x1"    bind:itemFiled={item.x1text} bind:extra={item}  />              
<TrStrWithSet title="y1"    bind:itemFiled={item.y1text} bind:extra={item}  />              
<TrStrWithSet title="x2"    bind:itemFiled={item.x2text} bind:extra={item}  />              
<TrStrWithSet title="y2"    bind:itemFiled={item.y2text} bind:extra={item}  />              
<TrStrWithSet title="x3"    bind:itemFiled={item.x3text} bind:extra={item}  />              
<TrStrWithSet title="y3"    bind:itemFiled={item.y3text} bind:extra={item}  /> 
             
<TrStrWithSet title="lineWidth" bind:itemFiled={item.lineWidth} bind:extra={item}  />              
   
        
<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
    </table>
</div>
