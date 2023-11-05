<script>
//@ts-nocheck
import { PageWrapper } from '$lib/cmp';
import { BASE_URL,onMount,toast,goto } from '$lib/util';

import LoadPage from "./LoadPage.svelte"

////////////////////////////////////////////////////////
let pageStatus = "loading";
let msg = "Loading Please...";
let question;
let eqs;
let isLogin = false
let isAdmin = false
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
        
        // const code = [];
        // for (let i = 0; i < eqs.length; i++) {
        //   const eq = eqs[i];
        //   const n = {equation: eq.code}
        //   code.push(n);
        // }
        // console.log("code",code);
        isLogin = true;
        isAdmin = data.isAdmin;
///////////////////////////////////////////////////////
//--so final does not open for Admin also
// debugger;
if (question.status == 'final'){toast.push(`Sorry this question is final`); return;}

if (isAdmin){pageStatus = "load";toast.push(`Welcome Admin , question status: ${question.status}`); return;}
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
<LoadPage bind:question={question} bind:eqs={eqs} {isLogin}  {isAdmin}/>
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