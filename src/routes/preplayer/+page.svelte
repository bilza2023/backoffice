<script>
//@ts-nocheck

import getNewSlide  from './fn/getNewSlide.js';
import BaseComp from './BaseComp.svelte';
import BlinkingBanner from './slides/BlinkingBanner.svelte';
import HdgImg from './slides/HdgImg.svelte';

const slides =[];
slides.push(getNewSlide(0,30,"HdgImg",[
 {name : '', content: 'Heading and Image' , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []}, 
 {name : '', content: 'graph' , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []} 
]));


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


{/if}

</div><!--page wrapper-->