<script>
//@ts-nocheck
import { onMount } from "$lib/util";

//@ts-nocheck
export let currentSlide;
export let delSlide;

// onMount(async ()=>{
// });

</script>


<button class="bg-red-700 text-white p-1 m-1 rounded-md text-xs"
on:click={()=>delSlide(currentSlide.uuid)}
>Delete</button>