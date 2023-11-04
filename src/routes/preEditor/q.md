This is my svelte component i am trying to loop through 
slides.slide.items


.svelte
<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import { Icons,onMount } from '$lib/util';
import getNewSlide  from '$lib/Presentation/getNewSlide.js';

const slides =[];

onMount(async()=>{

    slides.push(getNewSlide(0,30,"HdgImg",[
 
    {name : '', content: 'Heading and Image' , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []}, 
 
    {name : '', content: 'graph' , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []} 
 
    ]));
    console.log("slides" ,slides);
});
</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>

<div class='flex justify-start w-full p-1 m-0 bg-gray-900'>

<NavBtn2  icon={Icons.BULB} title='New' clk={()=>{console.log("click")}}     />
</div>

{#if slides}
<div class="flex justify-center  w-full ">
{#each slides as slide}
    {#each slide.items as item}
        <div class='w-1/12    bg-gray-800 min-h-screen   '>
            <p>{item.content}</p>
        </div>
        
        <div class='w-7/12    bg-blue-900 min-h-screen   '>
        
        </div>

        <div class='w-4/12 bg-yellow-900'>
        
        </div>
    {/each}
{/each}
</div>
{/if}




</div><!--page wrapper-->

getNewSlide.js
//4-nov-2024
//@ts-nocheck
/***
- No data from Presentation and Ample data from component internal.2
- DO NOT USE GLOBALS FROM PRESENTATION / ENGINE TO SLIDES 
- dont use callbacks in comps since they are just display items.its not an app its presentation.
 */

export default function getNewSlide( startTime, endTime, type, items, compExtra=[], template='') {

return {
    startTime,
    endTime,
    type,
    version:'0.0.0',
    items, 
    compExtra,
    template,
};




}
