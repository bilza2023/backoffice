<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from './teachermath/Nav.svelte';

import { isLoginStore, isAdminStore } from '../lib/util/appStore.js';
  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  
let questions;
onMount(async () => {
  try{
      if (!chqLogin()){
      goto('/login');
      }
 
  } catch (e) {
       toast.push('failed to load');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Teachers Hub</HdgWithIcon>
</div>
<br>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</PageWrapper>
