<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
 23-Aug-2024 (after 10 months)
*/
import {browser,onMount,ajaxPost,toast,API_URL} from '$lib/util';

//import { themes} from '../../../node_modules/taleem_ui_lib/dist/index.js';

import {PresentationModeUi}  from '$lib/Presentation';
import {db}  from '$lib/ajax';

import PlayButtons from './PlayButtons.svelte';
// import readSlides from '$lib/tdf/readSlides';
import Slider from './Slider.svelte';

let slides;
let id;
let tcode;
let theme =  {
    description     : '',
    primaryColor    : '#BC6C25',
    secondaryColor  : '#DDA15E',
    backgroundColor : '#FEFAE0',
    textColor       : '#283618',
    highlightColor  : '#606C38',

};
let hydrateInterval=null;
let stopTime = null;
let soundFile;

let filename;

onMount(async ()=>{  
 id = new URLSearchParams(location.search).get("id");
 filename = new URLSearchParams(location.search).get("filename");
 tcode = new URLSearchParams(location.search).get("tcode");
//  const resp = await ajaxPost( `${API_URL}/tcode/getByFilename` , { tcode,filename});

   const resp = await db.tcode.getOne(id);

 if (resp.ok){
    // debugger;
    const question = await resp.json();
  
    slides = question.slides;
    getStopTime(slides);
    currentSlide = slides[0];
    
} else {
    throw new Error('Failed to load');}
  

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
theme = {
        description     : '',
        primaryColor    : '#BC6C25',
        secondaryColor  : '#DDA15E',
        backgroundColor : '#FEFAE0',
        textColor       : '#283618',
        highlightColor  : '#606C38',

    };
// console.log(theme);
}
function gameloop(){
    pulse++;
    if(pulse > stopTime){stop();return;}
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

    <PresentationModeUi {currentSlide} {theme}   currentTime={pulse} {setPulse} {tcode}/>
 
 {/if}

</div><!--page wrapper-->