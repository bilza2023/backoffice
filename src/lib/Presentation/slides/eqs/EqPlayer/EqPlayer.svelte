<script>
// @ts-nocheck
import EqPanel from './EqPanel.svelte';
import SidePanel from './sp/SidePanel.svelte';
/////////////////////////
let currentItem;
let fullScreen = false;
// pxport let pulse;
export let startTime;
export let endTime;
export let items;
export let slideExtra;
export let pulse;
export let changeSeek;
/////////////////////////////////////////
$:{
    pulse;
    fullScreen =false;
    // checkFullScreen();
}

////////////////////////////////////////////////
// function checkFullScreen(){
// //--Code can not be "" to be displayed
//   if (currentItem ) {
//      if (pulse >= currentItem.fsStartTime && pulse < currentItem.fsEndTime ){
// //       console.log("Full screen true");
//       fullScreen = true;
//      }else {
//       fullScreen = false;
//      }
//   }
// return false;  
// }


</script>

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
<div class="flex px-2 rounded-md bg-gray-900" >
 
<!--Main Panel---->
{#if !fullScreen}
        <div class= "w-8/12 min-h-screen p-2  m-0 overflow-x-auto"  >
        <EqPanel items={items}  pulse={pulse}  {changeSeek} />
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <SidePanel  {items} {pulse} spORfs='sp'/>
        </div>
{:else}
<!--Full Screen---->
        <div class= "w-full   min-h-screen p-1 m-0 mt-2 mb-2  bg-stone-500 text-yellow-300b rounded-md" >
        <SidePanel  {items} {pulse} spORfs='fs'/>
        </div>
{/if}
    </div><!--flex div for 2 panels-->

</div><!--page div-->
