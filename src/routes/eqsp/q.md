here is my parent svelte component

<script>
//@ts-nocheck
import EqEditorPre from "$lib/Presentation/slides/eqs/EqsEditorPre/EqsEditorPre.svelte";
let currentSlide = {
  startTime : 0,    //This is slide start and end time
  endTime : 50,    
  type : 'Eqs',    
  slideExtra : [],    
  /////////////////
  items :[
      {name: '' , content : '' , extra : {
            type : 'hdg',
            step : 1,
            code : 'This is a heading',
            startTime : 0,//This is item start and end time
            endTime : 10,
            sp:[],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'text',
            step : 2,
            code : 'This is normal text',
            startTime : 10,
            endTime : 20,
            sp:[],
            fs:[]
      }},
      {name: '' , content : '' , extra : {
            type : 'code',
            step : 3,
            code : '4^2',
            startTime : 20,
            endTime : 30,
            sp:[],
            fs:[]
      }},
  ]

};

</script>

<div class="bg-gray-800 w-full  text-white min-h-screen p-0 m-0">

<!-- <EqEditorPre bind:slide={slide} /> -->
 <EqEditorPre pulse=0 startTime={currentSlide.startTime} endTime={currentSlide.endTime} items={currentSlide.items} slideExtra={currentSlide.slideExtra} theme={{}}/>
<br>
<br>
<br>
<br>


</div>


here is child component
<script>
// @ts-nocheck
import {onMount,get} from '$lib/util';

import EqPanel from './EqPanel.svelte';
import SidePanel from './sp/SidePanel.svelte';
import FullScreen from './fullScreen/FullScreen.svelte';
/////////////////////////
let currentItem;
let fullScreen = false;
// pxport let pulse;
export let startTime;
export let endTime;
export let items;
export let slideExtra;
export let runningTime = 0;
export let changeSeek;
/////////////////////////////////////////
$:{
    runningTime;
//     console.log("runningTime==>",runningTime);
    //fullScreen =false;--since if not then if eq end at 20 and fullScreen also end at 20 then the fullScreen stays on.
    fullScreen =false;
    setCurrentEq();
    // checkFullScreen();
}


function setCurrentEq(){
 for (let i = 0; i < items.length; i++) {
 const item = items[i];
        if (runningTime >= item.startTime && runningTime < item.endTime ){
       currentItem = item ;
        return; 
        }
 }
}
////////////////////////////////////////////////
// function checkFullScreen(){
// //--Code can not be "" to be displayed
//   if (currentItem ) {
//      if (runningTime >= currentItem.fsStartTime && runningTime < currentItem.fsEndTime ){
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
        <EqPanel {items}  pulse={runningTime}  {changeSeek} />
        </div>

<!--Side Panel---->
        <div class= "w-4/12   min-h-screen p-2 m-0 mt-2  bg-yellow-950 text-yellow-300b" >
        <!-- <SidePanel  {items} {runningTime} {currentItem}/> -->
        SidePanel
        </div>
{:else}
<!--Full Screen---->
        <div class= "w-full   min-h-screen p-1 m-0 mt-2 mb-2  bg-stone-500 text-yellow-300b rounded-md" >
        <!-- <FullScreen items= {items} {runningTime} {currentItem}/> -->
        fullscreen
        </div>
{/if}
    </div><!--flex div for 2 panels-->

</div><!--page div-->

and here is grand child component
<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
import { onMount } from '$lib/util';
import CodeTxt from './CodeTxt.svelte';

export let pulse;
export let items;
export let changeSeek;

////////////////////////////////
// let innerEqs =[];

$: { 
     pulse; 
        setFocus( );
        // const topIndex = findTopIndex();
        // innerEqs = removeElementsBeforeIndex(topIndex);
}

function setFocus( ){
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
         if (pulse >= item.startTime && pulse < item.endTime ){
            item.isf = true;
        }else {
            item.isf = false;
        }
    }
}

// function removeElementsBeforeIndex(index) {
//     if (index < 0 || index >= items.length) {
//         return items;
//     }
//     return items.slice(index);
// }
// function findTopIndex() {
//     let index = items.findIndex(obj => obj.isf === true);
//     if (index <= 2) {
//         return 0;
//     }
//  return index - 2;    
// }
// onMount(()=>{
//     if(items && items.length > 0) {
//         items[0].isf = true;
//     }
// });

</script>

    {#each items as item,index}
    <button class='flex w-full'  on:click={()=>changeSeek(item.startTime)}>
        
        <div class='m-1 p-1 rounded-2xl bg-stone-600 text-sm items-center justify-center' >{item.extra.step}</div>

        <div class="{ item.isf == true ? 'focused' : 'nonFocused'}  w-full text-center">
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


The problem is that in grand-child component at

        <div class='m-1 p-1 rounded-2xl bg-stone-600 text-sm items-center justify-center' >{item.extra.step}</div>
it gives undefined  WHY?

but i can get the value of
item.extra.startTime
item.extra.endTime