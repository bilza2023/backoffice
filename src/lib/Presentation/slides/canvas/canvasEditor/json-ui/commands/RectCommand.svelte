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
        <TrNo title="x"         bind:itemFiled={item.x} />
        <TrNo title="y"         bind:itemFiled={item.y} />
        <TrNo title="width"     bind:itemFiled={item.width} />
        <TrNo title="height"    bind:itemFiled={item.height} />
        <TrTf title="fill"      bind:itemFiled={item.filled} />
        <TrNo title="lineWidth" bind:itemFiled={item.lineWidth} />
        
    
    <CommonCommands  bind:item={item}/>
    </table>
</div>
