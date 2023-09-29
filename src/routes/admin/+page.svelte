<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,Card} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '../teachermath/Nav.svelte';

import { isLoginStore, isAdminStore } from '$lib/util/appStore.js';
    import Allfilled from './Allfilled.svelte';
  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  
let allfilled = false; 
onMount(async () => {
  try{
    if (!isLogin || !isAdmin){
    goto('/login');
    return;
    }  //
    
  
  } catch (e) {
       toast.push('Unknown Error');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>

<div class='flex justify-center  p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Admin Panel</HdgWithIcon>
</div>

<button on:click={()=>allfilled = !allfilled}>All Filled</button>
{#if allfilled}
<Allfilled />
{/if}

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
