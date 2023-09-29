<script>
//@ts-nocheck
import { PageWrapper,HdgWithIcon,Card} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '../../teachermath/Nav.svelte';

import { isLoginStore, isAdminStore } from '$lib/util/appStore.js';
  // Use the store values directly with the $ prefix
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
let questions;  

onMount(async () => {
  try{
        // debugger;
    if (!isLogin || !isAdmin){
    goto('/login');
    return;
    }  //

    const token = localStorage.getItem("token");

    const resp = await fetch( `${BASE_URL}/all_filled` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {token} )
    });

    if (resp.ok){
        const data = await resp.json();
        questions = data.questions;
    }else {
        toast.push('failed to load');
        throw new Exception("failed to load")
    }
  
  } catch (e) {
       toast.push('Unknown Error');
  }      
});

////////////////////////////////////////////////////////
</script>
<PageWrapper>

<div class='flex  w-full justify-center  flex-wrap'>
{#if questions}
{#each questions as question,index}
    

            <div class='w-3/12'>
            <Card
            title = {`Ex ${question.exercise} Q-${question.questionNo} pt ${question.part}`}
            icon={Icons.TEST}
            url = {`/teachermath/editor?id=${question._id}`}>
            </Card>
            </div>
{/each}
{/if}
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
