<script>
//@ts-nocheck
import removeDuplicates from "./fn/removeDuplicates.js";
export let questions;
export let selectedChapter;
export let selectedEx;
export let setEx;;

let  allExercises = allEx();
let  ex = removeDuplicates(allExercises);
// let selectedEx = ex[0];
setEx(ex[0]);
// console.log('allExercises',ex);
function allEx(){
 // debugger;
 const ex = [];
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        if (question.chapter == selectedChapter){
            ex.push(question.exercise);
        }
    }
return ex;
}

$:{
  selectedChapter;
  allExercises = allEx();
  ex = removeDuplicates(allExercises);
  setEx(ex[0]);
}
</script>

<div class="flex justify-center">
    <div class="bg-gray-600 text-white w-8/12 text-center rounded-md">
        Select Exercise
    </div>
</div>
<div class="flex justify-center w-full flex-wrap ">
    {#if ex.length ==0}
    <h1>No Exercise</h1>    
    {:else}
    {#each ex as e}
    <button on:click={()=>setEx(e) }  class={`p-1 m-1 rounded-lg  px-2 ${selectedEx== e? 'bg-gray-400':'bg-gray-600' }`}>{e}</button>
    {/each}
    {/if}

</div>