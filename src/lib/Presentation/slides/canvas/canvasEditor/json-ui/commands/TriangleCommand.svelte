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
            <TrTf title="filled" itemFiled={item.filled} />
            <TrNo title="X1" itemFiled={item.x1} />
            <TrNo title="Y1" itemFiled={item.y1} />
            <TrNo title="X2" itemFiled={item.x2} />
            <TrNo title="Y2" itemFiled={item.y2} />
            <TrNo title="X3" itemFiled={item.x3} />
            <TrNo title="Y3" itemFiled={item.y3} />
            <TrNo title="lineWidth" itemFiled={item.lineWidth} />
  
        
<CommonCommands  bind:item={item}/>
    </table>
</div>
