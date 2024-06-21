<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte"; 
import ShadowCommands from "./ShadowCommands.svelte";   
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   

import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        

<TrNoWithSet title="x0"    bind:itemFiled={item.x0} bind:extra={item} />
<TrNoWithSet title="y0"    bind:itemFiled={item.y0} bind:extra={item} />
<TrNoWithSet title="x1"    bind:itemFiled={item.x1} bind:extra={item} />
<TrNoWithSet title="y1"    bind:itemFiled={item.y1} bind:extra={item} />
<TrNoWithSet title="lineWidth"    bind:itemFiled={item.lineWidth} bind:extra={item} />
<TrNoWithSet title="arrowWidth"    bind:itemFiled={item.arrowWidth} bind:extra={item} />
<TrNoWithSet title="arrowHeight"    bind:itemFiled={item.arrowHeight} bind:extra={item} />



<TrTf title="startArrow"      bind:itemFiled={item.startArrow} />
<TrTf title="endArrow"      bind:itemFiled={item.endArrow} />


<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
</table>
</div>
