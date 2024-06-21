<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import ShadowCommands from "./ShadowCommands.svelte";   
import GapDashCommands from "./GapDashCommands.svelte";   

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
            
 
<TrNoWithSet title="x1"    bind:itemFiled={item.x1} bind:extra={item}  />              
<TrNoWithSet title="y1"    bind:itemFiled={item.y1} bind:extra={item}  />              
<TrNoWithSet title="x2"    bind:itemFiled={item.x2} bind:extra={item}  />              
<TrNoWithSet title="y2"    bind:itemFiled={item.y2} bind:extra={item}  />              
<TrNoWithSet title="x3"    bind:itemFiled={item.x3} bind:extra={item}  />              
<TrNoWithSet title="y3"    bind:itemFiled={item.y3} bind:extra={item}  /> 
             
<TrNoWithSet title="lineWidth" bind:itemFiled={item.lineWidth} bind:extra={item}  />              
   
<TrTf title="filled"    bind:itemFiled={item.filled} />
           


<GapDashCommands bind:item={item}/>

<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
    </table>
</div>
