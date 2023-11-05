<script>
//@ts-nocheck

    import { onMount } from 'svelte';
export let slide;

// let headingItem = getNewItem('','heading');
// let imgSrcItem = getNewItem('','imgSrc');
// export let compExtra =[];
// export let theme={};
onMount(async()=>{
 //if i put push in mount it will push on ever page appear/load
//  console.log("slide",slide);
});
/////////////////////////////////////////////////

</script>

<div class="w-6/12 mx-auto">
    <h1>Heading</h1>
        <input type='text' 
        bind:value={slide.items[0].content}
        class="bg-gray-700 text-white rounded-md p-1 w-full" 
          />
        
    <h1>Image File Name</h1>
        <input type='text' 
        bind:value={slide.items[1].content}
        class="bg-gray-700 text-white rounded-md p-1 w-full" 
          />
</div> 

<!-- <button on:click={()=>console.log(slide)}>dump</button> -->


    