<script>
    //@ts-nocheck
    import TrNo from "./TrNo.svelte";   
    import TrText from "./TrText.svelte";   
    import TrColor from "./TrColor.svelte";   
    export let item;
</script>
        
<TrNo title="Dash" bind:itemFiled={item.dash}/>
        <TrNo title="Gap" bind:itemFiled={item.gap}/>

