<script>
//@ts-nocheck
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
*/
import {browser,onMount,toast,BASE_URL} from '$lib/util'
import { themes ,DisplayCompStrat} from '$lib/Presentation/index.js';
import PlayButtons from './PlayButtons.svelte';


let slides;
let id;
let theme = themes.basic;

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
  //  console.log('slides' , slides);
  //  toast.push("Presentations loaded");
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
<PlayButtons   {start} {stop} {pulse} {applyTheme} />
</div>


{#if currentSlide}
    <DisplayCompStrat {currentSlide} {theme} {pulse} />
{/if}

</div><!--page wrapper-->