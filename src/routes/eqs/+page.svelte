<script>
//@ts-nocheck
import { PageWrapper } from '$lib/cmp';
import { BASE_URL,onMount,toast,goto,chqLogin } from '$lib/util';

import save from './save';
import Toolbar from './Toolbar.svelte';
import Titlebar from './Titlebar.svelte';
import EqPart from './EqPart.svelte';
import AdminPanel from './AdminPanel.svelte';
import EqPartLowerToolBar from './EqPartLowerToolBar.svelte';
import SPFSPart from './SPFSPart/SPFSPart.svelte';
import PageHeading from './PageHeading.svelte';
import getEqData from './extra/eqData';
import Nav from '$lib/appComp/Nav.svelte';
import TeacherPanel from './TeacherPanel.svelte';
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
        console.log("data",data);
        // let question  = data.question //===> important

        if (data.question.status == "unlocked"){
            pageStatus = "load";
        }
        if (data.question.status == "locked"){
            msg = "Sory this question is locked.";
        }
        if (data.question.status == "final"){
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