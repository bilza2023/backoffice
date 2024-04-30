<script>
  //@ts-nocheck
  import { onMount,ajaxPost ,API_URL} from '$lib/util';
  import Toolbar from './toolbar/Toolbar.svelte';
  // import readSlides from '$lib/tdf/readSlides';
  // import {Presentation,getNewSlide} from '$lib/Presentation';
  import {Presentation,getNewSlide}  from '$lib/Presentation';
  import saveFinal from './fn/saveFinal';
  import LeftPanel from './LeftPanel.svelte';
  import CommentsBox from './CommentsBox.svelte';
  import EditDlg from './EditDlg.svelte';
  let showEditDlg=false;

  import {getNewItem} from '$lib/Presentation';
    import { questions } from '../syllabusByChapter/questions';


 let currentSlideIndex;
 let currentSlide;
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
currentSlide = slides[currentSlideIndex];
slides = [...slides];
// console.log("slides",slides);
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
 currentSlide = slides[currentSlideIndex];

 show = false;
}

async function duplicateCurrentSlide(){
  debugger;
slides.push(slides[currentSlideIndex]);
slides = [...slides];
}

function pasteSlide(){
  const copiedSlide = JSON.parse(localStorage.getItem("copiedSlide"));
  if (copiedSlide) {
    slides = [...slides, copiedSlide];
  }
}

function copySlide(){
  localStorage.setItem("copiedSlide", JSON.stringify(slides[currentSlideIndex]));
}

// function fixOldCanvas(slides){
//   debugger;
//   for (let i = 0; i < slides.length; i++) {
//        const slide = slides[i];
//        if(slide.type == 'canvas'){
//         const content  = JSON.parse(slide.items[0].content);
//         // slide.items = content.commands;
           
//         slide.items = [];
//             for (let j = 0; j < content.commands.length; j++) {
//               const commandItem = content.commands[j];
//               const newItem = getNewItem();
//               newItem.extra = commandItem;
//               slide.items.push(newItem);  
//               // console.log(commands);
//             }
        
//         slide.extra = {
//         backgroundColor: '#efebb8',
//         canvasWidth : 1000,
//         canvasHeight : 360,
//         cellHeight : 25,
//         cellWidth : 25,
//         xFactor : 0,
//         yFactor : 0,
//         }

//         }    
//       }
// }

 onMount(async ()=>{
  try {

  //  id = new URLSearchParams(location.search).get("id");
   filename = new URLSearchParams(location.search).get("filename");
   tcode = new URLSearchParams(location.search).get("tcode");
    // const resp = await ajaxPost( `${API_URL}/command` , { command : "get" ,tcode,	id});
   const resp = await ajaxPost( `${API_URL}/command` , { command : "getByFilename",tcode,filename});

 if (resp.ok){
   const data = await resp.json();
   item =  data.data.item;
   slides = item.slides;
   //////////
  //  fixOldCanvas(slides);

  filename = item.filename;
  //--CDN
  // https://taleem-media.blr1.cdn.digitaloceanspaces.com/mp3/matrices/1.1/matrices_ch_1_ex_1.1_q_1_n_Test.mp3
  // -- Origin
  https://taleem-media.blr1.digitaloceanspaces.com/mp3/matrices/1.1/matrices_ch_1_ex_1.1_q_1_n_Test.mp3

  soundFile = 'https://taleem-media.blr1.digitaloceanspaces.com/mp3/' + tcode + '/' + item.exercise  + '/' + item.filename + '.mp3';
  
  if (slides.length > 0){
    currentSlideIndex = 0;
    currentSlide = slides[0]
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
 
{#if slides }
    <Toolbar bind:slides={slides} {id} {addNew} {currentSlideIndex} {delCurSlide} {save} bind:showSidePanel={showSidePanel} bind:show={show}
    {setCurrentSlideIndex}  bind:item={item}  {soundFile} {filename} bind:currentTime={currentTime} {tcode} bind:showEditDlg={showEditDlg} {duplicateCurrentSlide} {pasteSlide} {copySlide}/>  
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
      {/if} 
    
      <div class={`p-2 ml-1 min-h-screen text-center ${showSidePanel ? "w-11/12" : "w-full"}`}>
        <Presentation {currentSlide} displayMode={false} currentTime={currentTime} tcode={tcode} />

        <br>
        <CommentsBox  bind:comments = {item.teacherComments} />
        <br>
        <CommentsBox title = "Admin Comments" bind:comments = {item.adminComments}/>
      
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