I ahve EqPlayer.svelte which has EqPanel.svelte

I want the EqPanel to be in a vertically scrollable div and only this should scroll up when
  const focusedElement = document.querySelector('.focused');
   if (focusedElement) {
      focusedElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
   }

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
        if (pulse >= item.extra.startTime && pulse < item.extra.endTime ){
              if (pulse >= item.extra.fsStartTime && pulse < item.extra.fsEndTime) {
                  fullScreen = true;
                }else {
                        fullScreen = false;
                }
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
        <EqPanel items={items}  pulse={pulse}  {setPulse} />
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

<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
import { onMount } from '$lib/util';
import CodeTxt from './CodeTxt.svelte';

export let pulse;
export let items;
export let setPulse;

////////////////////////////////
function isFocus(item){
   // debugger;
   if (pulse >= item.extra.startTime && pulse < item.extra.endTime ){
       return true; 
   }else {
      return false;  
   }
}

$:{
   pulse;
   items = [...items];
     const focusedElement = document.querySelector('.focused');
   if (focusedElement) {
      focusedElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
   }
}

</script>

    {#each items as item,index}
    <button class='flex w-full'  on:click={()=>setPulse(item.extra.startTime)}>
        
        <div class='m-1 p-1 rounded-2xl bg-stone-600 text-sm items-center justify-center' >{ item.extra.step }</div>

        <div class="{ isFocus(item) == true ? 'focused' : 'nonFocused'}  w-full text-center">
            <CodeTxt eq={item}/>
        </div>

    </button>    
    {/each}
<!-- do not remove the 4 br they are bery important -->
<br/>    
<br/>    
<br/>    
<br/>    

<style>
/* .unFocused {background-color: rgb(58, 57, 57);} */
.focused {
  background-color: rgb(2, 63, 2);
  color: white; /* Text color */
  border: 2px solid red; /* Border with black color and 2px width */
  padding: 5px; /* Padding inside the element */
  font-size: 2em; /* Font size */
  font-weight: bold; /* Bold text */
  line-height:1.5em;
  border-radius: 5px; /* Rounded corners */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Drop shadow */
}

.nonFocused {
    background-color: grey;
    padding:2px;
    margin:2px;
    font-size:1.5em;
     }
</style>
