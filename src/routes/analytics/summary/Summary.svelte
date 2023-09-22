
<script>
import Card from "./Card.svelte";

import { onMount } from 'svelte';
export let results;
export let quiz;

onMount(async () => {
    //  quizResults =  getQuizSummary();
    //  console.log("{quizResults.correct}" ,quizResults);
});

</script>
 <div class="flex justify-center">
<h1 class="inline-flex bg-blue-800 text-white rounded-md p-2 m-2 px-14">
Test Summary</h1>
 </div>

<div class="flex justify-center w-full my-4 gap-1">

<!-- {#if quizResults} -->
<Card title="Number of Questions" count={quiz.questions.length} />
<Card title="Number of Responses" count= {results.length} />
<Card title="Total Students" count= {quiz.members.length} />
<Card title="Students Missing" count= {quiz.members.length - results.length} />
<!-- {/if} -->


</div>