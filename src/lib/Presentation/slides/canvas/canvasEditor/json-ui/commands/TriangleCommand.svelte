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
            <TrTf title="filled"    bind:itemFiled={item.filled} />
            <TrNo title="X1"        bind:itemFiled={item.x1} />
            <TrNo title="Y1"        bind:itemFiled={item.y1} />
            <TrNo title="X2"        bind:itemFiled={item.x2} />
            <TrNo title="Y2"        bind:itemFiled={item.y2} />
            <TrNo title="X3"        bind:itemFiled={item.x3} />
            <TrNo title="Y3"        bind:itemFiled={item.y3} />
            <TrNo title="lineWidth" bind:itemFiled={item.lineWidth} />
  
        
<CommonCommands  bind:item={item}/>
    </table>
</div>
