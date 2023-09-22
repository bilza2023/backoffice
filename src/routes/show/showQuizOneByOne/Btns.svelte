<script>
// @ts-nocheck

import { v4 as uuid } from 'uuid';
import { toast } from '@zerodevx/svelte-toast';
import transformQ2R from "../fn/transformQ2R";

export let questions;
export let next;
export let prev;
export let quiz;


 export let cq;
 export let saveResponse;

import {studentIdStore } from '../store.js';
$: studentId = $studentIdStore;
import saveResults from '../fn/saveResults';
import {Agent} from "$lib/ajax";
let hideSaveBtn = false;
</script>



<div class="flex   justify-between w-full   gap-2  mt-2 mb-2 items-center">
  <div class="elm">
  <button class="" on:click={prev}>
  <span class="text-2xl p-2">&#8592;</span>
  </button>
</div>

<div class="elm">
    <!--submit btn-->
    {#if (cq == questions.length-1)} 
      {#if (hideSaveBtn == false)}
        <button 
          class="p-1 m-0"
          on:click={ ()=>saveResults(quiz)  }   > 
          {#if saveResponse == true}
            <span class="text-2xl">💾 Submit & Save</span>
          {:else}
            <span class="text-2xl">📋Submit</span>
          {/if}
        </button>
      {/if}
    {/if}
</div>

<div class="elm">
  <button class="" on:click={next}>
      <span class="text-2xl p-2">&#8594;</span>
  </button>
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