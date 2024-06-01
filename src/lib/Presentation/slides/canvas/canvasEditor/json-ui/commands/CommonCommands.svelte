<script>
    //@ts-nocheck
    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";   
    import TrColor from "./TrColor.svelte";   
    export let item;
</script>
        
        <TrText  title="Name" bind:itemFiled={item.name}   />
        <TrColor  title="Color" bind:itemFiled={item.color}   />
        
        <TrNo title="Show At" bind:itemFiled={item.showAt}/>
        <TrNo title="Hide At" bind:itemFiled={item.hideAt}/>
       
       
        <tr>
            <td class="border border-white p-1">Opacity</td>
            <td class="border border-white p-1">
                <input type="number" bind:value={item.globalAlpha} class="bg-gray-900 text-white p-1" min="0" max="1" step="0.1">
            </td>
        </tr>

        <TrNo title="Gap" bind:itemFiled={item.gap}/>
        <TrNo title="Dash" bind:itemFiled={item.dash}/>

        <TrNo title="shadowOffsetX" bind:itemFiled={item.shadowOffsetX}/>
        <TrNo title="shadowOffsetY" bind:itemFiled={item.shadowOffsetY}/>
        <TrNo title="shadowBlur" bind:itemFiled={item.shadowBlur}/>
       
        <TrColor  title="shadowColor" bind:itemFiled={item.shadowColor}   />
                 

        <tr>
            <td class="border border-white p-1">Translate</td>
            <td class="border border-white p-1">
                <input type="checkbox" bind:checked={item.translate} class="bg-gray-900 text-white p-1">
            </td>
        </tr>