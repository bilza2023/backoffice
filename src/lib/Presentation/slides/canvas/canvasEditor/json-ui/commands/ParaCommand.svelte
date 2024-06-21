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
import TrTextArea from "./TrTextArea.svelte";   
    export let item;
    function randNo(length=8){
    const digits = '0123456789';
  let result = '';
  const digitsLength = digits.length;
  for (let i = 0; i < length; i++) {
      result += digits.charAt(Math.floor(Math.random() * digitsLength));
  }
  return result;
  }

</script>

<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <TrTextArea title="Text"        bind:itemFiled={item.text} />

        <TrStrWithSet title="x" bind:itemFiled=        {item.x} bind:extra={item}  />  
        <TrStrWithSet title="y" bind:itemFiled=        {item.y} bind:extra={item}  />  
        <TrStrWithSet title="font" bind:itemFiled=        {item.font} bind:extra={item}  />  
        <TrStrWithSet title="lineHeightOffset" bind:itemFiled=        {item.lineHeightOffset} bind:extra={item}  />  

        <TrStrWithSet title="xOffset" bind:itemFiled={item.xOffset} bind:extra={item}  />  

      
        
<CommonCommands  bind:item={item}/>
<ShadowCommands  bind:item={item} />
</table>
</div>



