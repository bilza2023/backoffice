<script>
//@ts-nocheck
import {browser,onMount} from '$lib/util'
// import getNewSlide  from '$lib/Presentation/getNewSlide.js';
// import BaseComp from './BaseComp.svelte';

import {HdgImg,BlinkingJumbotron} from '$lib/Presentation/slides';

let slides;

onMount(async () => {
  try {
//     debugger;
    let  id = new URLSearchParams(location.search).get("id"); 
    let presentations = JSON.parse(localStorage.getItem('presentations'));    
    if (!isNaN(id) && id >= 0 && id < presentations.length) {
            slides = presentations[  parseInt(id) ]; 
            console.log( slides  );
    } else {
            toast.push('Failed to find presentation')    
    }
  }catch (e) {
        toast.push('failed to load');
  }      
});

let interval=null;
let pulse=0;
let currentSlide = null;

function gameloop(){
    pulse++;
    setCurrentSlide();
}

function start(){
    interval= setInterval(gameloop,1000);
}

function stop(){
    clearInterval(interval);
    pulse = 0;
}

function setCurrentSlide(){
 for (let i = 0; i < slides.length; i++) {
 const slide = slides[i];
        if (pulse >= slide.startTime && pulse < slide.endTime ){
       currentSlide = slide ;
        return; 
        }
 }
}
</script> 
<div class='bg-gray-800 text-white w-full min-h-screen'>


<div class='flex justify-start w-full p-1 m-0 bg-gray-700'>
<button class="p-1 m-0 mx-2 rounded-md bg-green-700 text-white text-xs"   on:click={start}>Start</button>
<button class="p-1 m-0 mx-2 rounded-md bg-red-800 text-white text-xs"   on:click={stop}>Stop</button>
<div class="p-1 m-0 mx-2 rounded-md bg-gray-900 text-yellow-500    text-xs">{pulse} sec</div>
</div>

{#if currentSlide}

{#if currentSlide.type == 'HdgImg' }<HdgImg {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} compExtra={currentSlide.compExtra} theme={ {} }/>{/if}

{#if currentSlide.type == 'BlinkingJumbotron' }<BlinkingJumbotron {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} compExtra={currentSlide.compExtra} theme={ {} }/>{/if}


{/if}

</div><!--page wrapper-->