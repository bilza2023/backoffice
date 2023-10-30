<script>
//@ts-nocheck

    import HdgImg from "./HdgImg.svelte";

export let fs;
</script>
<!-- <h1>Full Screen</h1> -->
 <!-- <h1>{fs.type}</h1> -->

{#if fs.type == "heading_image"}
 <HdgImg {fs}/>
 <!-- <h1>Full Screen</h1> -->
{/if}