<script>
//@ts-nocheck

import {browser,onMount,toast,BASE_URL} from '$lib/util'
// import GridPlayer from './GridPlayer.svelte';
import Presentation from '$lib/Presentation/Presentation.svelte';
import demoData from '$lib/Presentation/slides/grid/girdPlayer/demoData';
let pulse = 0;
function gameLoop(){pulse+=1;console.log(pulse);currentSlide=currentSlide;}
let currentSlide;
onMount(async ()=>{
currentSlide = demoData();
    setInterval(gameLoop,1000);
});


</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>
<br>
<br>

<div class='flex justify-center   w-full'>
{#if currentSlide}
     <Presentation {currentSlide} {pulse} />
{/if}     
</div>
</div><!--page wrapper-->
