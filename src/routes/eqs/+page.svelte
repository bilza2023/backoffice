<script>
//@ts-nocheck
import { PageWrapper } from '$lib/cmp';
import { BASE_URL,onMount,toast,goto,chqLogin } from '$lib/util';

import LoadPage from "./LoadPage.svelte"

////////////////////////////////////////////////////////
let pageStatus = "loading";
let msg = "Loading Please...";
let question;
let eqs;
onMount(async () => {
  try {
     
      // debugger;
   //http://localhost/math?id=6508bff7c970727df5e0ac85
    const token = localStorage.getItem('token');
      let  id = new URLSearchParams(location.search).get("id"); 
      const resp = await fetch( `${BASE_URL}/be/get_question?id=${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
  
    if (resp.ok) {
        // debugger;
        const data = await resp.json();
        question  = data.question //===> important
        eqs = question.eqs;
///////////////////////////////////////////////////////
switch (question.status) {
    case "unlocked":
        pageStatus = "load";
        break;
    case "locked":
        msg = "Sorry this question is locked.";
        break;
    case "final":
        msg = "Sorry this question is final.";
        break;
    case "fill":
        let teacher_name = localStorage.getItem("teacher_name");
        if (teacher_name == data.question.filledBy) {
            pageStatus = "load";
        } else {
            msg = "Sory this question is not filled by you, or you may not be logged in properly.";
        }
        break;
}

///////////////////////////////////////////////////////        

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
<LoadPage {question} {eqs}/>
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