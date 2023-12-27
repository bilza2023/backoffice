<script>
//@ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Nav from '$lib/appComp/Nav.svelte';
import HdgWithIcon from '$lib/cmp/HdgWithIcon.svelte';
import {Icons,onMount,checkToken,checkAdminToken} from '$lib/util';
import AddQuestion from './AddQuestion.svelte';
import DelQuestion from './DelQuestion.svelte';
let showDel = false;

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

{#if isLogin}
<div class='flex justify-start items-center gap-1  w-full p-1 bg-gray-900'>
 <NavBtn2 title='Add question' icon ={Icons.ADD}    clk={()=>showDel=false}/>
  <NavBtn2 title='Delete question' icon ={Icons.DEL}    clk={()=>showDel=true}/>
</div>


{#if !showDel}
<div class='flex justify-center text-white'>
<HdgWithIcon bgColor = 'bg-green-800'>Add Questions</HdgWithIcon>
</div>

    <AddQuestion />
{:else}
<div class='flex justify-center text-white'>
<HdgWithIcon bgColor = 'bg-orange-800'>Delete Questions</HdgWithIcon>
</div>

    <DelQuestion />

{/if}


{:else}
<div class='flex justify-center text-white'>
<HdgWithIcon bgColor = 'bg-orange-800'>Please login</HdgWithIcon>
</div>
{/if}
<br>
<br>
<br>
<br>
<br>
</div><!--page wrapper-->