<script>
    //@ts-nocheck
import TrNoWithSet from "./TrNoWithSet.svelte";   
    
    import TrStrWithSet from "./TrStrWithSet.svelte"; 
    import TrPropColor from "../commonCommands/TrPropColor.svelte";   

    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";   
    import TrColor from "./TrColor.svelte";   
    export let item;
    let show = true;
</script>
        

<tr class="text-xs"><td class="border border-white p-1 text-pink-400"><button on:click={()=> show = !show}>common</button> </td>
<td class="border border-white p-1 "></td>
</tr>
{#if show}     

        <TrText  title="Name" bind:itemFiled={item.name}   />

        <!-- <TrColor  title="Color" bind:itemFiled={item.color}   /> -->
        <TrPropColor  title="color"  bind:extra={item}   />
        


        <TrNo title="Show At" bind:itemFiled={item.showAt}/>
      
        
        <TrNoWithSet title="globalAlpha" bind:itemFiled={item.globalAlpha} bind:extra={item} min=0 max=1 step="0.1"/>  

        <tr>
            <td class="border border-white p-1">Translate</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.translate} class="bg-gray-900 text-white p-1">
            </td>
        </tr>

{/if}