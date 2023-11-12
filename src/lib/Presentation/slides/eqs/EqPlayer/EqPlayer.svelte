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
export let setPulse=()=>{console.log("setPulse")};
/////////////////////////////////////////
$:{
    pulse;
    fullScreen =false;
    checkFullScreen();
}

////////////////////////////////////////////////
function checkFullScreen(){
   for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if ( item.extra.fs.length > 0 ){
              if (pulse >= item.extra.fsStartTime && pulse < item.extra.fsEndTime) {
                  fullScreen = true;
                }else {
                        fullScreen = false;
                }
        }
   }     
return false;  
}
function showFullPage(index){
        // debugger;
 if(items[index].extra.fs.length > 0){
        setPulse(items[index].extra.startTime);
        fullScreen = true;
 }
}
function closeFs(){
        fullScreen = false;
}


</script>

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
<div class="flex px-2 rounded-md bg-gray-900" >
 
<!--Main Panel---->
{#if !fullScreen}
        <div class= "w-8/12 min-h-screen max-h-screen  p-2  m-0 overflow-x-auto "  >
        <EqPanel items={items}  pulse={pulse}  {setPulse} {showFullPage} />
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <SidePanel  {items} {pulse} spORfs='sp'/>
        </div>
{:else}
<!--Full Screen---->
        <div class= "w-full   min-h-screen p-1 m-0 mt-2 mb-2  bg-stone-500 text-yellow-300b rounded-md" >
        <SidePanel  {items} {pulse} spORfs='fs' {closeFs}/>
        </div>
{/if}
    </div><!--flex div for 2 panels-->

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
</div><!--page div-->
