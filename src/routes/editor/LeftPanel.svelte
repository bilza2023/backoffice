<script>
//@ts-nocheck
import {Icons} from '$lib/util';
export let slides;
export let setCurrentSlideIndex;
export let currentSlideIndex;
export let moveDown;
export let moveUp;
</script>

    <div class='flex flex-col  w-20  bg-green-950 p-1' 
    style="border-right: 2px solid white;">
    {#if slides}
        {#each slides as slide,slideIndex}

        <div class='hover:bg-green-600 text-center'
        style="{slideIndex === currentSlideIndex ? 
        'border: 2px solid white;border-radius:10px;margin:1px;' : 'border: 2px solid green;border-radius:10px;margin:1px;'}"
        >

            <button class='bg-green-900 text-white px-1 py-1 rounded 
            text-xs'
                    on:click={() => setCurrentSlideIndex(slideIndex)}>
                {slide.type.toUpperCase()}
            </button>
            
            <div class='flex justify-evenly '>
                
        <div class='flex justify-evenly mt-1 gap-1'>

            <button class='bg-green-900 text-white px-1 py-1 rounded'
                    on:click={() => moveDown(slideIndex)}>
                {Icons.DOWN}
            </button>

            <button class='bg-green-900 text-white px-1 py-1 rounded'
                    on:click={() => moveUp(slideIndex)}>
                {Icons.UP}
            </button>
        </div>


            </div>
        </div>
        
    
        {/each}
    {:else}
    <h3>No slides</h3>
    {/if}
    </div>
