<script>
//@ts-nocheck
export let presentations;
export let del;
</script>

<table class='w-full'>

{#each presentations as presentation, i}
<tr class="">
    <td class='p-1 m-1 rounded-md bg-gray-700'>
        <a class="text-white p-1 rounded-md mx-8" href={`/player?tcode=pre&id=${presentation._id}`} target='_blank'>{presentation.name}</a>
    </td>

    <td>
<a class="bg-blue-700 text-white p-1 rounded-md mx-2" href={`/editor?tcode=pre&id=${presentation._id}`} target='_blank'>Edit</a>
    </td>

    <td>
        <button 
        class="bg-red-700 text-white p-1 rounded-md text-xs"
        on:click={()=>del(presentation._id)}
        >Delete</button>
    </td>
</tr>
<br>
{/each}
</table>
