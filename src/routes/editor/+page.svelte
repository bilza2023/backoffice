<script>
  //@ts-nocheck
  import { onMount,ajaxPost ,BASE_URL} from '$lib/util';
  import Toolbar from './Toolbar.svelte';
  // import readSlides from '$lib/tdf/readSlides';
  // import {Presentation,getNewSlide} from '$lib/Presentation';
  import {Presentation,getNewSlide}  from '$lib/Presentation';
  import saveFinal from './fn/saveFinal';
  import LeftPanel from './LeftPanel.svelte';
  import EditDlg from './EditDlg.svelte';
  let showEditDlg=false;

 let currentSlideIndex;
 let slides;
 let show=false; // new slide bar
 let id;
 let tcode;
 let isLoading = true;
 let showSidePanel = true;
 let item;
 let soundFile;
 let filename;
let currentTime=0;


function convertToUrlFriendlyName(name) {
            const urlFriendlyName = name.replace(/\s+/g, '_');
            const sanitizedUrlFriendlyName = urlFriendlyName.replace(/[^\w\d_]/g, '');
            return sanitizedUrlFriendlyName;
}

async function save(){
  debugger;
  if (item.name && item.name !== ''){
    item.name = convertToUrlFriendlyName(item.name);
  }
        
 saveFinal(slides,tcode,id,item);
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
//  debugger;
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
 show = false;
}


 onMount(async ()=>{
  try {
   id = new URLSearchParams(location.search).get("id");
   tcode = new URLSearchParams(location.search).get("tcode");
  // debugger;
   const resp = await ajaxPost( `${BASE_URL}/command` , { command : "get" ,tcode,	id});



 if (resp.ok){
  const data = await resp.json();
  // console.log("data",data);
  // console.log("data.data.item",data.data.item);
  item =  data.data.item;
  slides = item.slides;
  filename = item.filename;
  // console.log("filename",filename);
  // //I can use different tcode (different tables) for the same eq-player. the files should be in static/tcode/exercise/filename.mp3
  
  //--CDN
  // https://taleem-media.blr1.cdn.digitaloceanspaces.com/mp3/matrices/1.1/matrices_ch_1_ex_1.1_q_1_n_Test.mp3
  // -- Origin
  https://taleem-media.blr1.digitaloceanspaces.com/mp3/matrices/1.1/matrices_ch_1_ex_1.1_q_1_n_Test.mp3

  soundFile = 'https://taleem-media.blr1.digitaloceanspaces.com/mp3/' + tcode + '/' + item.exercise  + '/' + item.filename + '.mp3';
  
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
    <Toolbar bind:slides={slides} {id} {addNew} {currentSlideIndex} {delCurSlide} {save} bind:showSidePanel={showSidePanel} bind:show={show}
    {setCurrentSlideIndex}  bind:item={item}  {soundFile} {filename} bind:currentTime={currentTime} {tcode} bind:showEditDlg={showEditDlg}/>  
{/if}

{#if showEditDlg}
  <EditDlg bind:item={item} {save}/>
{/if}


<div class='flex justify-start w-full'>

  {#if isLoading}
    <p>Loading...</p>
  {:else if slides  && slides.length > 0} 

      {#if showSidePanel}    
      <div class='flex flex-col  w-1/12  bg-gray-600 p-1' 
      style="border-right: 2px solid white;">
          <LeftPanel   {slides} {setCurrentSlideIndex} {moveDown} {moveUp} {currentSlideIndex}/>
      </div>  
      
       <div class='p-2 ml-1 min-h-screen  text-center w-11/12' >
        <Presentation currentSlide={slides[currentSlideIndex]}  displayMode={false} {currentTime} {tcode}/>
      </div>  
      {:else}
      
       <div class='p-2 ml-1 min-h-screen  text-center w-full' >
        <Presentation currentSlide={slides[currentSlideIndex]}  displayMode={false} {currentTime} {tcode}/>
      </div>  
      {/if}



   
    {:else}
        <h1>No Slides in the presentation</h1>
    {/if}
</div>
    
 
  <br>
  <br>
  <br>
  <br>

</div>