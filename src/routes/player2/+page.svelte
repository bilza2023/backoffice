<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck 
/** 6-Nov-2023 : If the core data-structure of a software is decided the software is decided.
 24-Aug 2024 amen to that!!
*/
import { toast } from '@zerodevx/svelte-toast';
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import {db} from "$lib/ajax";

import {PlayerToolbar,PresentationObjUrl,PresentationModeUi} from "taleempresentation";

let filename;
let presentationObj;
let pulse = 0;

let ready=false;
let showToolbarBool = false;
let interval;
////////////////////////////////////////////////////////
onMount(async ()=>{  
  filename = new URLSearchParams(location.search).get("filename");
  //---DB access
  const resp = await db.tcode.get(`filename=${filename}`)

  if (resp.ok){
    const incomming = await resp.json();
    let questionData = incomming.data[0]; //get data out

    presentationObj = new PresentationObjUrl(questionData);
    await presentationObj.init();
    
    ready=true; 
 }else {
    toast.push("failed to load");
 } 
});
////////////////////////////////////////////
function start(){
    interval = setInterval(gameloop , 500);
}
function gameloop(){
   pulse = Math.floor(presentationObj.pulse());
}
function stop(){
  clearInterval(interval);
}
function setPulse(value){
  presentationObj.setPulse(value);
}
////////////////////////////////////////////
function showToolbar(){
  if (showToolbarBool == false){
    showToolbarBool = true;  
    setTimeout(() => {
    showToolbarBool = false;
  }, 5000);
  } 
}
</script> 
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class='bg-gray-800 text-white w-full min-h-screen' 
style='position: fixed; top: 0;' on:mousemove={showToolbar} >

      {#if showToolbarBool && presentationObj}
<PlayerToolbar {presentationObj} {pulse} 
preStart={start} preStop={stop}  setPulse={setPulse} />
      {/if}
<div >
    <PresentationModeUi {presentationObj} {pulse} currentTime={pulse} />
</div> 
</div><!--page wrapper-->


