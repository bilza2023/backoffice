<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import { Icons,onMount, toast } from '$lib/util';
import save from './save.js';
import DisplayPanel from './DisplayPanel.svelte';
import SettingsPanel from './SettingsPanel.svelte';
import AddNewSlide from './AddNewSlide.svelte';

let presentationName = '';
let showAddNew = false;
let currentSlide = null;
let slides=[];

function setCurrentSlide(i){
        currentSlide = slides[i];
}

onMount(async () => {
  try {
//     debugger;
    let  id = new URLSearchParams(location.search).get("id"); 
    let presentations = JSON.parse(localStorage.getItem('presentations'));    
    
    if (!isNaN(id) && id >= 0 && id < presentations.length) {
            slides = presentations[  parseInt(id) ]; 
            console.log( slides  );
    } else {
            toast.push('Failed to find presentation')    
    }

  }catch (e) {
        toast.push('failed to load');
  } 
     
});

function redraw(){slides = [...slides];}

</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>

<div class='flex justify-start w-full p-1 m-0 bg-gray-900'>

<NavBtn2  icon={Icons.BULB} title='New' clk={()=>{showAddNew = !showAddNew}}     />
<NavBtn2  icon={Icons.SAVE} title='Save' clk={()=>save(slides)}     />
</div>

{#if showAddNew}
<div class="flex w-full bg-gray-600">
        <input class="p-1 m-1 text-xs rounded-md" type="text" 
                bind:value={presentationName}
        />
        <button class="p-1 m-1 text-xs rounded-md">Create New</button>
</div>
{/if}
<AddNewSlide  {showAddNew} bind:slides={slides} {redraw}/>



{#if slides}
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