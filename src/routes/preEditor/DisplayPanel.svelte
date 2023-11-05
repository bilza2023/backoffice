<script>
//@ts-nocheck

import {HdgImg,BlinkingJumbotron} from '$lib/Presentation/slides';

export let currentSlide;
let pulse = 0;
</script>
<!-- //starategy-picker -->
{#if currentSlide}


{#if currentSlide.type == 'HdgImg' }<HdgImg {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} compExtra={currentSlide.compExtra} theme={ {} }/>{/if}

{#if currentSlide.type == 'BlinkingJumbotron' }<BlinkingJumbotron {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} compExtra={currentSlide.compExtra} theme={ {} }/>{/if}




{:else}
<h1>No Slide Selected</h1>
{/if}