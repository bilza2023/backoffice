<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
*/
import {browser,onMount,toast,BASE_URL} from '$lib/util'
// import getNewSlide  from '$lib/Presentation/getNewSlide.js';
// import BaseComp from './BaseComp.svelte';
import getDefaultTheme from '$lib/Presentation/getDefaultTheme';
import {HdgImg,BlinkingJumbotron,TestComp} from '$lib/Presentation/slides';
import { themes } from '$lib/Presentation/themes';
let slides;
let id;
let theme = getDefaultTheme();

onMount(async ()=>{
// debugger;
   id = new URLSearchParams(location.search).get("id");

  const resp = await fetch( `${BASE_URL}/pre/read`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {id} )
  });

  if(resp.ok){
   const data = await resp.json();
   slides = data.presentation.slides; 
   console.log('slides' , slides);
   toast.push("Presentations loaded");
  }
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
<button class="p-1 m-0 mx-2 rounded-md bg-green-700 text-white text-xs"   on:click={start}>Start</button>
<button class="p-1 m-0 mx-2 rounded-md bg-red-800 text-white text-xs"   on:click={stop}>Stop</button>
<div class="p-1 m-0 mx-2 rounded-md bg-gray-900 text-yellow-500    text-xs">{pulse} sec</div>

<select on:change={(e) => applyTheme(e.target.value)}
class="p-1 m-0 mx-2 rounded-md bg-gray-900 text-yellow-500    text-xs">
<option value="redGray">RedGray</option>
<option value="basic">Basic</option>
<option value="earthyElegance">Earthy Elegance</option>
<option value="oceanic">Oceanic</option>
</select>
</div>

{#if currentSlide}

{#if currentSlide.type == 'TestComp' }<TestComp {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.compExtra} {theme}/>{/if}

{#if currentSlide.type == 'HdgImg' }<HdgImg {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.compExtra} {theme}/>{/if}

{#if currentSlide.type == 'BlinkingJumbotron' }<BlinkingJumbotron {pulse} startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.compExtra} {theme}/>{/if}


{/if}

</div><!--page wrapper-->