I have 2 functions in this svelte +page.svelte component
setSPTrue and closeAllSP
They should hide and show side panels but they dont why ?

here is page.svelte
<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>

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
import Nav from '../Nav.svelte';
import TeacherPanel from './TeacherPanel.svelte';

import { isLoginStore, isAdminStore } from '../../../lib/util/appStore.js';
  $: isLogin = $isLoginStore;
  $: isAdmin = $isAdminStore;  
////////////////////////////////////////////////////////
 function redraw(){eqs = [...eqs];}
function toggleSP(index){
 eqs[index].spVisibility = !eqs[index].spVisibility; 
 eqs[index].fsVisibility = false; 
 eqs = [...eqs];
}
function toggleFS(index){
 eqs[index].fsVisibility = !eqs[index].fsVisibility; 
 eqs[index].spVisibility = false;
 eqs = [...eqs];
}

function moveUpEq(index) {
  if (index > 0) {
    const eqToMove = eqs[index];
    eqs.splice(index, 1);
    eqs.splice(index - 1, 0, eqToMove);
  }
 eqs = [...eqs]; 
}
function moveDownEq(index) {
  if (index < eqs.length - 1) {
    const eqToMove = eqs[index];
    eqs.splice(index, 1);
    eqs.splice(index + 1, 0, eqToMove);
  }
  eqs = [...eqs];
}
function delEq(index) {
  eqs.splice(index, 1);
  eqs = [...eqs];
}
function setSPTrue(eqs){
  for (let i = 0; i < eqs.length; i++) {
    eqs[i].spVisibility = true; 
  }
    eqs = [...eqs];
}
function closeAllSP(eqs){
  debugger;
  for (let i = 0; i < eqs.length; i++) {
    eqs[i].spVisibility = false; 
  }
    eqs = [...eqs];
}
function addEq(i) {
   eqs.splice(i+1, 0, getEqData());
  eqs = [...eqs];
  // console.log("eqs",eqs);
}
let question;
let eqs = [];
onMount(async () => {
  try {
  //  debugger;
       if (!chqLogin()){
      goto('/login');
      return;
      }
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
        question  = data.mathQuestion //===> important
        eqs = question.eqs;
        setSPTrue(eqs);
        questionDetails = question.filename;

    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    // toast.push('Unknown Error');
    // console.error(error);
  }
});

</script>
<Nav />
<PageWrapper>
{#if question}

<Toolbar  {addEq} {question} {closeAllSP} {setSPTrue}/>
<PageHeading/>

<div class="m-4 p-0">
  <Titlebar />
  {#each eqs as eq, i}
      <EqPart  {eq} {i}/>
      <EqPartLowerToolBar {eq} {i} {addEq} {moveUpEq} {moveDownEq} {delEq} {toggleSP} {toggleFS}/>

        {#if eq.spVisibility}
          <SPFSPart clr="bg-yellow-900"  arrayName='Side Panel' theArray={eq.sp}  {redraw} {i} />
        {/if}
        {#if eq.fsVisibility}
          <SPFSPart clr="bg-stone-700"  arrayName='Full Screen' theArray={eq.fs}  {redraw} {i} />
        {/if}
  {/each}
</div>

<div class="mx-8">
  
  {#if isAdmin }
  <p class="p-1 m-1 text-xs">Teacher Comments</p>
  <p class="w-full p-2 bg-gray-900 border-2 border-gray-500" >{question.teacherComments}</p>

  <p class="p-1 m-1 text-xs">Admin Comments</p>
  <textarea class="w-full p-2 bg-gray-800 border-2 border-white" bind:value={question.adminComments}></textarea>
  
  {:else}
  <p class="p-1 m-1 text-xs">Teacher Comments</p>
  <textarea class="w-full p-2 bg-gray-800 border-2 border-white rounded-md" bind:value={question.teacherComments}></textarea>

  <p class="p-1 m-1 text-xs">Admin Comments</p>
  <p class="w-full p-2 bg-gray-900 border-2 border-gray-500 rounded-md">{question.adminComments}</p>
  {/if}
  
</div>
<br>
<br>

  {#if isAdmin }
    <AdminPanel {question} {redraw}/>
  {/if}
{/if}
<br>


<div class="flex justify-center">
  <button id="saveBtn2" class="w-10/12 bg-green-800 p-2  rounded-md text-xl" on:click={()=>save(question,eqs)}>Save</button>
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
here is Toolbar.svelte
<script>
//@ts-nocheck
export let addEq;
export let question;
export let closeAllSP;
export let setSPTrue;

</script>


<div class="flex justify-left bg-gray-900 p-2">
<a class="bg-blue-800 p-1   rounded-sm" href="/">Home</a>
&nbsp;
<button id="saveBtn" class="bg-green-800 p-1   rounded-sm"
on:click={addEq}
>Add Eq</button>
&nbsp;
<button  class="bg-blue-800 p-1   rounded-sm"
on:click={()=>setSPTrue(question.eqs)}>Show All Sp</button>
&nbsp;
<button  class="bg-orange-800 p-1   rounded-sm"
on:click={()=>closeAllSP(question.eqs)}
>Close all SP</button>
&nbsp;
<span class="bg-blue-900 p-1 rounded-xl text-white ml-4 my-auto">{question.filename}</span>
</div>