<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons} from '$lib/util';
import save from './fn/save';
let show  = false;
export let slides;
export let id;
export let addNew;
export let currentSlide;
export let delCurSlide;
</script>

<div class='flex justify-start bg-gray-600 m-0 p-0 items-center gap-1'>
  <NavBtn2 title='New' icon={Icons.BULB}  clk={()=>show = !show} />
  <NavBtn2 title='Save' icon={Icons.BOOK}  clk={()=>save(slides,id)} />
  
{#if currentSlide}
  Start Time: &nbsp;
  <div class='bg-gray-500 text-white p-0 px-4 m-0 rounded-md border-2 border-white'  type="number" >
  {currentSlide.startTime}
  </div>
  
  End Time: &nbsp;
  <input class='bg-gray-500 text-white p-0 m-0 rounded-md border-2 border-white'  type="number" bind:value={currentSlide.endTime}>
  {/if}

 <NavBtn2 title='Del' icon={Icons.DEL}  clk={delCurSlide} />
  

</div>

{#if show}
<div class='flex flex-wrap  bg-gray-400'>
<NavBtn2 title='HdgImg' icon={Icons.BULB} clk={()=>addNew('HdgImg')} />
<NavBtn2 title='Grid' icon={Icons.BULB} clk={()=>addNew('grid')} />
</div>
{/if}
