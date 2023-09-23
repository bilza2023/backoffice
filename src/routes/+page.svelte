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
<div class='flex flex-col justify-center'>
<p class="bg-gray-700 p-1 m-1 mx-4"><u>New Additions : </u></p>
<p class="bg-gray-700 p-1 m-1 mx-4">New Items added to Help. Please check</p>
<p class="bg-gray-700 p-1 m-1 mx-4">Login system fixed</p>
<p class="bg-gray-700 p-1 m-1 mx-4">Check out the new Syllabus Page</p>
<p class="bg-gray-700 p-1 m-1 mx-4">Get Empty Get Fill not working</p>
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

</PageWrapper>
