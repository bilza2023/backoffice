<script>
//@ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Logo from './Logo.svelte';
import {Icons,goto, toast,onMount} from '$lib/util';
// import { teacherNameStore } from '$lib/util/appStore';
  // $: teacherName = $teacherNameStore;

export let isLogin = false;  
export let isAdmin = false;  

///////////////////////////////////
function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('teacher_name');
    localStorage.removeItem("teacher_status");
    goto('/login');
}
function extractEmailPrefix() {
try{
// debugger;
const email = localStorage.getItem("teacher_name");
    let atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.substring(0, atIndex);
    } else {
        return 'name not found';
    }
}catch (e) {
  return 'name not found'; 
}
}
function statusIcons(){
  if (isAdmin){
    return Icons.MANAGER;
  }else {
    return Icons.STUDENTCAP;
  }
} 

</script>

<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    {#if isLogin}
    <Logo url='/' />
    {:else}
    <Logo url='/login' />
    {/if}
    </div>
            <!-- ******************************** -->
    <div class='flex'>
    {#if isLogin}
    <!-- <NavBtn title='Templates' icon ='📜' url='/templates'/> -->
    

    <NavBtn2 title={extractEmailPrefix()} icon ={statusIcons()}    clk={()=>toast.push("is loggedin")}/>
      {#if isAdmin}
    <!-- <NavBtn title='Admin Panel' icon ={Icons.BULB} url='/admin'/> -->
      {/if}
      
    <NavBtn title='Filled By Me' icon ={Icons.PENCIL} url='/filledByMe'/>
    <NavBtn title='Help' icon ={Icons.BOOK}    url='/help'/>
    <NavBtn2 title='Logout' icon ={Icons.LOCK}    clk={logout}/>
    
    {:else}
    <NavBtn title='Help' icon ={Icons.BOOK}    url='/help'/>
    <NavBtn title='Login' icon ='🔑'  url='/login'/>
    {/if}
    </div>
</div><!--outer most div-->

