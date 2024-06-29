<script>
    //@ts-nocheck
import CommonCommands from "./CommonCommands.svelte";   
import ShadowCommands from "./ShadowCommands.svelte";   
import TrNoWithSet from "./TrNoWithSet.svelte";   
import TrStrWithSet from "./TrStrWithSet.svelte";   

import TrNo from "./TrNo.svelte";   
import TrText from "./TrText.svelte";   
// import TrColor from "./TrColor.svelte";   
import TrTf from "./TrTf.svelte";   
    export let item;

async    function srcChanged(){
const c = new Image();
c.src = 'https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/' + item.src + '.jpg';

        c.onload = () => {
            item.image = c;
        };

        c.onerror = () => {
            console.error('Image failed to load');
            item.image = null;
        };
}    
</script>
 
<div class="flex flex-col w-full">
    <table class="border-collapse border-2 border-white">
        
        <!-- https://taleem-media.blr1.cdn.digitaloceanspaces.com/bucket/ -->
<tr>
    <td class="border border-white p-1">src</td>
    <td class="border border-white p-1">
        <input type="text" bind:value={item.src} on:blur={srcChanged} class="bg-gray-900 text-white p-1" >
    </td>
</tr>
        
        <TrNo title="x"      bind:extra={item}  />
        <TrNo title="y"      bind:extra={item}  />
        <TrNo title="width"  bind:extra={item}  />
        <TrNo title="height" bind:extra={item} />
        
        
    <CommonCommands  bind:item={item}/>    
    <ShadowCommands  bind:item={item} />
    </table>
</div>
