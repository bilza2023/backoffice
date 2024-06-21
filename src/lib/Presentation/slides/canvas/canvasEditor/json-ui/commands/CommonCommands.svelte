<script>
    //@ts-nocheck
    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";   
    import TrColor from "./TrColor.svelte";   
    export let item;
    let show = true;
</script>
        

<tr class="text-xs"><td class="border border-white p-1 text-pink-400"><button on:click={()=> show = !show}>common</button> </td></tr>
{#if show}     

        <TrText  title="Name" bind:itemFiled={item.name}   />
        <TrColor  title="Color" bind:itemFiled={item.color}   />
        
        <TrNo title="Show At" bind:itemFiled={item.showAt}/>
        <!-- <TrNo title="Hide At" bind:itemFiled={item.hideAt}/> -->
       
       
        <tr>
            <td class="border border-white p-1">Opacity</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.globalAlpha} class="bg-gray-900 text-white p-1" min="0" max="1" step="0.1">
            </td>
        </tr>

        <tr>
            <td class="border border-white p-1">Translate</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.translate} class="bg-gray-900 text-white p-1">
            </td>
        </tr>

{/if}