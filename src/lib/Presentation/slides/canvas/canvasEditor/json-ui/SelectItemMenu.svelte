<script>
//@ts-nocheck

///////////////////////////////////////////////////////   
export let items;
export let itemIndexInRightBar;
// console.log("items",items);

    function handleSelection(event) {
        // Subtract 1 to account for the "Select Item" option
        const selectedIndex = event.target.selectedIndex; 
        if (selectedIndex >= 0) {
            itemIndexInRightBar = selectedIndex;
        }
    }
</script>

<select class="bg-stone-700 text-white m-1 p-2 rounded-md border-2 border-white" id="" on:change={handleSelection}>
    {#each items as item, index}
        <option class="" value={index}>
            {item.extra.name}
        </option>
    {/each}
</select>

