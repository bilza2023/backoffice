<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import {Icons} from '$lib/util';
import save from './fn/save';
let show  = false;
export let slides;
export let id;
</script>

<div class='flex justify-start bg-gray-600 m-0 p-0 items-center gap-1'>
  <NavBtn2 title='Add Slide' icon={Icons.BULB}  clk={()=>show = !show} />
  <NavBtn2 title='Save' icon={Icons.BOOK}  clk={()=>save(slides,id)} />
  
  Start Time: &nbsp;
  <input class='bg-gray-500 text-white p-0 m-0 rounded-md border-2 border-white'  type="number">
  End Time: &nbsp;
  <input class='bg-gray-500 text-white p-0 m-0 rounded-md border-2 border-white'  type="number">

</div>

{#if show}
<div class='bg-gray-400'>
<NavBtn2 title='Add Slide' icon={Icons.BULB} clk={()=>{console.log("ok")}} />
</div>
{/if}
