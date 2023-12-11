<script>
//@ts-nocheck
import Cell from "./Cell.svelte";
export let rowItem;
export let itemIndex;
</script>

<div class='{`flex flex-wrap w-full gap-1 justify-start ${itemIndex % 2 === 0 ? "bg-gray-700" : "bg-gray-500"}`}'>

    {#each rowItem.content as cellItem, cellIndex}
    <!-- {console.log('rowItem' , cellItem)} -->
        <Cell  bind:item={cellItem} />
    {/each}
</div>
