<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import { Icons,onMount } from '$lib/util';
import getNewSlide  from '$lib/Presentation/getNewSlide.js';

let slides=[
getNewSlide(0,30,"HdgImg",[
 
    {name : '', content: 'Heading and Image' , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []}, 
 
    {name : '', content: 'graph' , showAt :0, hideAt:null , entryStyle:null , exitStyle:null , extra : []} 
 
    ]),
];

</script> 

<div class='bg-gray-800 text-white w-full min-h-screen'>

<div class='flex justify-start w-full p-1 m-0 bg-gray-900'>

<NavBtn2  icon={Icons.BULB} title='New' clk={()=>{console.log("click")}}     />
</div>

{#if slides}
<div class="flex justify-center  w-full ">

{#each slides as slide,i}
    
        <div class='w-1/12    bg-gray-800 min-h-screen text-white   '>
                <p>{i+1}</p>
        </div>
        
        <div class='w-7/12    bg-blue-900 min-h-screen   '>
                <p>{slide.startTime}</p>
        </div>

        <div class='w-4/12 bg-yellow-900'>
                <p>{slide.endTime}</p>
        </div>
{/each}
</div>
{/if}




</div><!--page wrapper-->