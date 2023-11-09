<script>
// @ts-nocheck
import {onMount,get} from '$lib/util';

import EqPanel from './EqPanel.svelte';
import SidePanel from './sp/SidePanel.svelte';
import FullScreen from './fullScreen/FullScreen.svelte';
/////////////////////////
let currentEq;
let fullScreen = false;
export let eqs=[];
export let runningTime = 0;
export let changeSeek;
/////////////////////////////////////////
$:{
    runningTime;
//     console.log("runningTime==>",runningTime);
    //fullScreen =false;--since if not then if eq end at 20 and fullScreen also end at 20 then the fullScreen stays on.
    fullScreen =false;
    setCurrentEq();
    checkFullScreen();
}


function setCurrentEq(){
 for (let i = 0; i < eqs.length; i++) {
 const eq = eqs[i];
        if (runningTime >= eq.eqStartTime && runningTime < eq.eqEndTime ){
        // if (runningTime > 11){debugger;}
        // debugger;
       currentEq = eq ;
        return; 
        }
 }
}
////////////////////////////////////////////////
function checkFullScreen(){
//--Code can not be "" to be displayed
  if (currentEq ) {
     if (runningTime >= currentEq.fsStartTime && runningTime < currentEq.fsEndTime ){
//       console.log("Full screen true");
      fullScreen = true;
     }else {
      fullScreen = false;
     }
  }
return false;  
}


</script>

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
<div class="flex px-2 rounded-md bg-gray-900" >
 
<!--Main Panel---->
{#if !fullScreen}
        <div class= "w-8/12 min-h-screen p-2  m-0 overflow-x-auto"  >
        <EqPanel {eqs}  {runningTime}  {changeSeek} {currentEq}/>
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <SidePanel  {eqs} {runningTime} {currentEq}/>
        </div>
{:else}
<!--Full Screen---->
        <div class= "w-full   min-h-screen p-1 m-0 mt-2 mb-2  bg-stone-500 text-yellow-300b rounded-md" >
        <FullScreen eqs= {eqs} {runningTime} {currentEq}/>
        </div>
{/if}
    </div><!--flex div for 2 panels-->

</div><!--page div-->
