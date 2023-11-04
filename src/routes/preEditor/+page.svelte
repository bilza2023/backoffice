<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import { Icons,onMount } from '$lib/util';
import getNewSlide  from '$lib/Presentation/getNewSlide.js';
import {getNewItem} from '$lib/Presentation';
import DisplayPanel from './DisplayPanel.svelte';
import SettingsPanel from './SettingsPanel.svelte';
import AddNewSlide from './AddNewSlide.svelte';

let showAddNew = false;
let currentSlide = null;
let slides=[];

function setCurrentSlide(i){
        currentSlide = slides[i];
        // console.log(currentSlide);
}

function addHdgImg(){
let newStartTime = 0;
 if(slides.length > 0){
 newStartTime = slides[0].endTime ;
 
 }
    slides.push(getNewSlide(newStartTime,newStartTime + 10,"HdgImg",[]));
    slides[slides.length -1].items = [];
    slides[slides.length -1].items.push(getNewItem('','heading'));
    slides[slides.length -1].items.push(getNewItem('','imgSrc'));

    redraw();
    showAddNew = false;
}

function redraw(){slides = [...slides];}

</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>

<div class='flex justify-start w-full p-1 m-0 bg-gray-900'>

<NavBtn2  icon={Icons.BULB} title='New' clk={()=>{showAddNew = !showAddNew}}     />
<NavBtn2  icon={Icons.SAVE} title='Save' clk={()=>{localStorage.setItem('slides',JSON.stringify(slides));}}     />
</div>

{#if showAddNew}
<AddNewSlide add={addHdgImg}/>
{/if}



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