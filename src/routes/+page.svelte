./teachermath/store.js
<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon} from  '$lib/cmp';
import { onMount,toast,Icons,goto} from '$lib/util';
import { BASE_URL } from './teachermath/config.js';
import Nav from './teachermath/Nav.svelte';
import { isLoginStore, isAdminStore } from './teachermath/store.js';

  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
let questions;
onMount(async () => {
      try{
      // debugger;
      if (!isLogin){
      goto('/teachermath/login');
      return;
      }
 //   debugger;
       //http://localhost/math?id=6508bff7c970727df5e0ac85
    //   let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/math_syllabus`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });

    if (resp.ok){
      const data = await resp.json();
      questions = data.questions;
      console.log( 'list'  ,questions);
    }else {
        toast.push('failed to load');
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
