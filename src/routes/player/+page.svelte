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

let slides;
let id;
let tcode;
let theme = themes.basic;
let hydrateInterval=null;
 
onMount(async ()=>{
//  
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");

let returnSlides  = await readSlides(id,tcode);
// debugger;
returnSlides[0].endTime = 100;
if (returnSlides){slides = returnSlides}
else {throw new Error('Failed to load');}
hydrate();
});


let interval=null;
let pulse=0;
let currentSlide = null;

function setPulse(time){
pulse = time;
}
function applyTheme(themeKey){
// debugger;
theme = themes[themeKey];
// console.log(theme);
}
function gameloop(){
    pulse++;
    setCurrentSlide();
}

function hydrate(){
start();
 hydrateInterval =  setInterval(stopHydrate,2000);
}
function stopHydrate(){
    clearInterval(hydrateInterval);
    stop();
    pulse = 0;
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

<div class='flex justify-start sticky top-0 w-full p-1 m-0 bg-gray-700'>
<PlayButtons   {start} {stop} {pulse} callback={applyTheme} />
</div>


{#if currentSlide}
<!-- {currentSlide} {theme} {pulse} and displayMode -->
<!-- Thats all only these 4 inputs keep in mind there is just 1 slide that being currentSlide AND theme is external -->
    <Presentation {currentSlide} {theme} {pulse} {setPulse}/>
{/if}

</div><!--page wrapper-->