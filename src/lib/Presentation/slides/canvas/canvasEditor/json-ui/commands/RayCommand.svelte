<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte"; 
import ShadowCommands from "./ShadowCommands.svelte";   
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   
import GapDashCommands from "./GapDashCommands.svelte";   
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
import TrPropNumber from "../commonCommands/TrPropNumber.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        

<TrNo       title="x0"             bind:extra={item} />
<TrNo       title="y0"             bind:extra={item} />
<TrNo       title="x1"             bind:extra={item} />
<TrNo       title="y1"             bind:extra={item} />
<TrPropNumber title="lineWidth"    bind:extra={item}  />  
<!-- <TrNo       title="lineWidth"      bind:extra={item} /> -->
<TrNo       title="arrowWidth"     bind:extra={item} />
<TrNo       title="arrowHeight"    bind:extra={item} />



<!-- <TrTf title="startArrow"      bind:itemFiled={item.startArrow} /> -->
<!-- <TrTf title="endArrow"      bind:itemFiled={item.endArrow} /> -->


<GapDashCommands bind:item={item}/>

<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
</table>
</div>
