<script>
// @ts-nocheck


export let quiz;

import {pageStateStore, studentIdStore } from '../store.js';
$: studentId = $studentIdStore;
import saveResults from '../fn/saveResults';
import nextPageState from '../fn/nextPageState.js';
import {Agent} from "$lib/ajax";

let hideSaveBtn = false;

</script>


<div class="flex   justify-center  w-full   gap-2  mt-2 mb-2 items-center">
 
  <div class="elm">
      {#if (quiz.private == true)}
      {#if (hideSaveBtn == false)}
        <button 
          class="p-1 m-0"
          on:click={  nextPageState  }   > 
          <span class="text-2xl">💾 Submit & Save</span>
        </button>
      {/if}
      {:else}
       <button 
          class="p-1 m-0"
          on:click={ nextPageState  }   > 
          <span class="text-2xl">💾 Submit</span>
        </button>
      {/if}
  </div>

 
</div>


<style>
.elm {
  background-color:blue;
  color:white;
  padding:1px;
  margin:1px;
  border-radius: 10px;

  }

</style>