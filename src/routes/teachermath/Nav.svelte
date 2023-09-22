<script>
//@ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Logo from '$lib/appComp/Logo.svelte';
import {Icons,goto, toast} from '$lib/util';
import { isLoginStore, isAdminStore } from './store.js';

  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
///////////////////////////////////
function logout(){
    isLoginStore.set(false);
    isAdminStore.set(false);
    goto('/teachermath/login');
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
    <Logo url='/teachermath' />
    {:else}
    <Logo url='/teachermath/login' />
    {/if}
    </div>
            <!-- ******************************** -->
    <div class='flex'>
    {#if isLogin}
    <!-- <NavBtn title='Templates' icon ='📜' url='/templates'/> -->
    

    <NavBtn2 title='Status' icon ={statusIcons()}    clk={()=>toast.push("is loggedin")}/>
    <NavBtn title='Syllabus' icon ='📜' url='/teachermath/syllabus'/>
    <NavBtn title='Help' icon ={Icons.BOOK}    url='/teachermath/help'/>
    <NavBtn2 title='Logout' icon ={Icons.LOCK}    clk={logout}/>
    
    {:else}
    <NavBtn title='Help' icon ={Icons.BOOK}    url='/teachermath/help'/>
    <NavBtn title='Login' icon ='🔑'  url='/teachermath/login'/>
    {/if}
    </div>
</div><!--outer most div-->

