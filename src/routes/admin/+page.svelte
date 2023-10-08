<script>
//@ts-nocheck
import {NavBtn2} from '$lib/cmp';
import { PageWrapper,HdgWithIcon,CardOnly} from  '$lib/cmp';
import { BASE_URL,chqLogin, onMount,toast,Icons,goto} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';


// import addQuestionSpecial from './addQuestionSpecial';

import AddQuestion from './AddQuestion.svelte';
import DeleteQuestion from './DeleteQuestion.svelte';
import AddSpecial from './AddSpecial.svelte';


import { isLoginStore, isAdminStore } from '$lib/util';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;
  
let show = "addQuestion";

onMount(async () => {
  try{
  // debugger;
   chqLogin();
  } catch (e) {
       toast.push('Unknown Error');
  }      
});

////////////////////////////////////////////////////////
</script>
<Nav />
<PageWrapper>
<div class="flex justify-left p-1  m-0 bg-gray-600">
<NavBtn2 clk={()=>show="addQuestion"} icon={Icons.QUESTIONMARK} title="Add Q"/>
<NavBtn2 clk={()=>show="addSpecial"} icon={Icons.EXPLOSION} title="Add Special"/>
<NavBtn2 clk={()=>show="deleteQuestion"} icon={Icons.DEL} title="Del Q"/>
</div>


<br/>

{#if show == "addQuestion"}
<AddQuestion />
{/if}

{#if show == "deleteQuestion"}
<DeleteQuestion />
{/if}

{#if show == "addSpecial"}
<AddSpecial />
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
