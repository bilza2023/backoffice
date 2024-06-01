<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import TrNo from "./TrNo.svelte";   
// import TrText from "./TrText.svelte";   
// import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <TrNo title="X" bind:itemFiled={item.x}/>
        <TrNo title="Y" bind:itemFiled={item.y}/>
        <TrNo title="Radius" bind:itemFiled={item.radius}/>
        <TrNo title="Start Angle" bind:itemFiled={item.startAngle}/>
        <TrNo title="End Angle" bind:itemFiled={item.endAngle}/>
        <TrTf title="Fill" bind:itemFiled={item.fill}/>
        <TrNo title="Line Width" bind:itemFiled={item.lineWidth}/>
        
        
    <CommonCommands  bind:item={item}/>    
    </table>
</div>
