<svelte:head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css" integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
</svelte:head>
<script>
//@ts-nocheck
 import { browser,onMount } from '$lib/util';
import CodeTxt from './CodeTxt.svelte';
//== Import variables
export let eqs;
let innerEqs =[];
export let changeSeek;

$: {
     eqs; 
        const topIndex = findTopIndex();
        innerEqs = removeElementsBeforeIndex(topIndex);
}
function log(index){
    console.log("index" , index);
}
function removeElementsBeforeIndex(index) {
    if (index < 0 || index >= eqs.length) {
        return eqs;
    }
    return eqs.slice(index);
}
function findTopIndex() {
    let index = eqs.findIndex(obj => obj.isf === true);
    if (index <= 2) {
        return 0;
    }
 return index - 2;    
}

</script>

    {#each innerEqs as eq,index}
    <button class='flex w-full'  on:click={()=>changeSeek(eq.eqStartTime)}>
        
        <div class='m-1 p-1 rounded-2xl bg-stone-600 text-sm items-center justify-center' >{eq.step}</div>

        <div class="{ eq.isf == true ? 'focused' : 'nonFocused'}  w-full text-center">
            <CodeTxt {eq}/>
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
