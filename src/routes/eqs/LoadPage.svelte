<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>

<script>
//@ts-nocheck
import { PageWrapper } from '$lib/cmp';
import { onMount,toast } from '$lib/util';

import save from './save';
import Toolbar from './Toolbar.svelte';
import Titlebar from './Titlebar.svelte';
import EqPart from './EqPart.svelte';
import FullScreen from './fullScreen/FullScreen.svelte';
import AdminPanel from './AdminPanel.svelte';
import EqPartLowerToolBar from './EqPartLowerToolBar.svelte';
import SPFSPart from './SPFSPart/SPFSPart.svelte';
import PageHeading from './PageHeading.svelte';
import getEqData from './extra/eqData';
import Nav from '$lib/appComp/Nav.svelte';
// import TeacherPanel from './TeacherPanel.svelte';

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
function setStatus(status){
 question.status = status;
 redraw();
}
function setFree(free){
 question.free = free;
 redraw();
}
function setType(typ){
 question.questionType = typ;
 redraw();
}
function setEqType(i,typ) {
//  debugger;
  eqs[i].type = typ;
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
function setSPTrue(){
  for (let i = 0; i < eqs.length; i++) {
    eqs[i].spVisibility = true; 
  }
    eqs = [...eqs];
} 
function closeAllSP(){
  // debugger;
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
let allowed = true;
export let  question;
export let eqs;
export let isLogin=false;
export let isAdmin=false;
let questionDetails;
onMount(async () => {
  try {
       
        setSPTrue(eqs);
        questionDetails = question.filename;

  } catch (error) {
    // toast.push('Unknown Error');
    // console.error(error);
  }
});

</script>
<Nav {isLogin} {isAdmin} />
<PageWrapper>
{#if question && allowed}

<Toolbar  {addEq} {question} {closeAllSP} {setSPTrue}/>
<PageHeading/>

<div class="m-4 p-0">
  <Titlebar />
  {#each eqs as eq, i}
      <EqPart  {eq} {i} status ={question.status}/>
      <EqPartLowerToolBar {eq} {i} {addEq} {moveUpEq} {moveDownEq} {delEq} {toggleSP} {toggleFS} {setEqType}/>

        {#if eq.spVisibility}
          <SPFSPart clr="bg-yellow-900"  arrayName='Side Panel' theArray={eq.sp}  {redraw} {i} />
        {/if}
        {#if eq.fsVisibility}
          <FullScreen bind:fs={eq.fs[i]} {i} />
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
    <AdminPanel {question} {setFree} {setStatus} {setType}/>
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

</PageWrapper>
