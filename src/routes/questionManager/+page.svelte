<script>
//@ts-nocheck
import {NavBtn,NavBtn2} from 'sveltetools_bils/src/cmp';
import Nav from '$lib/appComp/Nav.svelte';
import HdgWithIcon from 'sveltetools_bils/src/cmp/HdgWithIcon.svelte';
import {Icons,onMount,checkToken,checkAdminToken} from '$lib/util'; 
import AddQuestion from './AddQuestion.svelte';
import DelQuestion from './DelQuestion.svelte';
import Copy from './Copy.svelte';
let showDel = 1;

let isLogin = false;
let isAdmin = false;

onMount(async () => {
  try{
    if (checkToken()){
      isLogin = true;
        if (checkAdminToken()){
            isAdmin = true;
        }
    }     

  } catch (e) {
       toast.push('failed to load');
  }      
});

</script>
<Nav {isLogin} {isAdmin}/>
<div class="p-0 m-0 bg-gray-800 w-full min-h-screen">

<!-- {#if isLogin} -->
<div class='flex justify-start items-center gap-1  w-full p-1 bg-gray-900'>
 <NavBtn2 title='Add question' icon ={Icons.ADD}    clk={()=>showDel=1}/>
  <NavBtn2 title='Delete question' icon ={Icons.DEL}    clk={()=>showDel=2}/> 
 <NavBtn2 title='Copy question' icon ={Icons.TEMPLATE}    clk={()=>showDel=3}/> 
</div>
<!-- {:else} -->
<!-- <h1>Please login</h1> -->
<!-- {/if} -->


{#if showDel==1}
<div class='flex justify-center text-white'>
<HdgWithIcon bgColor = 'bg-green-800'>Add Questions</HdgWithIcon>
</div>

    <AddQuestion />
{/if}  

{#if showDel==2}
<div class='flex justify-center text-white'>
<HdgWithIcon bgColor = 'bg-orange-800'>Delete Questions</HdgWithIcon>
</div>

    <DelQuestion />
{/if}   

{#if showDel==3}
<div class='flex justify-center text-white'>
<HdgWithIcon bgColor = 'bg-blue-800'>Copy Questions</HdgWithIcon>
</div>

    <Copy />
{/if}    




<br>
<br>
<br>
<br>
<br>
</div><!--page wrapper-->