<script>
// @ts-nocheck
import {NavBtn,NavBtn2} from '$lib/cmp';
import Logo from './Logo.svelte';
import { isLoginStore } from '$lib/cmn/appStore';
import logout from './fn/logout';
import {Icons} from '$lib/util';
$: isLogin = $isLoginStore;

// function hasToken() {
//   if (typeof window === 'undefined') return false;
//   const token = localStorage.getItem('token');
//   if (!token) return false;
//   const parts = token.split('.');
//   if (parts.length !== 3) return false;
//   return token && token !== '';
// }

</script>
            <!-- ******************************** -->
<!-- decided not to use NavBar comp -->
<div class='flex justify-between items-center   p-0  px-1 m-0 bg-gray-700'>

    <div class='flex'>
    
    {#if isLogin}
    <Logo url='/' />
    <!-- <NavBtn title='Sync' icon='♻️'/> -->
    {:else}
    <Logo url='/' />
    {/if}
    </div>
            <!-- ******************************** -->
            <!-- ******************************** -->
    <div class='flex'>
    {#if isLogin}
    <!-- <NavBtn title='Templates' icon ='📜' url='/templates'/> -->
    <NavBtn title='Math' icon ='📜' url='/math'/>
    <!-- <NavBtn title='English' icon ={Icons.STUDENT} url='/english'/> -->
    <!-- <NavBtn title='Tests' icon ='🧪' url='/tests'/> -->
    <NavBtn title='Blog' icon ={Icons.BOOK} url='/docs'/>

      <NavBtn2 title='Logout' icon ='🚪' clk={logout}/>
    
    {:else}
    <NavBtn title='Login' icon ='🔑'  url='/login'/>
    <NavBtn title='Signup' icon ='🔓'  url='/register'/>
    {/if}
    </div>
</div><!--outer most div-->

