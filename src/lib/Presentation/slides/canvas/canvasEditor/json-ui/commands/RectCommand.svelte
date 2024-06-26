<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   
import GapDashCommands from "./GapDashCommands.svelte";   

import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrProp from "./TrProp.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
    // console.log("item",item);
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">

        
        <TrProp title="x" bind:extra={item}  />  
        <TrProp title="y"  bind:extra={item}  />  
        <TrProp title="width"  bind:extra={item}  />  
        <TrProp title="height"  bind:extra={item}  />  
        <TrProp title="lineWidth"  bind:extra={item}  />  
        

        <!-- <TrNoWithSet title="y" bind:itemFiled=        {item.y} bind:extra={item}  />   -->
        <!-- <TrNoWithSet title="width" bind:itemFiled=    {item.width} bind:extra={item}  />   -->
        <!-- <TrNoWithSet title="height" bind:itemFiled=   {item.height} bind:extra={item}  />   -->
        <!-- <TrNoWithSet title="lineWidth" bind:itemFiled={item.lineWidth} bind:extra={item}  />   -->

   
   
        <TrTf title="fill"      bind:itemFiled={item.filled} />
        
    
    <GapDashCommands bind:item={item}/>

    <CommonCommands  bind:item={item}/>
    <ShadowCommands  bind:item={item} />
    </table>
</div>
