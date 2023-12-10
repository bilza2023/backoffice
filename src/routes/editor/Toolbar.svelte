<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons} from '$lib/util';
import save from './fn/save';
let show  = false;
export let slides;
export let id;
export let addNew;
export let currentSlideIndex;
export let delCurSlide;

function shiftTime(slideIndex, newEndTime) {
//  debugger;
  if (slideIndex < 0 || slideIndex >= slides.length) {
    console.error("Invalid slide index");
    return;
  }

  // Update the end time of the specified slide
  slides[slideIndex].endTime = newEndTime;

  // Adjust subsequent slides
  for (let i = slideIndex + 1; i < slides.length; i++) {
    const durationChange = slides[i].startTime - slides[i - 1].endTime;
    
    // Update start time and end time to maintain total duration
    slides[i].startTime -= durationChange;
    slides[i].endTime -= durationChange;

    // Check for overlapping timings and correct if necessary
    if (slides[i].startTime < slides[i - 1].endTime) {
      slides[i].startTime = slides[i - 1].endTime;
      slides[i].endTime = slides[i].startTime + (slides[i].endTime - slides[i].startTime);
    }
  }
//  console.log(slides); 
}


</script>

<div class='flex justify-start bg-gray-600 m-0 p-0 items-center gap-1'>
  <NavBtn2 title='New' icon={Icons.BULB}  clk={()=>show = !show} />
  <NavBtn2 title='Save' icon={Icons.BOOK}  clk={()=>save(slides,id)} />
  
{#if slides.length > 0}
  Start Time: &nbsp;
  <div class='bg-gray-500 text-white p-0 px-4 m-0 rounded-md border-2 border-white'  type="number" >
  {slides[currentSlideIndex].startTime}
  </div>
  
  End Time: &nbsp;
  <input class='bg-gray-500 text-white p-0 m-0 rounded-md border-2 border-white'  type="number" bind:value={slides[currentSlideIndex].endTime}
    on:input={() => shiftTime(currentSlideIndex, slides[currentSlideIndex].endTime)}
  >
  {/if}

 <NavBtn2 title='Del' icon={Icons.DEL}  clk={delCurSlide} />
  

</div>

{#if show}
<div class='flex flex-wrap  bg-gray-400'>
<NavBtn2 title='HdgImg' icon={Icons.BULB} clk={()=>addNew('HdgImg')} />
<NavBtn2 title='Grid' icon={Icons.BULB} clk={()=>addNew('grid')} />
</div>
{/if}
