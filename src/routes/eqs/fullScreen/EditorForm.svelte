<script>
//@ts-nocheck
export let parsedData;
export let updateJSON;
export let formData; 
// = [
// {title : "One" , type: 'text' , bindTo:""},
// {title : "Two" , type: 'number' ,bindTo:""}
// ];

</script>
{#each formData as d,i}
    
    <div class="flex justify-between  w-full mb-2 gap-2">
        <div
        class="bg-gray-700 text-white rounded-md p-1 w-full"
        >{d.title}
        </div>
        
        {#if d.type == 'text'}
        <input bind:value={parsedData[d.bindTo]}
        on:input={updateJSON}
        class="bg-gray-700 text-white rounded-md p-1 w-full" 
          />
        {/if}
        
        {#if d.type == 'number'}
        <input type='number' 
        on:input={updateJSON}
        class="bg-gray-700 text-white rounded-md p-1 w-full" 
          />
        {/if}
        
    </div>

{/each}