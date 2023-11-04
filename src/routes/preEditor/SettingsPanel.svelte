<script>
//@ts-nocheck
export let slide;
import HdgImgEd from "./HdgImgEd.svelte";
</script>

 {#if slide.type == 'HdgImg'}
    <HdgImgEd bind:slide={slide}/>
 {/if}