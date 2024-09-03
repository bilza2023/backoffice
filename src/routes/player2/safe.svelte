<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck 
/**
 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
 24-Aug 2024 amen to that!!
*/
import {onMount,toast,RESOURCE_URL,API_URL, ajaxPost } from '$lib/util'
import { Presentation} from '$lib/Presentation';
import { fade } from 'svelte/transition';
import { Howl } from 'howler';
import Toolbar from '../../lib/Presentation/PresentationObj/toolbar/Toolbar.svelte';
import {SOUND_FILE_PATH} from "$lib/util";
import {PresentationObj} from "$lib/Presentation";


// let  sound;
// let  soundFile=null;
// let  isPlaying=false;
// let  maxSliderValue=0;
// let  interval  = null;

// let slides;

// let stopTime = null;
// let isPaused = false;
// let pulse=0;
// let soundLoaded = false;

let filename;
let tcode;

let ready=false;
let showToolbarBool = false;
let presentationObj;
//--pulse is local here not in PresentationObj there we have sound
let pulse = 0;
let currentSlide;
////////////////////////////////////////////////////////
onMount(async ()=>{  
filename = new URLSearchParams(location.search).get("filename");
tcode = new URLSearchParams(location.search).get("tcode");
////////////////////////
const resp = await ajaxPost( `${API_URL}/tcode/getByFilename` , { tcode,filename});

  if (resp.ok){
    const data = await resp.json();
    let questionData = data.item;
     
    presentationObj = new PresentationObj(questionData ,
    `${SOUND_FILE_PATH}${questionData.filename}.opus`);
    
    await presentationObj.loadSound();
    await presentationObj.inspector.fixEqEndTime();
    await presentationObj.setStopTime();
    
    currentSlide = presentationObj.getCurrentSlide();

    // console.log("presentationObj" , presentationObj );

    ready=true;
 
 }else {
    toast.push("failed to load");
 } 
 //////////////////////////////////////////
  // debugger;
 
});

////////////////////////////////////////////
//////////////////////START STOP PAUSE ////
////////////////////////////////////////////
let interval;
// $: currentSlide = presentationObj ? presentationObj.currentSlide : null;

$:{
  currentSlide;
  console.log("currentSlide",currentSlide);
}
function start(){
  const res = presentationObj.start();
  if(res){
    interval = setInterval(gameloop , 500);
  }
}
function gameloop(){
   pulse = Math.floor(presentationObj.pulse());
   presentationObj.setCurrentSlide();
   currentSlide =  presentationObj.getCurrentSlide();
  // console.log("pulseFn",pulse );
}

function stop(){
  const res = presentationObj.stop();
  pulse=0;
  clearInterval(interval);

}
////////////////////////////////////////////
////////////////////////////////////////////
function showToolbar(){
  if (showToolbarBool == false){
    showToolbarBool = true;  
    setTimeout(() => {
    showToolbarBool = false;
  }, 5000);
  } 
  
}

</script> 

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class='bg-gray-800 text-white w-full min-h-screen' 
style='position: fixed; top: 0;' on:mousemove={showToolbar} >

{#if currentSlide  }  

      {#if showToolbarBool}
      
        <Toolbar 
          start={start} 
          stop={stop}  
          pause =   {presentationObj.pause.bind(presentationObj)} 
          setVolume = {presentationObj.setVolume.bind(presentationObj)}
          setPulse = {presentationObj.setPulse.bind(presentationObj)} 
          {pulse}
          {currentSlide}
          slides = {presentationObj.slides} 
          isPaused = {presentationObj.isPaused} 
          isPlaying={presentationObj.isPlaying} 
          soundLoaded = {presentationObj.soundLoaded}

          {presentationObj}
          />
      
      {/if}

 
    <div >
    <Presentation
    
    setPulse={presentationObj.setPulse.bind(presentationObj)}
    currentTime={pulse} 
    {currentSlide}  
    {pulse} 
    {tcode}/>
    </div> 

{/if}

</div><!--page wrapper-->


