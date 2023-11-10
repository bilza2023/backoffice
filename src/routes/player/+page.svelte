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

onMount(async ()=>{
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");

let returnSlides  = await readSlides(id,tcode);
if (returnSlides){slides = returnSlides}
else {throw new Error('Failed to load');}

});


let interval=null;
let pulse=0;
let currentSlide = null;

function applyTheme(themeKey){
// debugger;
theme = themes[themeKey];
// console.log(theme);
}
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
<PlayButtons   {start} {stop} {pulse} callback={applyTheme} />
</div>


{#if currentSlide}
<!-- {currentSlide} {theme} {pulse} and displayMode -->
<!-- Thats all only these 4 inputs keep in mind there is just 1 slide that being currentSlide AND theme is external -->
    <Presentation {currentSlide} {theme} {pulse} />
{/if}

</div><!--page wrapper-->