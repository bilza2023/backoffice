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

        <TrStrWithSet title="x" bind:itemFiled=        {item.x} bind:extra={item}  />  
        <TrStrWithSet title="y" bind:itemFiled=        {item.y} bind:extra={item}  />  
        <TrStrWithSet title="width" bind:itemFiled=    {item.width} bind:extra={item}  />  
        <TrStrWithSet title="height" bind:itemFiled=   {item.height} bind:extra={item}  />  
        <TrStrWithSet title="lineWidth" bind:itemFiled={item.lineWidth} bind:extra={item}  />  

        <!-- <TrNo title="x"         bind:itemFiled={item.x} />
        <TrNo title="y"         bind:itemFiled={item.y} />
        <TrNo title="width"     bind:itemFiled={item.width} />
        <TrNo title="height"    bind:itemFiled={item.height} />
        <TrNo title="lineWidth" bind:itemFiled={item.lineWidth} /> -->
        
        <TrTf title="fill"      bind:itemFiled={item.filled} />
        
    
    <CommonCommands  bind:item={item}/>
    <ShadowCommands  bind:item={item} />
    </table>
</div>
