<script>
    //@ts-nocheck
    import CommonCommands from "./CommonCommands.svelte";   
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
     
        <TrNo title="numberOfDots" itemFiled={item.numberOfDots} />
        <TrNo title="initialX" itemFiled={item.initialX} />
        <TrNo title="initialY" itemFiled={item.initialY} />
        <TrNo title="xFactor" itemFiled={item.xFactor} />
        <TrNo title="yFactor" itemFiled={item.yFactor} />
        <TrNo title="width" itemFiled={item.width} />

<CommonCommands  bind:item={item}/>

</table>
</div>
