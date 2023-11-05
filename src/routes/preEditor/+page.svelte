<script>
//@ts-nocheck
import { NavBtn2} from '$lib/cmp';
import { Icons,onMount, toast,BASE_URL, goto } from '$lib/util';
import save from './save.js';
import DisplayPanel from './DisplayPanel.svelte';
import SettingsPanel from './SettingsPanel.svelte';
import AddNewSlide from './AddNewSlide.svelte';
import createNewPresentation from './createNewPresentation.js';

let showAddNew = false;
let currentSlide = null;
let slides=[];
let id = null;

function setCurrentSlide(i){
        currentSlide = slides[i];
}

function create(){
// debugger;
const  newPresentation = createNewPresentation();
slides = newPresentation.slides;
id = newPresentation.id;
}

async function saveLocal(id,slides){
// debugger;
 await save(id,slides);
toast.push('saved');
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
   slides = data.presentation.slides; 
//    console.log('slides' , slides);
   toast.push("loaded");
  }


});

function redraw(){slides = [...slides];}

</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>

<div class='flex justify-start w-full p-1 m-0 bg-gray-900'>

<NavBtn2  icon={Icons.HOUSE} title='Home' clk={()=>goto('/presentations')}     />
<NavBtn2  icon={Icons.BULB} title='New' clk={()=>showAddNew = !showAddNew}     />
<NavBtn2  icon={Icons.SAVE} title='Save' clk={()=>saveLocal(id,slides)}     />
</div>

{#if showAddNew}
<AddNewSlide   bind:slides={slides} {redraw}/>
{/if}



{#if slides }
<div class="flex justify-center  w-full ">

    
        <div class='flex flex-col w-1/12    bg-gray-800 min-h-screen text-white    '>
                {#each slides as slide,i}
                <button class='hover:bg-gray-600' on:click={()=>setCurrentSlide(i)}>{i+1}</button>
                {/each}
        </div>
        
        <div class='w-7/12    bg-blue-900 min-h-screen   '>
             <DisplayPanel   {currentSlide}/>
        </div>

        <div class='w-4/12 bg-yellow-900'>
           {#if currentSlide}     
              <SettingsPanel bind:slide={currentSlide} />  
              {/if}
        </div>
</div>
{/if}


</div><!--page wrapper-->