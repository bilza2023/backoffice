<script>
//@ts-nocheck
import PlayButtons from './PlayButtons.svelte';
import Slider from './Slider.svelte';

export let start;
export let stop;
export let applyTheme;
export let pause;
export let isPlaying;
export let isPaused;
export let setVolume;
export let currentSlide;
export let slides;
export let pulse;
export let setPulse;
</script>

<div class='flex justify-start sticky top-0 w-full p-1 m-0 bg-gray-700'>

<PlayButtons   {start} {stop} callback={applyTheme} {pause} {isPlaying} {isPaused} {setVolume}/>

{#if currentSlide}
<Slider  {slides} {pulse} {setPulse}/>
{/if}

</div>
