In my following svelte component these 2 lines does not work

   currentEqStore.set(eq); 
    console.log("currentEq==>",currentEq);
    currentEq remains null WHY? 

code
<script>
// @ts-nocheck
import {onMount} from '$lib/util';
import EqPanel from './EqPanel.svelte';
import SidePanel from './sp/SidePanel.svelte';
import FullScreen from './sp/FullScreen.svelte';
import {currentEqStore} from "./store";

$:currentEq   = $currentEqStore;
$:{
    runningTime;
    setCurrentEq();
    checkFullScreen();
}

function setCurrentEq(){
 for (let i = 0; i < eqs.length; i++) {
 const eq = eqs[i];
        if (runningTime >= eq.eqStartTime && runningTime < eq.eqEndTime ){
        if (runningTime > 11){debugger;}
       currentEqStore.set(eq);
       console.log("currentEq==>",currentEq);
        return; 
        }
 }
}
////////////////////////////////////////////////
function checkFullScreen(){
//  console.log('currentEq' , currentEq);
if (runningTime > 11){debugger;}
  if (currentEq &&  currentEq.fs.length > 0) {
     if (runningTime >= currentEq.fsStartTime && runningTime < currentEq.fsEndTime ){
      console.log("Full screen true");
      fullScreen = true;
     }else {
      fullScreen = false;
     }
  }
return false;  
}

let currentEq;
/////////////////////////
let fullScreen = false;
export let eqs=[];
export let runningTime = 0;
export let changeSeek;
/////////////////////////////////////////
onMount(async () => {
        currentEqStore.set(eqs[0]);
});
</script>

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
<div class="flex px-2 rounded-md bg-gray-900" >
 
<!--Main Panel---->
{#if !fullScreen}
        <div class= "w-8/12 min-h-screen p-2  m-0 overflow-x-auto"  >
        <EqPanel {eqs}  {runningTime}  {changeSeek}/>
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <SidePanel  {eqs} {runningTime} />
        </div>
{:else}
<!--Full Screen---->
        <div class= "w-full   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <FullScreen eqs= {eqs} />
        </div>
{/if}
    </div><!--flex div for 2 panels-->
<br>
<br>
<br>
<br>
<br>

</div><!--page div-->
store.js


import { writable } from 'svelte/store';

export let  currentEqStore      = writable(null);

