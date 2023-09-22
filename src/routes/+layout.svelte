<script>
 import { SvelteToast } from '@zerodevx/svelte-toast'
 
import {isLoginStore} from '../lib/cmn/appStore';
// import {loadApp} from '$lib/ajax';
// $: isLogin = $isLoginStore;
// src/routes/+layout.js
// export const ssr = false;

  import "../app.postcss";
  const options = {}

function checkLogin(){
   if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('token');
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  return token && token !== '';
}
  if (checkLogin() ) {
    isLoginStore.set(true);
    // debugger;
    // loadApp();
  }
</script>




<SvelteToast {options} />

<slot />
