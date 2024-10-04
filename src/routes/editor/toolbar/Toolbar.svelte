<script lang="ts" >
//@ts-nocheck
import {NavBtn2,NavLink,Logo,NavBtn,AreYouSure} from 'sveltetools_bils/src/cmp';
import {Icons,API_URL, toast} from '$lib/util';
import SoundButtons from './SoundButtons.svelte';
import UploadMp3 from './UploadMp3.svelte';
import UploadImage from './UploadImage.svelte';
import NewSlidesDlg from "./NewSlidesDlg.svelte";

export let show;
export let slides;
export let item;

export let addNew;
export let save;
export let showSidePanel;
export let currentSlideIndex;

export let duplicateCurrentSlide;
export let pasteSlide;
export let copySlide;

export let delCurSlide;
// export let filename; 
export let tcode;
export let soundFile=null;
export let currentTime=0;
export let showEditDlg=false;

let showDelete=false;

export let showSlideTemplateBrowser=false;

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

</script>

<div class='flex justify-between  bg-gray-600 m-0 p-0 items-center gap-1 border-b-2 border-white'>
 
  <div class='flex justify-start items-center'>
    <Logo url='/' /> 
    <NavBtn2 title='SP' icon={Icons.DOOR}  clk={()=>showSidePanel = !showSidePanel} />
      <NavBtn2 title='New' icon={Icons.BULB}  clk={()=>show = !show} />
    <NavBtn2 title='Save' icon={Icons.BOOK}  clk={save} />
    <NavBtn2 title='Templates' icon={Icons.MAGICWAND}  clk={()=> showSlideTemplateBrowser=!showSlideTemplateBrowser} />
    
    <NavLink title='Player1' icon={Icons.TV}  url={`/player?tcode=${tcode}&filename=${item.filename}`} />
    <NavLink title='Player2' icon={Icons.TV}  url={`/player2?tcode=${tcode}&filename=${item.filename}`} />
       
    <!-- <a href={`player?tcode=${tcode}&id=${id}`}><span class='text-green-300 bg-gray-900 p-1 text-xs rounded-md '>{filename}</span></a> -->
  
{#if soundFile}
<SoundButtons  {soundFile}  bind:currentTime={currentTime} />    
{/if}

<!-- <NavBtn2 title='Upload Mp3' icon={Icons.SPEAKER}  clk={uploadMp3} /> -->
<UploadImage  {tcode} />
<UploadMp3 {item} {tcode}/>

<!-- <span class='text-green-300 bg-gray-900 p-1 text-xs rounded-md '>{filename}</span> -->


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

<NavBtn2 title='Edit' icon={Icons.PENCIL}  clk={()=>showEditDlg = !showEditDlg} />
<NavBtn2 title='Clone' icon={Icons.COPY}  clk={duplicateCurrentSlide} />
<NavBtn2 title='Copy' icon={Icons.TEXT}  clk={copySlide} />
<NavBtn2 title='Paste' icon='📎'  clk={pasteSlide} />
  <NavBtn2 title='Del' icon={Icons.DEL}  clk={()=>showDelete = !showDelete} />
    {/if}

  </div>  
  

</div>

{#if show}

  <NewSlidesDlg    {addNew}/>

{/if}


{#if showDelete}
<NavBtn2 title='Are You Sure to Delete' icon={Icons.DEL }  clk={delFirst} />
{/if}




