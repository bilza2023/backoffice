<script>
    //@ts-nocheck
    import CommonCommands from "./CommonCommands.svelte";   
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item ;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        <!-- <TrNo title="End Angle" bind:itemFiled={item.endAngle}/> -->
        <TrNo title="X" bind:itemFiled={item.x}/>
        <TrNo title="Y" bind:itemFiled={item.y}/>
        <TrText title="Label" bind:itemFiled={item.label}/>
        <TrNo title="Dot Width" bind:itemFiled={item.dot_width}/>
        <TrColor title="Text Color" bind:itemFiled={item.text_color}/>
        <TrNo title="Text Size" bind:itemFiled={item.text_size}/>
        <TrTf title="Fill" bind:itemFiled={item.fill}/>
        
<CommonCommands  bind:item={item}/>
    </table>
</div>
