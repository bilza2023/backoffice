<script>
//@ts-nocheck
export let slides;
export let setCurrentSlide;
</script>

    <div class='flex flex-col  w-20  bg-green-950' style="border-right: 2px solid white;">
    {#if slides}
        {#each slides as slide,slideIndex}
            <button on:click={()=>setCurrentSlide(slideIndex)} class='hover:bg-green-600'>
                {slide.type.toUpperCase()}
            </button>
        {/each}
    {/if}
    </div>
