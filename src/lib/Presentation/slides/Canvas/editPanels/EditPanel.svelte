<script>
//@ts-nocheck
import {onMount} from '$lib/util';
import RayEditPanel from './RayEditPanel.svelte';
// import LineEditPanel from './LineEditPanel.svelte';
// import HLineEditPanel from './HLineEditPanel.svelte';

  export let items;
  let selectedItem=null;
//   onMount(async () =>{
//   selectedItem = items.length-1;
//   });
  function handleSelection(event) {
    const selectedValue = event.target.value;
    selectedItem = items.find(item => item.name === selectedValue);

    if (selectedItem) {
    //  debugger;
      console.log("Selected item name:", selectedItem.uuid);
    }
  }
</script>

<select on:change={handleSelection} class="w-full bg-gray-800 text-white text-center">
  {#each items.slice().reverse() as item}
    {#if item.name !== 'drawGrid'}
    <option class="bg-gray-700" value={item.name}>{item.name}</option>
    {/if}
  {/each}
</select>

<div class='p-2 overflow-y-auto'>

{#if selectedItem && selectedItem.name == 'drawRay'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawLine'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}

{#if selectedItem && selectedItem.name == 'drawHline'}
<RayEditPanel bind:item={selectedItem} bind:items={items}/>
{/if}


</div>