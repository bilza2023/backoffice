<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import TrNo from "./TrNo.svelte";
    import TrText from "./TrText.svelte";
    import TrPropColor from "./TrPropColor.svelte";
    import TrPropBoolean from "./TrPropBoolean.svelte";
    import TrPropNumber from "./TrPropNumber.svelte";

    export let selectedItem;

    onMount(() => {
        // Any initialization logic can go here
    });
</script>

{#if selectedItem}
    <div class="p-4 bg-gray-800 rounded-lg shadow-md">
        <h1 class="text-xl font-bold mb-4 text-white">Selected Item</h1>
        <div class="overflow-x-auto">
            <table class="min-w-full table-auto border-collapse border border-gray-600 bg-gray-700 rounded-lg">
                <tbody>
                    {#each selectedItem.dialogueBox as dialogueItem}
                        <tr class="border-b border-gray-600">
                            <td class="p-1 text-white text-sm">
                                {#if dialogueItem.componentName === 'TrPropNumber'}
                                    <TrPropNumber 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrPropBoolean'}
                                    <TrPropBoolean 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrText'}
                                    <TrText 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrPropColor'}
                                    <TrPropColor 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {:else if dialogueItem.componentName === 'TrNo'}
                                    <TrNo 
                                        bind:extra={selectedItem.itemData.extra}
                                        title={dialogueItem.title}
                                        {...dialogueItem.props}
                                    />
                                {/if}
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
{:else}
    <h6 class="text-sm text-gray-400">No item selected</h6>
{/if}