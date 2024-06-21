<script>
//@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";  
import ShadowCommands from "./ShadowCommands.svelte";   


import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   
import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
export let item;
</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
    
      <!-- <TrNo title="X" bind:itemFiled={item.x}/> -->
      <!-- <TrNo title="Y" bind:itemFiled={item.y}/> -->
      <TrNoWithSet title="x" bind:itemFiled={item.x} bind:extra={item} min=0 max=25/>    
      <TrNoWithSet title="y" bind:itemFiled={item.y} bind:extra={item} min=0 max=25/>    

      <TrNoWithSet title="radiusX" bind:itemFiled={item.radiusX} bind:extra={item} min=0 max=25/>    
      <TrNoWithSet title="radiusY" bind:itemFiled={item.radiusY} bind:extra={item} min=0 max=25/>    
      <TrNoWithSet title="rotation" bind:itemFiled={item.rotation} bind:extra={item} min=0 max=25/>    
      <TrNoWithSet title="startAngle" bind:itemFiled={item.startAngle} bind:extra={item} min=0 max=25/>    
      <TrNoWithSet title="endAngle" bind:itemFiled={item.endAngle} bind:extra={item} min=0 max=25/>    
      <TrNoWithSet title="lineWidth" bind:itemFiled={item.lineWidth} bind:extra={item} min=0 max=25/>    


      <!-- <TrNo title="Radius X" bind:itemFiled={item.radiusX}/> -->
      <!-- <TrNo title="Radius Y" bind:itemFiled={item.radiusY}/> -->
      <!-- <TrNo title="Rotation" bind:itemFiled={item.rotation}/> -->
      <!-- <TrNo title="Start Angle" bind:itemFiled={item.startAngle}/> -->
      <!-- <TrNo title="End Angle" bind:itemFiled={item.endAngle}/> -->
      <!-- <TrNo title="Line Width" bind:itemFiled={item.lineWidth}/> -->

      <TrTf title="Fill" bind:itemFiled={item.fill}/>
       
       
<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
    </table>
</div>
