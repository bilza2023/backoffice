<script>
//@ts-nocheck
export let currentSlide;
</script>

{#if currentSlide}
currentSlide.startTime
{currentSlide.startTime}

{:else}
<h1>No Slide Selected</h1>
{/if}