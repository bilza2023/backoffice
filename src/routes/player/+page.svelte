<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
*/
import {browser,onMount,toast,BASE_URL} from '$lib/util'
import { themes ,Presentation} from '$lib/Presentation';
import PlayButtons from './PlayButtons.svelte';
import readSlides from '$lib/tdf/readSlides';
import Slider from './Slider.svelte';

let slides;
let id;
let tcode;
let theme = themes.basic;
let hydrateInterval=null;
let stopTime = null;

onMount(async ()=>{  
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");

let val  = await readSlides(id,tcode);
  let returnSlides  = await readSlides(id,tcode);
   
 if (returnSlides){
  slides = returnSlides.slides;
  getStopTime(slides);
  currentSlide = slides[0];
 }
else {throw new Error('Failed to load');}
// hydrate();
});

async function   getStopTime(slides){
 if(slides.length > 0){
    if (slides[slides.length -1].endTime 
    && slides[slides.length -1].endTime > 0 ){
        stopTime = slides[slides.length -1].endTime;
        }else {
        stopTime = 600;
    }
 }
}

let interval=null;
let pulse=0;
let currentSlide = null;

function setPulse(time){
pulse = time;
// if(pulse > stopTime){stop();return;}
setCurrentSlide();
}
function applyTheme(themeKey){
// debugger;
theme = themes[themeKey];
// console.log(theme);
}
function gameloop(){
    pulse++;
    if(pulse > stopTime){stop();return;}
    setCurrentSlide();
}

// function hydrate(){
// start();
//  hydrateInterval =  setInterval(stopHydrate,2000);
// }
// function stopHydrate(){
//     clearInterval(hydrateInterval);
//     stop();
//     pulse = 0;
// }
function start(){
    interval= setInterval(gameloop,1000);
}

function stop(){
    clearInterval(interval);
    pulse = 0;
}

function setCurrentSlide(){
//  debugger;
 for (let i = 0; i < slides.length; i++) {
 const slide = slides[i];
        if (pulse >= slide.startTime && pulse < slide.endTime ){
       currentSlide = slide ;
        return; 
        }
 }
}
</script> 

<div class='bg-gray-800 text-white w-full min-h-screen' style='position: fixed; top: 0;'>

<div class='flex justify-start sticky top-0 w-full p-1 m-0 bg-gray-700'>
<PlayButtons   {start} {stop} callback={applyTheme} />

{#if currentSlide}
<Slider  {slides} {pulse} {setPulse}/>
{/if}

</div>

{#if currentSlide}

    <Presentation {currentSlide} {theme} {pulse} {setPulse}/>
{/if}

</div><!--page wrapper-->