I have a EqPlayer Parent svelte component with a EqPanel child svelte component. EqPanel display a focused div 

 {#if isFocus(item)}
       <div id='focused_div' class="focused w-full text-center">
            <CodeTxt eq={item}/>
       </div>
there is 1 focused_div on page at a time.
I want that this focused div be scroller up to the page such thta its bottom is above the page  middle.

EqPlayer.svelte
<script>
// @ts-nocheck
import EqPanel from './EqPanel.svelte';
import SidePanel from './sp/SidePanel.svelte';
/////////////////////////
export let startTime;
export let endTime;
export let items;
export let slideExtra;
export let pulse;
export let setPulse=()=>{console.log("setPulse")};
////////////////////////////////////////////////

function showFullPage(index){
        // debugger;
 if(items[index].extra.fs.length > 0){
        setPulse(items[index].extra.startTime);
 }
}


</script>

<div class='bg-gray-800 w-full  text-white min-h-screen p-0 m-0'>
<div class="flex px-2 rounded-md bg-gray-900" >
 
        <div class= "w-8/12 min-h-screen max-h-screen  p-2  m-0 overflow-x-auto "  >
        <EqPanel {items}  {pulse}  {setPulse} {showFullPage} />
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <SidePanel  {items} {pulse} spORfs='sp'/>
        </div>
</div><!--flex div for 2 panels-->

<br>
<br>
<br>
<br>
<br>
</div><!--page div-->

EqPanel.svelte

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
export let showFullPage;

////////////////////////////////
function isFocus(item){
  if (pulse >= item.extra.startTime && pulse < item.extra.endTime ){
      return true; 
  }else {
      return  false;  
  }
}


$:{
   pulse;
   items = [...items];
}

</script>

    {#each items as item,index}
    <button   class='flex w-full'  on:click={()=>setPulse(item.extra.startTime)}>
        
        <button class='m-1 p-1 rounded-2xl  text-sm items-center justify-center {(item.extra.fs.length > 0)? 'bg-yellow-700': 'bg-stone-600'}' on:click={()=>showFullPage(index)}>{ item.extra.step }</button>

      {#if isFocus(item)}
       <div id='focused_div' class="focused w-full text-center">
            <CodeTxt eq={item}/>
       </div>

      {:else}
       <div class=" nonFocused w-full text-center">
            <CodeTxt eq={item}/>
       </div>
      {/if}
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


