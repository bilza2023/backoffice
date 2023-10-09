<script>
//@ts-nocheck
import { PageWrapper } from '$lib/cmp';
import { BASE_URL,onMount,toast,goto,chqLogin } from '$lib/util';

import LoadPage from "./LoadPage.svelte"

import { isLoginStore, isAdminStore } from '$lib/util/appStore.js';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;  
////////////////////////////////////////////////////////
let pageStatus = "loading";
let msg = "Loading Please...";
onMount(async () => {
  try {
       if (!chqLogin()){
      goto('/login');
      return;
      }
      // debugger;
   //http://localhost/math?id=6508bff7c970727df5e0ac85
      let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/get_question?id=${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer 000`,
        }
      });
  
    if (resp.ok) {
        // debugger;
        const data = await resp.json();
        let question  = data.question //===> important
        // console.log("question.status",question.status);

        if (question.status == "unlocked"){
        // console.log("question.status",question.status);
            pageStatus = "load";
        }
        if (question.status == "locked"){
            msg = "Sory this question is locked.";
        }
        if (question.status == "final"){
            msg = "Sory this question is final.";
        }
        
        if (data.question.status == "fill"){
            let teacher_name = localStorage.getItem("teacher_name");
            if(teacher_name == data.question.filledBy){
                pageStatus = "load";
            }else {
                msg = "Sory this question is not filled by you.";
            }
        }
        

    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    // toast.push('Unknown Error');
    console.error(error);
  }
});

</script>
<PageWrapper>
{#if pageStatus !== 'load'}
<h1>{msg}</h1>
{/if}
{#if pageStatus == 'load'}
<LoadPage />
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

</PageWrapper>