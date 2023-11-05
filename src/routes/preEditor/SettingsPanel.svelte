<script>
//@ts-nocheck
export let slide;

import {HdgImgEd,BlinkingJumbotron} from '$lib/Presentation/slides';

</script>

 {#if slide.type == 'HdgImg'}
    <HdgImgEd bind:slide={slide}/>
 {/if}