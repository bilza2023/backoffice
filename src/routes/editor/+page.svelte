<script>
  //@ts-nocheck
  import { PageWrapper } from '$lib/cmp';
  import { onMount } from '$lib/util';
  import Toolbar from './Toolbar.svelte';
  import readSlides from '$lib/tdf/readSlides';
  import {Presentation,getNewSlide,theme} from '$lib/Presentation';
  import parse from './fn/parse.js';
  import addNewSlide from './fn/addNewSlide.js';
  import LeftPanel from './LeftPanel.svelte';
// import {gridData} from './fn/gridData';

 let currentSlide;
 let slides;
 let id;
 let tcode;

 async function  setCurrentSlide(index){
 currentSlide = slides[index];
 }

function delCurSlide(){
    if (!currentSlide) {
    return; // Handle the case where currentSlide is not set
  }

  slides = slides.filter(slide => slide !== currentSlide);
  currentSlide = slides[0];
}

function getNewStartTime(){
 if (slides.length ==0) {return 0;}
 else {
 return slides[slides.length-1].endTime;;
 }
}

async function  addNew(slideType){
 const st = getNewStartTime();
 const newSlide = getNewSlide(slideType);
 newSlide.startTime = st;
 newSlide.endTime = st+10;
 slides = [...slides, newSlide];
 setCurrentSlide(slides.length-1);
}


 onMount(async ()=>{
 id = new URLSearchParams(location.search).get("id");
 tcode = new URLSearchParams(location.search).get("tcode");
  let returnSlides  = await readSlides(id,tcode);
   
 if (returnSlides){
  slides = await parse(returnSlides.slides);
    if (slides.length > 0){
      currentSlide = slides[0];
    }
  }
else {throw new Error('Failed to load');}
});

</script>


<div class='bg-gray-800 overflow-x-auto w-full text-white'>

{#if slides}
    <Toolbar {slides} {id} {addNew} bind:currentSlide={currentSlide} {delCurSlide}/>  
{/if}

<div class='flex justify-start '>

    <LeftPanel   {slides} {setCurrentSlide}/>

    <div class='p-2 ml-1 min-h-screen  text-center' >
        {#if currentSlide}
        <Presentation {currentSlide}  displayMode={false} {theme}/>
        {/if}
    </div>
</div>
    
 
  <br>
  <br>
  <br>
  <br>

</div>
