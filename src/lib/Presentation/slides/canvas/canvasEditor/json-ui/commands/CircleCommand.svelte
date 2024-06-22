<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrTFWithSet from "./TrTFWithSet.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   

import TrNo from "./TrNo.svelte";   
// import TrText from "./TrText.svelte";   
// import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <TrNoWithSet title="x" bind:itemFiled={item.x} bind:extra={item} min=0 max=25 />  
        <TrNoWithSet title="y" bind:itemFiled={item.y} bind:extra={item} min=0 max=25 />  
        <TrNoWithSet title="radius" bind:itemFiled={item.radius} bind:extra={item} min=0 max=25 />  
        <TrNoWithSet title="startAngle" bind:itemFiled={item.startAngle} bind:extra={item} min=0 max=25 />  
        <TrNoWithSet title="endAngle" bind:itemFiled={item.endAngle} bind:extra={item} min=0 max=25 />  
        <TrNoWithSet title="lineWidth" bind:itemFiled={item.lineWidth} bind:extra={item} min=0 max=25 />  
      
<!--/////////////////////-->

    <TrTFWithSet title="fill" bind:itemFiled={item.fill} bind:extra={item} />   
        
    <CommonCommands  bind:item={item} />   
    <ShadowCommands  bind:item={item} /> 
    
    </table>
</div>
