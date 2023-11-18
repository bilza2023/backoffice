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
// import MainNav from '$lib/appComp/MainNav.svelte';
import SoundPlayer from './SoundPlayer.svelte';
import readSlides from '$lib/tdf/readSlides';

let slides;
let item;
let id;
let tcode;
let isPlaying=false;
let theme = themes.basic;
let hydrateInterval=null;
 
onMount(async ()=>{
//http://localhost:5173/player?tcode=fbise9math&id=653113340a6eaa163e9f89d0  
id = new URLSearchParams(location.search).get("id");
tcode = new URLSearchParams(location.search).get("tcode");
debugger;
let data  = await readSlides(id,tcode);
let returnSlides  = data.slides;
item  = data.item;

// console.log(item.filename);
returnSlides[0].endTime = 100;
if (returnSlides){slides = returnSlides}
else {throw new Error('Failed to load');}
// hydrate();
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


function setCurrentSlide(){
 if (!slides ){return;}
 for (let i = 0; i < slides.length; i++) {
 const slide = slides[i];
        if (pulse >= slide.startTime && pulse < slide.endTime ){
       currentSlide = slide ;
        return; 
        }
 }
}

async function fileExists(url) {
  try {
    const response = await fetch(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

async function getSoundFile(filename) {
  const soundFile = `./mathSounds/${filename}.mp3`;
  
  if (await fileExists(soundFile)) {
    return soundFile;
  } else {
    return './mathSounds/test.mp3';
  }
}
function changeSeek(newSeekValue){
    moveSeek = parseInt(newSeekValue);
    // console.log("seek", newSeekValue);
}

$:{
 pulse;
//  console.log(pulse);
setCurrentSlide();
}
</script> 


<div class='bg-gray-800 text-white w-full min-h-screen'>

{#if  item  }
<div class='flex justify-start sticky top-0 w-full p-1 m-0 bg-gray-600'>
<SoundPlayer   bind:pulse={pulse} bind:isPlaying={isPlaying} soundFile={`/mathSounds/${item.filename}.mp3`}/>
</div>
{/if}

{#if  currentSlide  }
<!-- {currentSlide} {theme} {pulse} and displayMode -->
<!-- Thats all only these 4 inputs keep in mind there is just 1 slide that being currentSlide AND theme is external -->
    <Presentation {currentSlide} {theme} {pulse} {setPulse}/>
{/if}

</div><!--page wrapper-->