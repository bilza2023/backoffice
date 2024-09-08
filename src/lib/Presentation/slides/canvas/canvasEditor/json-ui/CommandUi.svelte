<script>
    //@ts-nocheck
    import { onMount, onDestroy } from "svelte";
    import TrPropNumber from "./commonCommands/TrPropNumber.svelte";
    import TrPropBoolean from "./commonCommands/TrPropBoolean.svelte";
    import GapDashCommands from "./commands/GapDashCommands.svelte";
    import CommonCommands from "./commands/CommonCommands.svelte";
    import ShadowCommands from "./commands/ShadowCommands.svelte";
    // Import other necessary components

    export let selectedItem;

    const componentMap = {
        TrPropNumber,
        TrPropBoolean,
        GapDashCommands,
        CommonCommands,
        ShadowCommands
    };

    onMount(() => {
        // Any initialization logic can go here
    });

</script>

{#if selectedItem}
    <div>
        <table class="border-collapse border-2 border-white">
            {#each selectedItem.dialogueBox as dialogueItem}
                <svelte:component 
                    this={componentMap[dialogueItem.componentName]}
                    bind:item={selectedItem.itemData.extra}
                    title={dialogueItem.title}
                    {...dialogueItem.props}
                />
            {/each}
        </table>
    </div>
{/if}