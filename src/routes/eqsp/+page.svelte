<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>

<script>
//@ts-nocheck
import { PageWrapper } from '$lib/cmp';
import { onMount,toast } from '$lib/util';

// import save from './save';
// import Toolbar from './Toolbar.svelte';
import Titlebar from './Titlebar.svelte';
import EqPart from './EqPart.svelte';
// import FullScreen from './fullScreen/FullScreen.svelte';
import EqPartLowerToolBar from './EqPartLowerToolBar.svelte';
// import SPFSPart from './SPFSPart/SPFSPart.svelte';
import PageHeading from './PageHeading.svelte';
import getNewItem from './getNewItem';
//--remove nav later
// import Nav from '$lib/appComp/Nav.svelte';
function save(){console.log('slide' , slide);}
////////////////////////////////////////////////////////
 function redraw(){slide = {...slide};}

function toggleSP(index){
//  debugger;
 slide.items[index].extra.spVisibility = !slide.items[index].extra.spVisibility; 
 slide.items[index].extra.fsVisibility = false; 
  redraw();
}
function toggleFS(index){
 slide.items[index].extra.fsVisibility = !slide.items[index].extra.fsVisibility; 
 slide.items[index].extra.spVisibility = false;
  redraw();
}
function setStatus(status){
 question.status = status;
 redraw();
}

function setEqType(i,typ) {
//  debugger;
  slide.items[i].extra.type = typ;
 redraw();
}
function moveUpEq(index) {
  if (index > 0) {
    const eqToMove = slide.items[index];
    slide.items.splice(index, 1);
    slide.items.splice(index - 1, 0, eqToMove);
  }
 redraw();
}
function moveDownEq(index) {
  if (index < slide.items.length - 1) {
    const eqToMove = slide.items[index];
    slide.items.splice(index, 1);
    slide.items.splice(index + 1, 0, eqToMove);
  }
  redraw();
}
function delEq(index) {
  slide.items.splice(index, 1);
  redraw();
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
   slide.items.splice(i+1, 0, getNewItem());
  slide = {...slide};
}
//fsStartTime fsEndTime
let slide = {

  items :[
      {name: '' , content : '' , extra : {
            type : 'hdg',
            code : 'This is a heading',
            startTime : 0,
            endTime : 10,
      }},
      {name: '' , content : '' , extra : {
            type : 'text',
            code : 'This is normal text',
            startTime : 10,
            endTime : 20,
      }},
      {name: '' , content : '' , extra : {
            type : 'code',
            code : '4^2',
            startTime : 20,
            endTime : 30,
      }},
  ]

};

for (let i = 0; i < slide.items.length; i++) {
  const item = slide.items[i];
  item.extra.step = i;
  item.extra.fsVisibility = false;
  item.extra.spVisibility = false;
}
console.log("slide",slide);
</script>
<!-- <Nav isLogin={true} isAdmin={true} /> -->
<PageWrapper>

<!-- <Toolbar  {addEq} {eqs} {closeAllSP} {setSPTrue}/> -->
<PageHeading/>

<div class="m-4 p-0">
  <Titlebar />
  {#each slide.items as item, i}
      <EqPart  bind:item={item} {i} />
<!--         -->
      <EqPartLowerToolBar {item} {i} {addEq} {delEq} {moveUpEq} {moveDownEq} {setEqType}  {toggleSP} {toggleFS}/>

        {#if item.extra.spVisibility}
        sidepanel
          <!-- <SPFSPart clr="bg-yellow-900"  arrayName='Side Panel' theArray={eq.sp}  {redraw} {i} /> -->
        {/if}
        {#if item.extra.fsVisibility}
        fs
          <!-- <FullScreen bind:fs={eq.fs}  /> -->
        {/if}
  {/each}
</div>


<br>
<br>

<div class="flex justify-center">
  <button id="saveBtn2" class="w-10/12 bg-green-800 p-2  rounded-md text-xl" on:click={()=>save(slide)}>Save</button>
</div>

<br>
<br>


</PageWrapper>
