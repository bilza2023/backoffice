<script>
  //@ts-nocheck
  import { PageWrapper } from '$lib/cmp';
  import { onMount } from '$lib/util';
  import Toolbar from './Toolbar.svelte';
  import readSlides from '$lib/tdf/readSlides';
  import {Presentation,getNewSlide} from '$lib/Presentation';
  import parse from './fn/parse.js';
  import saveFinal from './fn/saveFinal';
  // import addNewSlide from './fn/addNewSlide.js';
  import LeftPanel from './LeftPanel.svelte';
// import {gridData} from './fn/gridData';

 let currentSlideIndex;
 let slides;
 let id;
 let tcode;
 let isLoading = true;

async function save(){
 saveFinal(slides,tcode,id);
} 

async function moveDown(index) {
  if (index < slides.length - 1) {
    // Check if the slide is not the last one
    const temp = slides[index];
    slides[index] = slides[index + 1];
    slides[index + 1] = temp;

    // Exchange startTime and endTime
    const tempStartTime = slides[index].startTime;
    slides[index].startTime = slides[index + 1].startTime;
    slides[index + 1].startTime = tempStartTime;

    const tempEndTime = slides[index].endTime;
    slides[index].endTime = slides[index + 1].endTime;
    slides[index + 1].endTime = tempEndTime;

    setCurrentSlideIndex(index + 1);
  }
}

async function moveUp(index) {
  if (index > 0) {
    // Check if the slide is not the first one
    const temp = slides[index];
    slides[index] = slides[index - 1];
    slides[index - 1] = temp;

    // Exchange startTime and endTime
    const tempStartTime = slides[index].startTime;
    slides[index].startTime = slides[index - 1].startTime;
    slides[index - 1].startTime = tempStartTime;

    const tempEndTime = slides[index].endTime;
    slides[index].endTime = slides[index - 1].endTime;
    slides[index - 1].endTime = tempEndTime;

    setCurrentSlideIndex(index - 1);
  }
}

 async function  setCurrentSlideIndex(index){
 currentSlideIndex = index;
 }

function delCurSlide(){
// debugger;
  if (slides.length > 1) {
    slides.splice(currentSlideIndex, 1);
    setCurrentSlideIndex(currentSlideIndex >= slides.length ? slides.length - 1 : currentSlideIndex);
  } else {
    // If there's only one slide, you may want to handle this case differently
    slides = [];
    setCurrentSlideIndex(-1); // Set to an invalid index or handle as needed
  }
  slides = [...slides];
}

function getNewStartTime(){
 if (slides.length ==0) {return 0;}
 else {
 return slides[slides.length-1].endTime;
 }
}

async function  addNew(slideType){
 const st = getNewStartTime();
 const newSlide = getNewSlide(slideType);
 newSlide.startTime = st;
 newSlide.endTime = st+10;
 slides = [...slides, newSlide];
 setCurrentSlideIndex(slides.length-1);
}


 onMount(async ()=>{
 id = new URLSearchParams(location.search).get("id");
 tcode = new URLSearchParams(location.search).get("tcode");
  let returnSlides  = await readSlides(id,tcode);
    try { 
 if (returnSlides){
//  debugger;
  slides = await parse(returnSlides.slides);
    if (slides.length > 0){
      currentSlideIndex = 0;
    }
  }

else {throw new Error('Failed to load');}
 } catch (error) {
      console.error(error);
    } finally {
      isLoading = false;
    }
});


</script>


<div class='bg-gray-800 overflow-x-auto w-full text-white min-h-screen'>

{#if slides}
    <Toolbar bind:slides={slides} {id} {addNew} bind:currentSlideIndex={currentSlideIndex} {delCurSlide} {save}/>  
{/if}

<div class='flex justify-start '>

  {#if isLoading}
    <p>Loading...</p>
  {:else if slides && slides.length > 0} 

    <LeftPanel   {slides} {setCurrentSlideIndex} {moveDown} {moveUp} {currentSlideIndex}/>

    <div class='p-2 ml-1 min-h-screen  text-center' >
        <Presentation currentSlide={slides[currentSlideIndex]}  displayMode={false}/>
    </div>
    {:else}
        <h1>No Slides in the presentation</h1>
    {/if}
</div>
    
 
  <br>
  <br>
  <br>
  <br>

</div>
