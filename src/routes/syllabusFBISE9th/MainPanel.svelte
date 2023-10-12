<script>
//@ts-nocheck
import { HdgWithIcon,Card ,NavBtn2} from '$lib/cmp';
import {Icons } from '$lib/util';
import ExerciseSpecialQs from "./ExerciseSpecialQs.svelte"
import ChapterSpecialQs from "./ChapterSpecialQs.svelte"
import ExerciseReqQs from './ExerciseReqQs.svelte';
export let questions;
export let selectedEx;
export let selectedChapter;

let showSpecial = true;
let showSpecialChapter = true;

// console.log('selChapData' , selChapData)
function getUrl(question){
 let url;
 if (question.questionType == "eqs"){
    url = `/eqs?id=${question._id}`;
 }else{
    url = `/grid?id=${question._id}`;
 }
return url; 
}
</script>


<div class='flex justify-center   p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Syllabus FBISE Class 9th</HdgWithIcon>
</div>

<div class='  p-2 text-center '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOK}>Exercise &nbsp&nbsp{selectedEx}</HdgWithIcon>
</div>

<!-- <div class="bg-stone-700 text-sm text-gray-300 w-5/12 p-2 m-1 rounded-md ">{`Total Questions ${total_questions} Empty Questions ${questions.length}`}</div> -->

<!-- <ChapterSpecialQs {questions} {selectedEx}  /> -->
<!-- <ExerciseSpecialQs {questions} {selectedEx}  /> -->

<div class="flex justify-start    p-1 bg-gray-900">
<NavBtn2 clk={()=>showSpecial = !showSpecial} title="Show Special"/>
</div>

{#if showSpecial}
    {#if showSpecial &&  showSpecialChapter}
    <div class="bg-stone-900">
    <button class="p-1 m-1 rounded-md bg-yellow-900 text-xs text-white" 
    on:click={()=>showSpecialChapter = false}>
        Chapter Special  Questions
    </button>
    <ChapterSpecialQs  {questions } {selectedChapter} {getUrl} />
    </div>
    {/if}

    {#if showSpecial && !showSpecialChapter}
    <div class="bg-stone-700">
    <button class="p-1 m-1 rounded-md bg-yellow-900 text-xs text-white" 
    on:click={()=>showSpecialChapter = true}>
    Exercise Special Questions
    </button>
    <ExerciseSpecialQs  {questions } {selectedEx} {getUrl} />
    </div>
    {/if}
{/if}
<br>

<ExerciseReqQs  {questions } {selectedEx } {getUrl} />

