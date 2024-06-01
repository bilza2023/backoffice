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
        
        <TrNo title="X0"                bind:itemFiled={item.x0} />
        <TrNo title="Y0"                bind:itemFiled={item.y0} />
        <TrNo title="X1"                bind:itemFiled={item.x1} />
        <TrNo title="Y1"                bind:itemFiled={item.y1} />
        <TrNo title="lineWidth"         bind:itemFiled={item.lineWidth} />
        <TrNo title="arrowWidth"        bind:itemFiled={item.arrowWidth} />
        <TrNo title="arrowHeight"       bind:itemFiled={item.arrowHeight} />
        <TrTf title="startArrow"        bind:itemFiled={item.startArrow} />
        <TrTf title="endArrow"          bind:itemFiled={item.endArrow} />

<CommonCommands  bind:item={item}/>

</table>
</div>
