<script>
// @ts-nocheck
import {onMount,get} from '$lib/util';
import EqPanel from './EqPanel.svelte';
import SidePanel from './sp/SidePanel.svelte';
import FullScreen from './sp/FullScreen.svelte';
import {currentEqStore} from "./store";

$:{
    runningTime;
    setCurrentEq();
    checkFullScreen();
}


function setCurrentEq(){
 for (let i = 0; i < eqs.length; i++) {
 const eq = eqs[i];
        if (runningTime >= eq.eqStartTime && runningTime < eq.eqEndTime ){
        // if (runningTime > 11){debugger;}
       currentEqStore.set(eq);
        return; 
        }
 }
}
////////////////////////////////////////////////
function checkFullScreen(){
// if (runningTime > 11){debugger;}
const currentEq = get(currentEqStore);
  if (currentEq &&  currentEq.fs.length > 0) {
     if (runningTime >= currentEq.fsStartTime && runningTime < currentEq.fsEndTime ){
//       console.log("Full screen true");
      fullScreen = true;
     }else {
      fullScreen = false;
     }
  }
return false;  
}

/////////////////////////
let fullScreen = false;
export let eqs=[];
export let runningTime = 1;
export let changeSeek;
/////////////////////////////////////////
onMount(async () => {
        // currentEqStore.set(eqs[0]);
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
