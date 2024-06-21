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
        

<TrStrWithSet title="x0"    bind:itemFiled={item.x0} bind:extra={item} />
<TrStrWithSet title="y0"    bind:itemFiled={item.y0} bind:extra={item} />
<TrStrWithSet title="x1"    bind:itemFiled={item.x1} bind:extra={item} />
<TrStrWithSet title="y1"    bind:itemFiled={item.y1} bind:extra={item} />
<TrStrWithSet title="lineWidth"    bind:itemFiled={item.lineWidth} bind:extra={item} />
<TrStrWithSet title="arrowWidth"    bind:itemFiled={item.arrowWidth} bind:extra={item} />
<TrStrWithSet title="arrowHeight"    bind:itemFiled={item.arrowHeight} bind:extra={item} />
<TrStrWithSet title="startArrow"    bind:itemFiled={item.startArrow} bind:extra={item} />
<TrStrWithSet title="endArrow"    bind:itemFiled={item.endArrow} bind:extra={item} />


<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
</table>
</div>
