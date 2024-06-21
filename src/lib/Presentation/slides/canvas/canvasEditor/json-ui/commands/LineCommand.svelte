<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  

import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   
import GapDashCommands from "./GapDashCommands.svelte";   



import TrNo from "./TrNo.svelte";   
    export let item;

</script>

<div class="flex flex-col w-full">
    <table class="border-collapse ">
           
        <!-- <TrNo title="X1" bind:itemFiled={item.x1}/> -->
        <!-- <TrNo title="Y1" bind:itemFiled={item.y1}/> -->

        <TrNoWithSet title="x1" bind:itemFiled={item.x1} bind:extra={item} min=0 max=45/>  
        <TrNoWithSet title="y1" bind:itemFiled={item.y1} bind:extra={item} min=0 max=25/>  
        
        <TrNoWithSet title="x2" bind:itemFiled={item.x2} bind:extra={item} min=0 max=45/>  
        <TrNoWithSet title="y2" bind:itemFiled={item.y2} bind:extra={item} min=0 max=25/>  
        
        <!-- <TrNo title="X2" bind:itemFiled={item.x2}/> -->
        <!-- <TrNo title="Y2" bind:itemFiled={item.y2}/> -->
        
        <TrNoWithSet title="lineWidth" bind:itemFiled={item.lineWidth} bind:extra={item} min=0 max=25/>  
        <!-- <TrNo title="Line Width" bind:itemFiled={item.lineWidth}/> -->
      
        
        <GapDashCommands bind:item={item}/>

        <CommonCommands  bind:item={item}/>
        <ShadowCommands  bind:item={item} />
    </table>
</div>
