<script>
  //@ts-nocheck
  import { Centre } from "$lib/cmp";
  import { onMount, toast , Agent  } from '$lib/util';

export let item;
let classes;

onMount(async () => {
    try {
      const resp = await Agent.read('class');
      if (resp.ok) {
        const data = await resp.json();
        classes = data.items;
      } else {
        toast.push('failed to load');
      }
    } catch (e) {
      toast.push('failed to load');
    }
});

  function update(event) {
  // debugger;
  const selectedValue = event.target.value;
  item.classId = selectedValue;
  // console.log(item);
  }

</script>


{#if classes}
  <Centre>
  
    <select class='bg-gray-700 text-white w-10/12' on:change={update}  bind:value={item.classId} >

        <option class='text-center w-full mx-4' value=''>None</option>

      {#each classes as classObj}
        <option class='text-center w-full mx-4' value={classObj._id}>
          {classObj.name}
        </option>
      {/each}

    </select>
  </Centre>
  {/if}
