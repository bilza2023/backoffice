<script>
    //@ts-nocheck
    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";   
    import TrColor from "./TrColor.svelte";   
    export let item;
    let show = false;
</script>

<tr class="text-xs"><td class="border border-white p-1 text-pink-400"><button on:click={()=> show = !show}>shadow</button> </td></tr>
{#if show}     

        <TrNo title="shadowOffsetX" bind:itemFiled={item.shadowOffsetX}/>
        <TrNo title="shadowOffsetY" bind:itemFiled={item.shadowOffsetY}/>
        <TrNo title="shadowBlur" bind:itemFiled={item.shadowBlur}/>
       
        <TrColor  title="shadowColor" bind:itemFiled={item.shadowColor}   />
                 


{/if}