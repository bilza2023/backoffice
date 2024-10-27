<script>
  //@ts-nocheck
  import { onMount,toast} from '$lib/util';
  import Toolbar from './toolbar/Toolbar.svelte';
  import {Presentation,getNewSlide,getNewItem,PresentationModeEditor}  from 'taleempresentation';

  
  import saveFinal from './fn/saveFinal';
  import LeftPanel from './LeftPanel.svelte';
  import CommentsBox from './CommentsBox.svelte';
  import EditDlg from './EditDlg.svelte';
  
  import TemplatesDlg from './TemplatesDlg.svelte';
  // import fix from "./fix.js";
import version0_1Upgrade from "./v0.1Upgrade/version0_1Upgrade"
  import {SOUND_FILE_PATH} from "$lib/util";
  import {db} from "$lib/db";
///////////////////////////////////////////////////////////  
 let showEditDlg=false;
 let currentSlideIndex;
 let currentSlide;
 let slides=[];
 let show=false; // new slide bar
 let id;
 let tcode;
 let isLoading = true;
 let showSidePanel = false;
 let item;
 let soundFile;
 let filename;
let currentTime=0;
let slideTemplateCollection=[];
let showSlideTemplateBrowser = false;
///////////////////////////////////////////////////////////  
$:{
  currentSlide;
  // debugger; //del me
}
function convertToUrlFriendlyName(name) {
            const urlFriendlyName = name.replace(/\s+/g, '_');
            const sanitizedUrlFriendlyName = urlFriendlyName.replace(/[^\w\d_]/g, '');
            return sanitizedUrlFriendlyName;
}

async function save(){
  if (item.name && item.name !== ''){
    item.name = convertToUrlFriendlyName(item.name);
  }   
  // debugger;
  item.tcode = tcode;
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
    ajax
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

/////////////////////////////////////////////////// 
/////////////////////////////////////////////////// 
/////////////////////////////////////////////////// 
async function getSlideTemplates(){
  try {
  //  const resp = await ajaxPost( `${API_URL}/slideTemplate/get` , { });
   const resp = await  db.slideTemplate.get();
   
    if (resp.ok){
      const incomming = await resp.json();
      slideTemplateCollection = incomming.data;
      }

}catch(e){
  console.error(e);
}
}
async function  addSlideTemplate(templateIndex){
  
  const newSlideData = JSON.parse(JSON.stringify(slideTemplateCollection[templateIndex]));
  const newSlide = newSlideData.slide; // rip off name,description
const st = getNewStartTime();
 newSlide.startTime = st;
 newSlide.endTime = st+10;
//  debugger
 slides = [...slides, newSlide];
 setCurrentSlideIndex(slides.length-1);
 ////////////////////////
}
async function  deleteSlideTemplate(id){
  
  try {
  //  const resp = await ajaxPost( `${API_URL}/slideTemplate/delete` , { id});
   const resp = await db.slideTemplate.delete(id);
   
 if (resp.ok){
    toast.push("Slide Template has been deleted");
    showSlideTemplateBrowser=false;
   }
 } 
 catch (error) {
      console.error(error);
   
      
    }
}
///////////////////////////////////////////////
async function saveCurrentSlideAsSlideTemplate(name,description){

// console.log("currentSlide",currentSlide);
let newCurrentSlide = JSON.parse(JSON.stringify(currentSlide));
newCurrentSlide.startTime = 0;
newCurrentSlide.endTime = 10;
////save to database
try {
   const resp = await db.slideTemplate.create({ 
    name , 
    description ,
    slide : newCurrentSlide
    });
   
    if (resp.ok){
      item = await resp.json();
        toast.push("Current slide has been saved as template");
      }

 } 
 catch (error) {
      console.error(error);
   
      
    }
// console.log("saveCurrentSlideAsSlideTemplate",name,description);
}

/////////////////////////////////////////////////// 
/////////////////////////////////////////////////// 
/////////////////////////////////////////////////// 
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

// async function addTemplate(template_name){
// /////////--addNewSlide ---seq
// const st = getNewStartTime();
//  const newSlide = getNewSlide('canvas');
//  newSlide.startTime = st;
//  newSlide.endTime = st+10;
//  //....
//  let items_extra = getTemplateItemsNextra(template_name);
//  newSlide.items = items_extra.items;
//  newSlide.extra = items_extra.extra;
//  //....
//  slides = [...slides, newSlide];
//  setCurrentSlideIndex(slides.length-1);
//  currentSlide = slides[currentSlideIndex];
//  show = false;
//  ////////////////////////
// }

async function  addNew(slideType){
  const st = getNewStartTime();
 const newSlide = getNewSlide(slideType);
 newSlide.startTime = st;
 newSlide.endTime = st+10;
 slides = [...slides, newSlide];
 setCurrentSlideIndex(slides.length-1);
 currentSlide = slides[currentSlideIndex];
 show = false;
 ////////////////////////
}
//-- i think dublicate is fixed by using json
async function duplicateCurrentSlide(){
  let n = JSON.parse(JSON.stringify(slides[currentSlideIndex]));
slides.push(n);
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


onMount(async ()=>{
  try {
   id = new URLSearchParams(location.search).get("id");
   const resp = await db.tcode.getOne(id);
   
 if (resp.ok){
   item = await resp.json();
   filename = item.filename;
   tcode = item.tcode;
///*******************************--upgrade to version 0.1*/
  if(!item.adminComments || !item.adminComments == 'fixed'){
    for (let i = 0; i < item.slides.length; i++) {
      const slide =   item.slides[i];
      await version0_1Upgrade(slide);
    }
  item.version = '0.1'; //--very important
  item.adminComments = 'fixed'; //--very important
 }
////*****************************************************************/
   slides = item.slides;
  filename = item.filename;
  soundFile =  SOUND_FILE_PATH + item.filename + '.opus';
 
  if (slides.length > 0){
    currentSlideIndex = 0;
    currentSlide = slides[0]
   
    }
    // fix(slides);
    getSlideTemplates(); // do not wait;
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

<!-- <button on:click={getSlideTemplates} class="bg-red-800 p-2 m-2">getSlideTemplates</button> -->

 {#if item }
    <Toolbar bind:slides={slides} {id} {addNew} {currentSlideIndex} {delCurSlide} {save} bind:showSidePanel={showSidePanel} bind:show={show}
    {setCurrentSlideIndex}  bind:item={item}  {soundFile}  bind:currentTime={currentTime} {tcode} bind:showEditDlg={showEditDlg} {duplicateCurrentSlide} {pasteSlide} {copySlide}
   
    bind:showSlideTemplateBrowser={showSlideTemplateBrowser}
    />  
{/if}

{#if showEditDlg}
  <EditDlg bind:item={item} {save}/>
{/if}


{#if showSlideTemplateBrowser}
  <TemplatesDlg  {slideTemplateCollection} {addSlideTemplate} {deleteSlideTemplate} />
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
        <PresentationModeEditor {currentSlide} displayMode={false} currentTime={currentTime} tcode={tcode}  {saveCurrentSlideAsSlideTemplate}/>

    
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
<button on:click={console.log("currentSlide",currentSlide)}>log slide</button>
</div>