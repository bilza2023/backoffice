In the following svelte component. I want to select one div which is currently being displayed to be styled as .focused.


The idea is to have 1 div which is .focused but it seems like more than one div has .focused (or some other reason) 
 

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
    <button   class='flex w-full'  on:click={()=>setPulse(item.extra.startTime)}>
        
        <div class='m-1 p-1 rounded-2xl bg-stone-600 text-sm items-center justify-center' >{ item.extra.step }</div>

        <div class= "{isFocus(item) == true ? 'focused' : 'nonFocused'}  w-full text-center" >
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
