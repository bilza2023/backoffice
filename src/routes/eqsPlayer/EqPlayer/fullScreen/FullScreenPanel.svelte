<script>
//@ts-nocheck

    import HdgImg from "./HdgImg.svelte";
export let runningTime;
export let fs;
</script>

{#if fs.type == "heading_image"}
 <HdgImg {fs} {runningTime}/>
{/if}