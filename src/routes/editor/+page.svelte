<script>
  //@ts-nocheck
  import { PageWrapper } from '$lib/cmp';
  import { onMount } from '$lib/util';
  import Toolbar from './Toolbar.svelte';
  import readSlides from '$lib/tdf/readSlides';
  import {Presentation,getNewSlide} from '$lib/Presentation';
  import parse from './fn/parse.js';
  import addNewSlide from './fn/addNewSlide.js';
  import LeftPanel from './LeftPanel.svelte';
// import {gridData} from './fn/gridData';

 let currentSlideIndex;
 let slides;
 let id;
 let tcode;

async function moveDown(index) {
  if (index < slides.length - 1) {
    // Check if the slide is not the last one
    const temp = slides[index];
    slides[index] = slides[index + 1];
    slides[index + 1] = temp;
    setCurrentSlideIndex(index + 1);
  }
}

async function moveUp(index) {
  if (index > 0) {
    // Check if the slide is not the first one
    const temp = slides[index];
    slides[index] = slides[index - 1];
    slides[index - 1] = temp;
    setCurrentSlideIndex(index - 1);
  }
}
 
 async function  setCurrentSlideIndex(index){
 currentSlideIndex = index;
 }

function delCurSlide(){


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
   
 if (returnSlides){
//  debugger;
  slides = await parse(returnSlides.slides);
    if (slides.length > 0){
      currentSlideIndex = 0;
    }
  }
else {throw new Error('Failed to load');}
});


</script>


<div class='bg-gray-800 overflow-x-auto w-full text-white'>

{#if slides}
    <Toolbar bind:slides={slides} {id} {addNew} bind:currentSlideIndex={currentSlideIndex} {delCurSlide}/>  
{/if}

<div class='flex justify-start '>

    <LeftPanel   {slides} {setCurrentSlideIndex} {moveDown} {moveUp}/>

    <div class='p-2 ml-1 min-h-screen  text-center' >
        {#if slides}
        <Presentation currentSlide={slides[currentSlideIndex]}  displayMode={false}/>
        {/if}
    </div>
</div>
    
 
  <br>
  <br>
  <br>
  <br>

</div>
