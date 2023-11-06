<script>
//@ts-nocheck
// import { onMount } from "$lib/util";

//@ts-nocheck
export let currentSlide;
export let moveDown;

// onMount(async ()=>{
// });

</script>


<button class="bg-green-700 text-white p-1 m-1 rounded-md text-xs"
on:click={()=>moveDown(currentSlide.uuid)}
>Move Down</button>