<script>
//@ts-nocheck
import { HdgWithIcon } from '$lib/cmp';
import {Icons } from '$lib/util';
export let syllabus;
export let setSelExNChapter;;

</script>

<div class='custom-height overflow-y-auto'>
  

{#each syllabus as chapter}
  <div class="flex justify-center w-full p-1">
    <h2 class="bg-gray-700 p-1 rounded-md px-4">Chapter {chapter.chapter}</h2>
  </div>
  <div class="w-full p-1">
    <!-- Loop through unique exercises for the current chapter -->
    {#each chapter.exObj  as exercise}
      <!-- <div class="bg-gray-900 p-1 m-1 rounded-md text-center hover:cursor-pointer">Exercise       -->
      <button
      class="bg-gray-900 w-10/12 p-1 m-1 mx-2 rounded-md text-center hover:cursor-pointer"
       on:click={()=>setSelExNChapter(exercise.name,chapter.chapter)}>Exercise:{exercise.name}</button>
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