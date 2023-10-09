<script>
//@ts-nocheck
import { HdgWithIcon } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;


import { selectedExStore } from '$lib/util/appStore.js';
  $: selectedEx = $selectedExStore;

function setSelectedEx(ex){
  selectedExStore.set(ex)
}

let uniqueChapters = [];
let selectedChapter;
let selectedExercises = [];

  function getUniqueChapters() {
    const uniqueChapters = new Set();
    questions.forEach((question) => {
      uniqueChapters.add(question.chapter);
    });
    return Array.from(uniqueChapters);
  }

function getUniqueExercisesForChapter(chapter) {
    const exercises = new Set();
    questions.forEach((question) => {
      if (question.chapter === chapter) {
        exercises.add(question.partNo.exercise);
      }
    });
    return Array.from(exercises);
  }


  $: {
    uniqueChapters = getUniqueChapters();
    selectedChapter = uniqueChapters[0]; // Initialize with the first chapter
    selectedExercises = getUniqueExercisesForChapter(selectedChapter);
  }

</script>

<div class='custom-height overflow-y-auto'>
  

{#each uniqueChapters as chapter}
  <div class="flex justify-center w-full p-1">
    <h2 class="bg-gray-700 p-1 rounded-md px-4">Chapter {chapter}</h2>
  </div>
  <div class="w-full p-1">
    <!-- Loop through unique exercises for the current chapter -->
    {#each getUniqueExercisesForChapter(chapter) as exercise}
      <!-- <div class="bg-gray-900 p-1 m-1 rounded-md text-center hover:cursor-pointer">Exercise       -->
      <button
      class="bg-gray-900 w-10/12 p-1 m-1 mx-2 rounded-md text-center hover:cursor-pointer"
       on:click={()=>setSelectedEx(exercise)}>Exercise:{exercise}</button>
      <!-- </div> -->
    {/each}
  </div>
{/each}


 <br>
 <br>
 <br>
 <br>
</div>

<style>
.custom-height {
  max-height: 1000px;
}
</style>