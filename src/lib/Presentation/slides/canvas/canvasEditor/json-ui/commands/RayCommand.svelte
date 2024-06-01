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
        
        <TrNo title="X0" itemFiled={item.x0} />
        <TrNo title="Y0" itemFiled={item.y0} />
        <TrNo title="X1" itemFiled={item.x1} />
        <TrNo title="Y1" itemFiled={item.y1} />
        <TrNo title="lineWidth" itemFiled={item.lineWidth} />
        <TrNo title="arrowWidth" itemFiled={item.arrowWidth} />
        <TrNo title="arrowHeight" itemFiled={item.arrowHeight} />
        <TrTf title="startArrow" itemFiled={item.startArrow} />
        <TrTf title="endArrow" itemFiled={item.endArrow} />

<CommonCommands  bind:item={item}/>

</table>
</div>
