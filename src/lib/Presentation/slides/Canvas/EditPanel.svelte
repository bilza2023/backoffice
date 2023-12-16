<script>
//@ts-nocheck
export let items;
 let selectedValue = "";
</script>





<select bind:value={selectedValue} class="w-full bg-gray-800 text-white text-center">
  {#each items.slice().reverse() as item,i}
    <option class="bg-gray-700" value={item.value}>{item.name}</option>
  {/each}
</select>  