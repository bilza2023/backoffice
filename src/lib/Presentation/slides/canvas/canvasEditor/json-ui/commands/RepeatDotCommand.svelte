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
     
        <TrNo title="numberOfDots"  bind:itemFiled={item.numberOfDots} />
        <TrNo title="initialX"      bind:itemFiled={item.initialX} />
        <TrNo title="initialY"      bind:itemFiled={item.initialY} />
        <TrNo title="xFactor"       bind:itemFiled={item.xFactor} />
        <TrNo title="yFactor"       bind:itemFiled={item.yFactor} />
        <TrNo title="width"         bind:itemFiled={item.width} />

<CommonCommands  bind:item={item}/>

</table>
</div>
