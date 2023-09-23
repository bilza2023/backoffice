I have an array of questions. these are all the questions from a math book. each question item has its chapter and its exercise.

I want a list of all chapters (no repetations)
and
a list of all exercises inside each chapter (no repetations)

This code gives error uniqueChapters is not defined
<script>
//@ts-nocheck
import { HdgWithIcon } from '$lib/cmp';
import {Icons } from '$lib/util';
export let questions;

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
        exercises.add(question.exercise);
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

<div class=''>
    <div class='flex justify-center w-full  p-1 '>
    <h1 class="bg-gray-900 p-1 rounded-md">Chapters</h1>
    </div>


{#each uniqueChapters as chapter}
  <div class="flex justify-center w-full p-1">
    <h2 class="bg-gray-700 p-1 rounded-md">Chapter {chapter}</h2>
  </div>
  <div class="w-full p-1">
    <!-- Loop through unique exercises for the current chapter -->
    {#each getUniqueExercisesForChapter(chapter) as exercise}
      <div class="bg-gray-500 p-1 rounded-md">Exercise {exercise}</div>
    {/each}
  </div>
{/each}


 
</div>
