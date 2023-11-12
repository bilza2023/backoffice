<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>

<script>
//@ts-nocheck
import Toolbar from './Toolbar.svelte';
import Titlebar from './Titlebar.svelte';
import EqPart from './EqPart.svelte';
import EqPartLowerToolBar from './EqPartLowerToolBar.svelte';
import SP from './SPPart/SP.svelte';
// import PageHeading from './PageHeading.svelte';
import getNewItem from './getNewItem';
    import { onMount } from 'svelte';

////////////////////////////////////////////////////////
export let startTime;
export let endTime;
export let items;
export let theme={};

////////////////////////////////////////////////////////
function redraw(){ items = [...items];}
function toggleSP(index){
//  debugger;
 items[index].extra.spVisibility = !items[index].extra.spVisibility; 
 items[index].extra.fsVisibility = false; 
  redraw();
}
function toggleFS(index){
//  debugger;
 items[index].extra.fsVisibility = !items[index].extra.fsVisibility; 
 items[index].extra.spVisibility = false;
  redraw();
}
function setEqType(i,typ) {
//  debugger;
  items[i].extra.type = typ;
 redraw();
}
function moveUpEq(index) {
  if (index > 0) {
    const eqToMove = items[index];
    items.splice(index, 1);
    items.splice(index - 1, 0, eqToMove);
  }
 redraw();
}
function moveDownEq(index) {
  if (index < items.length - 1) {
    const eqToMove = items[index];
    items.splice(index, 1);
    items.splice(index + 1, 0, eqToMove);
  }
  redraw();
}
function delEq(index) {
  items.splice(index, 1);
  redraw();
}
function openAllSP(){
  for (let i = 0; i < items.length; i++) {
    items[i].extra.spVisibility = true; 
  }
    redraw();
} 
function closeAllSP(){
  // debugger;
  for (let i = 0; i < items.length; i++) {
    items[i].extra.spVisibility = false; 
  }
    redraw();
}
function addEq(i) {
//  debugger;
   items.splice(i+1, 0, getNewItem());
  redraw();
}

onMount(async ()=>{

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.extra.step = i;
  item.extra.fsVisibility = false;
  item.extra.spVisibility = false;
    if (!Array.isArray(item.extra.fs)){
    // debugger;
      item.extra.fs = [];
    }
}

});

</script>
<!-- <Nav isLogin={true} isAdmin={true} /> -->
<div class="bg-gray-800 w-full  text-white min-h-screen p-0 m-0">

<!-- <PageHeading/> -->
<Toolbar  {addEq}  {closeAllSP} {openAllSP} />

<div class="m-4 p-0">
  <Titlebar />
  {#each items as item, i}
      <EqPart  bind:item={item} {i} />
 
      <EqPartLowerToolBar bind:item={item} {i} {addEq} {delEq} {moveUpEq} {moveDownEq} {setEqType}  {toggleSP} {toggleFS}/>

        {#if item.extra.spVisibility}
          <SP clr="bg-yellow-900"  arrayName='Side Panel' bind:theArray={item.extra.sp}  {redraw} {i} />
        {/if}
        {#if item.extra.fsVisibility}
          <SP clr="bg-stone-700"  arrayName='Full Screen' bind:theArray={item.extra.fs}  {redraw} {i} />
        {/if}
  {/each}
</div>

<br>
<br>
<br>
<br>


</div>
