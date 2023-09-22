<script>
//@ts-nocheck
import {Icons} from '$lib/util';
export let contentItem;
export let moveUp;
export let moveDown;
export let deleteItem;
</script>

<button 
    class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
    on:click={()=>moveUp(contentItem.id)} >
    {Icons.UP}
</button>

<button 
    class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
    on:click={()=>moveDown(contentItem.id)} >
    {Icons.DOWN}
</button>

<button 
    class='p-1 m-1 text-lg hover:bg-stone-700 rounded-lg'
    on:click={()=>deleteItem(contentItem.id)} >
    {Icons.CROSS}
</button>