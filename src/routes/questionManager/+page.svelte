<script>
//@ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import {Icons} from '$lib/util';
import AddQuestion from './AddQuestion.svelte';
import DelQuestion from './DelQuestion.svelte';
let showDel = false;
</script>

<div class="p-0 m-0 bg-gray-800 w-full min-h-screen">

<br>

<div class='flex justify-center text-white'>
<HdgWithIcon>Add/Delete Questions</HdgWithIcon>
</div>
<br>

<div class='flex justify-start items-center gap-1  w-full p-1 bg-gray-900'>
 <NavBtn2 title='Add question' icon ={Icons.ADD}    clk={()=>showDel=false}/>
  <NavBtn2 title='Delete question' icon ={Icons.DEL}    clk={()=>showDel=true}/>
</div>


{#if !showDel}
    <AddQuestion />
{:else}
    <DelQuestion />

{/if}





<br>
<br>
<br>
<br>
<br>
</div><!--page wrapper-->