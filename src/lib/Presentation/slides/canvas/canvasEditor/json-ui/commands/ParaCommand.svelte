<script>
    //@ts-nocheck
    import CommonCommands from "./CommonCommands.svelte";   
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
        <TrNo title="X"             bind:itemFiled={item.x} />
        <TrNo title="Y"             bind:itemFiled={item.y} />
        <TrText title="Font"        bind:itemFiled={item.font} />
        
        <TrNo title="lineHeightOffset" bind:itemFiled={item.lineHeightOffset} />
        <TrNo title="xOffset" bind:itemFiled={item.xOffset} />
      
        
<CommonCommands  bind:item={item}/>

</table>
</div>



