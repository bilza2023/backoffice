<script>
//@ts-nocheck
import TestComp from "./slides/TestComp.svelte";
import HdgImg from "./slides/HdgImg.svelte";
import BlinkingJumbotron from "./slides/BlinkingJumbotron.svelte";

export let currentSlide;
export let pulse;
export let theme;
</script>




{#if currentSlide.type == 'TestComp' }<TestComp {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.compExtra} {theme}/>{/if}

{#if currentSlide.type == 'HdgImg' }<HdgImg {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.compExtra} {theme}/>{/if}

{#if currentSlide.type == 'BlinkingJumbotron' }<BlinkingJumbotron {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.compExtra} {theme}/>{/if}

