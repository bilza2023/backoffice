<script>
//@ts-nocheck
// import TestComp from "./slides/TestComp.svelte";
import HdgImg from "./slides/HdgImg.svelte";
import BlinkingJumbotron from "./slides/BlinkingJumbotron.svelte";
import {HdgImgEd} from '$lib/Presentation/slides';

export let currentSlide;
export let pulse;
export let theme;
export let displayMode = true;
</script>


<!-- HdgImg -->
{#if currentSlide.type == 'HdgImg' }
    {#if  displayMode}
        <HdgImg {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <HdgImgEd {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} bind:items={currentSlide.items} bind:slideExtra={currentSlide.slideExtra} {theme}/>
    {/if}
{/if}

<!-- BlinkingJumbotron -->
{#if currentSlide.type == 'BlinkingJumbotron' }
    {#if  displayMode}
        <BlinkingJumbotron {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} {theme}/>
    {:else}
        <p>None..</p>
    {/if}
{/if}
