<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import TrNo from "./TrNo.svelte";   
    export let item;

</script>

<div class="flex flex-col w-full">
    <table class="border-collapse ">
           
        <TrNo title="X1" bind:itemFiled={item.x1}/>
        <TrNo title="Y1" bind:itemFiled={item.y1}/>
        <TrNo title="X2" bind:itemFiled={item.x2}/>
        <TrNo title="Y2" bind:itemFiled={item.y2}/>
        <TrNo title="Line Width" bind:itemFiled={item.lineWidth}/>
      
        
        <CommonCommands  bind:item={item}/>
 
    </table>
</div>
