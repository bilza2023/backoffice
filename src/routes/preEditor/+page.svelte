<script>
//@ts-nocheck

import { Icons,onMount, toast,BASE_URL, goto,uuid } from '$lib/util';
import AddNewSlide from './AddNewSlide.svelte';
import { themes ,Presentation} from '$lib/Presentation';
import DeleteSlide from './DeleteSlide.svelte';
import MoveSlideUp from './MoveSlideUp.svelte';
import MoveSlideDown from './MoveSlideDown.svelte';
import Nav from './Nav.svelte';
let theme = themes.basic;
let showAddNew = false;
let showEdit = true;
let currentSlide = null;
let slides=[];
let id = null;
let pulse = 0;
$:  wdd = showEdit ? 7 : 10;
function applyTheme(themeKey){
// debugger;
theme = themes[themeKey];
// console.log(theme);
}
function setCurrentSlide(i) {
  if (i >= 0 && i < slides.length) {
    currentSlide = slides[i];
  } else {
    toast.push("Index out of bounds");
  }
}

function delSlide(uuid){
// debugger;
 if (!uuid){toast.push("uuid not found");}
   // Find the index of the slide with the matching UUID
  const index = slides.findIndex(slide => slide.uuid === uuid);
  if (index !== -1) {
    slides.splice(index, 1);
    toast.push("slide deleted");
    setFakeTimings();
    setCurrentSlide(0);
    redraw();
  }
}

function setFakeTimings(){
 let time = 0;
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
      slide.startTime = time;
      time +=10;
      slide.endTime = time;  
  }

}

async function saveLocal(){
// debugger;
setFakeTimings();
  const presentation = {slides ,_id:id};
  const resp = await fetch( `${BASE_URL}/pre/update`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 000`,
  },
  body: JSON.stringify( {presentation} )
  });
  if(resp.ok){toast.push('saved');}else {toast.push('failed to saved');}
  
}
async function addUuid(slidesWOuuid) {
  for (let i = 0; i < slidesWOuuid.length; i++) {
    slidesWOuuid[i].uuid = uuid(); 
  }
}
onMount(async ()=>{
// debugger;
   id = new URLSearchParams(location.search).get("id");

  const resp = await fetch( `${BASE_URL}/pre/read`, {
    method: 'POST',
      headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify( {id} )
  });

if(resp.ok){
   const data = await resp.json();
   slides = await data.presentation.slides; 
   await addUuid(slides);

   if(slides.length > 0){
        setFakeTimings();
        setCurrentSlide(0);
   }
}


});

function redraw(){slides = [...slides];}

function moveDown(uuid) {
  const index = slides.findIndex(item => item.uuid === uuid);
  if (index !== -1 && index < slides.length - 1) {
    const temp = slides[index];
    slides[index] = slides[index + 1];
    slides[index + 1] = temp;
  }
  setFakeTimings();
  redraw();
}

function moveUp(uuid) {
  const index = slides.findIndex(item => item.uuid === uuid);
  if (index > 0) {
    const temp = slides[index];
    slides[index] = slides[index - 1];
    slides[index - 1] = temp;
  }
  setFakeTimings();
  redraw();
}

</script> 

<div class='bg-gray-900 text-white w-full min-h-screen'>
<!-- nav -->
{#if slides}
<Nav  bind:showAddNew = {showAddNew} bind:showEdit = {showEdit} {applyTheme} {saveLocal}    />
{/if}

{#if showAddNew}
  <AddNewSlide   bind:slides={slides} {redraw}/>
{/if}



{#if slides }
<div class="flex justify-center  w-full ">
    
      <div class='flex flex-col w-1/12    bg-gray-700 min-h-screen text-white    '>
              {#each slides as slide,i}
              <button class='hover:bg-gray-600 my-1 hover:border-2 border-white' on:click={()=>setCurrentSlide(i)}
              style={`background-color: ${currentSlide && currentSlide.uuid == slide.uuid ? 'green' : '#374151'}; `}
              >{i+1}
              </button>
              {/each}
      </div>
      
      <div class={`w-${wdd}/12  bg-blue-900 min-h-screen`} >
          {#if currentSlide}    
            <Presentation {currentSlide} {theme} pulse=0 />
            {/if}
      </div>

          {#if showEdit}     
      <div class='w-4/12 '>
          {#if currentSlide}     
      <Presentation bind:currentSlide={currentSlide} {theme} pulse=0  displayMode={false} />
      
      <div class='w-full text-center'>
      <MoveSlideDown {currentSlide} {moveDown}/>
      <MoveSlideUp {currentSlide} {moveUp}/>
      <DeleteSlide {currentSlide} {delSlide}/>
      </div>
          {/if}
      </div>
          {/if}
</div>
{/if}


</div><!--page wrapper-->