<script>
//@ts-nocheck
import {NavBtn2,Logo,NavBtn,AreYouSure} from '$lib/cmp';
import {Icons} from '$lib/util';
import SoundButtons from './SoundButtons.svelte';
export let show;
export let slides;
export let item;
export let id;
export let addNew;
export let save;
export let showSidePanel;
export let currentSlideIndex;
export let delCurSlide;
export let filename;
export let tcode;
export let soundFile=null;
export let currentTime=0;

let showDelete=false;



function delFirst(){
showDelete=false;
delCurSlide();
}
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

$: {
  // console.log('Status:', item.status);
  // console.log('Question Type:', item.questionType);
}
</script>

<div class='flex justify-between  bg-gray-600 m-0 p-0 items-center gap-1 border-b-2 border-white'>
 
  <div class='flex justify-start items-center'>
    <Logo url='/' /> 
    <NavBtn2 title='New' icon={Icons.BULB}  clk={()=>show = !show} />
    <NavBtn2 title='SP' icon={Icons.DOOR}  clk={()=>showSidePanel = !showSidePanel} />
    <NavBtn2 title='Save' icon={Icons.BOOK}  clk={save} />
    <!-- <NavBtn title='Link' icon={Icons.TV}  url={`player?tcode=fbise9math&id=${id}`} /> -->
    
    <a href={`player?tcode=${tcode}&id=${id}`}><span class='text-green-300 bg-gray-900 p-1 text-xs rounded-md '>{filename}</span></a>

<SoundButtons  {soundFile}  bind:currentTime={currentTime} />    

  </div> 

  <div class='flex justify-end m-0 p-1 items-center gap-1 border-2 border-gray-500  rounded-md text-xs mr-1'>
  {#if slides.length > 0}
    <span class='text-xs'>Start</span> 
    <div class='bg-gray-900 text-white p-0 px-4 m-0 rounded-md border-2 border-white'  type="number" >
    {slides[currentSlideIndex].startTime}
    </div>
    
    <span class='text-xs'>End</span>
    <input class='bg-gray-500 text-white p-0 m-0 rounded-md border-2 border-white text-center '  type="number" bind:value={slides[currentSlideIndex].endTime}
      on:input={() => shiftTime(currentSlideIndex, slides[currentSlideIndex].endTime)}
    >

<!-- DD for status     -->
<!-- ['unlocked' ,'fill' ,'locked', 'final'], -->
<span class='text-xs'>Status</span>
   <div class="relative">
  <select class="block appearance-none w-full bg-gray-700 border border-gray-400 text-white py-1 px-1 pr-4 rounded leading-tight focus:outline-none" id="" bind:value={item.status}>
    <option value="empty">Empty</option>
    <option value="fill">Filled</option>
    <option value="locked">Locked</option>
    <option value="final">Final</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-white">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z"/></svg>
  </div>
</div>

<!-- DD for questionType     -->
<!-- ['paid' ,'login' ,'free'], -->
<span class='text-xs'>Type</span>
   <div class="relative">
  <select class="block appearance-none w-full bg-gray-700 border border-gray-400 text-white py-1 px-1 pr-4 rounded leading-tight focus:outline-none" id="question_type" bind:value={item.questionType}>
    <option value="paid">Paid</option>
    <option value="login">Login</option>
    <option value="free">Free</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-white">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6z"/></svg>
  </div>
</div>

     <NavBtn2 title='Del' icon={Icons.DEL}  clk={()=>showDelete = !showDelete} />
    {/if}

  </div>  
  

</div>

{#if show}
<div class='flex flex-wrap  bg-gray-900 border-2 border-white'>
<NavBtn2 title='HdgImg' icon={Icons.EYES} clk={()=>addNew('HdgImg')} />
<NavBtn2 title='HdgList' icon={Icons.BULB} clk={()=>addNew('HdgList')} />
<NavBtn2 title='Grid' icon={Icons.CHARTUP } clk={()=>addNew('grid')} />
<NavBtn2 title='BlinkMsg' icon={Icons.EXPLOSION } clk={()=>addNew('BlinkingMessage')} />
<NavBtn2 title='ImgWCaption' icon={Icons.MANAGER } clk={()=>addNew('ImgWCaption')} />
<NavBtn2 title='TblStr' icon={Icons.RULER } clk={()=>addNew('TblStr')} />
<NavBtn2 title='Eqs' icon={Icons.NOTES }  clk={()=>addNew('Eqs')} />

<NavBtn2 title='Canvas' icon={Icons.TV }  clk={()=>addNew('canvas')} />
<NavBtn2 title='Img' icon={Icons.STUDENT }  clk={()=>addNew('img')} />
<NavBtn2 title='HdgPara' icon={Icons.TEXT }  clk={()=>addNew('HdgPara')} />
</div>
{/if}


{#if showDelete}
<NavBtn2 title='Are You Sure to Delete' icon={Icons.DEL }  clk={delFirst} />
{/if}