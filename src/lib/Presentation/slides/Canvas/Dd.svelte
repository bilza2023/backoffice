<script>
  //@ts-nocheck
  import {selectedItemStore} from './store';
  export let items;


  function handleSelection(event) {
    const selectedUuid = event.target.value;
    const NewSelectedItem = items.find(item => item.uuid === selectedUuid);
    selectedItemStore.set(NewSelectedItem);
  }
</script>

<select bind:value={$selectedItemStore}  on:change={handleSelection} class="w-full bg-gray-800 text-white text-center">
    <!-- <option class="bg-gray-700" value=''>Select Item</option> -->
  {#each items.slice().reverse() as item}
    {#if item.name !== 'drawGrid'}
    <option class="bg-gray-700" value={item.uuid}>{item.name}</option>
    {/if}
  {/each}
</select>
